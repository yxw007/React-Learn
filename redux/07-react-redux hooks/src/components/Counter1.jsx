import React from "react";
import {actionCreators} from "../store/actionCreators/counter1"
import { connect } from "../react-redux";

export class Counter extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.number}</p>
        <button onClick={this.props.add}>+</button>
        <button onClick={this.props.minus}>-</button>
      </div>
    );
  }
}

const mapStateToProps = state=>state.counter1;
//const mapDispatchToProps = dispatch => bindActionCreators(actionCreators, dispatch)
export default connect(
  /* 状态->props */
  mapStateToProps,
  /* dispatch action->props */
  actionCreators
)(Counter);