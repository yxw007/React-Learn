import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Counter from "./Counter";
import store from "./store"

ReactDOM.render(
  <Provider store={store}>
  <Counter></Counter>
  </Provider>
,document.getElementById("root"));

