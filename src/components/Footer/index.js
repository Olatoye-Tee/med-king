import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrapper, FooterLinksContainer, FooterLinksWrapper, FooterLinkItems, FooterLinkTitle, FooterLink, SocialMedia, SocialMediaWrapper, SocialLogo, WebsiteRights, SocialIcons, SocialIconLink } from './FooterElements';
import { ReactComponent as MainLogo } from '../../images/medking-icon2.svg';
import { FooterLogoText, FooterLogoTextSpan } from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterLinksContainer>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Product</FooterLinkTitle>
              <FooterLink to='/'>Newsletter</FooterLink>
              <FooterLink to='/'>FAQ'S</FooterLink>
              <FooterLink to='/'>Our Agents</FooterLink>
              <FooterLink to='/'>Blog</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Resources</FooterLinkTitle>
              <FooterLink to='/'>Our Team</FooterLink>
              <FooterLink to='/'>Member Stories</FooterLink>
              <FooterLink to='/'>Video</FooterLink>
              <FooterLink to='/'>Promos</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Company</FooterLinkTitle>
              <FooterLink to='/'>Partnerships</FooterLink>
              <FooterLink to='/'>Terms of use</FooterLink>
              <FooterLink to='/'>Privacy</FooterLink>
              <FooterLink to='/'>Contact us</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
              <FooterLinkTitle>Support</FooterLinkTitle>
              <FooterLink to='/'>Get in touch with our support center</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>

        </FooterLinksContainer>

        <SocialMedia>
          <SocialMediaWrapper>
            <SocialLogo to='/' onClick={toggleHome}>
            <MainLogo color='#023AFF' />
                <FooterLogoText>Med<FooterLogoTextSpan>King</FooterLogoTextSpan></FooterLogoText>
            </SocialLogo>
            <WebsiteRights>MedKing © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrapper>
        </SocialMedia>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;
