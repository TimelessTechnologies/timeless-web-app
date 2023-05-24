import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { device } from "../helpers/mediaQueries"

const Wrapper = styled.div`
  max-width: 100vw;
  margin: 0 auto;
  display: grid;
  width: 100vw;
  height: 100%;

  @media ${device.sm} {
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    height: 100%;
  }

  @media ${device.lg} {
    max-width: 100vw;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100vw;
    height: 100%;
  }

  @media ${device.xl} {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    width: 1200px;
    height: 100%;
  }
`

const FeaturedPosts = styled.div`
  height: fit-content;

  @media ${device.sm} {
    height: fit-content;
    background: #fff;
  }

  @media ${device.lg} {
    height: fit-content;
    background: #fff;
  }

  @media ${device.xl} {
    height: 300px;
    background: #fff;
  }
`

const ServiceItemsWrapper = styled.div`
  position: absolute;
  zIndex: 3;
  margin-top: -100px;
  display: contents;

  @media ${device.sm} {
    position: absolute;
    zIndex: 3;
    margin-top: -100px;
    display: contents;
  }

  @media ${device.lg} {
    position: absolute;
    zIndex: 3;
    margin-top: -100px;
    display: contents;
  }

  @media ${device.xl} {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    position: absolute;
    zIndex: 3;
    margin-top: -100px;
  }
  
`;

const ServiceItem = styled.div`
  width: 250px;
  height: 250px;
  padding: 20px;
  margin-bottom: 20px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 20px;
  background: #fff;
  display: grid;
  justify-self: center;

  @media ${device.sm} {
    width: 250px;
    height: 250px;
    padding: 20px;
    margin: 16px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 20px;
    background: #fff;
    display: grid;
  }

  @media ${device.lg} {
    width: 250px;
    height: 250px;
    padding: 20px;
    margin: 16px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 20px;
    background: #fff;
    display: grid;
  }

  @media ${device.xl} {
    width: 250px;
    height: 250px;
    padding: 20px;
    margin-right: 16px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 20px;
    background: #fff;
    display: grid;
  }
`;

const MoreServiceItems = styled.a`
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background: #1a4c1d;
  display: grid;
  text-decoration: none;
  color: #fff;

  @media ${device.sm} {
    width: 230px;
    height: 230px;
    padding: 30px;
    margin: 16px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: #1a4c1d;
    display: grid;
    text-decoration: none;
    color: #fff;
  }

  @media ${device.lg} {
    width: 230px;
    height: 230px;
    padding: 30px;
    margin: 16px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: #1a4c1d;
    display: grid;
    text-decoration: none;
    color: #fff;
  }

  @media ${device.xl} {
    width: 230px;
    height: 230px;
    padding: 30px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    background: #1a4c1d;
    display: grid;
    text-decoration: none;
    color: #fff;
  }
`;

const ServiceImage = styled.img`
    max-width: 100%;
    height: 200px;
    justify-self: center;
    width: inherit;
    object-fit: cover;
`;

const ReadMore = styled.a`
  align-self: end;
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: 12px;
  display: grid;
`

export default function ServiceItems() {


  const data = useStaticQuery(graphql`
        query {
          wpcontent {
            tag(id: "dGVybToxOTg=") {
              contentNodes(first: 3) {
                edges {
                  node {
                    id
                    ... on WPGraphQL_Service {
                      id
                      title
                      featuredImage {
                        node {
                          sourceUrl
                          link
                        }
                      }
                      excerpt
                      service {
                        websiteUrl
                      }
                      slug
                    }
                  }
                }
              }
            }
          }
        }
      `)

  return <FeaturedPosts>
    <Wrapper>
      <ServiceItemsWrapper>
        {data.wpcontent.tag.contentNodes.edges.map((serviceItem) => (

          <ReadMore  key={serviceItem.node.slug} to={`${serviceItem.node.service.websiteUrl}`}>
            <ServiceItem>
              <ServiceImage
                src={serviceItem.node.featuredImage.node.sourceUrl}
                alt="Thumbnail"
              />
              <h2>{serviceItem.node.title}</h2>
              {/* <div
              style={{ fontSize: '12px' }}
              dangerouslySetInnerHTML={{ __html: serviceItem.node.excerpt }}
            /> */}

            </ServiceItem>

          </ReadMore>
        ))}
        <MoreServiceItems to={`/internet-services/`}>
          <img src="http://timeless.local/wp-content/uploads/2023/03/Asset-6.png" alt="" />
          <div style={{ fontSize: '40px', fontWeight: 'bold' }}>LETS <br />WORK<br /> TOGETHER</div>
        </MoreServiceItems>
      </ServiceItemsWrapper>
    </Wrapper>
  </FeaturedPosts>
}