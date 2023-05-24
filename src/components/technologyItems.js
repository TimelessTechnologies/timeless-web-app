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
  margin-top: 5vh;

  @media ${device.sm} {
    display: grid;
    justify-content: start;
    flex-wrap: wrap;
    margin: 0 auto;
    height: 100%;
    margin-top: 5vh;
  };

  @media ${device.lg} {
    display: grid;
    justify-content: start;
    flex-wrap: wrap;
    margin: 0 10px;
    height: 100%;
  };

  @media ${device.xl} {
    display: grid;
    justify-content: start;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  };
`
const TechnologyItemsWrapper = styled.div`
  
  @media ${device.sm} {
  };  
  @media ${device.lg} {
  };  
  @media ${device.xl} {
  };
`;

const OutterWrapper = styled.div`
  text-decoration: none;
  border: 1px;
  padding: 20px;
  border-radius: 15px;
  &:hover {
    background: rgb(255, 255, 255, 0.6);
  };

  @media ${device.sm} {
    text-decoration: none;
    border: 1px;
    padding: 20px;
    border-radius: 15px;
    &:hover {
      background: rgb(255, 255, 255, 0.6);
    };
  };

  @media ${device.lg} {
    border: 1px;
    &:hover {
      background: rgb(255, 255, 255, 0.6);
    };
  };

  @media ${device.xl} {
    border: 1px;
    &:hover {
      background: rgb(255, 255, 255, 0.6);
    };
  };
`

const TechnologyItem = styled.div`
  
  @media ${device.sm} {
  }; 
  @media ${device.lg} {
  }; 
  @media ${device.xl} {
  };
`;

const TechnologyTitle = styled.h1`
  color: #1a4c1d;
  font-size: 30px;
  
  @media ${device.sm} {
    color: #1a4c1d;
    font-size: 50px;
  };

  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 50px;
  };
  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 50px;
  };
`;

const Header = styled.div`
  color: #1a4c1d;
  font-size: 25px;
  font-weight: 700;

  @media ${device.sm} {
    color: #1a4c1d;
    font-size: 25px;
    font-weight: 700;
  }

  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    margin-top: 50px;
  }

  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    margin-top: 50px;
  }
`;

const Divider = styled.div`
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
  margin-top: 30px;
  margin-bottom: 30px;
  
  @media ${device.sm} {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media ${device.lg} {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media ${device.xl} {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const Intro = styled.div`
  color: #1a4c1d;
  font-size: 15px;
  
  @media ${device.sm} {
    color: #1a4c1d;
    font-size: 25px;
  }
  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 25px;
  }
  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 25px;
  }
`
const TechnologyDescription = styled.div`
  float: left;
  width: 70%;

  @media ${device.sm} {
  };

  @media ${device.lg} {
  };

  @media ${device.xl} {
  };
`

const TechnologyImage = styled.img`
  width: 100%;
  
  @media ${device.sm} {
    width: 20%;
    padding-left: 5%;
    height: fit-content;
  };

  @media ${device.lg} {
    float: left;
    width: 20%;
    padding-left: 5%;
  };

  @media ${device.xl} {
    float: left;
    width: 20%;
    padding-left: 5%;
  };
`;

const TechnologyContent = styled.div`
  display: grid;

  @media ${device.sm} {
    display: flex;
    align-items: center;
  };

  @media ${device.lg} {
    display: flex;
    align-items: center;
  };

  @media ${device.xl} {
    display: flex;
    align-items: center;
  };
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
      We pride ourselves on providing the latest
      and most advanced technology
      <br />to our customers.
    </Header>
    <Divider />
    <Intro>
      Here are some of the technologies we use to ensure you have the best connectivtiy experience
      possible:
    </Intro>
    <TechnologyItemsWrapper>
      {data.wpcontent.technologies.edges.map((technologyItem) => (
        <OutterWrapper key={technologyItem.node.slug}>
          <TechnologyItem>
            <TechnologyTitle>{technologyItem.node.title}</TechnologyTitle>
            <TechnologyContent>
              <TechnologyDescription dangerouslySetInnerHTML={{ __html: technologyItem.node.content }} ></TechnologyDescription>
              <TechnologyImage
                src={technologyItem.node.featuredImage.node.sourceUrl}
                alt="Thumbnail"
              />
            </TechnologyContent>
          </TechnologyItem>
        </OutterWrapper>
      ))}
    </TechnologyItemsWrapper>
  </Wrapper>
}