import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SForm,
  SButton,
  SH2,
  SLabel,
  STitle,
  SMessage,
  SDescription,
  SCounter,
  SPriority,
} from "../styled-components/TodoCreator.style";
import axios from "axios";
import { addTodo } from "../actions/Todos";

const TodoCreator = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [priority, setPriority] = useState(0);
  const [tags, setTags] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const dispatch = useDispatch();
  const todo = useSelector((state) => state.todos);

  useEffect(() => {
    if (todo && !Array.isArray(todo) && Object.keys(todo).length > 0) {
      setTitle(todo.title);
      setDescription(todo.description);
      setPriority(todo.priority);
      setTags(todo.tags.length > 0 ? todo.tags.toString() : "");
    }
  }, [todo]);

  const checkFormData = () => {
    if (title !== "") {
      if (description.length < 250) {
        if (description.length !== 0) {
          if (priority !== 0) {
            if (tags !== "") {
              return true;
            } else {
              alert("Please provide at least one tag.");
            }
          } else {
            alert("Please provide a priority different from 0 up to 5.");
          }
        } else {
          alert("Please provide a description.");
        }
      } else {
        alert("Please provide shorter description.");
      }
    } else {
      alert("Please provide a title.");
    }
  };

  const resetState = () => {
    setTitle("");
    setDescription("");
    setTags("");
    setPriority(0);
  };

  const submitFormData = async (e) => {
    e.preventDefault();
    if (checkFormData()) {
      const body = {
        title,
        description,
        priority: Number(priority),
        tags: tags.split(","),
      };
      setLoading(true);
      await axios
        .post("https://backend-test.pi-top.com/todo-test/v1/todos", body)
        .then((res) => dispatch(addTodo(res.data)))
        .catch((error) => {
          console.log(error);
          setError("Error! Couldn't save your Todo. Please try again.");
        });

      resetState();
      setLoading(false);
      setSuccess(true);
      setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }
  };

  return (
    <>
      <SH2>Create New Todo</SH2>
      <SForm onSubmit={submitFormData}>
        <SLabel>Title:</SLabel>
        <STitle
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <SLabel>Description:</SLabel>
        <SDescription
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <SCounter overlimit={description.length > 250}>
          {description.length} / 250
        </SCounter>
        <SLabel>Priority:</SLabel>
        <SPriority
          type="number"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        />
        <SCounter overlimit={0}>Please select from 1 to 5</SCounter>

        <SLabel>Tags:</SLabel>
        <SDescription value={tags} onChange={(e) => setTags(e.target.value)} />
        <SCounter overlimit={0}>Please use comma as a tags separator</SCounter>
        {error && <SMessage error={true}>{error}</SMessage>}
        {success && (
          <SMessage error={false}>Success. Your Todo was saved.</SMessage>
        )}
        <SButton>{loading ? "Saving ..." : "Submit"}</SButton>
      </SForm>
    </>
  );
};

export default TodoCreator;
