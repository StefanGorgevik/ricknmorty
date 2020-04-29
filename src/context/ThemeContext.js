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
        isDarkTheme: false,
        dark: {
            mainBack: "rgba(20, 20, 19, 0.822)",
            color: "rgba(177, 174, 174, 0.767)",
            headerBack: "rgb(14, 13, 13)",
            border: '1px solid white',
            characterBack: 'rgba(87, 79, 80, 0.342)'
        },
        light: {
            mainBack: "rgba(237, 241, 245)",
            color: "whitesmoke",
            headerBack: "rgb(1, 20, 51)",
            border: '1px solid brown',
            characterBack: 'rgba(8, 42, 97)'
        }
    })

    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}