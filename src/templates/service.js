import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Seo from "../components/seo";

const FeaturedImage = styled.img`
  max-width: 300px;
  margin: 16px 0;
`;

const service = ({ pageContext }) => (
  <Layout>
    <Seo title={pageContext.title} />
    <h1>{pageContext.title}</h1>
    <strong>Website url:</strong>
    <a
      href={pageContext.service.serviceUrl}
      target="_blank"
      rel="noopener noreferrer"
    >
      {pageContext.service.serviceUrl}
    </a>
    <div>
      <FeaturedImage src={pageContext.featuredImage.node.sourceUrl} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
  </Layout>
);

export default service;