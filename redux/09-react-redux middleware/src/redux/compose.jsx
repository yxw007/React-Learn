export function compose(fns) {
    return function (oldDispatch) {
      let args = oldDispatch;
      for (let i = fns.length - 1; i >= 0; i--) {
        args = fns[i](args);
      }
      return args;
    };
  }
  