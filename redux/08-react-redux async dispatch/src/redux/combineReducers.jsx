function combineReducers(reducers) {
  return function reducer(state = {}, acton) {
    let nextState = {};
    //TODO: 一个组件的redux dispatch会导致所有的reducer都执行一遍
    //说明：相同action.type 就都会触发执行。场景：主题色修改，所有组件都需要变更
    for (const subReducerKey in reducers) {
        let subPreState = state[subReducerKey];
        let subReducer = reducers[subReducerKey];
        let subNextState = subReducer(subPreState,acton);
        nextState[subReducerKey] = subNextState;
    }
    return nextState;
  };
}

export default combineReducers;
