import React, { createContext, useReducer } from 'react'

export const ThemeContext = createContext()

export const themeReducer = (state, action) => {
    switch (action.type) {
        case "SET_THEME": {
            return { ...state, isDarkTheme: !state.isDarkTheme };
        }
        default:
            return state;
    }
}

export const ThemeContextProvider = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, {
        isDarkTheme: true,
        dark: { mainBack: "rgba(20, 20, 19, 0.822)", color: "rgba(177, 174, 174, 0.767)", headerBack: "rgb(14, 13, 13)", border: '1px solid white' },
        light: { mainBack: "rgba(172, 166, 167, 0.822)", color: "black", headerBack: "rgb(128, 120, 120)", border: '1px solid brown' }
    })

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}