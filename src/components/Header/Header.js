import React, { useContext } from 'react'
import './Header.css'
import Form from '../Form/Form'
import SelectPage from '../SelectPage/SelectPage'
import { GlobalContext } from '../../context/GlobalState'
import { ThemeContext } from '../../context/ThemeContext'

const Header = () => {
  const { ui } = useContext(GlobalContext)
  const { dispatch } = useContext(ThemeContext)

  return (
    <nav style={{ background: ui.headerBack, color: ui.color }} className="main-header">
      <h1>Rick n' morty</h1>
      <Form />
      <SelectPage />
      <button style={{ border: ui.border }} className="theme-btn" onClick={() => dispatch({ type: "SET_THEME" })}>Theme</button>
    </nav>
  )
}

export default Header
