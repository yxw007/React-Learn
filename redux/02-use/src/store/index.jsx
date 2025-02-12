import { createStore } from "../redux";

export const State = {
  ADD: "ADD",
  MINUS: "MINUS",
};

const initState = {
  number: 0,
};

function reducer(state = initState, action) {
  const { type } = action;
  switch (type) {
    case State.ADD:
      return { number: state.number + 1 };
    case State.MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

export { store };
