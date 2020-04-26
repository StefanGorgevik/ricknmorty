import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <form className="form">
            <label htmlFor="input">Search: </label>
            <input type='text' id='input' className="input" placeholder="Search for a character" />
            <button className="form-btn">Search</button>
        </form>
    )
}

export default Form