import React, {useContext} from 'react'
import './Form.css'

import {GlobalContext} from '../../context/GlobalState'

const Form = () => {
    const {setSearch, getCharacterByName} = useContext(GlobalContext)
    return (
        <form onSubmit={getCharacterByName} className="form">
            <input onChange={e => setSearch(e.target.value)}
             type='text' id='input' className="input" placeholder="Search by name" />
            <button className="form-btn" onClick={getCharacterByName}>Search</button>
            <button className="form-btn" onClick={() => setSearch('')}>Clear</button>
        </form>
    )
}

export default Form
