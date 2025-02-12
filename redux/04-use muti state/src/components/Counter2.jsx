import React from "react";
import { store } from "../store";
import {boundActionCreators} from "../store/actionCreators/counter2"


export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: store.getState().counter2.number };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().counter2.number });
    });
  }
  componentWillUnmount() {
    this.unsubscribe();
  }
  render() {
    return (
      <div>
        <p>{this.state.number}</p>
        <button onClick={boundActionCreators.add}>+</button>
        <button onClick={boundActionCreators.minus}>-</button>
      </div>
    );
  }
}

