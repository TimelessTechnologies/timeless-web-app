import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../helpers/mediaQueries";


const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  margin: 20px;

  @media ${device.sm} {
    display: grid;
    justify-content: center;
    margin: 0 auto;
    height: 100%;
    margin: 20px;
  }
  @media ${device.lg} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    float: left;
    padding: 5vw;
  }
  @media ${device.xl} {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 0 auto;
    height: 100%;
    float: left;
    padding: 5vw;
  }
`
const Header = styled.div`
  color: #1a4c1d;
  font-size: 25px;
  font-weight: 700;
  display: grid;
  align-items: center;

  @media ${device.sm} {
    color: #1a4c1d;
    font-size: 25px;
    font-weight: 700;
    display: flex;
    justify-content: space-between
  }

  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 30px;
    font-weight: 700;
    margin-top: 50px;
  }

  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 30px;
    font-weight: 700;
    margin-top: 50px;
  }
`;

const Divider = styled.div`
  border-width: 1px;
  border-style: solid;
  border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
  margin-top: 30px;
  margin-bottom: 30px;
  
  @media ${device.sm} {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media ${device.lg} {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media ${device.xl} {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const OrderButton = styled(Link)`
  font-size: 15px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  align-self: center;
  border-width: 0px;
  background: rgb(255,224,0);
  justify-self: center;
  background: #5A7B20;
  padding: 5px 5px;
  text-transform: uppercase;
  letter-spacing: 2.5px;
  font-weight: 500;
  border: none;
  border-radius: 5px;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;
  margin: 5px;
  &:hover {
    color: rgb(35, 71, 36, 1);
    background-color: #FFF;
    box-shadow: 0px 15px 20px rgba(35, 71, 36, 1, 0.4);
    transform: translateY(-7px);
  };
  text-decoration: none;
`


const Intro = styled.ul`
  color: #1a4c1d;
  font-size: 15px;
  
  @media ${device.sm} {
    color: #1a4c1d;
    font-size: 15px;
  }
  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 25px;
  }
  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 25px;
  }
`

const ItemWrapper = styled.div`
  width: 100%;
  margin-bottom: 20px;
  
  @media ${device.sm} {
    width: 100%;
  }
  @media ${device.lg} {
    width: 40%;
  }
  @media ${device.xl} {
    
  }
`

export default function ServiceItems() {


  return <Wrapper>
    <ItemWrapper>
      <Header>
        <div>Governance</div>
        <OrderButton to={`/quote-request`} state={{ service: 'Governance' }}>Request Quote</OrderButton>
      </Header>
      <Divider />
      <Intro>
        <li>Policy Development and Review</li>
        <ul>
          <li>Information Security Policy</li>
          <li>Business Continuity Policy</li>
          <li>Disaster Recovery Policy</li>
          <li>Cyber Strategy</li>
        </ul>
        <li>Policy Review</li>
        <li>IT Framework Implementation</li>
        <li>Cyber Risk Governance</li>
      </Intro>
    </ItemWrapper>

    <ItemWrapper>
      <Header>
        Risk
        <OrderButton to={`/quote-request`} state={{ service: 'Risk' }}>Request Quote</OrderButton>
      </Header>
      <Divider />
      <Intro>
        <li>IT Audits</li>
        <li>Information Security posture assessments</li>
        <li>Vulnerability Assessments</li>
        <li>Penetration Testing</li>
        <li>Fraud Assessment</li>
        <li>Digital Forensics</li>
        <li>Incidence Response</li>
      </Intro>
    </ItemWrapper>

    <ItemWrapper>
      <Header>
        Compliance
        <OrderButton to={`/quote-request`} state={{ service: 'Compliance' }}>Request Quote</OrderButton>
      </Header>
      <Divider />
      <Intro>
        <li>IT Audits</li>
        <li>Threat and Vulnerability Management</li>
        <li>Virtual CISO</li>
        <li>ISMS</li>
      </Intro>
    </ItemWrapper>

    <ItemWrapper>
      <Header>
        Advisory
        <OrderButton to={`/quote-request`} state={{ service: 'Advisory' }}>Request Quote</OrderButton>
      </Header>
      <Divider />
      <Intro>
        <li>ICT Strategy Development and Reviews</li>
        <li>Project Management</li>
        <li>Training and Awareness</li>
        <li>Service Management</li>
        <li>Technology Roadmap</li>
        <li>Security Design</li>
      </Intro>
    </ItemWrapper>

    <ItemWrapper>
      <Header>
        Digital Transformation
        <OrderButton to={`/quote-request`} state={{ service: 'Digital Transformation' }}>Request Quote</OrderButton>
      </Header>
      <Divider />
      <Intro>
        <li>Virtual CISO</li>
        <li>Cutting Edge Technology Implementation</li>
        <li>Digital Marketing</li>
      </Intro>
    </ItemWrapper>
  </Wrapper>
}