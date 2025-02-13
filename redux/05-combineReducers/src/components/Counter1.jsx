import React from "react";
import { store } from "../store";
import {boundActionCreators} from "../store/actionCreators/counter1"
import { DOUBLE } from "../store/action-types";


export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { number: store.getState().counter1.number };
  }
  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({ number: store.getState().counter1.number });
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
        <button onClick={()=>store.dispatch({type:DOUBLE})}>DOUBLE</button>
      </div>
    );
  }
}

