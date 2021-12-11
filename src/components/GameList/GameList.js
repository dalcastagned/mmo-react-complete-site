import React, { useState, useEffect } from 'react';
import { getGameData } from '../../services/Api';
import {
    PageTitle,
    PageStatistics,
    ContainerGame,
    CardGame,
    TitleGame,
    ThumbnailGame,
    ShortDescriptionGame
} from './GameList.elements'

const GameList = () => {
    const [game, setGame] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(0);

    useEffect(() => {
        getGameData("games")
            .then((data) => {
                setGame(data);
                setLoaded(true);
            })
            .catch(function (err) {
                setError(err.response.status);
                setLoaded(true);
            });
    }, []);

    if (error === true) {
        return (<h1>Erro!!</h1>)
    }
    else if (loaded === false) {
        return (
            <>
                <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt='loading...' />
            </>
        )
    } else {
        return (
            <>
                <PageTitle>Game List</PageTitle>
                <PageStatistics>
                    Total games found: {game.length} 
                </PageStatistics>
                <ContainerGame>
                    {game.map((game) => (
                        <CardGame>
                            <TitleGame>{game.title}</TitleGame>
                            <ThumbnailGame src={game.thumbnail} alt={`${game.title} game thumbnail`} />
                            <ShortDescriptionGame>{game.short_description.length > 130
                                ? game.short_description.substring(0, 127) + "..."
                                : game.short_description}</ShortDescriptionGame>
                        </CardGame>
                    ))}
                </ContainerGame>
            </>
        )
    }
};
export default GameList
