import React from 'react'
import { GameDetails } from '../../components'

const Game = (props) => {
    return (
        <GameDetails  isDarkTheme={props.isDarkTheme}/>
    )
}

export default Game
