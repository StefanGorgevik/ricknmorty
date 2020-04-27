import React, {createContext, useState} from 'react'
// import {CharReducer, GET_CHARACTERS} from '../reducers/CharReducer'

const initState = {
    characters: []
}

export const GlobalContext = createContext(initState)

export const GlobalContextProvider = ({children}) => {
    const [characters, setCharacters] = useState(null);
    const [chosenCharacter, setChosenCharacter] = useState('');
    

   const getCharactersHandler = (chars) => {
        setCharacters(chars)
   }

   const clickedCharacterHandler = (event, id) => {

       setChosenCharacter(id)
   }

    return (
        <GlobalContext.Provider value={{
            characters, 
            chosenCharacter,
            getCharactersHandler,
            clickedCharacterHandler
        }}>
            {children}
        </GlobalContext.Provider>
    )
}