import React from "react";
import MainMenu from "./mainMenu";
import MobileMenu from "./mobileMenu";
import Footer from "./footer";
import { device } from "../helpers/mediaQueries"
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, html{
    font-family: 'Montserrat', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
    background: #ededed;
    text-align: justify;
  }
`;

const LayoutWrapper = styled.div`
  margin: 0 auto;
`;

const BodyWrapper =styled.div`
  padding-top: 0px;

  @media ${device.sm} {
    padding-top: 0px;
  }

  @media ${device.lg} {
    padding-top: 100px;
  }
`

const Layout = ({ children }) => (
  <BodyWrapper>
    <GlobalStyles />
    <MainMenu />
    <MobileMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
    <Footer />
  </BodyWrapper>
);

export default Layout;