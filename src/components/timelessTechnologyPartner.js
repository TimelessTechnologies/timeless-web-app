import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";

const OuterWrapper = styled.div`
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: right center;
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
  background: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%);
`
const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 1200px;
  height: 100%;
  justify-content: space-between;
`

const PartnershipBannerBackground = styled.div`
  background: rgb(26,76,29);
  background: linear-gradient(90deg, rgba(26,76,29,1) 35%, rgba(255,255,255,0) 100%);
`

const PartnershipHeader = styled.h1`
  font-wight: 900;
  font-size: 50px;
  color: white;
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
        <PartnershipBannerBackground>
            <Wrapper>
                <div style={{ paddingBottom: '80px', paddingTop: '80px', width: '700px', color: '#fff'  }}>
                    <PartnershipHeader dangerouslySetInnerHTML={{ __html: data.wpcontent.post.title }} />
                    <div dangerouslySetInnerHTML={{ __html: data.wpcontent.post.content }} />
                    <Link to={`/post/${data.wpcontent.post.slug}`}>
                        <LearnMoreButton>Learn More</LearnMoreButton>
                    </Link>
                </div>
            </Wrapper>
        </PartnershipBannerBackground>
    </OuterWrapper>
}