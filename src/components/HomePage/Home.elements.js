import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const ContainerHome = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    height: 90vh;
    text-align: center;
`

export const TitileHome = styled.h1`
    color: ${(props) => props.theme.text};
    padding: 0 10px;
`

export const DescriptionHome = styled.h2`
    padding: 20px 10px 0 10px;
    color: ${(props) => props.theme.text};
`

export const ContainerButtons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`

export const ButtonPage = styled(Link)`
    height: 40px;
    width: 100px;
    margin: 20px;
    font-size: 20px;
    border: none;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    border-radius: 10px;
    color: ${(props) => props.theme.buttonThemeTextColor};
    background: ${(props) => props.theme.buttonThemeBackground};
`
