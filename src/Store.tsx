import React, { createContext, useReducer } from "react";

interface IntialState {
  episodes: any[];
  favourites: object[];
}
interface Action {
  type: string;
  payload: any;
}
const intialState: IntialState = {
  episodes: [],
  favourites: [],
};

export const Store = createContext<IntialState | any>(intialState);

// const newState={...intialState};
const reducer = (state: IntialState, action: Action) => {
  switch (action.type) {
    case "ADD_USER":
      return { ...state, episodes: [...state.episodes, action.payload] };
    case "ADD_EPISODE":
      return { ...state, episodes: [...state.episodes, ...action.payload] };
    case "ADD_FAVOURITE":
      return {
        ...state,
        favourites: [
          ...state.favourites,
          { ...action.payload, favourite: true },
        ],
      };
    case "REMOVE_FAVOURITE":
      return {
        ...state,
        favourites: [
          ...state.favourites.filter(
            (episode: any) => episode !== action.payload
          ),
        ],
      };
    default:
      return state;
  }
};
export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, intialState);
  return (
    <Store.Provider value={[state, dispatch]}>{props.children}</Store.Provider>
  );
}
