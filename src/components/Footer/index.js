import React from "react";
import { FaFacebook } from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  FooterExternalLink,
} from "./FooterElements";

const Footer = () => {
  return (
    <>
      <FooterContainer>
        <FooterWrap>
          {/* this creates the links container */}
          <FooterLinksContainer>
            {/* this grabs several links */}
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterExternalLink
                  href="https://www.google.com"
                  target="_blank"
                >
                  Google
                </FooterExternalLink>
                <FooterLink to="./signin">Testimonials</FooterLink>
                <FooterLink to="./signin">Careers</FooterLink>
                <FooterLink to="./signin">Investors</FooterLink>
                <FooterLink to="./signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterLink to="./signin">How it works</FooterLink>
                <FooterLink to="./signin">Testimonials</FooterLink>
                <FooterLink to="./signin">Careers</FooterLink>
                <FooterLink to="./signin">Investors</FooterLink>
                <FooterLink to="./signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
            {/*  */}
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterLink to="./signin">How it works</FooterLink>
                <FooterLink to="./signin">Testimonials</FooterLink>
                <FooterLink to="./signin">Careers</FooterLink>
                <FooterLink to="./signin">Investors</FooterLink>
                <FooterLink to="./signin">Terms of Service</FooterLink>
              </FooterLinkItems>
              <FooterLinkItems>
                <FooterLinkTitle>About Me</FooterLinkTitle>
                <FooterLink to="./signin">How it works</FooterLink>
                <FooterLink to="./signin">Testimonials</FooterLink>
                <FooterLink to="./signin">Careers</FooterLink>
                <FooterLink to="./signin">Investors</FooterLink>
                <FooterLink to="./signin">Terms of Service</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
          <SocialMedia>
            <SocaialMediaWrap>
              <SocialLogo to="/">Back to the top</SocialLogo>
              <WebsiteRights>
                rob campbell. {new Date().getFullYear()}
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Github">
                  <FaFacebook />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>

                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaFacebook />
                </SocialIconLink>
              </SocialIcons>
            </SocaialMediaWrap>
          </SocialMedia>
        </FooterWrap>
      </FooterContainer>
    </>
  );
};

export default Footer;
