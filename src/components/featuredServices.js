import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 1200px;
  height: 100%;
`

const FeaturedPosts = styled.div`
  height: 300px;
  background: #fff;
`

const ServiceItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
  zIndex: 3;
  margin-top: -100px;
`;

const ServiceItem = styled.div`
  width: 250px;
  height: 250px;
  padding: 20px;
  margin-right: 16px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  border-radius: 20px;
  background: #fff;
  display: grid;
`;

const MoreServiceItems = styled(Link)`
  width: 230px;
  height: 230px;
  padding: 30px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  background: #1a4c1d;
  display: grid;
  text-decoration: none;
  color: #fff;
`;

const ServiceImage = styled.img`
  max-width: 100%;
  height: 60px;
  justify-self: center;
`;

const ReadMore = styled(Link)`
  align-self: end;
  text-decoration: none;
  font-weight: bold;
  color: black;
  font-size: 12px;
`

export default function ServiceItems() {


  const data = useStaticQuery(graphql`
        query {
          wpcontent {
            services {
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

  return <FeaturedPosts>
    <Wrapper>
      <ServiceItemsWrapper>
        {data.wpcontent.services.edges.map((serviceItem) => (
          <ServiceItem key={serviceItem.node.slug}>
            <ServiceImage
              src={serviceItem.node.featuredImage.node.sourceUrl}
              alt="Thumbnail"
            />
            <h2>{serviceItem.node.title}</h2>
            <div
              style={{ fontSize: '12px' }}
              dangerouslySetInnerHTML={{ __html: serviceItem.node.excerpt }}
            />
            <ReadMore to={`/service/${serviceItem.node.slug}`}>
              Read more
            </ReadMore>
          </ServiceItem>
        ))}
        <MoreServiceItems to={`/services`}>
          <img src="http://timeless.local/wp-content/uploads/2023/03/Asset-6.png" alt="" />
          <div style={{ fontSize: '40px', fontWeight: 'bold' }}>LETS <br />WORK<br /> TOGETHER</div>
        </MoreServiceItems>
      </ServiceItemsWrapper>
    </Wrapper>
  </FeaturedPosts>
}