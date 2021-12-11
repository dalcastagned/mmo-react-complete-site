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
} from './GameList.elements';
import {
    ContainerImages,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'

const GameList = (props) => {
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
                setError(true);
                setLoaded(true);
            });
    }, []);

    if (error === true) {
        return (
            <ContainerImages>
                <ErrorImg src='https://i.ibb.co/GPBYtqK/error.png' alt='Error!' />
            </ContainerImages>
        )
    }
    else if (loaded === false) {
        return (
            <ContainerImages>
                {props.isDarkTheme
                    ? <LoadingIMG src='https://i.ibb.co/CmhYx2h/loading-light.gif' alt='loading...' />
                    : <LoadingIMG src='https://i.ibb.co/9cV76wq/loading-dark.gif' alt='loading...' />
                }
            </ContainerImages>
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
