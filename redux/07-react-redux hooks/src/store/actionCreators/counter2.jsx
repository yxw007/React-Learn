import { ADD2, MINUS2 } from "../action-types";
import {bindActionCreators} from "../../redux"
import {store} from "../";

function add() {
  return { type: ADD2 };
}

function minus() {
  return { type: MINUS2 };
}

export const actionCreators = { add, minus };
export const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);
/* 
  {
  add: () => store.dispatch(add())
  }
  */
