export function logger({ getState }) {
      return function (next) {
        return function (action) {
          console.log("preState:", getState());
          next(action);
          console.log("curState:", getState());
        };
      };
  }