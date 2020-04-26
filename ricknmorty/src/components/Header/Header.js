import React from 'react'
import './Header.css'
import Form from '../Form/Form'

const Header = () => {
    return (
        <nav className="main-header">
          <h1>Rick and morty</h1>  
          <Form />
        </nav>
    )
}

export default Header
