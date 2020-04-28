import React, { createContext, useState, useEffect } from 'react'
// import {CharReducer, GET_CHARACTERS} from '../reducers/CharReducer'

const initState = {
    characters: []
}

export const GlobalContext = createContext(initState)

export const GlobalContextProvider = ({ children }) => {
    const [characters, setCharacters] = useState(null);
    const [info, setInfo] = useState(null);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState('1');
    const [isLoading, setIsLoading] = useState(false);

    const [chosenCharacter, setChosenCharacter] = useState('');

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch.');
                }
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setCharacters(data.results)
                setInfo(data.info)
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }, [page])


    const getCharacterByName = (e) => {
        e.preventDefault()
        setIsLoading(true);
        fetch(`https://rickandmortyapi.com/api/character/?name=${search}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch.');
                }
                return response.json();
            })
            .then(data => {
                setIsLoading(false);
                setCharacters(data.results)
            })
            .catch(err => {
                console.log(err);
                setIsLoading(false);
            });
    }

    const setPageHandler = (page) => {
        console.log(page)
        setPage(page)
    }

    const clickedCharacterHandler = (char) => {
        setChosenCharacter(char)
        window.scrollTo(0, 0)
        const chars = characters.filter(ch => ch.id !== char.id)
        chars.unshift(char)
        setCharacters(chars)
    }
    const closeCharacterInfo = (e) => {
        e.stopPropagation()
        setChosenCharacter('')
    }

    return (
        <GlobalContext.Provider value={{
            characters,
            info,
            chosenCharacter,
            isLoading,
            page,
            clickedCharacterHandler,
            closeCharacterInfo,
            setPageHandler,
            setSearch,
            getCharacterByName
        }}>
            {children}
        </GlobalContext.Provider>
    )
}