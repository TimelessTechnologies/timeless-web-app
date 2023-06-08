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
        Multiprotocol Label Switching WAN
      </Header>
      <OrderButton to={`/quote-request`} state={{ service: 'Multiprotocol Label Switching WAN' }}>Request Quote</OrderButton>
    </HeaderWrapper>

    <Divider />
    <div>
      <Intro>
        MPLS VPN WANs are geographically scattered. The enterprise
        WAN itself consists of business site types that must be
        interconnected to enable business. This is a connected collection
        of telecommunication networks that are distributed across a large
        geographic area spanning multiple cities, territories, or nations
        so that the component networks can exchange data within the defined group.
        <br />
        Timeless Technology provides this service through the Multiprotocol Label
        Switching, (MPLS) technology. Multiprotocol Label Switching (MPLS) is a
        mechanism in high-performance telecommunications networks that directs data
        from one network node to the next based on short path labels rather
        than long network addresses, avoiding complex lookups in a routing table.
        It is a mechanism used to transfer data across large data/voice/video networks.
        Each packet entering an MPLS network is labelled with a locally significant
        MPLS label. As the packet passes through the MPLS network, label is replaced
        with another label or stripped off. 
        <br />
        The network distributes information so that each switch knows what it is supposed
        to do if it encounters a particular label by simply looking up the MPLS table. 
        Thus, the router functionality is reduced to switch functionality, 
        speeding up the data transfer significantly.
      </Intro>
      <Image src='https://reviews.rulancreative.co.zw/wp-content/uploads/2023/05/mpls2.png' />
    </div>
  </Wrapper>
}