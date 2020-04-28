import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './Characters.css'


import Character from '../Character/Character'

const Characters = () => {
    const { characters, clickedCharacterHandler, info, setPageHandler, isLoading, page } = useContext(GlobalContext)

    let content = <p>Loading...</p>
    let pages = []


    if (!isLoading && characters && info) {
        console.log(info)
        content = characters.map(char => {
            return <Character
                click={() => clickedCharacterHandler(char)}
                key={char.id}
                id={char.id}
                char={char} />
        })
        for (let i = 1; i <= info.pages; i++) {
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


 // useEffect(() => {
    //     setIsLoading(true);
    //     console.log('useEffect')
    //     const fetchData = () => {
    //         fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    //             .then(response => {
    //                 if (!response.ok) {
    //                     throw new Error('Failed to fetch.');
    //                 }
    //                 return response.json();
    //             })
    //             .then(data => {
    //                 console.log(data)
    //                 setIsLoading(false);
    //                 getCharactersHandler(data.results)
    //                 getInfoHandler(data.info)
    //             })
    //             .catch(err => {
    //                 console.log(err);
    //                 setIsLoading(false);
    //             });
    //     }
    //     fetchData()
    //     // eslint-disable-next-line 
    // }, [page]);