import React from "react";
import {
  useSelector,
  useDispatch,
  useBoundDispatch,
} from "../react-redux/hooks";


import { ADD2, DOUBLE, MINUS2 } from "../store/action-types";
//方式一
export default function () {
  const counter2 = useSelector((state) => state.counter2);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{counter2.number}</p>
      <button onClick={() => dispatch({ type: ADD2 })}>+</button>
      <button onClick={() => dispatch({ type: MINUS2 })}>-</button>
      <button onClick={() => dispatch({ type: DOUBLE })}>DOUBLE</button>
    </div>
  );
}


//方式二
/* import { actionCreators } from "../store/actionCreators/counter2";

export default function () {
  const counter2 = useSelector((state) => state.counter2);
  const { add, minus } = useBoundDispatch(actionCreators);

  return (
    <div>
      <p>{counter2.number}</p>
      <button onClick={add}>+</button>
      <button onClick={minus}>-</button>
    </div>
  );
} */
