import React from "react";
import styled from "styled-components";
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
    text-align: center;
  
    @media ${device.sm} {
      text-align: center;
    };
    @media ${device.lg} {
        margin-left: 150px;
    };
    @media ${device.xl} {
        margin-left: 150px;
    };
`

const Phone = styled.h1`
    font-weight: 600;
    font-size: 15px;
  
    @media ${device.sm} {
      font-weight: 600;
      font-size: 40px;
    };

    @media ${device.lg} {
      font-weight: 600;
      font-size: 40px;
    };

    @media ${device.xl} {
      font-weight: 600;
      font-size: 40px;
    };
`

const Address = styled.h2`
    font-weight: 400;
    font-size: 15px;
  
  @media ${device.sm} {
    font-weight: 400;
    font-size: 15px;
  };

  @media ${device.lg} {
    font-weight: 400;
    font-size: 30px;
  };

  @media ${device.xl} {
    font-weight: 400;
    font-size: 30px;
  };
`

const Email = styled.h2`
    font-weight: 400;
    font-size: 15px;
  
  @media ${device.sm} {
    font-weight: 400;
    font-size: 15px;
  };

  @media ${device.lg} {
    font-weight: 400;
    font-size: 30px;
  };

  @media ${device.xl} {
    font-weight: 400;
    font-size: 30px;
  };
`


export default function ContactDetails() {

    return <Wrapper>
        <Phone>+263 8 677 222 444</Phone>
        <Address>20 King George Road</Address>
        <Address>2nd Floor Pasangano Building</Address>
        <Address>Avondale, Harare</Address>
        <Email>sales@timelesstechnology.co.zw</Email>
    </Wrapper>
}