import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  padding-top: 50px;
  padding-bottom: 100px;

  @media ${device.sm} {  
    margin: 0 auto;
    height: 100%;
    padding-top: 50px;
    padding-bottom: 100px;
  };

  @media ${device.lg} {
    margin: 0 auto;
    height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
  };

  @media ${device.xl} {
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    padding-top: 100px;
    padding-bottom: 100px;
  };
`

const Pagination = styled.div`
  display: flex;
  justify-content: center;
  @media ${device.sm} {
    display: flex;
    justify-content: center;
  };
`;

const PageNumberWrapper = styled.div`
  border: 1px solid #eee;
  background: ${(props) => (props.isCurrentPage ? "#eee" : "white")};
  @media ${device.sm} {
    border: 1px solid #eee;
    background: ${(props) => (props.isCurrentPage ? "#eee" : "white")};
  };
`;

const PageNumber = styled(Link)`
  display: block;
  padding: 8px 16px;
  text-decoration: none;
  @media ${device.sm} {
    display: block;
    padding: 8px 16px;
    text-decoration: none;
  };
`;

const Card = styled.div`
  display: grid;
  background: #fff;
  margin: 10px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
  };
  @media ${device.sm} {
    display: flex;
    background: #fff;
    height: 250px;
    margin: 50px;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    &:hover {
      box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
    };
    height: fit-content;
  };
`

const Image = styled.img`
  float: left;
  width:  100%;
  height: 250px;
  object-fit: cover;
  @media ${device.sm} {
    float: left;
    width:  250px;
    height: 250px;
    object-fit: cover;
  };
`

const Content = styled.div`
  display: grid;
  padding: 15px;
  @media ${device.sm} {
    display: grid;
    padding: 15px;
  };
`
const ReadMore = styled(Link)`
  align-self: end;
  text-decoration: none;
  color: black;
  @media ${device.sm} {
    align-self: end;
    text-decoration: none;
    color: black;
  };
`

const Header = styled.h1`
  font-wight: 900;
  font-size: 30px;
  margin: 10px;
  @media ${device.sm} {
    font-wight: 900;
    font-size: 50px;
    width: 500px;
  };
`
const getMonthName = (num) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Oct', 'Nov', 'Dec'];
  return months[num];
};

const formatDate = (d) => {
  const date = new Date(d);
  const year = date.getFullYear();
  const month = getMonthName(date.getMonth());
  const day = ('0' + date.getDate()).slice(-2);
  const hour = ('0' + date.getHours()).slice(-2);
  const minutes = ('0' + date.getMinutes()).slice(-2);

  return `${year} ${month} ${day}, ${hour}:${minutes}`;
};

const Blog = ({ pageContext }) => (
  <Layout>
    <Wrapper>
      <Seo title={"Blog"} />
      <Header>Blog Posts</Header>
      {pageContext.posts.map((post) => (
        <ReadMore key={post.node.slug} to={`/post/${post.node.slug}`}>
          <Card>
            <Image src={post.node.featuredImage.node.sourceUrl} />
            <Content>
              <h3 dangerouslySetInnerHTML={{ __html: post.node.title }} />
              <small>{formatDate(post.node.date)}</small>
              <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }} />
            </Content>
          </Card>
        </ReadMore>
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

export default Blog;