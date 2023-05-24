import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
  display: grid;
  justify-content: center;
  margin: 20px auto;
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
    margin: 20px 10px;
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
      IP PBX Solution
      <OrderButton to={`/quote-request`} state={{ service: 'IP PBX Solution' }}>Request Quote</OrderButton>
    </Header>
    <Divider />
    <Intro>
      *astTECS is an industry leader in end-to-end unified communication and enterprise mobility products based on Open Source Technology. *astTECS provides a complete suite of Enterprise Telecom Products with multiple deployment options (premise/ cloud / hybrid) as per your business requirement.

      <h4>Key Features</h4>

      Interactive voice response (IVR)
      Built in call recording
      Video conference
      Voicemail to Email
      Distributed office set up
      Call detail report
      Web based receptionist console
      Audio conference bridging
      Seamless integration with CRM, ERP, WhatsApp, SMS & other Applications
      Easy integration with existing PBX
      Customised Solution for SMEs, Healthcare, Hospitality, RealEstate, Banking and many more

      <h4>Interactive Voice Response Solution</h4>

      Custom greetings report
      Call recording
      Multi language voice support
      Built-in conference solutions
      Flexibility to create upto 9 levels and sub levels
      Automate an outbound call campaign
      Web based reporting
      Text to speech
      Support T1, ISDN, analog and SIP/VoIP
      Easily integrate with astTECS's voice analytic tool

      <h4>IP PBX Architecture</h4>

      <img width="100%" src="http://timeless.local/wp-content/uploads/2023/05/ippbx.png" alt="" />
    </Intro>
  </Wrapper>
}