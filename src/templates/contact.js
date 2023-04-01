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
    display: flex;
  };
`

const TagLine = styled.h1`
  padding: 20px;
  margin: 0;
  
  @media ${device.sm} {
    font-wight: 900;
    font-size: 50px;
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