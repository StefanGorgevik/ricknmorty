import React, { useContext } from 'react'
import './Character.css'
import CharacterInfo from '../CharacterInfo/CharacterInfo'
import { GlobalContext } from '../../context/GlobalState'

const Character = ({ char, click }) => {
    const { state } = useContext(GlobalContext)
    const chosenCharacter = state.chosenCharacter
    return (
        <div className={char.id !== chosenCharacter.id ? "character" : "selected-char"} onClick={click}>
            <div className={char.id === chosenCharacter.id ? "left-side" : ""}>
                <img src={char.image} alt="user" />
                <p className='info-p '>{char.name}</p>
            </div>
            {char.id === chosenCharacter.id ?
                <div className="right-side">
                    <CharacterInfo />
                </div> : null}
        </div>
    )
}

export default Character
