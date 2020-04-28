import React, {useContext} from 'react'
import './SelectPage.css'
import { GlobalContext } from '../../context/GlobalState'

const SelectPage = () => {
    const { info, setPageHandler } = useContext(GlobalContext)
  let pages = []

  if (info) {
    for (let i = 1; i <= info.pages; i++) {
        pages.push(<option className="option-page" key={'page' + i} value={i}> {i}</option>)
    }
}
    return (
        <div className='select-page'>
        <label htmlFor="select">Page</label>
        <select id="select" className="pages-select" onChange={(e) =>setPageHandler(e.target.value)}>
                {pages}
            </select>
    </div>)
}

export default SelectPage
