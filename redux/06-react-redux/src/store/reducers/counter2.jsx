import { ADD2, MINUS2,DOUBLE } from "../action-types";

const initState = {
  number: 0,
};

export function reducer(state = initState, action) {
  const { type } = action;
  switch (type) {
    case ADD2:
      return { number: state.number + 1 };
    case MINUS2:
      return { number: state.number - 1 };
    case DOUBLE:
      return { number: state.number*2 };
    default:
      return state;
  }
}
