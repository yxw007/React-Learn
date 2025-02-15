function* rootSaga() {
  yield 1;
  yield { type: "delay", time: 1000 };
  yield 2;
}

function runSaga(saga) {
  let it = saga();
  let idx = 0;
  function next() {
    const { done, value } = it.next();
    console.log(`index:${idx++},value:${JSON.stringify(value)},done:${done}`);
    if (done) {
      return;
    }
    if (typeof value === "object" && value.type === "delay") {
      setTimeout(() => {
        next();
      }, value.time);
    } else {
      next();
    }
  }

  next();
}

runSaga(rootSaga);

