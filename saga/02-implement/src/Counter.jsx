import { useSelector, useDispatch } from "react-redux";
import * as ActionType from "./store/action-types";

export default function Counter() {
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();
  return (
    <>
      <p>{number}</p>
      <button onClick={() => dispatch({ type: ActionType.ADD })}>ADD</button>
      <button onClick={() => dispatch({ type: ActionType.ASYNC_ADD })}>ASYNC_ADD</button>
      <button onClick={() => dispatch({ type: ActionType.ASYNC_AUTO_ADD })}>ASYNC_AUTO_ADD</button>
      <button onClick={() => dispatch({ type: ActionType.ASYNC_AUTO_ADD_STOP })}>ASYNC_AUTO_ADD_STOP</button>
    </>
  );
}
