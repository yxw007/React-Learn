import React from "react";
import { State, store } from "../store";

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: store.getState().number };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().number });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={() => store.dispatch({ type: State.ADD })}>+</button>
        <button onClick={() => store.dispatch({ type: State.MINUS })}>-</button>
      </div>
    );
  }
}

