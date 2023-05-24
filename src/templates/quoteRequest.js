import React from "react";
import styled from "styled-components";
import Layout from "../components/layout";
import Seo from "../components/seo";
import QuoteRequestForm from "../components/quoteRequestForm";
import { CircleArrowDown } from '@styled-icons/fa-solid';
import { device } from "../helpers/mediaQueries";

const OuterWrapper = styled.div`
  display: grid;
  background-image: url(${props => props.featuredImage});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  margin-top: 20px;
  height: 40vh;
  background-color: rgba(35,77,36,.5);
  background-blend-mode: multiply;

  @media ${device.sm} {
    display: grid;
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    margin-top: 20px;
    height: 40vh;
    background-color: rgba(35,77,36,.5);
    background-blend-mode: multiply;
  }

  @media ${device.lg} {
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: 100vw;
    margin-top: 40px;
    height: 70vh;
    background-color: rgba(35,77,36,.5);
    background-blend-mode: multiply;
    justify-content: center;
  }

  @media ${device.xl} {
    background-image: url(${props => props.featuredImage});
    background-repeat: no-repeat;
    background-size: 100vw;
    margin-top: 40px;
    height: 70vh;
    background-color: rgba(35,77,36,.5);
    background-blend-mode: multiply;
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
    margin: 0 auto;
    display: grid;
    align-content: end;
    padding-bottom: 20px;
    margin: 10px;
    margin-bottom: 0;
  }
  @media ${device.lg} {
    margin: 0 auto;
    display: grid;
    align-content: end;
    padding-bottom: 40px;
  }
  @media ${device.xl} {
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    display: grid;
    align-content: end;
    padding-bottom: 40px;
  }
`
const Heading = styled.h1`
  display: grid;
  font-wight: 900;
  font-size: 30px;
  color: #fff;
  margin: 10px;

  @media ${device.sm} {
    display: grid;
    font-wight: 900;
    font-size: 30px;
    color: #fff;
    margin: 10px;
  }
  @media ${device.lg} {
    font-wight: 900;
    font-size: 50px;
    width: 500px;
    color: #fff;
  }
  @media ${device.xl} {
    font-wight: 900;
    font-size: 50px;
    width: 500px;
    color: #fff;
  }
`

const Description = styled.div`
  font-weight: 400;
  display: grid;
  margin: 10px;
  font-size: 15px;

@media ${device.sm} {
  font-weight: 400;
  display: grid;
  margin: 10px;
  font-size: 15px;
}

@media ${device.lg} {
  width: 500px;
  font-weight: 400;
}

@media ${device.xl} {
  width: 500px;
  font-weight: 400;
}
`

const ScrollDown = styled.button`
  border: none;
  width: 20px;
  background: none;
  margin: 10px;

@media ${device.sm} {
  border: none;
  width: 20px;
  background: none;
  margin: 10px;
}

@media ${device.lg} {
  border: none;
  width: fit-content;
  background: none;
}

@media ${device.xl} {
  border: none;
  width: fit-content;
  background: none;
}
`

const ScrollIcon = styled(CircleArrowDown)`
  color: #fff;
  width: 40px;

  @media ${device.sm} {
  color: #fff;
  width: 40px;
  }
  @media ${device.lg} {
    color: #fff;
    width: 80px;
  }
  @media ${device.xl} {
    color: #fff;
    width: 80px;
  }
`

const Content = styled.div`
  margin: 0 auto;
  display: grid;
  align-content: start;
  padding: 10px;
  justify-content: center;

  @media ${device.sm} {
    margin: 0 auto;
    display: grid;
    align-content: start;
    padding-bottom: 40px;
  };

  @media ${device.lg} {
    margin: 0 auto;
    display: grid;
    align-content: start;
    padding-bottom: 40px;
  };

  @media ${device.xl} {
    max-width: 1200px;
    margin: 0 auto;
    width: 800px;
    display: grid;
    align-content: start;
    padding-bottom: 40px;
  }; 
`
export default function BlogPost({ pageContext, location }) {
  const { state = {} } = location
  const { service } = state

  const scrollingTop = (event) => {
    window.scrollBy({
      top: 700,
      left: 0,
      behavior: "smooth",
    });
  };
  
  return <Layout>
    <Seo title={pageContext.title} />
      <OuterWrapper featuredImage={pageContext.featuredImage.node.sourceUrl} >
        <Wrapper>
          <Heading dangerouslySetInnerHTML={{ __html: pageContext.title }} />
          <ScrollDown onClick={scrollingTop}><ScrollIcon title="Love" /></ScrollDown>
        </Wrapper>
      </OuterWrapper>
    <Content>
      <Description dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Content>
    <QuoteRequestForm service={service ? service : ''}/>
  </Layout>
};