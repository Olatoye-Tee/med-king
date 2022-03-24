import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap, SidebarRoute } from "./SidebarElements";

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="signup" onClick={toggle}>Sign up</SidebarLink>
          <SidebarLink to="about" onClick={toggle}>About</SidebarLink>
          <SidebarLink to="marketplace" onClick={toggle}>Marketplace</SidebarLink>
          <SidebarLink to="contact" onClick={toggle}>Contact</SidebarLink>
          <SidebarLink to="blog" onClick={toggle}>Blog</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Log In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default Sidebar;
