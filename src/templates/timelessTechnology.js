import React, { useRef } from "react";
import styled from "styled-components";
import { CircleArrowDown } from '@styled-icons/fa-solid';
import Layout from "../components/layout";
import TechnologyItems from "../components/technologyItems";
import PartnerItems from "../components/partnerItems";
import Seo from "../components/seo";
import { device } from "../helpers/mediaQueries";



const OuterWrapper = styled.div`
  display: grid;
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  height: 60vh;

  @media ${device.sm} {
    background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: 100vw;
  margin-top: 40px;
  height: 70vh;
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
    font-wight: 900;
    font-size: 50px;
    width: 500px;
    color: #fff;
    justify-content: start;
  }
`

const Description = styled.div`
  font-weight: 400;
  display: grid;
  margin: 10px;
  font-size: 15px;

  @media ${device.sm} {
    font-weight: 400;
  }
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
export default function OurTechnology({ pageContext }) {
  const targetElement = useRef();
  const scrollingTop = (event) => {
    const elmnt = targetElement;
    elmnt.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "start"
    });
  };
  return <Layout>
    <Seo title={pageContext.title} />
    <div>
      <OuterWrapper featuredImage={pageContext.featuredImage.node.sourceUrl} >
        <Wrapper>
          <Heading dangerouslySetInnerHTML={{ __html: pageContext.title }} />
          <ScrollDown onClick={scrollingTop}><ScrollIcon title="Love" /></ScrollDown>
        </Wrapper>
      </OuterWrapper>
    </div>
    <div ref={targetElement}>
      <Description dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </div>
  </Layout>
};