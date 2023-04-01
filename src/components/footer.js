import React from "react";
import styled from "styled-components";
import { HeartPulse } from '@styled-icons/fa-solid';
import { device } from "../helpers/mediaQueries"

const RedHeart = styled(HeartPulse)`
  color: red;
`

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;

  @media ${device.sm} {
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
  }

`
const OuterWrapper = styled.div`
  display: block;
  @media ${device.sm} {
    display: block;
  }
`


const BottomFooterInner = styled.div`
  margin: 0 auto;
  display: grid;
  height: 100%;
  padding: 20px;

  @media ${device.sm} {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 1200px;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 50px;
  }
`;


const Logo = styled.img`
  height: 50px;
  align-self: center;
`

const TopFooter = styled.div`
  display: grid;
  padding: 20px;
  font-size: 15px;
  color: #fff;
  background: rgb(29,89,32); 
  justify-content: start;
  background: linear-gradient(90deg, rgba(29,89,32,1) 0%, rgba(255,224,0,1) 100%);

  @media ${device.sm} {
    display: flex;
    padding-top: 20px;
    padding-bottom: 20px;
    font-size: 20px;
    color: #fff;
    background: rgb(29,89,32); 
    background: linear-gradient(90deg, rgba(29,89,32,1) 0%, rgba(255,224,0,1) 100%);
  }
`

const BottomFooter = styled.div`
  background: #000;
  color: #fff;
`

const TopFooterInner = styled.div`
  display: grid;
  @media ${device.sm} {
    display: flex;
  }
`

const ContactUs = styled.div`
  margin-right: 20px;
`

const Newsletter = styled.div``

const Menu = styled.div`
  display: grid;
  padding: 20px;
  
  @media ${device.sm} {
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    justify-content: space-between;
  }
`

const MenuItem = styled.div`
  padding-top: 10px;
  @media ${device.sm} {
    padding-top: 0px;
  }
`

const CopyWrapper = styled.div`
  display: grid;
@media ${device.sm} {
  display: flex;
}
`

const LogoWrapper = styled.div`
  margin-right: 30px;
@media ${device.sm} {
  margin-right: 30px;
}
`

const Copy = styled.div`
  padding-top: 10px;
  align-self: center;
  font-size: 10px;
@media ${device.sm} {
  align-self: center;
  padding-top: 0px;
  font-size: 15px;
}
`


export default function Footer() {


    return <OuterWrapper>
        <TopFooter>
            <Wrapper>
                <TopFooterInner>
                    <ContactUs>Contact Us</ContactUs>
                    <Newsletter>Sign-up to our newsletter</Newsletter>
                </TopFooterInner>
            </Wrapper>
        </TopFooter>
        <BottomFooter>
            <Wrapper>
                <Menu>
                    <MenuItem>Careers</MenuItem>
                    <MenuItem>Legal</MenuItem>
                    <MenuItem>Trademarks</MenuItem>
                    <MenuItem>Cookies Policy</MenuItem>
                    <MenuItem>Escalation/Report & abuse</MenuItem>
                    <MenuItem>Modern Slavery Act</MenuItem>
                    <MenuItem>Privacy notice</MenuItem>
                </Menu>
                <BottomFooterInner>
                    <CopyWrapper>
                        <LogoWrapper>
                          <Logo
                          src="http://timeless.local/wp-content/uploads/2023/03/Asset-36.png"
                          alt=""
                          />
                        </LogoWrapper>
                        <Copy>© Copyright 2023, Timeless Technologies. All rights reserved</Copy>
                    </CopyWrapper>
                    <Copy>Made with <RedHeart size="20" title="Love" /> by Rulan Creative</Copy>
                </BottomFooterInner>
            </Wrapper>
        </BottomFooter>
        </OuterWrapper>
}