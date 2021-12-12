import styled from 'styled-components'

export const GameTitleContainer = styled.div`
    display: flex;
    justify-content: left;
    align-items: left;
    margin-left: 20px;
    padding: 20px 0;
    flex-wrap: wrap;
    flex-direction: column;
`

export const GameTitle = styled.h1`
    color: ${(props) => props.theme.text};
    font-size: 25px;
`

export const GameRelease = styled.h2`
    color: ${(props) => props.theme.text};
    font-size: 25px;
`

export const GamePictureContainer = styled.div`
    display: flex;
    justify-content: center;
`
export const GamePicture = styled.img`
    width: 80vw;
    border-radius: 10px;
`

export const GameInfoContainer = styled.div`
    display: flex;
    padding: 40px 0 20px 0 ;
    justify-content: center;
`

export const DescriptionContainer = styled.div`
    display: flex;
    padding: 20px 0;
`

export const GameInfo = styled.div`
    padding-right: 20px;
    padding-left: 20px;
`

export const InfoTitle = styled.h3`
    color: ${(props) => props.theme.text};  
    font-size: 20px;
`

export const InfoDescription = styled.p`
    color: ${(props) => props.theme.text}; 
    font-size: 16px; 
    padding-top: 10px;
`

export const RequirementsContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 20px auto;
    border: 2px solid ${(props) => props.theme.border};
    padding: 20px;
    max-width: 450px;

    @media screen and (max-width: 450px){
        width: 300px;
    }

    @media screen and (max-width: 300px){
        width: 260px;
    }
`

export const RequirimentsInfo = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    padding-top: 20px;
    align-items: left;
`

export const RequirementsTitle = styled.h2`
    color: ${(props) => props.theme.text}; 
    display: flex;
    padding-bottom: 20px;
`

export const RequirimentsTitle = styled.h3`
    color: ${(props) => props.theme.text};  
    font-size: 16px;
    width: 100px;
`

export const RequirimentsDescription = styled.p`
    color: ${(props) => props.theme.text}; 
    font-size: 16px; 
    padding-top: 6px;
`
