// import { createStore } from "redux";
import { createStore } from "./redux";

const counter = document.getElementById("counter");
const addButton = document.getElementById("add-button");
const minusButton = document.getElementById("minus-button");

const State = {
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
store.subscribe(render);

function render() {
  counter.innerHTML = store.getState().number;
}

addButton.addEventListener("click", () => {
  store.dispatch({ type: State.ADD });
});

minusButton.addEventListener("click", () => {
  store.dispatch({ type: State.MINUS });
});

render();
