import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
`

const PartnerItemsWrapper = styled.div`
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
`;

const OutterWrapper = styled(Link)`
  text-decoration: none;
  border: 0px;
  &:hover {
    background: rgb(255, 255, 255, 0.6);
  }
`

const PartnerItem = styled.div`
  width: 250px;
  padding: 16px;
  margin: 16px;
`;


const PartnerImage = styled.img`
  max-width: 100%;
`;

const Header = styled.div`
  color: #1a4c1d;
  font-size: 50px;
  font-weight: 700;
  margin-top: 50px;
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
                  link
                  featuredImage {
                    node {
                      sourceUrl
                    }
                  }
                  excerpt
                }
              }
            }
          }
        }
      `)

  return <Wrapper>

    <Header>
      Our Parnters and Brands
    </Header>
    <PartnerItemsWrapper>
      {data.wpcontent.partners.edges.map((partnerItem) => (
        <OutterWrapper to={`/partner/${partnerItem.node.slug}`}>
          <PartnerItem key={partnerItem.node.slug}>
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