import { ADD2, MINUS2 } from "../action-types";

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
    default:
      return state;
  }
}
