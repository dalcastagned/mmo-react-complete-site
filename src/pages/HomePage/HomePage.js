import React from 'react'
import { Home } from '../../components'

const HomePage = (props) => {
    return (
        <Home isDarkTheme={props.isDarkTheme}/>
    )
}

export default HomePage
