import React from 'react'
import {
    ContainerHome,
    TitileHome,
    DescriptionHome,
    ContainerButtons,
    ButtonPage
} from './Home.elements';

const Home = () => {
    return (
        <ContainerHome>
            <TitileHome>Welcome to BestGames!</TitileHome>
            <DescriptionHome>Here you will find everything about games!</DescriptionHome>
            <ContainerButtons>
                <ButtonPage to='/games'>Games</ButtonPage>
                <ButtonPage to='/news'>News</ButtonPage>
            </ContainerButtons>
        </ContainerHome>
    )
}

export default Home
