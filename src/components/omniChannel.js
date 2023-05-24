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
    justify-content: start;
    flex-wrap: wrap;
    margin: 0 10px;
    height: 100%;
  }
  @media ${device.lg} {
    display: grid;
    justify-content: start;
    flex-wrap: wrap;
    margin: 0 10px;
    height: 100%;
  }
  @media ${device.xl} {
    display: grid;
    justify-content: start;
    flex-wrap: wrap;
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
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
    justify-content: space-between;
    display: flex;
  }
  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    margin-top: 50px;
  }
  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 50px;
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

const Intro = styled.div`
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

const FeatureWrapper = styled.div`
  display: grid;
  margin-bottom: 5vh;
  justify-content: space-around;

  @media ${device.sm} {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 5vh;
    justify-content: space-around;
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


const OrderButton = styled(Link)`
  font-size: 20px;
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
  text-decoration: none;  width: 100%;

  @media ${device.sm} {
    width: 30%;
  }

  @media ${device.lg} {
    width: 20%;
  }

  @media ${device.xl} {
  }
`

const Feature = styled.div`
  padding-right: 2vh;
  text-align: center;

  @media ${device.sm} {
    width: 30%;
    padding-right: 2vh;
    text-align: center;
  }

  @media ${device.lg} {
    width: 38%;
  }
  
  @media ${device.xl} {
  }

`

export default function ServiceItems() {


  return <Wrapper>
    <Header>
      Omni-Channel Solution
      <OrderButton to={`/quote-request`} state={{ service: 'Omni-Channel Solution' }}>Request Quote</OrderButton>
    </Header>
    <Divider />
    <Intro>
      *astTECS Omni-Channel is an integrated suite of intelligent, intuitive,
      solutions that allow you to engage with customers and prospects on their
      channel of choice. Provide seamless customer experience across any preferred
      channels – Voice, E-mail, SMS, Social-media

      *astTECS Omni-Channel solution allows your customer to communicate with the
      agent on any preferred channel. It helps to enhance the customer experience by
      providing them with comprehensive access to various available channels like voice,
      char, email, SMS & social media in a single interface.

      <FeatureWrapper>
        <Feature>
          <h4>All channels in a single interface</h4>
          Enable personalised customer experience by interacting with customers across their
          preferred communication channel. It increases agents’ productivity by enable them to engage
          in multiple channels simultaneously and view all the channels on a single interface
        </Feature>
        <Feature>
          <h4>Improved Efficiency</h4>

          Omni-channel solution intelligently route the incoming interaction from different
          channels to the right agent for quick resolution, thus improve the agentn’s efficiciency
        </Feature>
        <Feature>
          <h4>Real-time Monitoring</h4>

          Tracking live and historical customer interaction helps the supervisors to better
          understand their customers, measure department and individual agent efficiency. It
          helps to get a detailed overview of which channel is performing better and most utilised
        </Feature>
        <Feature>
          <h4>Omni-channel experience</h4>
          With an Omni channel presence, agents can seamlessly switch between channels while
          resolving customer queries. Agent can easily access the customer’s details and
          interaction history across various channels and quick resolution
        </Feature>
        <Feature>
          <h4>CRM Integrations</h4>

          *astTECS Omni-channel solution can integrate with various CRM software and other
          legacy systems. The integration enables the agent to access customer information and
          ensures improved customer experience and effective communication
        </Feature>
      </FeatureWrapper>

      <h4>Omni Channel Workflow</h4>

      <img width="100%" src="http://timeless.local/wp-content/uploads/2023/05/omni_channel.png" alt="" />

    </Intro>
  </Wrapper>
}