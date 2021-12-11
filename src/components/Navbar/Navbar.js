import React, { useState } from 'react'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    NavIcon,
    MobileIcon,
    MobileIconX,
    MobileIconBars,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    ThemeButton,
    DarkIcon,
    LightIcon
} from './Navbar.elements'

const Navbar = (props) => {

    const [clickMenu, setClick] = useState(false)

    const handleClickMenu = () => {
        setClick(!clickMenu)
    }

    const handleClickMenuOff = () => {
        if (clickMenu) {
            setClick(false)
        }
    }

    const changeTheme = () => {
        props.setIsDarkTheme(!props.isDarkTheme)
    }

    return (
        <Nav>
            <NavbarContainer>
                <NavLogo to="/" onClick={handleClickMenuOff}>
                    <NavIcon />BestGames
                </NavLogo>
                <MobileIcon onClick={handleClickMenu}>
                    {clickMenu ? <MobileIconX /> : <MobileIconBars />}
                </MobileIcon>
                <NavMenu onClick={handleClickMenu} click={clickMenu}>
                    <NavItem>
                        <NavLinks to='/'>Início</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/jogos'>Jogos</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/noticias'>Notícias</NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {props.isDarkTheme
                            ? <ThemeButton onClick={changeTheme}><LightIcon /></ThemeButton>
                            : <ThemeButton onClick={changeTheme}><DarkIcon /> </ThemeButton>
                        }
                    </NavItemBtn>
                </NavMenu>
            </NavbarContainer>
        </Nav>
    )
}

export default Navbar

