import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const SiteInfoWrapper = styled.div`
  margin: auto 0;
`;

const Logo = styled.img`
  height: 50px;
  align-self: center;
`

export default function SiteInfo() {
  const data = useStaticQuery(graphql`
      query {
        wpcontent {
          generalSettings {
            title
          }
        }
      }
    `)

  return <SiteInfoWrapper>
  <Link to="/about-us">
  <Logo
      src="http://timeless.local/wp-content/uploads/2023/03/Logo-e1679823028440.png"
      alt={data.wpcontent.generalSettings.title}
    />
  </Link>
  </SiteInfoWrapper>
}