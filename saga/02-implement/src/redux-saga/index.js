import { TAKE,PUT, FORK, CANCEL,CALL } from "./effect-types";
import EventEmitter from "events";
const CANCEL_TASK = Symbol.for('CANCEL_TASK');

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
        //action的type
        emitter.emit(action.type,action);
        return result;
      };
    };
  }

  let emitter = new EventEmitter();
  function run(env, saga) {
    const cancelTask = { cancel: () => next(CANCEL_TASK) };
    let { emitter, dispatch } = env;
    let it = typeof saga === "function" ? saga() : saga;

    function next(value,isError) {
      let result;
      if(isError){
        result = it.throw(value);
      }else if(value === CANCEL_TASK){
        result = it.return(value);
      }else{
        /* 
        const task = run(env,effect.action);
        next(task);

        注意：此处要记得透传value, saga的cancelTask 无法传给上传，导致effect.task.cancel 会报cancel未定义错误
        */
        result = it.next(value);
      }
      const { done, value: effect } = result;
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
          case FORK:
            const task = run(env,effect.action);
            next(task);
            break;
          case CANCEL:
            effect.task.cancel();
            next();
            break;
          case CALL:
            effect.fn(...effect.args).then(next);
            break;
          default:
            break;
        }
      }
    }
    next();
    return cancelTask;
  }

  sagaMiddleware.run = (saga) => runBound(saga);

  return sagaMiddleware;
}
