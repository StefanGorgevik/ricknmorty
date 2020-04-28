import React, {useContext} from 'react'

import {GlobalContext } from '../../context/GlobalState'

const CharacterInfo = () => {
    const {chosenCharacter, closeCharacterInfo} = useContext(GlobalContext)
    console.log(chosenCharacter)
    return (
        <div className="char-info-div">
            <p onClick={closeCharacterInfo} className="x-p">x</p>
            <p>Origin: <span>{chosenCharacter.origin.name}</span></p>
            <p>Gender: <span>{chosenCharacter.gender}</span></p>
        </div>
    )
}

export default CharacterInfo
