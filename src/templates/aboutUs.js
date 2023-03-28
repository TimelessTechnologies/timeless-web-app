import React from "react";
import { Link } from "gatsby";
import { CircleArrowDown } from '@styled-icons/fa-solid';
import Layout from "../components/layout";
import FeaturedServices from "../components/featuredServices"
import TimelessTechnologyPartner from "../components/timelessTechnologyPartner"
import BlogItems from '../components/blogItems'
import Seo from "../components/seo";
import styled from "styled-components";

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  padding-bottom: 200px;
  padding-top: 150px;
`

const MainService = styled.div`
  color: #426420;
  font-weight: 400;
  width: 500px;
`
const TagLine = styled.h1`
  font-wight: 900;
  font-size: 50px;
  width: 500px;
`

const TagLineExpanded = styled.div`
  width: 500px;
  font-weight: 200;
  margin-bottom: 200px;
`

const SplashImage = styled.img`
  height: 500px;
`

const ScrollDown = styled(Link)``

const ScrollIcon = styled(CircleArrowDown)`
  color: #1a4c1d;
`

const AboutUs = ({ pageContext }) => (
  <Layout>
    <Seo title={pageContext.title} />

    <Wrapper>
      <div style={{ width: '500px' }}>

        <MainService>* FIBRE INTERNET FOR THE HOME</MainService>

        <TagLine>{pageContext.title}</TagLine>

        <TagLineExpanded dangerouslySetInnerHTML={{ __html: pageContext.content }} />

        <ScrollDown><ScrollIcon size="80" title="Love" /></ScrollDown>

      </div>

      <SplashImage src={pageContext.featuredImage.node.sourceUrl} />

    </Wrapper>

    <FeaturedServices />

    <TimelessTechnologyPartner />

    <BlogItems />

  </Layout>
);

export default AboutUs;