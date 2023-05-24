import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";
import { device } from "../helpers/mediaQueries"

const OuterWrapper = styled.div`
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: right center;
`

const InnerWrapper = styled.div`
   paddingBottom: 80px;
   paddingTop: 80px;
   color: #fff;
   display: grid;

   @media ${device.sm} {
    paddingBottom: 80px;
    paddingTop: 80px;
    width: 700px;
    color: #fff;
  }

  @media ${device.lg} {
    paddingBottom: 80px;
    paddingTop: 80px;
    color: #fff;
  }

  @media ${device.xl} {
    paddingBottom: 80px;
    paddingTop: 80px;
    width: 700px;
    color: #fff;
  }
`

const Wrapper = styled.div`
  padding: 30px;
  margin: 0 auto;
  display: flex;
  height: 100%;
  justify-content: space-between;

  @media ${device.sm} {
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
  }

  @media ${device.lg} {
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: center;
  }

  @media ${device.xl} {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    width: 1200px;
    height: 100%;
    justify-content: center;
  }
`

const LearnMoreButton = styled.button`
  border-radius: 80px;
  width: 230px;
  height: 55px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  align-self: center;
  border-width: 0px;
  background: rgb(255,224,0);
  margin-top: 40px;
  justify-self: center;
  background: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%);
`


const PartnershipHeader = styled.h1`
  font-wight: 900;
  font-size: 20px;
  color: white;

  @media ${device.sm} {
    font-wight: 900;
    font-size: 50px;
    color: white;
  }
`
const StyledLink = styled(Link)`
  display: contents;
`

export default function TimelessTechnologyPartner() {

    const data = useStaticQuery(graphql`
        query {
            wpcontent {
                post(id: "cG9zdDoxMTg=") {
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
            <Wrapper>
                <InnerWrapper>
                    <PartnershipHeader dangerouslySetInnerHTML={{ __html: data.wpcontent.post.title }} />
                    <div dangerouslySetInnerHTML={{ __html: data.wpcontent.post.content }} />
                    <StyledLink to={`/timeless-technology`}>
                        <LearnMoreButton>Learn More</LearnMoreButton>
                    </StyledLink>
                </InnerWrapper>
            </Wrapper>
    </OuterWrapper>
}