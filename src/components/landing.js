import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import styled from "styled-components";
import { CircleArrowDown } from '@styled-icons/fa-solid';
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
    height: 100%;
    display: grid;
    padding-bottom: 50px;
    padding-top: 50px;  
    justify-content: center;

    @media ${device.sm} {
      padding: 30px;
      margin: 0 auto;
      height: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      padding-bottom: 20px;
      padding-top: 50px;  
    }

    @media ${device.lg} {
      margin: 0 auto;
      height: 100%;
      display: flex;
      justify-content: space-between;
      padding-bottom: 200px;
      padding-top: 150px;  
    }

    @media ${device.xl} {
      max-width: 1200px;
      margin: 0 auto;
      width: 1200px;
      height: 100%;
      display: flex;
      justify-content: space-between;
      padding-bottom: 200px;
      padding-top: 150px;  
    }
`

const TagLine = styled.h1`
  font-wight: 900;
  font-size: 35px;
  width: 300px;
  text-align: center;

  @media ${device.sm} {
  font-wight: 900;
  font-size: 50px;
  text-align: left;
  }

  @media ${device.lg} {
  font-wight: 900;
  font-size: 50px;
  width: 500px;
  text-align: left;
  }
`

const InnerWrapper = styled.div`
  width: 300px;

  @media ${device.sm} {
  }

  @media ${device.lg} {
    width: 500px;
  }
`

const TagLineExpanded = styled.div`
  width: 300px;
  font-weight: 200;
  margin-bottom: 50px;
  text-align: center;

@media ${device.sm} {
  font-weight: 200;
  text-align: left;
}

@media ${device.lg} {
  width: 500px;
  font-weight: 200;
  margin-bottom: 200px;
  text-align: left;
}
`

const SplashImage = styled.img`
  height: 350px;
  justify-self: center;

  @media ${device.sm} {
  height: 400px;
}

@media ${device.lg} {
  height: 500px;
}
`

const ScrollDown = styled.button`
  border: none;
  position: absolute;
  bottom: 20px;
  background: none;

@media ${device.sm} {
  border: none;
  position: absolute;
  display: contents;
  bottom: 0px;
}

@media ${device.lg} {
  border: none;
  position: absolute;
  bottom: 50px;
}
`

const ScrollIcon = styled(CircleArrowDown)`
  color:  #1a4c1d;
  width: 40px;

  @media ${device.sm} {
    color:  #1a4c1d;
    width: 80px;
  }
  @media ${device.lg} {
    color:  #1a4c1d;
    width: 80px;
  }
`

export default function Landing() {

  const data = useStaticQuery(graphql`
        query {
            wpcontent {
                post(id: "cG9zdDoxMjI=") {
                    id
                    title
                    content
                    slug
                    excerpt
                    featuredImage {
                      node {
                        sourceUrl
                      }
                    }
                }
            }
        }
      `)


  const scrollingTop = (event) => {
    window.scrollBy({
      top: 500,
      left: 0,
      behavior: "smooth",
    });
  };

  return <Wrapper>
    <InnerWrapper>

      <TagLine>{data.wpcontent.post.title}</TagLine>

      <TagLineExpanded dangerouslySetInnerHTML={{ __html: data.wpcontent.post.content }} />

      <ScrollDown onClick={scrollingTop}><ScrollIcon title="Down Arrow" /></ScrollDown>

    </InnerWrapper>

    <SplashImage src={data.wpcontent.post.featuredImage.node.sourceUrl} />

  </Wrapper>
}