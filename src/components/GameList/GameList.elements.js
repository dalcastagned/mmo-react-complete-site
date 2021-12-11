import styled from 'styled-components'

export const ContainerGame = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`

export const CardGame = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    height: 400px;
    margin: 10px;
    border: 2px solid ${(props) => props.theme.border};
    border-radius: 10px;
    width: 400px;

    @media screen and (max-width: 420px){
        width: 300px;
    }

    @media screen and (max-width: 320px){
        width: 260px;
    }
`

export const TitleGame = styled.h2`
    color: ${(props) => props.theme.text};
    padding-bottom: 20px;
`

export const ThumbnailGame = styled.img`
    width: 400px;
    padding: 0 10px;

    @media screen and (max-width: 420px){
        width: 300px;
    }

    @media screen and (max-width: 320px){
        width: 260px;
    }
`

export const ShortDescriptionGame = styled.p`
    color: ${(props) => props.theme.text};
    padding-top: 20px;
`

export const PageTitle = styled.h1`
    color: ${(props) => props.theme.text};
    padding: 20px;
`

export const PageStatistics = styled.span`
    color: ${(props) => props.theme.text};
    padding: 20px;
`



