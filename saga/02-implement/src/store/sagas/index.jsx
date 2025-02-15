import { take, put } from "../../redux-saga/effects";
import * as ActionType from "../action-types";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function* workerSaga() {
  console.log("workerSaga");
  //可以在此发送请求
  yield delay(1000);
  //请求完到数据后，调用put->dispatch 更新数据
  yield put({ type: ActionType.ADD });
}

function* watcherSaga() {
  while (true) {
    yield take(ActionType.ASYNC_ADD);
    yield workerSaga();
  }
}

export function* rootSaga() {
  yield watcherSaga();
  console.log("rootSaga");
}
