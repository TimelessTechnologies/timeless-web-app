import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "../helpers/mediaQueries"

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 100%;

  @media ${device.sm} {
    margin: 0 auto;
    height: 100%;
  }

  @media ${device.lg} {
    margin: 0 auto;
    height: 100%;
  }

  @media ${device.xl} {
    max-width: 1200px;
    margin: 0 auto;
    width: 1200px;
    height: 100%;
  }

`
const OuterWrapper = styled.div`
  display: block;
  margin-top: 10vh;

  @media ${device.sm} {
    display: block;
  }

  @media ${device.lg} {
    display: block;
  }
`
const BottomFooterInner = styled.div`
  margin: 0 auto;
  display: grid;
  height: 100%;
  padding: 20px;

  @media ${device.sm} {
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding-bottom: 50px;
  }
  
  @media ${device.lg} {
    margin: 0 auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding-bottom: 50px;
  }
  
  @media ${device.xl} {
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
    justify-contet: center;
    background: rgb(29,89,32); 
    background: linear-gradient(90deg, rgba(29,89,32,1) 0%, rgba(255,224,0,1) 100%);
  }
  @media ${device.lg} {
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
    justify-content: space-between;
  }

  @media ${device.lg} {
    display: flex;
    justify-content: space-between;
  }
`

const Menu = styled.div`
  display: grid;
  padding: 20px;
  
  @media ${device.sm} {
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    justify-content: space-between;
  }

  @media ${device.lg} {
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    justify-content: space-between;
  }

  @media ${device.xl} {
    display: flex;
    padding-top: 25px;
    padding-bottom: 25px;
    justify-content: space-between;
  }
`

const MenuItem = styled(Link)`
  padding-top: 10px;
  &:hover {
    color: rgb(35, 71, 36, 1);
  };
  text-decoration: none;
  border: 0px;
  color: #fff;
  font-size: 15px;

  @media ${device.sm} {
    padding-top: 0px;
  }
  @media ${device.lg} {
    padding-top: 0px;
    font-size: 25px;
  }
  @media ${device.xl} {
    padding-top: 0px;
  }
`

const CopyWrapper = styled.div`
  display: grid;
@media ${device.sm} {
  display: flex;
}
@media ${device.lg} {
  display: flex;
}
`

const LogoWrapper = styled.div`
  margin-right: 30px;
@media ${device.sm} {
  margin-right: 30px;
}
@media ${device.lg} {
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

@media ${device.lg} {
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
          <MenuItem to={`/timeless-technology`}>Why choose us</MenuItem>
          <MenuItem to={`/careers`}>Join the team</MenuItem>
          <MenuItem to={`/partnerships`}>Partner with us</MenuItem>
        </TopFooterInner>
      </Wrapper>
    </TopFooter>
    <BottomFooter>
      <Wrapper>
        <Menu>
          <MenuItem to={`/privacy-policy`}>Legal</MenuItem>
          <MenuItem to={`/privacy-policy`}>Cookies Policy</MenuItem>
          <MenuItem to={`/privacy-policy`}>Privacy notice</MenuItem>
        </Menu>
        <BottomFooterInner>
          <CopyWrapper>
            <LogoWrapper>
              <Logo
                src="http://timeless.local/wp-content/uploads/2023/03/Asset-36.png"
                alt=""
              />
            </LogoWrapper>
            <Copy>© Copyright 2023, Timeless Technology. All rights reserved</Copy>
          </CopyWrapper>
        </BottomFooterInner>
      </Wrapper>
    </BottomFooter>
  </OuterWrapper>
}