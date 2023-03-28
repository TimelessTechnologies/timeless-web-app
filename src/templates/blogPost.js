import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  min-height: 100vh;
  padding-top: 100px;
`

const BlogPost = ({ pageContext }) => (
  <Layout>
    <Wrapper>
      <Seo title={pageContext.title} />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }} />
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Wrapper>
  </Layout>
);

export default BlogPost;