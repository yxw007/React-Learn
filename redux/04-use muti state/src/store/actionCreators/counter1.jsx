import { ADD1, MINUS1 } from "../action-types";
import {bindActionCreators} from "../../redux"
import {store} from "../";

function add() {
  return { type: ADD1 };
}

function minus() {
  return { type: MINUS1 };
}

const actionCreators = { add, minus };
export const boundActionCreators = bindActionCreators(actionCreators, store.dispatch);
/* 
  {
  add: () => store.dispatch(add())
  }
  */
