import React, { createContext, useReducer } from "react";
import { intialState, reducer, State, Action } from "./State";

interface Props {}

interface Context {
  state: State;
  dispatch?: React.Dispatch<Action>;
}

export const Store = createContext<Context>({ state: intialState });
const StoreProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <Store.Provider value={{ state, dispatch }}>{children}</Store.Provider>
  );
};

export default StoreProvider;
