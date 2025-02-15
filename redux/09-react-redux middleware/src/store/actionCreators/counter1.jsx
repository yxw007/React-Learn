import { ADD1, MINUS1 } from "../action-types";
import { bindActionCreators } from "../../redux";
import { store } from "..";

function add() {
  return { type: ADD1 };
}

function minus() {
  return { type: MINUS1 };
}

function thunk() {
  return function ({ getState, dispatch }) {
    setTimeout(() => {
      dispatch({ type: "ADD1" });
    }, 1000);
  };
}

export const actionCreators = { add, minus,thunk };
export const boundActionCreators = bindActionCreators(
  actionCreators,
  store.dispatch
);
/* 
  {
  add: () => store.dispatch(add()) 
  }
  */
