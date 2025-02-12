function bindActionCreator(action,dispatch) {
  return (...args) => dispatch(action.apply(this, args));
}

export default function bindActionCreators(actionCreators, dispatch) {
  let boundActionCreators = {};
  for (let key of Object.keys(actionCreators)) {
    boundActionCreators[key] = bindActionCreator(actionCreators[key],dispatch);
  }
  return boundActionCreators;
}
