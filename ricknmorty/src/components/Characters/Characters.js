import React, { useEffect, useContext, useState } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './Characters.css'


import Character from '../Character/Character'

const Characters = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [page, setPage] = useState(0);
    const { getCharactersHandler, characters, clickedCharacterHandler } = useContext(GlobalContext)

    const setPageHandler = (page) => {
        setPage(page)
    }

    useEffect(() => {
        setIsLoading(true);
        console.log('useEffect')
        const fetchData = () => {
            fetch('https://rickandmortyapi.com/api/character/?page=' + page)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to fetch.');
                    }
                    return response.json();
                })
                .then(data => {
                    setIsLoading(false);
                    getCharactersHandler(data)
                })
                .catch(err => {
                    console.log(err);
                    setIsLoading(false);
                });
        }
        fetchData()
        // eslint-disable-next-line 
    }, [page]);

    const charClick = ( char) => {

        console.log(char)
        clickedCharacterHandler(char)
    }

    let content = <p>Loading...</p>
    let pages = []


    if (!isLoading && characters) {
        console.log(characters)
        content = characters.results.map(char => {
            return <Character
                click={() => charClick(char.id)}
                key={char.id}
                id={char.id}
                char={char} />
        })
        for (let i = 0; i < characters.info.pages; i++) {
            pages.push(<span
                onClick={() => setPageHandler(i)} key={'page' + i}

                className={i !== page ? "page-span" : "active-page page-span"} > {i}</ span>)
        }
    }


    return (
        <div className="characters">
            <div className="pages-div">
                {pages}
            </div>
            <div className="chars-content">
                {content}
            </div>
        </div>
    )
}

export default React.memo(Characters)
