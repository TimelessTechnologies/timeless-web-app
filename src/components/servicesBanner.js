import React from "react";
import { graphql, Link, useStaticQuery } from "gatsby";
import { CircleArrowDown } from '@styled-icons/fa-solid';
import styled from "styled-components";
import { device } from "../helpers/mediaQueries";

const OuterWrapper = styled.div`
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: 100vw;
  background-size: 100vw;
  
  @media ${device.sm} {
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: 100vw;
    background-size: 100vw;
    margin-top: 40px;
  }
`

const Wrapper = styled.div`
  margin: 0 auto;
  height: 560px;
  display: grid;
  align-content: end;
  padding-bottom: 90px;
  
  @media ${device.sm} {
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    height: 560px;
    display: grid;
    align-content: end;
    padding-bottom: 90px;
  }
`
const Heading = styled.h1`
  font-wight: 900;
  font-size: 50px;
  color: #fff;
  
  @media ${device.sm} {
    font-wight: 900;
    font-size: 50px;
    width: 500px;
    color: #fff;
  }
`

const Description = styled.div`
  font-weight: 200;
  color: #fff;
  
  @media ${device.sm} {
    width: 500px;
    font-weight: 200;
    color: #fff;
  }
`

const ScrollDown = styled(Link)``

const ScrollIcon = styled(CircleArrowDown)`
  color: #fff;
  
  @media ${device.sm} {}
`

export default function ServiceBanner() {

    const data = useStaticQuery(graphql`
        query {
            wpcontent {
                post(id: "cG9zdDoyMDY=") {
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

    return <div>
        <OuterWrapper featuredImage={data.wpcontent.post.featuredImage.node.sourceUrl} >
            <Wrapper>
                <Heading>{data.wpcontent.post.title}</Heading>
                <Description dangerouslySetInnerHTML={{ __html: data.wpcontent.post.content }} />
                <ScrollDown><ScrollIcon  size="80" title="Love" /></ScrollDown>
            </Wrapper>
        </OuterWrapper>
    </div>
}