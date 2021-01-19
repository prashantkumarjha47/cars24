import React, { useReducer } from "react";
import { reducer, initialState } from "./Reducer";

const Context = React.createContext();

const ContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Context.Provider value={[state, dispatch]}>
      {props.children}
    </Context.Provider>
  );
};

export { ContextProvider, Context };
