import React, {useContext} from 'react'

import {GlobalContext } from '../../context/GlobalState'

const CharacterInfo = () => {
    const {chosenCharacter, clickedCharacterHandler} = useContext(GlobalContext)
    return (
        <div className="char-info-div">
            <p onClick={() => clickedCharacterHandler('')} className="x-p">x</p>
            <p>Gender: <span>{chosenCharacter.gender}</span></p>
        </div>
    )
}

export default CharacterInfo
