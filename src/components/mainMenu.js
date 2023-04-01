import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import SiteInfo from "./siteInfo";
import { device } from "../helpers/mediaQueries"

const MainMenuWrapper = styled.div`
  display: none;

  @media ${device.sm} {
    display: flex;
  }
`;

const MainMenuInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 1200px;
  height: 100%;
`;

const MenuItems = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 1200px;
  height: 100%;
  align-self: center;
  font-weight: 500;
`;

const MenuItem = styled(Link)`
  display: block;
  padding: 16px 16px;
  text-decoration: none;
  color: black;
`;

const LoginInButton = styled.button`
  border-radius: 80px;
  width: 130px;
  height: 40px;
  font-family: 'Montserrat', sans-serif;
  align-self: center;
  border-width: 1px;
`

export default function MainMenu() {
  const data = useStaticQuery(graphql`
    query {
        wpcontent {
          menus(where: { slug: "main-menu" }) {
            nodes {
              menuItems {
                edges {
                  node {
                    url
                    description
                    label
                    path
                  }
                }
              }
            }
          }
        }
      }
    `)


  return <MainMenuWrapper>
    <MainMenuInner>
      <div style={{ marginRight: '50px' }}><SiteInfo /></div>
      <MenuItems>
        {data.wpcontent.menus.nodes[0].menuItems.edges.map((item) => (
          <MenuItem to={`${item.node.path}`} key={item.node.label}>
            {item.node.label}
          </MenuItem>
        ))}
      </MenuItems>
      <LoginInButton>Login</LoginInButton>
    </MainMenuInner>
  </MainMenuWrapper>

}

