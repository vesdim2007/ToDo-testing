import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "./Spinner.jsx";
import { useTodo } from "../actions/Todos";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  STodoCard,
  SCardTitle,
  SCardLabel,
  SCardText,
  SButton,
} from "../styled-components/Todo.style";

const Todo = (props) => {
  const [id, setId] = useState(props.match.params.id);
  const [todo, setTodo] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    if (props.match.params.id && props.match.params.id !== "") {
      setId(props.match.params.id);
      fetchTodo();
    }
  }, [props, id]);

  const fetchTodo = async () => {
    setLoading(true);
    await axios
      .get(`https://backend-test.pi-top.com/todo-test/v1/todos/${id}`)
      .then((res) => {
        setTodo(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setError("Could not find the Todo.");
        setLoading(false);
      });
  };

  const redirectToCreate = () => {
    dispatch(useTodo(todo));
    history.push("/");
  };

  return (
    <div>
      {loading && <Spinner />}
      {todo && (
        <STodoCard>
          <div></div>
          <div>
            <SCardTitle>{todo.title.toUpperCase()}</SCardTitle>
          </div>
          <SCardLabel>Description: </SCardLabel>
          <div style={{ marginBottom: "1rem" }}>
            <SCardText>
              {todo.description.split("-").map((text, id) => (
                <p key={id}> {text}</p>
              ))}
            </SCardText>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <SCardLabel>Priority: {todo.priority}</SCardLabel>
          </div>
          <div style={{ marginBottom: "1rem" }}>
            <p>
              <SCardLabel>Tags: </SCardLabel>
              {todo.tags.length > 0
                ? todo.tags.map((tag, i) => <span key={i}>{tag}, </span>)
                : ""}
            </p>
          </div>
          <div>
            <p>
              <SCardLabel>Date: </SCardLabel> {todo.createdAt.split("T")[0]}
            </p>
          </div>
          <div>
            <p>
              <SCardLabel>Status: </SCardLabel> {todo.isDone ? "Done" : "To do"}
            </p>
          </div>
        </STodoCard>
      )}
      {todo && (
        <div style={{ textAlign: "center" }}>
          <SButton onClick={() => redirectToCreate()}>
            Create new Todo like this
          </SButton>
        </div>
      )}
    </div>
  );
};

export default Todo;
