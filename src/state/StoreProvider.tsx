import React, { createContext, useReducer } from "react";
import { intialState, reducer, State } from "./State";

interface Props {}

interface Context {
  state: State;
  dispatch?: React.Dispatch<any>;
}

export const Store = createContext<Context>({ state: intialState });
const StoreProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;
