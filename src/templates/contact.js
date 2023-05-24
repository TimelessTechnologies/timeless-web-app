import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import ContactForm from "../components/contactForm";
import ContactDetails from "../components/contactDetails";
import ChooseTimelessTechnology from "../components/chooseTimelessTechnology";
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
  margin: 0 auto;
  color: #fff;
  
  @media ${device.sm} {
    margin: 0 auto;
    color: #fff;
  };

  @media ${device.lg} {
    margin: 0 auto;
    height: 100%;
    color: #fff;
  };

  @media ${device.xl} {
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
    color: #fff;
  };
`
const Background = styled.div`
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: cover;
  height: 100%;
  padding: 20px;
  
  @media ${device.sm} {
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: cover;
    height: 100%;
    padding: 20px;
  };
  @media ${device.lg} {
    padding: 0px;
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    height: 80vh;
    padding-top: 10vh;
    padding-bottom: 10vh;
  };
  @media ${device.xl} {
    padding: 0px;
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: 100vw 100vh;
    height: 80vh;
    padding-top: 10vh;
    padding-bottom: 10vh;
  };
`

const InnerWrapper = styled.div`
  display: grid;
  
  @media ${device.sm} {
    display: grid;
  };
  @media ${device.lg} {
    display: grid;
  };
  @media ${device.xl} {
    display: flex;
  };
`

const TagLine = styled.h1`
  padding: 20px;
  margin: 0;
  text-align: center;
  
  @media ${device.sm} {
    padding: 20px;
    margin: 0;
  };
  @media ${device.lg} {
    font-wight: 900;
    font-size: 50px;
  };
  @media ${device.xl} {
    font-wight: 900;
    font-size: 50px;
    text-align: start;
  };
`

const Contact = ({ pageContext }) => (
  <Layout>
    <Seo title={pageContext.title} />
    <ChooseTimelessTechnology />
    <Background featuredImage={pageContext.featuredImage.node.sourceUrl}>
      <Wrapper>
        <TagLine dangerouslySetInnerHTML={{ __html: pageContext.title }} />
        <InnerWrapper>
          <ContactForm />
          <ContactDetails />
        </InnerWrapper>
      </Wrapper>
    </Background>
  </Layout>
);

export default Contact;