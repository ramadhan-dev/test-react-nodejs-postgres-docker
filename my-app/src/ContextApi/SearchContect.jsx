import React, { createContext, useReducer } from "react";
import { SearchReducer } from "../Reducers/SearchReducer";

// create context
export const SearchContext = createContext();

const SearchContextProvider = props => {

  const initialState = {
    data: [],
    currentPage: 0,
    totalData: 0,
    page: 0
  };
  
  const [data, dispatch] = useReducer(SearchReducer, initialState);

  return (
    <SearchContext.Provider value={{ data, dispatch }}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
