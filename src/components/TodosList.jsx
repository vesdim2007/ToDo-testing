import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getTodos, updateTodo, resetTodos } from "../actions/Todos";
import Spinner from "./Spinner.jsx";
import {
  SLinkButton,
  STodoInfo,
  STodo,
  SColumn,
  STodoAction,
  SResetButton,
} from "../styled-components/TodoList.style";

const TodosList = () => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const todos = useSelector((state) => state.todos);

  const dispatch = useDispatch();

  const useIsMounted = () => {
    const isMounted = useRef(false);
    useEffect(() => {
      isMounted.current = true;
      return () => (isMounted.current = false);
    }, []);
    return isMounted;
  };

  const isMounted = useIsMounted();

  useEffect(() => {
    if (isMounted && list.length === 0) {
      getItems();
      setList(todos);
      setLoading(false);
    }
  }, [list, todos]);

  const getItems = async () => {
    setLoading(true);
    await axios
      .get("https://backend-test.pi-top.com/todo-test/v1/todos")
      .then((res) => dispatch(getTodos(res.data)))
      .catch((e) => {
        console.log(e),
          setError(
            "Technical error while retreiving data. Please try again later."
          );
      });
  };

  const setToDone = (id) => {
    const todo = list.filter((todo) => todo.id === id)[0];
    todo.isDone = !todo.isDone;
    const newList = list.filter((todo) => todo.id !== id);
    newList.push(todo);
    setList(newList);
  };

  const saveTodo = async (id) => {
    await axios
      .put(`https://backend-test.pi-top.com/todo-test/v1/todos/${id}`, {
        isDone: true,
      })
      .then((res) => {
        dispatch(updateTodo(id));
        alert("Your Todo was successfully saved!");
      })
      .catch((error) => {
        console.log(error);
        setError("Could not update the Todo. Please try again.");
      });
  };

  const resetAll = async () => {
    await axios
      .post("https://backend-test.pi-top.com/todo-test/v1/reset")
      .then((res) => {
        dispatch(resetTodos());
        setList([]);
      })
      .catch((error) => {
        console.log(error);
        setError("Error. Couldn't reset your todos. Please try again.");
      });
  };

  return (
    <div>
      <Link to="/">
        <SLinkButton>Create New Todo</SLinkButton>
      </Link>
      {loading && <Spinner />}
      {list.length > 0 ? (
        <STodoInfo>
          You have {list.filter((l) => !l.isDone).length} left to do!
        </STodoInfo>
      ) : (
        <STodoInfo>You don't have todos!</STodoInfo>
      )}
      {list.length > 0 &&
        list
          .sort((a, b) => Number(b.priority) - Number(a.priority))
          .map((todo) => (
            <STodo priority={Number(todo.priority)} key={todo.id}>
              <SColumn>
                <h4 style={{ textDecoration: "underline" }}>Title</h4>
                <p style={{ margin: 0 }}>{todo.title}</p>
              </SColumn>
              <SColumn>
                <h4 style={{ textDecoration: "underline" }}>Priority</h4>
                <p style={{ margin: 0 }}>{todo.priority}</p>
              </SColumn>
              <SColumn>
                <h4 style={{ textDecoration: "underline" }}>Date</h4>
                <p style={{ margin: 0 }}>{todo.createdAt.split("T")[0]}</p>
              </SColumn>
              <SColumn>
                <h4 style={{ textDecoration: "underline" }}>Done</h4>
                <p style={{ margin: 0 }}>
                  <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => setToDone(todo.id)}
                  />
                </p>
              </SColumn>
              <SColumn>
                <Link to={`/todos/${todo.id}`}>
                  <STodoAction>View details</STodoAction>
                </Link>

                <STodoAction onClick={() => saveTodo(todo.id)}>
                  Save
                </STodoAction>
              </SColumn>
            </STodo>
          ))}
      {list.length > 0 && (
        <div style={{ textAlign: "center" }}>
          <SResetButton onClick={() => resetAll()}>Reset Todos</SResetButton>
        </div>
      )}
    </div>
  );
};

export default TodosList;
