import React from "react";
import MainMenu from "./mainMenu";
import Footer from "./footer";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body, html{
    font-family: 'Montserrat', sans-serif;
    margin: 0 !important;
    padding: 0 !important;
    background: #ededed;
  }
`;

const LayoutWrapper = styled.div`
  margin: 0 auto;
`;

const BodyWrapper =styled.div`
  padding-top: 100px;
`

const Layout = ({ children }) => (
  <BodyWrapper>
    <GlobalStyles />
    <MainMenu />
    <LayoutWrapper>{children}</LayoutWrapper>
    <Footer />
  </BodyWrapper>
);

export default Layout;