import React from "react";
import { State, store } from "../store";
import { bindActionCreators } from "../redux";

function add(){
  return { type: State.ADD}
}

function minus(){
  return {type:State.MINUS};
}

const actionCreators = {add,minus};
const boundActionCreators = bindActionCreators(actionCreators,store.dispatch);
/* 
{
add: () => store.dispatch(add())
}
*/

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
        <button onClick={boundActionCreators.add}>+</button>
        <button onClick={boundActionCreators.minus}>-</button>
      </div>
    );
  }
}

