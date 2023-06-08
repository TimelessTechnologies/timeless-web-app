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
const HeaderWrapper = styled.div`
  margin-top: 50px;
  align-items: center;
  display: flex;
  justify-content: space-between;
`
const Header = styled.div`
  color: #1a4c1d;
  font-size: 25px;
  font-weight: 700;

  @media ${device.sm} {
    color: #1a4c1d;
    font-size: 25px;
    font-weight: 700;
  }

  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    width: 80%;
    float: left;
  }

  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    width: 80%;
    float: left;
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
    width: 48%;
    float: left;
    font-size: 16px;
    text-align: justify;
    padding-right: 2%;
  }
  @media ${device.xl} {
    color: #1a4c1d;
    width: 48%;
    float: left;
    font-size: 16px;
    text-align: justify;
    padding-right: 2%;
  }
`
const OrderButton = styled(Link)`
  font-size: 20px;
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

const Image = styled.img`
  width: 100%;

  @media ${device.sm} {
    width: 100%;
  };

  @media ${device.lg} {
    width: 50%;
  };

  @media ${device.xl} {
    width: 50%;
  };

`

export default function ServiceItems() {


  return <Wrapper>
    <HeaderWrapper>
      <Header>
        Point-to-point WAN
      </Header>
      <OrderButton to={`/quote-request`} state={{ service: 'Point-to-point WAN' }}>Request Quote</OrderButton>
    </HeaderWrapper>
    <Divider />
    <div>
      <Intro>
        In a point-to-point WAN environment, two LANs or end nodes are
        connected through a dedicated and secure line. Modern enterprises
        also use this type of WAN to enable secure and customized network
        performance between two locations. Each of the two end nodes is
        further connected to multiple devices to create a local area network.
        <br />
        A Point to Point Connection is a private data connection securely
        connecting two or more locations for private data services. A point
        to point connection is a closed network data transport service which
        does not traverse the public Internet and is inherently secure with no
        data encryption needed.
        <br />
        A point to point connection provides unparalleled
        quality of service (QoS) as it is not a shared service (a private line) and
        follows the same direct network path every time. Circuits are used by businesses
        to provide reliable, secure point to point network data service for applications
        including credit card processing, file sharing, data backup, VOIP, and video
        conferencing. A point to point network can also be configured to carry voice,
        video, Internet, and data services together over the same point to point connection.
      </Intro>
      <Image width="50%" src='https://reviews.rulancreative.co.zw/wp-content/uploads/2023/05/ptpwan.png' />
    </div>
  </Wrapper>
}