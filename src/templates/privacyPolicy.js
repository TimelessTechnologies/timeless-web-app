import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import { device } from "../helpers/mediaQueries";

const OuterWrapper = styled.div`
  display: grid;
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  background-color: rgba(35,77,36,.5);
  background-blend-mode: multiply;

  @media ${device.sm} {
    display: grid;
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    background-color: rgba(35,77,36,.5);
    background-blend-mode: multiply;
  }

  @media ${device.lg} {
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: 100vw;
    margin-top: 40px;
    background-color: rgba(35,77,36,.5);
    background-blend-mode: multiply;
    justify-content: center;
  }

  @media ${device.xl} {
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: 100vw;
    margin-top: 40px;
    height: 70vh;
    background-color: rgba(35,77,36,.5);
    background-blend-mode: multiply;
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  display: grid;
  align-content: end;
  padding-bottom: 20px;
  margin: 10px;
  margin-bottom: 0;

  @media ${device.sm} {
    margin: 0 auto;
    display: grid;
    align-content: end;
    padding-bottom: 20px;
    margin: 10px;
    margin-bottom: 0;
  }
  @media ${device.lg} {
    margin: 0 auto;
    display: grid;
    align-content: end;
    padding-bottom: 40px;
  }
  @media ${device.xl} {
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    display: grid;
    align-content: end;
    padding-bottom: 40px;
  }
`
const Heading = styled.h1`
  display: grid;
  font-wight: 900;
  font-size: 30px;
  color: #fff;
  margin: 10px;

  @media ${device.sm} {
    display: grid;
    font-wight: 900;
    font-size: 30px;
    color: #fff;
    margin: 10px;
  }
  @media ${device.lg} {
    font-wight: 900;
    font-size: 50px;
    width: 500px;
    color: #fff;
  }
  @media ${device.xl} {
    font-wight: 900;
    font-size: 50px;
    width: 500px;
    color: #fff;
  }
`

const Description = styled.div`
  font-weight: 400;
  color: #fff;
  display: grid;
  margin: 10px;
  font-size: 15px;

@media ${device.sm} {
  font-weight: 400;
  color: #fff;
  display: grid;
  margin: 10px;
  font-size: 15px;
}

@media ${device.lg} {
  width: 500px;
  font-weight: 400;
  color: #fff;
}

@media ${device.xl} {
  width: 500px;
  font-weight: 400;
  color: #fff;
}
`


export default function OurServices({ pageContext }) {

  return (
    <Layout>
      <Seo title={pageContext.title} />
      <OuterWrapper>
        <Wrapper>
          <Heading dangerouslySetInnerHTML={{ __html: pageContext.title }} />
          <Description dangerouslySetInnerHTML={{ __html: pageContext.content }} ></Description>
        </Wrapper>
      </OuterWrapper>
    </Layout>
  )
};
