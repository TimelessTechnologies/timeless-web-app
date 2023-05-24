import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  flex-wrap: wrap;
  margin: 0 auto;
  height: 100%;

  @media ${device.sm} {
    display: grid;
    justify-content: start;
    flex-wrap: wrap;
    margin: 0 auto;
    display: flex;
    height: 100%;
  };

  @media ${device.lg} {
    display: grid;
    justify-content: start;
    flex-wrap: wrap;
    display: flex;
    margin: 0 auto;
    height: 100%;
  }

  @media ${device.xl} {
    display: grid;
    justify-content: start;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  }
`

const PartnerItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
  height: 100%;

@media ${device.sm} {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
};
`;

const OutterWrapper = styled(Link)`
  text-decoration: none;
  display: flex;
  border: 0px;
  &:hover {
    background: rgb(255, 255, 255, 0.6);
  };

  @media ${device.sm} {
    text-decoration: none;
    border: 0px;
    &:hover {
      background: rgb(255, 255, 255, 0.6);
    };
  };
`

const PartnerItem = styled.div`
  width: 150px;
  padding: 16px;
  margin: 16px;
  display: grid;
  justify-content: center;
  align-content: center;
  text-align: center;
  
  @media ${device.sm} {
    width: 150px;
    padding: 16px;
    margin: 16px;
    display: grid;
    justify-content: center;
    text-align: center;
  };
  
  @media ${device.lg} {
    width: 200px;
    padding: 16px;
    margin: 16px;
    display: grid;
    justify-content: center;
    text-align: center;
  };
  
  @media ${device.xl} {
    width: 250px;
    padding: 16px;
    margin: 16px;
    display: grid;
    justify-content: center;
    text-align: center;
  };
`;


const PartnerImage = styled.img`
  max-width: 100%;

  @media ${device.sm} {
    max-width: 100%;
  };
`;

const Header = styled.div`
  color: #1a4c1d;
  font-size: 30px;
  font-weight: 700;
  margin-top: 50px;
  text-align: center;

  @media ${device.sm} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    margin-top: 50px;
    text-align: center;
    width: 100%;
  };

  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    margin-top: 50px;
  };

  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    margin-top: 50px;
  };
`;



export default function PartnerItems() {


  const data = useStaticQuery(graphql`
        query {
          wpcontent {
            partners {
              edges {
                node {
                  content
                  title
                  slug
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  excerpt
                  partner {
                    websiteUrl
                  }
                }
              }
            }
          }
        }
      `)

  return <Wrapper>

    <Header>
      Our Partners and Brands
    </Header>
    <PartnerItemsWrapper>
      {data.wpcontent.partners.edges.map((partnerItem) => (
        <OutterWrapper key={partnerItem.node.slug} href={`https://${partnerItem.node.partner.websiteUrl}`}>
          <PartnerItem>
            <PartnerImage
              src={partnerItem.node.featuredImage.node.sourceUrl}
              alt="Thumbnail"
            />
          </PartnerItem>
        </OutterWrapper>
      ))}
    </PartnerItemsWrapper>
  </Wrapper>
}