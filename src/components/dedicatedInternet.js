import React from "react";
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
    column-count: 2;
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

export default function ServiceItems() {


  return <Wrapper>
    <Header>
      Dedicated Internet Access Package
    </Header>
    <Divider />
    <Intro>
      This is internet with maximum and minimum speeds symmetrical
      and are guaranteed any day and any time throughout the month.
      This type of a connection has bottlenecks or metering lights,
      just a constant and steady stream of traffic in both directions
      that belongs exclusively to your business.  This solution provides
      business-grade features, higher speeds clarify on understanding
      what is being used compared to what the provider is supplying.
      <br />
      The contention ratio of a dedicated service is always 1:1.
      The contention ratio reflects the number of customers sharing
      the service bandwidth. Services with a lower contention ratio
      generally have a higher quality of service. Contention ratios
      are expressed as a ratio of number of customers sharing that
      bandwidth. For example, fibre 2Mb/2Mb (1:5) means that the
      symmetrical service is shared with five customers with the
      minimum speed provided at 0.4Mb/0.4Mb.  It is, therefore,
      important to understand the impact of a shared service has on the
      link performance.  Depending on who you share your service with,
      you may always see your full bandwidth, but then again, you might not.

    </Intro>
    <ServiceItemsWrapper>
      <h4>Who Should Use Dedicated Internet?</h4>
      <ul>
        <li>Businesses in need of high-performing internet </li>
        <li>Business consistent, fast upload and download speeds</li>
        <li>Requires high quality-of-service (QoS) </li>
        <li>Business cannot afford to let networking limitations constrain their success and throttle employee output. </li>
        <li>With DIA your network can perform continuous file transfers (e.g. remote data backup), stream audio and video more smoothly, and deliver reliable cloud connectivity.</li>
      </ul>
    </ServiceItemsWrapper>
  </Wrapper>
}