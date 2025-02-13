import { ADD1, MINUS1,DOUBLE } from "../action-types";

const initState = {
  number: 0,
};

export function reducer(state = initState, action) {
  const { type } = action;
  switch (type) {
    case ADD1:
      return { number: state.number + 1 };
    case MINUS1:
      return { number: state.number - 1 };
    case DOUBLE:
      return { number: state.number*2 };
    default:
      return state;
  }
}
