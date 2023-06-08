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
    margin-top: 50px;
  }
  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 50px;
    font-weight: 700;
    margin-top: 50px;
  }
`;

const Table = styled.table` {
    font-family: arial, sans-serif;
    border-collapse: collapse;
    width: 100%;
  }`;

const Td = styled.td` {
    border: 1px solid #dddddd;
    text-align: center;
    padding: 8px;
    width: 20%;
  }`;

const Th = styled.th` {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 15px;
    background-color: #5A7B20;
    color: #fff;
    text-align: center;
  }`;

const Tr = styled.tr`
  :nth-child(even){
    background-color: #dddddd;
  }
  :nth-child(odd){
    color: #1a4c1d;
  }`;

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
    width: 900px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
  @media ${device.xl} {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
    width: 900px;
    margin-top: 30px;
    margin-bottom: 30px;
  }
`;

const Intro = styled.div`
  color: #1a4c1d;
  
  @media ${device.sm} {
    color: #1a4c1d;
  }
  @media ${device.lg} {
    color: #1a4c1d;
  }
  @media ${device.xl} {
    color: #1a4c1d;
  }
`

const ServiceItemsWrapper = styled.div`
  display: grid;
  justify-self: center;
  margin-top: 40px;
  
  @media ${device.sm} {
    display: grid;
    justify-self: center;
    margin-top: 40px;
  }

  @media ${device.lg} {
    display: flex;
    width: inherit;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  @media ${device.xl} {
    display: flex;
    width: inherit;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-top: 40px;
  }
`;

const OrderButton = styled(Link)`
  width: 130px;
  height: 40px;
  font-size: 20px;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  align-self: center;
  border-width: 0px;
  background: rgb(255,224,0);
  justify-self: center;
  background: #5A7B20;
  padding: 5px 10px;
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

export default function ServiceItems() {

  return <Wrapper>
    <Header>
      Package Comparison
    </Header>
    <Divider />
    <Intro>
      To understand more about our offering, please use the comparison chart below. Get in touch with our
      sales team if you need more information.

    </Intro>
    <ServiceItemsWrapper>
      <Table>
        <Tr>
          <Th headcol="headcol">Characteristic</Th>
          <Th>Dedicated Internet Access</Th>
          <Th>Shared Internet Access</Th>
        </Tr>
        <Tr>
          <Td class="headcol">Speed</Td>
          <Td>Guaranteed Speed</Td>
          <Td>A downgraded connection during peak hours when neighbours are using it</Td>
        </Tr>
        <Tr>
          <Td class="headcol">Quality</Td>
          <Td>Guaranteed quality</Td>
          <Td>No guarantees with a shared network</Td>
        </Tr>
        <Tr>
          <Td class="headcol">Reliability</Td>
          <Td>If your business requires a static IP, dedicated connections are reliable</Td>
          <Td>Shared internet does not always offer static IPs, making them less reliable</Td>
        </Tr>
        <Tr>
          <Td class="headcol">Reparability</Td>
          <Td>Quicker response rate in times of network faults </Td>
          <Td>Associated with prolonged response rate</Td>
        </Tr>
        <Tr>
          <Td class="headcol">Clarity</Td>
          <Td>Voice and video connections are crystal clear</Td>
          <Td>Shared networks have steady voice and video traffic that can cause latency and jitters</Td>
        </Tr>
        <Tr class="headcol">
          <Td>Cost</Td>
          <Td>Higher</Td>
          <Td>Lower</Td>
        </Tr>
        <Tr>
          <Td class="headcol"></Td>
          <Td> <OrderButton to={`/quote-request`} state={{ service: 'Dedicated Internet Access' }}>Order</OrderButton></Td>
          <Td> <OrderButton to={`/quote-request`} state={{ service: 'Shared Internet Access' }}>Order</OrderButton></Td>
        </Tr>
      </Table>
    </ServiceItemsWrapper>
  </Wrapper>
}