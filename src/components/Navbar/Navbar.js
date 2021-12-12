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

const Navbar = ({isDarkTheme, setIsDarkTheme}) => {

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
        setIsDarkTheme(!isDarkTheme)
        localStorage.setItem("theme", !isDarkTheme);
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
                        <NavLinks to='/'>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/games'>Games</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to='/news'>News</NavLinks>
                    </NavItem>
                    <NavItemBtn>
                        {isDarkTheme
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

