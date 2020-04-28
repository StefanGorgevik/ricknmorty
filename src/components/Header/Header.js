import React from 'react'
import './Header.css'
import Form from '../Form/Form'
import SelectPage from '../SelectPage/SelectPage'

const Header = () => {
  
    return (
        <nav className="main-header">
          <h1>Rick and morty</h1>  
          <Form />
          <SelectPage/>
        </nav>
    )
}

export default Header
