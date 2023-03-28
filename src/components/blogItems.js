import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const OuterWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  color: #1A4C1D;
  padding-bottom: 100px;
`

const Heading = styled.h1`
  font-wight: 900;
  font-size: 50px;
  width: 500px;
`

const BlogItemsWrapper = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const BlogItem = styled(Link)`
  text-decoration: none;
  margin-bottom: 50px;
  color: #000;
  width: 350px;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  transition: 0.3s;
  display: grid;
  &:hover {
    box-shadow: 0 12px 20px 0 rgba(0,0,0,0.2);
  }
`;

const BlogImage = styled.img`
  max-width: 100%;
  height: 300px;
  justify-self: center;
`;

const BlogTitle = styled.div`
  font-weight: 600;
  font-size: 20px;
  color: #fff;
  padding:10px;
  height: 60px;
  background: rgb(29,89,32); 
  background: linear-gradient(90deg, rgba(29,89,32,1) 0%, rgba(255,224,0,1) 100%);
`

export default function BlogItems() {


  const data = useStaticQuery(graphql`
        query {
          wpcontent {
            posts {
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

  return <OuterWrapper>
  <Heading>Latest News</Heading>
  <BlogItemsWrapper>
    {data.wpcontent.posts.edges.map((blogItem) => (
      <BlogItem key={blogItem.node.slug} to={`/post/${blogItem.node.slug}`}>
        <BlogImage
          src={blogItem.node.featuredImage.node.sourceUrl}
          alt="Thumbnail"
        />
        <BlogTitle>
            {blogItem.node.title}
        </BlogTitle>
      </BlogItem>
    ))}
  </BlogItemsWrapper>
  </OuterWrapper>
}