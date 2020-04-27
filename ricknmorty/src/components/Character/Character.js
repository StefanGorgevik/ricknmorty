import React, { useContext } from 'react'
import './Character.css'
import CharacterInfo from '../CharacterInfo/CharacterInfo'
import { GlobalContext } from '../../context/GlobalState'

const Character = ({ char, click }) => {
    const { chosenCharacter } = useContext(GlobalContext)
    console.log(chosenCharacter)
    return (
        <div className={char.id !== chosenCharacter ? "character" : "selected-char"} onClick={click}>
            <div className={char.id === chosenCharacter ? "left-side" : "char-inactive"}>
                <img src={char.image} alt="user" />
                <div className="info">
                    <p>Name: <span>{char.name}</span></p>
                    <p>Origin: <span>{char.origin.name}</span></p>
                </div>
            </div>
            {char.id === chosenCharacter ?
                <div className="right-side">
                    <CharacterInfo />
                </div> : null}
        </div>
    )
}

export default Character
