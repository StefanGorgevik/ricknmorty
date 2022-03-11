import React, { createContext, useEffect, useReducer } from "react";
export const ThemeContext = createContext();
const SET_THEME = "SET_THEME";
const CHANGE_THEME = "CHANGE_THEME";
export const themeReducer = (state, action) => {
  switch (action.type) {
    case SET_THEME: {
      return { ...state, isDarkTheme: !state.isDarkTheme };
    }
    case CHANGE_THEME: {
      return { ...state, isDarkTheme: action.payload };
    }
    default:
      return state;
  }
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, dispatch] = useReducer(themeReducer, {
    isDarkTheme: true,
    dark: {
      mainBack: "rgba(20, 20, 19, 0.822)",
      color: "rgba(177, 174, 174, 0.767)",
      headerBack: "rgb(14, 13, 13)",
      border: "1px solid white",
      characterBack: "rgba(87, 79, 80, 0.342)",
    },
    light: {
      mainBack: "rgba(237, 241, 245)",
      color: "whitesmoke",
      headerBack: "rgb(1, 20, 51)",
      border: "1px solid brown",
      characterBack: "rgba(8, 42, 97)",
    },
  });

  const isDark = theme.isDarkTheme;

  useEffect(() => {
    const theme = localStorage.getItem("theme");
    if (theme) {
      let isDark = false;
      if (theme === "dark") {
        isDark = true;
      }
      dispatch({ type: CHANGE_THEME, payload: isDark });
    }
  }, []);
  useEffect(() => {
    if (isDark) {
      localStorage.setItem("theme", "dark");
    } else {
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  return (
    <ThemeContext.Provider value={{ theme, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};
