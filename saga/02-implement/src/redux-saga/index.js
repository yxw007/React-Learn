import { TAKE,PUT } from "./effect-types";
import EventEmitter from "events";

export default function createSagaMiddleware() {
  let runBound;
  function sagaMiddleware({ dispatch }) {
    runBound = run.bind(null, {
      dispatch,
      emitter,
    });
    return function (next) {
      return function (action) {
        let result = next(action);
        debugger
        //action的type
        emitter.emit(action.type,action);
        return result;
      };
    };
  }
  let emitter = new EventEmitter();
  function run(env, saga) {
    let { emitter, dispatch } = env;
    let it = typeof saga === "function" ? saga() : saga;
    function next() {
      const { done, value: effect } = it.next();
      if (done) {
        return;
      }
      //如果是迭代器，那就run新的saga
      if (typeof effect[Symbol.iterator] === "function") {
        run(env,effect);
        next();
      } else if (effect instanceof Promise) {
        effect.then(next);
      } else {
        switch (effect.type) {
          case TAKE:
            emitter.once(effect.actionType, next);
            break;
          case PUT:
            dispatch(effect.action);
            next();
            break;
          default:
            break;
        }
      }
    }
    next();
  }

  sagaMiddleware.run = (saga) => runBound(saga);

  return sagaMiddleware;
}
