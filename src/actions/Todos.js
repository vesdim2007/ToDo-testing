import axios from "axios";

//ADD_TODO
export const addTodo = (todo) => ({
  type: "ADD_TODO",
  payload: todo,
});

// UPDATE
export const updateTodo = (id) => ({
  type: "UPDATE",
  payload: id,
});

// Delete
export const deleteTodo = (id) => ({
  type: "DELETE_TODO",
  payload: id,
});

// GET_TODOS
export const getTodos = (todos) => ({
  type: "GET",
  payload: todos,
});

// RESET TODOS
export const resetTodos = () => ({
  type: "RESET",
});

// Use Todo
export const useTodo = (todo) => ({
  type: "USE_TODO",
  payload: todo,
});
