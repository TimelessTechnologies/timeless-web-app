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
        Local Area Network
      </Header>
      <OrderButton to={`/quote-request`} state={{ service: 'Local Area Network' }}>Request Quote</OrderButton>
    </HeaderWrapper>
    <Divider />
    <div>
      <Intro>
        Local Area Network (LAN) connects network devices in
        such a way that personal computers and workstations can share
        data, tools, and programs. The group of computers and devices
        are connected together by a switch, or stack of switches, using
        a private addressing scheme as defined by the TCP/IP protocol.
        Private addresses are unique in relation to other computers on the
        local network. Routers are found at the boundary of a LAN, connecting
        them to the larger WAN.
        <br />
        Data transmits at a very fast rate as the number of computers linked
        is limited. By definition, the connections must be high-speed. LANs
        cover a smaller geographical area and are privately owned. One can use
        it for an office building, home, hospital, school. LAN is easy to design
        and maintain. It covers a short distance, and so the error and noise are
        minimized.
        <br />
        The LAN can be made up of cabling from one room or building to the next.
        It can also be wireless in which access points are used to distribute signal
        to nearby devices to connect wirelessly or it could be a hybrid of cabling and
        wireless. Whatever design you prefer for your organisation, talk to use and
        will assist you accordingly.
      </Intro>
      <Image width="50%" src='https://reviews.rulancreative.co.zw/wp-content/uploads/2023/05/lan.png' />
    </div>
  </Wrapper>
}