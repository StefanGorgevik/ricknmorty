import React, { createContext, useReducer, useEffect, useContext } from "react";
import {
  CharReducer,
  GET_CHARACTERS,
  SET_INFO,
  SET_IS_LOADING,
} from "../reducers/CharReducer";
import { ThemeContext } from "./ThemeContext";

const initState = {
  characters: [],
  info: [],
  page: 1,
  isLoading: false,
  search: "",
  chosenCharacter: "",
};

export const GlobalContext = createContext(initState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CharReducer, initState);
  const { theme } = useContext(ThemeContext);
  let ui = theme.isDarkTheme ? theme.dark : theme.light;
  useEffect(() => {
    dispatch({ type: SET_IS_LOADING, payload: true });
    fetch(`https://rickandmortyapi.com/api/character/?page=${state.page}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: SET_IS_LOADING, payload: false });
        dispatch({ type: GET_CHARACTERS, payload: data.results });
        dispatch({ type: SET_INFO, payload: data.info });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SET_IS_LOADING, payload: false });
      });
  }, [state.page]);

  useEffect(() => {
    dispatch({ type: SET_IS_LOADING, payload: true });
    fetch(`https://rickandmortyapi.com/api/character/?name=${state.search}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch.");
        }
        return response.json();
      })
      .then((data) => {
        dispatch({ type: SET_IS_LOADING, payload: false });
        dispatch({ type: GET_CHARACTERS, payload: data.results });
      })
      .catch((err) => {
        console.log(err);
        dispatch({ type: SET_IS_LOADING, payload: false });
      });
  }, [state.search]);

  //   const clickedCharacterHandler = (char) => {
  //     window.scrollTo(0, 0);
  //     dispatch({ type: SET_CHOSEN_CHARACTER, payload: char });
  //   };

  //   const closeCharacterInfo = (e) => {
  //     e.stopPropagation();
  //     dispatch({ type: SET_CHOSEN_CHARACTER, payload: "" });
  //   };

  return (
    <GlobalContext.Provider
      value={{
        state,
        ui,
        dispatch,
        // clickedCharacterHandler,
        // closeCharacterInfo,
        page: state.page,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
