import React, {useContext} from 'react'
import './Form.css'

import {GlobalContext} from '../../context/GlobalState'
import {SET_SEARCH } from '../../reducers/CharReducer'

const Form = () => {
    const {dispatch, ui} = useContext(GlobalContext)
    
    return (
        <form className="form">
            <input style={{border: ui.border }} onChange={e => dispatch({type: SET_SEARCH, payload: e.target.value })}
             type='search' id='input' className="input" placeholder="Search by name" />
        </form>
    )
}

export default Form
