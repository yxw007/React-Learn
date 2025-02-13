import react from "react";
import ReactReduxContext from "../ReactReduxContext";
import { bindActionCreators } from "../../redux";

export function useBoundDispatch(actionCreators) {
  const { store } = react.useContext(ReactReduxContext);
  return bindActionCreators(actionCreators, store.dispatch);
}
