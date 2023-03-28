import React from "react";
import Layout from "../components/layout";
import styled from "styled-components";
import Seo from "../components/seo";


const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  width: 1200px;
  height: 100%;
`

const FeaturedImage = styled.img`
  max-width: 1200px;
  margin: 16px 0;
`;

const service = ({ pageContext }) => (
  <Layout>
  <Wrapper>
    <Seo title={pageContext.title} />
    <h1>{pageContext.title}</h1>
    <div>
      <FeaturedImage src={pageContext.featuredImage.node.sourceUrl} />
    </div>
    <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Wrapper>
  </Layout>
);

export default service;