import React, { useContext } from 'react'
import { GlobalContext } from '../../context/GlobalState'
import './Characters.css'


import Character from '../Character/Character'

const Characters = () => {
    console.log('characters')
    const { characters, info, clickedCharacterHandler, isLoading } = useContext(GlobalContext)

    let content = <p>Loading...</p>


    if (!isLoading && characters && info) {
        content = characters.map(char => {
            return <Character
                click={() => clickedCharacterHandler(char)}
                key={char.id}
                id={char.id}
                char={char} />
        })
    }

    return (
        <div className="characters">
            <div className="chars-content">
                {content}
            </div>
        </div>
    )
}

export default React.memo(Characters)
