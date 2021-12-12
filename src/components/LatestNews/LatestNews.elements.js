import styled from 'styled-components'

export const ContainerNews = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-top: 20px;
`

export const CardNews = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 10px;
    height: 500px;
    margin: 10px;
    border: 2px solid ${(props) => props.theme.border};
    border-radius: 10px;
    width: 400px;
    text-decoration: none;

    @media screen and (max-width: 420px){
        width: 300px;
    }

    @media screen and (max-width: 320px){
        width: 260px;
    }
`

export const TitleNews = styled.h2`
    color: ${(props) => props.theme.text};
    padding-bottom: 10px;
    font-size: 18px;
    text-align: left;
`

export const ThumbnailNews = styled.img`
    width: 400px;
    padding: 20px 10px;

    @media screen and (max-width: 420px){
        width: 300px;
    }

    @media screen and (max-width: 320px){
        width: 260px;
    }
`

export const ShortDescriptionNews = styled.p`
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

export const ContainerInfoNews = styled.div`
    height: 200px;
`


