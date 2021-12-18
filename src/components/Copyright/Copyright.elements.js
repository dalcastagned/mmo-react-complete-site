import styled from 'styled-components'

export const Footer = styled.div`
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterText = styled.p`
    color: ${(props) => props.theme.text}; 
`