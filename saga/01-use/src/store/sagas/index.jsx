import { take,put } from "redux-saga/effects";
import * as ActionType from "../action-types";

function delay(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}

function* workerSaga() {
  console.log("workerSaga");
  //TODO:在此发送请求
  yield delay(1000);
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
