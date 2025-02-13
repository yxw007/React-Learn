import { useContext } from "react";
import ReactReduxContext from "../ReactReduxContext";

export function useDispatch() {
  const { store } = useContext(ReactReduxContext);
  return store.dispatch;
}
