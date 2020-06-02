"use strict";

const initialState = [];
export default (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, action.payload];
    case "GET":
      return action.payload;
    case "UPDATE":
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            isDone: true,
          };
        } else {
          return todo;
        }
      });
    case "USE_TODO":
      return action.payload;
    case "DELETE_TODO":
      return state.todos.filter((todo) => todo.id !== action.payload);
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
