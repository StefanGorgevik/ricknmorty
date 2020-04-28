import React, { useContext } from 'react'
import './CharacterInfo.css'
import { GlobalContext } from '../../context/GlobalState'

const CharacterInfo = () => {
    const { chosenCharacter, closeCharacterInfo } = useContext(GlobalContext)
    console.log(chosenCharacter)
    return (
        <div className="char-info-div">
            <div className="x-div">
                <p onClick={closeCharacterInfo} className="x-p">x</p>
            </div>
            <div className="main-info">
                <p>Species: <span>{chosenCharacter.species}</span></p>
                <p>Status: <span>{chosenCharacter.status}</span></p>
                <p>Origin: <span>{chosenCharacter.origin.name}</span></p>
                <p>Gender: <span>{chosenCharacter.gender}</span></p>
            </div>
        </div>
    )
}

export default CharacterInfo
