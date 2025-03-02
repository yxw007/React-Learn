import { take, put,fork,cancel,delay } from "../../redux-saga/effects";
import * as ActionType from "../action-types";

function* watcherSaga() {
    while(true){
      //可以在此发送请求
      yield take(ActionType.ASYNC_ADD);
      yield delay(1000);
      //请求完到数据后，调用put->dispatch 更新数据
      yield put({ type: ActionType.ADD });
    }
}

function* autoAdd(){
  while(true){
    yield delay(1000);
    //请求完到数据后，调用put->dispatch 更新数据
    yield put({ type: ActionType.ADD });
  }
}

function* watcherAutoSaga() {
  while(true){
    //可以在此发送请求
    yield take(ActionType.ASYNC_AUTO_ADD);
    let task = yield fork(autoAdd);
    yield take(ActionType.ASYNC_AUTO_ADD_STOP);
    yield cancel(task);
  }
}

export function* rootSaga() {
  yield watcherSaga();
  yield watcherAutoSaga();
  console.log("rootSaga");
}
