import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  dates: [],
};

export const DatesContext = createContext(INITIAL_STATE);

const DatesReducer = (state, action) => {
  switch (action.type) {
    case "NEW_DATE":
      return action.payload;
    default:
      return state;
  }
};

export const DatesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DatesReducer, INITIAL_STATE);

  console.log(state);

  return <DatesContext.Provider value={{ dates: state.dates, dispatch }}>{children}</DatesContext.Provider>;
};
