import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const ServiceItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const ServiceItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`;

const ServiceImage = styled.img`
  max-width: 100%;
`;

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

  return <ServiceItemsWrapper>
    {data.wpcontent.services.edges.map((serviceItem) => (
      <ServiceItem key={serviceItem.node.slug}>
        <h2>{serviceItem.node.title}</h2>
        <ServiceImage
          src={serviceItem.node.featuredImage.node.sourceUrl}
          alt="Thumbnail"
        />
        <div
          dangerouslySetInnerHTML={{ __html: serviceItem.node.excerpt }}
        />
        <Link to={`/service/${serviceItem.node.slug}`}>
          Read more
        </Link>
      </ServiceItem>
    ))}
  </ServiceItemsWrapper>
}