import { compose } from "./compose";

export function applyMiddleware(...middlewares) {
    return function (createStore) {
      return function (combineReducer) {
        let store = createStore(combineReducer);
  
        let dispatch;
        let middlewareApi = {
          getState: store.getState,
          dispatch: (action) => dispatch(action),
        };
        let chain = middlewares.map((middleware)=>middleware(middlewareApi))
        dispatch = compose(chain)(store.dispatch);
        return {
          ...store,
          dispatch,
        };
      };
    };
  }