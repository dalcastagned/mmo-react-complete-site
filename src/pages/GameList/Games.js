import React from 'react'
import { GameList } from '../../components'

const Games = (props) => {
    return (
        <GameList isDarkTheme={props.isDarkTheme}/>
    )
}

export default Games
