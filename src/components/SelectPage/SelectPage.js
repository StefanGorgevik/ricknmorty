import React, {useContext} from 'react'
import './SelectPage.css'
import { GlobalContext } from '../../context/GlobalState'
import {SET_PAGE} from '../../reducers/CharReducer'
const SelectPage = () => {
    const { ui, state, dispatch } = useContext(GlobalContext)
    const info = state.info
  let pages = []

  if (info) {
    for (let i = 1; i <= info.pages; i++) {
        pages.push(<option className="option-page" key={'page' + i} value={i}> {i}</option>)
    }
}
    return (
        <div className='select-page'>
        <label htmlFor="select">Page</label>
        <select style={{border: ui.border}} id="select" className="pages-select" onChange={(e) =>dispatch( {type: SET_PAGE, payload: e.target.value})}>
                {pages}
            </select>
    </div>)
}

export default SelectPage
