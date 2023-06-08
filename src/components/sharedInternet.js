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
  }

  @media ${device.sm} {
    color: #1a4c1d;
    column-count: 2;
  }

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
      Shared Internet Access Package
    </Header>
    <Divider />
    <Intro>
      The theory behind shared internet access is that users of
      a service share facilities in order to save money. This
      is the typical community broadband model, whereby a number
      of customers access an internet connection and the cost of
      that connection is shared between them.
      <br />
      This is internet which is distributed between yourself
      and your neighbours. Various techniques are used in
      sharing this service. As such a number of terms are
      associated with this internet service which include
      contention ratio ranging from 1:2 to undisclosed ratio,
      traffic shaping, Fair Usage Policy, best effort, Upto, no
      guaranteed speed. Contracts are usually delivered and managed
      on a best effort basis, meaning that your ISP will try their
      hardest to provide a smooth service, but wont offer guarantees
      on performance, nor on response time in the event of an outage.


    </Intro>
    <ServiceItemsWrapper>
      <h4>Who Should Use Shared Internet?</h4>
      <ul>
        <li>Where a business is not heavily dependent on internet </li>
        <li>Cost is a key consideration </li>
        <li>General peak periods of other users are not necessarily the same peak period for your business</li>
        <li> If your operations can cope with a service that varies in performance from minute to minute. </li>
      </ul>
    </ServiceItemsWrapper>
  </Wrapper>
}