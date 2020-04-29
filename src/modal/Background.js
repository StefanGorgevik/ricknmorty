import React, {useContext} from 'react'
import './../App.css'

import {ThemeContext} from '../context/ThemeContext'

const Background = ({children}) => {
    const {theme} = useContext(ThemeContext)
    let ui = theme.isDarkTheme ? theme.dark : theme.light
    return (
        <div style={{backgroundColor: ui.mainBack, color: ui.color}} className="background">
            {children}
        </div>
    )
}

export default Background
