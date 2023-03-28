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

const TechnologyItemsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
`;

const OutterWrapper = styled(Link)`
  text-decoration: none;
  border: 0px;
  padding: 20px;
  &:hover {
    background: rgb(255, 255, 255, 0.6);
  }
`

const TechnologyItem = styled.div`
  width: 250px;
  padding: 16px;
  margin: 16px;
  display: grid;
  justify-content: center;
  text-align: center;
`;

const TechnologyTitle = styled.h1`
  color: #1a4c1d;
  font-size: 50px;
`;

const TechnologyImage = styled.img`
  max-width: 100%;
  width: 250px;
  justify-self: center;
`;

const Header = styled.div`
  color: #1a4c1d;
  font-size: 50px;
  font-weight: 700;
  margin-top: 50px;
`;

const Divider = styled.div`
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
  width: 900px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Intro = styled.div`
  color: #1a4c1d;
  font-size: 25px;
`

export default function TechnologyItems() {


  const data = useStaticQuery(graphql`
        query {
          wpcontent {
            technologies {
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
      we pride ourselves on providing the latest
      and most advanced technology
      <br />to our customers.
    </Header>
    <Divider />
    <Intro>
      Here are some of the technologies we use to ensure you have the best internet experience
      possible:
    </Intro>
    <TechnologyItemsWrapper>
      {data.wpcontent.technologies.edges.map((technologyItem) => (
        <OutterWrapper to={`/technology/${technologyItem.node.slug}`}>
          <TechnologyItem key={technologyItem.node.slug}>
            <TechnologyImage
              src={technologyItem.node.featuredImage.node.sourceUrl}
              alt="Thumbnail"
            />
            <TechnologyTitle>{technologyItem.node.title}</TechnologyTitle>
          </TechnologyItem>
        </OutterWrapper>
      ))}
    </TechnologyItemsWrapper>
  </Wrapper>
}