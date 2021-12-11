import styled from 'styled-components'
import { FaGamepad, FaTimes, FaBars, FaMoon, FaSun } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../../styles/globalStyles'

export const Nav = styled.nav`
    background: ${(props) => props.theme.background};
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    position: sticky;
    top: 0;
    border-bottom: 2px solid ${(props) => props.theme.border};
`

export const NavbarContainer = styled(Container)`
    display: flex;
    justify-content: space-between;
    height: 80px;

    ${Container}
`

export const NavLogo = styled(Link)`
    color: ${(props) => props.theme.text};
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
    font-size: 25px;
    display: flex;
    align-items: center;
`

export const NavIcon = styled(FaGamepad)`
    margin-right: 8px;
`

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 960px){
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 55%);
        font-size: 32px;
        cursor: pointer;
    }
`

export const MobileIconX = styled(FaTimes)`
    color: ${(props) => props.theme.text};
`

export const MobileIconBars = styled(FaBars)`
    color: ${(props) => props.theme.text};
`

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;

    @media screen and (max-width: 960px){
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 90vh;
        position: absolute;
        top: 80px;
        left: ${({click}) => (click ? 0 : '-100%')};
        opacity: 1;
        transition: ${({click}) => (click ? 'all 0.3s ease' : 'all 0.1s ease')};
        background: ${(props) => props.theme.mobileMenuBackground};
    }
`

export const NavItem = styled.li`
    height: 80px;
    border-bottom: 2px solid transparent;

    &:hover{
        border-bottom: 2px solid ${(props) => props.theme.menuItemHover};
    }

    @media screen and (max-width: 960px){
        width: 100%;

        &:hover{
            border: none;
        }
    }
`

export const NavLinks = styled(Link)`
    color: ${(props) => props.theme.text};
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 8px 16px;
    height: 100%;

    @media screen and (max-width: 960px){
        text-align: center;
        padding: 32px;
        width: 100%;
        display: table;

        &:hover {
            transition: all 0.3s ease;
        }
    }
`

export const NavItemBtn = styled.li`
    @media screen and (max-width: 960px){
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 50px;
    }
`

export const ThemeButton = styled.button`
    border-radius: 50%;
    background: ${(props) => props.theme.buttonThemeBackground};
    white-space: nowrap;
    font-size: 20px;
    outline: none;
    border: none;
    cursor: pointer;
    text-decoration: none;
    padding: 10px 5px;
    height: 40px;
    width: 40px;
    margin: 0 10px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover{
        transition: all 0.3s easy-out;
    }

    @media screen and (max-width: 960px) { 
        margin-top:  50px;
        width: 40px;
    }
`

export const DarkIcon = styled(FaMoon)`
    color: ${(props) => props.theme.buttonThemeTextColor};
`

export const LightIcon = styled(FaSun)`
    color: ${(props) => props.theme.buttonThemeTextColor};
`