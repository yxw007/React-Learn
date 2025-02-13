import React from "react";
import { bindActionCreators } from "../redux";
import ReactReduxContext from "./ReactReduxContext";

export function connect(mapStateToProps, mapDispatchToProps) {
  return (OldComponent) => {
    return class extends React.Component {
      //说明：为啥一定要定义ReactReduxContext 才能从context中拿到store?
      static contextType = ReactReduxContext;
      constructor(props, context) {
        super(props);
        //1.映射state至props
        const { store } = context;
        const { getState, subscribe, dispatch } = store;
        this.state = mapStateToProps(getState());

        //2.映射dispatch action 方法至props
        let dispatchProps;
        if (typeof mapDispatchToProps === "function") {
          dispatchProps = mapDispatchToProps(dispatch);
        } else {
          dispatchProps = bindActionCreators(mapDispatchToProps, dispatch);
        }
        this.dispatchProps = dispatchProps;

        //3.订阅
        this.unsubscribe = subscribe(() => {
          this.setState(mapStateToProps(getState()));
          // this.setState(this.state);
        });
      }

      componentWillUnmount() {
        this.unsubscribe();
      }

      render() {
        return (
          <OldComponent
            {...this.props}
            {...this.state}
            {...this.dispatchProps}
          ></OldComponent>
        );
      }
    };
  };
}
