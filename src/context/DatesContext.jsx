import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  dates: [],
};

export const DatesContext = createContext(INITIAL_STATE);

const DatesReducer = (state, action) => {
  switch (action.type) {
    case "NEW_DATE":
      return action.payload;
    case "CLEAR_DATE":
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const DatesContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(DatesReducer, INITIAL_STATE);

  return <DatesContext.Provider value={{ dates: state.dates, dispatch }}>{children}</DatesContext.Provider>;
};
