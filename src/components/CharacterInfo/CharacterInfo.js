import React, { useContext } from 'react'
import './CharacterInfo.css'
import { GlobalContext } from '../../context/GlobalState'

const CharacterInfo = () => {
    const { state, closeCharacterInfo } = useContext(GlobalContext)
    const chosenCharacter = state.chosenCharacter
    return (
        <div className="char-info-div">
            <div className="x-div">
                <p onClick={closeCharacterInfo} className="x-p">
                    <span className="x-span">x</span>
                </p>
            </div>
            <div className="main-info">
                <p className="char-info-p">Species: <span>{chosenCharacter.species}</span></p>
                <p className="char-info-p">Status: <span>{chosenCharacter.status}</span></p>
                <p className="char-info-p">Location: <span>{chosenCharacter.location.name}</span></p>
                <p className="char-info-p">Origin: <span>{chosenCharacter.origin.name}</span></p>
                <p className="char-info-p">Gender: <span>{chosenCharacter.gender}</span></p>
            </div>
        </div>
    )
}

export default CharacterInfo
