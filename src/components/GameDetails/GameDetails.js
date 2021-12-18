import React, { useState, useEffect } from 'react';
import { useParams } from "react-router";
import { getGameDetails } from '../../services/Api';
import {
    ContainerImages,
    ErrorImg,
    LoadingIMG,
} from '../../styles/globalStyles'
import SlideShow from '../SlideShow/SlideShow.js';
import {
    GameTitleContainer,
    GameTitle,
    GameRelease,
    GamePictureContainer,
    GameInfoContainer,
    GameInfo,
    DescriptionContainer,
    RequirementsTitle,
    InfoTitle,
    InfoDescription,
    RequirementsContainer,
    RequirimentsInfo,
    RequirimentsTitle,
    RequirimentsDescription
} from './GameDetails.elements'


const GameDetails = ({ isDarkTheme }) => {

    const [game, setGame] = useState([]);
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(0);
    const { id } = useParams();

    useEffect(() => {
        getGameDetails("game", id)
            .then((data) => {
                setGame(data);
                setLoaded(true);
            })
            .catch(function (err) {
                setError(true);
                setLoaded(true);
            });
    }, [id]);

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
                {isDarkTheme
                    ? <LoadingIMG src='https://i.ibb.co/CmhYx2h/loading-light.gif' alt='loading...' />
                    : <LoadingIMG src='https://i.ibb.co/9cV76wq/loading-dark.gif' alt='loading...' />
                }
            </ContainerImages>
        )
    } else {
        return (
            <>
                <GameTitleContainer>
                    <GameTitle>{game.title}</GameTitle>
                    <GameRelease>{`(${game.release_date})`}</GameRelease>
                </GameTitleContainer>
                <GamePictureContainer>
                    <SlideShow screenshots={game.screenshots} game={game.title} />
                </GamePictureContainer>
                <GameInfoContainer>
                    <GameInfo>
                        <InfoTitle>Genre</InfoTitle>
                        <InfoDescription>{game.genre}</InfoDescription>
                    </GameInfo>
                    <GameInfo>
                        <InfoTitle>Platform</InfoTitle>
                        <InfoDescription>{game.platform}</InfoDescription>
                    </GameInfo>
                </GameInfoContainer>
                <DescriptionContainer>
                    <GameInfo>
                        <InfoTitle>Description</InfoTitle>
                        <InfoDescription>{game.description.replace(/(<([^>]+)>)/gi, "")}</InfoDescription>
                    </GameInfo>
                </DescriptionContainer>
                <RequirementsContainer>
                    <RequirementsTitle>Requirements:</RequirementsTitle>
                    <RequirimentsInfo>
                        <RequirimentsTitle>OS:</RequirimentsTitle>
                        <RequirimentsDescription>{game.minimum_system_requirements.os}</RequirimentsDescription>
                    </RequirimentsInfo>
                    <RequirimentsInfo>
                        <RequirimentsTitle>Processor:</RequirimentsTitle>
                        <RequirimentsDescription>{game.minimum_system_requirements.processor}</RequirimentsDescription>
                    </RequirimentsInfo>
                    <RequirimentsInfo>
                        <RequirimentsTitle>Memory:</RequirimentsTitle>
                        <RequirimentsDescription>{game.minimum_system_requirements.memory}</RequirimentsDescription>
                    </RequirimentsInfo>
                    <RequirimentsInfo>
                        <RequirimentsTitle>Graphics:</RequirimentsTitle>
                        <RequirimentsDescription>{game.minimum_system_requirements.graphics}</RequirimentsDescription>
                    </RequirimentsInfo>
                    <RequirimentsInfo>
                        <RequirimentsTitle>Storage:</RequirimentsTitle>
                        <RequirimentsDescription>{game.minimum_system_requirements.storage}</RequirimentsDescription>
                    </RequirimentsInfo>
                </RequirementsContainer>

            </>
        )
    }
}

export default GameDetails
