import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TodoCreator from "./TodoCreator.jsx";
import TodosList from "./TodosList.jsx";
import Todo from "./Todo.jsx";
import { Provider } from "react-redux";
import Header from "./Header.jsx";
import SApp from "../styled-components/App.style.js";
import configureStore from "../store";

const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <SApp>
          <Header />
          <Route exact path="/" component={TodoCreator} />
          <Route exact path="/todos" component={TodosList} />
          <Route path="/todos/:id" component={Todo} />
        </SApp>
      </Router>
    </Provider>
  );
};

export default App;
