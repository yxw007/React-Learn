function compose(...fns) {
  return function (oldDispatch) {
    let args = oldDispatch;
    for (let i = fns.length - 1; i >= 0; i--) {
      args = fns[i](args);
    }
    return args;
  };
}

const logger = (next) => (action) => {
  console.log("logger");
  next(action);
};

const promise = (next) => (action) => {
  console.log("promise");
  next(action);
};

function dispatch(action) {
  console.log("dispatch:", action);
}

const composed = compose(logger, promise);

const newDispatch = composed(dispatch);

newDispatch({ type: "ADD" });
