import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { CircleArrowDown } from '@styled-icons/fa-solid';
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
  height: 100vh;
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
const InnerWrapper = styled.div`
  color: #fff;

  @media ${device.sm} {
    padding-bottom: 80px;
    padding-top: 80px;
    width: 750px;
    color: #fff;
  };
`

const PartnershipBannerBackground = styled.div`
  display: grid;
  align-content: end;
  
    @media ${device.sm} {
      background: #FFF;
      background: linear-gradient(90deg, rgba(237, 237, 237,1) 55%, rgba(255,255,255,0) 100%);
    };
`

const PartnershipHeader = styled.h1`
  font-wight: 900;
  font-size: 30px;
  color: #FFF;
  
  @media ${device.sm} {
    font-wight: 900;
    font-size: 50px;
    color: rgb(35, 77, 36);
  };
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
    color: rgb(35, 77, 36);
    width: 80px;
  }
`
export default function ChooseTimelessTechnology() {
  const scrollingTop = (event) => {
    window.scrollBy({
      top: 700,
      left: 0,
      behavior: "smooth",
    });
  };

  const data = useStaticQuery(graphql`
        query {
            wpcontent {
                post(id: "cG9zdDoyMjQ=") {
                    id
                    title
                    content
                    slug
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                }
            }
        }
      `)

  return <OuterWrapper featuredImage={data.wpcontent.post.featuredImage.node.sourceUrl}>
    <PartnershipBannerBackground>
      <Wrapper>
        <InnerWrapper>
          <PartnershipHeader dangerouslySetInnerHTML={{ __html: data.wpcontent.post.title }} />
          <div dangerouslySetInnerHTML={{ __html: data.wpcontent.post.content }} />
          <ScrollDown onClick={scrollingTop}><ScrollIcon title="Love" /></ScrollDown>
        </InnerWrapper>
      </Wrapper>
    </PartnershipBannerBackground>
  </OuterWrapper>
}