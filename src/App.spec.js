import React from "react";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import moxios from "moxios";
import expect from "expect";
import { getTodos } from "./actions/Todos";
import reducer from "./reducers/todoReducer";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const todos = [
  { id: "1", title: "First", description: "Testing", priority: 4, tags: [] },
  {
    id: "2",
    title: "Second",
    description: "Testing again",
    priority: 2,
    tags: ["test"],
  },
];

describe("getTodos Action Creator", () => {
  it("getEvents Action Creator has correct type in its Action", () => {
    const action = getTodos();
    expect(action.type).toEqual("GET");
  });

  it("getTodos Action Creator returns correct payload in its Action", () => {
    const action = getTodos(todos);
    expect(action.payload).toEqual(todos);
  });
});

describe("Redux-Thunk working properly, dispatch returns associated Action Creators to ensure axios API call succesfully pulling data", () => {
  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it("tests", () => {
    const store = mockStore({ todos: [] });

    const expectedActions = [{ type: "GET", payload: todos }];

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: todos,
      });
      return store.dispatch(getTodos(request.response)).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

describe("Todos Reducer", () => {
  it("should return the initial state", () => {
    expect(reducer(undefined, [])).toEqual([]);
  });

  it("should handle GET Todos", () => {
    const successAction = {
      type: "GET",
      payload: [...todos],
    };
    expect(reducer({}, successAction)).toEqual(todos);
  });
});
