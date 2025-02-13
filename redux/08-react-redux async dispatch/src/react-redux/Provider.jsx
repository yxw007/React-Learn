import React from "react";
import ReactReduxContext from "./ReactReduxContext";

export function Provider(props) {
  return (
    <ReactReduxContext.Provider value={{ store: props.store }}>
      {props.children}
    </ReactReduxContext.Provider>
  );
}
