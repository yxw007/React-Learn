export function thunk({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      if (typeof action === "function") {
        action({ getState, dispatch });
        return;
      }
      next(action);
    };
  };
}
