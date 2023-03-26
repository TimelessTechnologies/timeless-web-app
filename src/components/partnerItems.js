import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const PartnerItemsWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const PartnerItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  padding: 16px;
  margin: 16px;
`;

const PartnerImage = styled.img`
  max-width: 100%;
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

  return <PartnerItemsWrapper>
    {data.wpcontent.partners.edges.map((partnerItem) => (
      <PartnerItem key={partnerItem.node.slug}>
        <h2>{partnerItem.node.title}</h2>
        <PartnerImage
          src={partnerItem.node.featuredImage.node.sourceUrl}
          alt="Thumbnail"
        />
        <div
          dangerouslySetInnerHTML={{ __html: partnerItem.node.excerpt }}
        />
        <Link to={`/partner/${partnerItem.node.slug}`}>
          Read more
        </Link>
      </PartnerItem>
    ))}
  </PartnerItemsWrapper>
}