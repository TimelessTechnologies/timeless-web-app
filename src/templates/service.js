import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { CircleArrowDown } from '@styled-icons/fa-solid';
import { device } from "../helpers/mediaQueries";

const OuterWrapper = styled.div`
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 40px;
  
  @media ${device.sm} {
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 40px;
  }; 
`
const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  align-content: end;
  padding-bottom: 40px;
  background: #FFF;
  background:  rgb(35, 77, 36, 0.5);

  @media ${device.sm} {
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    height: 100vh;
    display: grid;
    align-content: end;
    padding-bottom: 40px;
    background:  none;
  };
`
const Content = styled.div`
  margin: 0 auto;
  display: grid;
  align-content: start;
  padding: 10px;

  @media ${device.sm} {
    max-width: 1200px;
    margin: 0 auto;
    width: 800px;
    display: grid;
    align-content: start;
    padding-bottom: 40px;
  }; 
`
const Heading = styled.h1`
  font-wight: 900;
  font-size: 20px;
  color: #fff;
  padding: 10px;

  @media ${device.sm} {
    font-wight: 900;
    font-size: 50px;
    width: 500px;
    color: #fff;
  }; 
`

const Description = styled.div`
  font-weight: 400;
  color: #000;

  @media ${device.sm} {}; 
`

const ScrollDown = styled.button`
  border: none;
  width: 20px;
  background: none;
  margin: 10px;

  @media ${device.sm} {
    border: none;
    width: fit-content;
    background: none;
  }
`

const ScrollIcon = styled(CircleArrowDown)`
  color: #fff;
  width: 40px;

  @media ${device.sm} {
    color: #fff;
    width: 80px;
  }
`
export default function BlogPost({ pageContext }) {
  const scrollingTop = (event) => {
    window.scrollBy({
      top: 700,
      left: 0,
      behavior: "smooth",
    });
  };
  return <Layout>
    <Seo title={pageContext.title} />
      <OuterWrapper featuredImage={pageContext.featuredImage.node.sourceUrl} >
        <Wrapper>
          <Heading dangerouslySetInnerHTML={{ __html: pageContext.title }} />
          <ScrollDown onClick={scrollingTop}><ScrollIcon title="Love" /></ScrollDown>
        </Wrapper>
      </OuterWrapper>
    <Content>
      <Description dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Content>
  </Layout>
};