import {createContext, useReducer} from 'react'
import {CharReducer, GET_CHARACTERS} from '../reducers/CharReducer'

const initState = {
    characters: []
}

export const GlobalContext = createContext(initState)

export const GlobalProvider = ({children}) => {{
    const [state, dispatch] = useReducer(CharReducer, initState)

    function getCharsAction(characters) {
        dispatch({
            type: GET_CHARACTERS,
            payload: characters
        })
    }

    return (
        <GlobalContext.Provider value={{
            users: state.users, 
            getUsers
        }}>
            {children}
        </GlobalContext.Provider>
    )
}}