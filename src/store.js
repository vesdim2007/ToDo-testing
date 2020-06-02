import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import todoReducer from "./reducers/todoReducer";

export default () => {
  const store = createStore(
    combineReducers({
      todos: todoReducer,
    }),
    compose(applyMiddleware(thunk))
  );
  return store;
};
