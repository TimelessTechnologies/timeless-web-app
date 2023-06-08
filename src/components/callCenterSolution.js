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
    margin: 20px 10px;
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

export default function ServiceItems() {


  return <Wrapper>
    <Header>
      Call Center Solution
      <OrderButton to={`/quote-request`} state={{ service: 'Call Center Solution' }}>Request Quote</OrderButton>
    </Header>
    <Divider />
    <Intro>
    In this modern environment where businesses are evolving much faster 
    and customer taste is changing at an even faster pace, it is no longer 
    good enough for an organisation to rely solely on a Call Centre. What is
    now needed is a Contact Centre in which customers have a variety of ways to
    engage your organisation. These ways vary from calls, emails, SMS, Social
    Platforms like Whatsapp, Facebook, Linkedin, Instagram among others. 
    This is the transition journey which Timeless Technology is willing and capable to take you through.

      <FeatureWrapper>

        <div>
          <h4>Key Offering</h4>
          <li>Automatic call distribution</li>
          <li>Interactive voice response</li>
          <li>Voice logger</li>
          <li>Voice blasting</li>
          <li>Hosted dialer</li>
          <li>CRM & SMS integration</li>
          <li>WhatsApp integration</li>
          <li>Chat integration</li>
          <li>Multi language support</li>
          <li>Live/current agent monitoring</li>
          <li>Report and campaign statistics</li>
          <li>Voicemail to email</li>
          <li>Missed call alert on agent screen</li>
          <li>Call history search and dial option</li>
          <li>Feedback IVR</li>
          <li>Sticky agent and account based call routing</li>
          <li>Outbound Call Center Suite</li>
        </div>

        <div>
          <h4>Features</h4>
          <li>Manual, progressive & predictive dialling</li>
          <li>Outbound ACD</li>
          <li>Longest idle agent based routing</li>
          <li>Call back scheduling</li>
          <li>Multiple campaign management</li>
          <li>Multiple dialling modes</li>
          <li>Agent inter dialling support</li>
          <li>Call forward and three way conferencing</li>
          <li>DNC list management</li>
          <li>Agent call intervention</li>
          <li>Real time supervision</li>
          <li>Music on hold</li>
          <li>Call transfer</li>
          <li>Call retrieval</li>
        </div>

      </FeatureWrapper>


      *astTECS® predictive dialler effectively integrates all outbound processes
      (Telemarkeitng, Sales, Surveys, Collections) with the life cycle. It precisely
      manages outbound calling to achieve maximum productivity by supporting various
      campaign and list management strategies

      <h4>Inbound Call Center Suite</h4>

      *astTECS® inbound solution can provide substantial improvement to the productivity of your call center. Skill based routing organizes incoming calls and route them to the most appropriate agents

      <FeatureWrapper>
        <div>
          <h5>Features</h5>

          <li>Interactive voice response</li>
          <li>Automatic call distribution</li>
          <li>Skill based routing</li>
          <li>Inbound call pop up</li>
          <li>Most idle agent based routing</li>
          <li>Real time supervision</li>
          <li>Agent call intervention</li>
          <li>Call back scheduling</li>
          <li>Call conferencing</li>
        </div>
        <div>
          <h4>Call Center Analytics:</h4>

          With analytics feature, you get detail reports on
          <li>Agent behaviour</li>
          <li>Outliers detection</li>
          <li>Profiling</li>
          <li>QA conformance</li>
          <li>Gap analysis</li>
        </div>
      </FeatureWrapper>
      <h4>Call Center Solution Dashboard</h4>

      <img width="100%" src="https://reviews.rulancreative.co.zw/wp-content/uploads/2023/05/call_center.png" alt="" />
    </Intro>
  </Wrapper>
}