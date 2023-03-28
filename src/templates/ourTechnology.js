import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { CircleArrowDown } from '@styled-icons/fa-solid';
import Layout from "../components/layout";
import TechnologyItems from "../components/technologyItems";
import PartnerItems from "../components/partnerItems";
import Seo from "../components/seo";

const OuterWrapper = styled.div`
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: 100vw;
  background-size: 100vw;
  margin-top: 40px;
`

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 790px;
  display: grid;
  align-content: end;
  padding-bottom: 40px;
`
const Heading = styled.h1`
  font-wight: 900;
  font-size: 50px;
  width: 500px;
  color: #fff;
`

const Description = styled.div`
  width: 500px;
  font-weight: 400;
  color: #fff;
`

const ScrollDown = styled(Link)``

const ScrollIcon = styled(CircleArrowDown)`
  color: #fff;
`
const ourTechnology = ({ pageContext }) => (

  <Layout>
    <Seo title={pageContext.title} />
    <div>
        <OuterWrapper featuredImage={pageContext.featuredImage.node.sourceUrl} >
            <Wrapper>
                <Heading dangerouslySetInnerHTML={{ __html: pageContext.title }} />
                <Description dangerouslySetInnerHTML={{ __html: pageContext.content }} />
                <ScrollDown><ScrollIcon  size="80" title="Love" /></ScrollDown>
            </Wrapper>
        </OuterWrapper>
    </div>
    <TechnologyItems />
    <PartnerItems />
  </Layout>
);

export default ourTechnology;