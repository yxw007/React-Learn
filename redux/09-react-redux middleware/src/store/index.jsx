import { createStore,applyMiddleware } from "../redux";
// import { createStore } from "redux";
import combineReducer from "./reducers";
import { logger, thunk } from "./middlewares";

const store = applyMiddleware(logger,thunk)(createStore)(combineReducer);

/* 
//原始方式：dispatch封装一层
const store = createStore(combineReducer);
const oldDispatch = store.dispatch;
function dispatch(action) {
  setTimeout(() => {
    console.log("更新状态前:", store.getState());
    oldDispatch(action);
    console.log("更新状态后:", store.getState());
  }, 1000);
}

store.dispatch = dispatch; */

export { store };
