import * as ActionTypes from "./action-types";

export function reducer(state = { number: 0 }, action) {
  switch (action.type) {
    case ActionTypes.ADD:
      return { number: state.number + 1 };
    default:
      return state;
  }
}
