import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll';
import { MenuIcon, Nav, NavbarContainer, NavLogoText, NavLogoTextSpan ,NavItem, NavLink, NavLogo, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { ReactComponent as MainLogo } from '../../images/medking-icon.svg';


const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <Nav scrollNav={scrollNav}>
          <NavbarContainer>
            <NavLogo to='/' onClick={toggleHome}>
              <MainLogo />
                <NavLogoText>Med<NavLogoTextSpan>King</NavLogoTextSpan></NavLogoText>
            </NavLogo>
            <MenuIcon onClick={toggle}>
              <FaBars />
            </MenuIcon>
            <NavMenu>
              <NavItem>
                <NavLink to='signup' smooth={true} duration={500} spy={true} exact='true' offset={-80} >Sign up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='about' smooth={true} duration={500} spy={true} exact='true' offset={-80}>About</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='marketplace' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Marketplace</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='contact' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to='blog' smooth={true} duration={500} spy={true} exact='true' offset={-80}>Blog</NavLink>
              </NavItem>
            </NavMenu>
            <NavBtn>
              <NavBtnLink to="/login">Log in</NavBtnLink>
            </NavBtn>
          </NavbarContainer>
        </Nav>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
