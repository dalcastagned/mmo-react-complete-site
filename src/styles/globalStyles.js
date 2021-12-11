import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: 'Source Sans Pro', sans-serif;
    -webkit-tap-highlight-color: transparent;
}

body {
    background: ${(props) => props.theme.background};
}

`;

export const Container = styled.div`
    z-index: 1;
    width: 100%;
    max-width: 100vw;
    margin-left: auto;
    margin-right: auto;
    padding-right: 20px;
    padding-left: 20px;

    @media screen and (max-width: 991px) {  
        padding-right: 30px;
        padding-left: 30px; 
    }
`;

export default GlobalStyle