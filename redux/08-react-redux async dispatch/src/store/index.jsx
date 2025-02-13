import { createStore } from "../redux";
// import { createStore } from "redux";
import combineReducer from "./reducers";

function logger({ getState }) {
  return function (oldDispatch) {
    return function (action) {
      console.log("preState:", getState());
      oldDispatch(action);
      console.log("curState:", getState());
    };
  };
}

function applyMiddleware(middleWare) {
  return function (createStore) {
    return function (combineReducer) {
      let store = createStore(combineReducer);
      let dispatch = middleWare(store)(store.dispatch);

      return {
        ...store,
        dispatch,
      };
    };
  };
}

const store = applyMiddleware(logger)(createStore)(combineReducer);

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
