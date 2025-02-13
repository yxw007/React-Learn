import ReactReduxContext from "../ReactReduxContext";
import { useContext, useReducer,useLayoutEffect } from "react";

export function useSelector(selector) {
  const { store } = useContext(ReactReduxContext);
  const selectorState = selector(store.getState());
  const [, forceUpdate] = useReducer((x) => x + 1, 0);

  useLayoutEffect(() => {
    let unsubscribe = store.subscribe(() => {
      forceUpdate();
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return selectorState;
}
