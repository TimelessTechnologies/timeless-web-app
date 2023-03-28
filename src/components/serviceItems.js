import React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import styled from "styled-components";


const Wrapper = styled.div`
  display: grid;
  justify-content: start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
`
const Header = styled.div`
  color: #1a4c1d;
  font-size: 50px;
  font-weight: 700;
  margin-top: 50px;
`;

const Divider = styled.div`
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
  width: 900px;
  margin-top: 30px;
  margin-bottom: 30px;
`;

const Intro = styled.div`
  color: #1a4c1d;
  font-size: 25px;
`

const ServiceItemsWrapper = styled.div`
  display: flex;
  width: inherit;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 40px;
`;

const ServiceItem = styled.div`
  width: 300px;
  border: 1px solid #efefef;
  height: 400px
`;

const CardArticle = styled.article`
  position: absolute;
  left: 50 %;
  top: 50 %;
  left: 50 %;
  width: 350px;
  height: 350px;
  transform: translate(-50 %, -50 %) translateZ(0);
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
  overflow: hidden;
`

const Thumb = styled.div`
  width: auto;
  height: 260px;
  background: url(${props => props.featuredImage}) no-repeat center;
  background-size: fit;
`

const Infos = styled.div`
  width: auto;
  height: 350px;
  position: relative;
  padding: 14px 24px;
  transition: 0.4s 0.15s cubic-bezier(0.17, 0.67, 0.5, 1.03);
  ${ServiceItem}:hover & {
    transform: translateY(-260px);
    background: #fff;
  }
`
const Title = styled.h2`
  position: relative;
  margin: 10px 0;
  letter-spacing: 3px;
  color: #152536;
  font-size: 1rem;
  text-transform: uppercase;
  text-shadow: 0 0 0px #32577f;
`

const Txt = styled.p`
  line-height: 2;
  font-size: 0.95rem;
  color: rgba(21, 37, 54, .7);
  opacity: 0;
  transition: 0.5s 0.25s cubic-bezier(0.17, 0.67, 0.5, 1.03);
  ${ServiceItem}:hover &  {
    opacity: 1;
  }
`


export default function ServiceItems() {


  const data = useStaticQuery(graphql`
        query {
          wpcontent {
            services {
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

  return <Wrapper>

    <Header>
      We are dedicated to providing high-quality
      Internet Services to our customers
    </Header>
    <Divider />
    <Intro>
      At Timeless Technologies, we believe in providing excellent customer service and support. Our
      team of experts is available 24/7 to assist you with any issues or concerns you may have.
    </Intro>
    <ServiceItemsWrapper>
      {data.wpcontent.services.edges.map((serviceItem) => (
        <ServiceItem key={serviceItem.node.slug}>
          <Link to={`/service/${serviceItem.node.slug}`}>
            <CardArticle>
              <Thumb featuredImage={serviceItem.node.featuredImage.node.sourceUrl}></Thumb>
              <Infos>
                <Title>{serviceItem.node.title}</Title>
                <Txt dangerouslySetInnerHTML={{ __html: serviceItem.node.excerpt }} />
              </Infos>
            </CardArticle>
          </Link>
        </ServiceItem>
      ))}
    </ServiceItemsWrapper>
  </Wrapper>
}