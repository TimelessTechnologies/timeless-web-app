import React from "react";
import Layout from "../components/layout";
import { Link } from "gatsby";
import styled from "styled-components";
import Seo from "../components/seo";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  padding-top: 100px;
  padding-bottom: 100px;
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
`;

const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background: ${(props) => (props.isCurrentPage ? "#eee" : "white")};
`;

const PageNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
`;

const Card = styled.div`
  display: flex;
  background: #fff;
  margin: 50px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
  }
`

const Image = styled.img`
  width: 250px;
`

const Content = styled.div`
  display: grid;
  padding: 15px;
`
const ReadMore = styled(Link)`
  align-self: end;
  text-decoration: none;
  font-weight: bold;
  color: black;
`
const BlogPostList = ({ pageContext }) => (
  <Layout>
  <Wrapper>
    <Seo title={"Blog"} />
    {pageContext.posts.map((post) => (
      <Card key={post.node.slug}>
      <Image src={post.node.featuredImage.node.sourceUrl} />
      <Content>

      <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
        <small>{post.node.date}</small>
        <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
        <div>
          <ReadMore to={`/post/${post.node.slug}`}>Read more</ReadMore>
        </div>
      </Content>
      </Card>
    ))}
    <Pagination>
      {Array.from({ length: pageContext.numberOfPages }).map((page, index) => (
        <PageNumberWrapper
          key={index}
          isCurrentPage={index + 1 === pageContext.currentPage}
        >
          <PageNumber to={index === 0 ? "/blog" : `/blog/${index + 1}`}>
            {index + 1}
          </PageNumber>
        </PageNumberWrapper>
      ))}
    </Pagination>
    </Wrapper>
  </Layout>
);

export default BlogPostList;