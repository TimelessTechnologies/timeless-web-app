import React from "react";
import styled from "styled-components";
import { HeartPulse } from '@styled-icons/fa-solid';

const RedHeart = styled(HeartPulse)`
  color: red;
`

const Wrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  width: 1200px;
  height: 100%;
`

const BottomFooterInner = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  width: 1200px;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 50px;
`;


const Logo = styled.img`
  height: 50px;
  align-self: center;
`

const TopFooter = styled.div`
  display: flex;
  padding-top: 20px;
  padding-bottom: 20px;
  font-size: 20px;
  color: #fff;
  background: rgb(29,89,32); 
  background: linear-gradient(90deg, rgba(29,89,32,1) 0%, rgba(255,224,0,1) 100%);
`

const BottomFooter = styled.div`
  background: #000;
  color: #fff;
`

export default function Footer() {


    return <div>
        <TopFooter>
            <Wrapper>
                <div style={{ display: 'flex' }}>
                    <div style={{ marginRight: '20px' }}>Contact Us</div>
                    <div>Sign-up to our newsletter</div>
                </div>
            </Wrapper>
        </TopFooter>
        <BottomFooter>
            <Wrapper>
                <div style={{ display: 'flex', paddingTop: '25px', paddingBottom: '25px', justifyContent: 'space-between' }}>
                    <div>Careers</div>
                    <div>Legal</div>
                    <div>Trademarks</div>
                    <div>Cookies Policy</div>
                    <div>Escalation/Report & abuse</div>
                    <div>Modern Slavery Act</div>
                    <div>Privacy notice</div>
                </div>
                <BottomFooterInner>
                    <div style={{ display: 'flex'}}>
                        <div style={{ marginRight: '30px' }}>
                        <Logo
                        src="http://timeless.local/wp-content/uploads/2023/03/Asset-36.png"
                        alt=""
                        />
                        </div>
                        <div style={{ alignSelf: 'center' }}>© Copyright 2023, Timeless Technologies. All rights reserved</div>
                    </div>
                    <div style={{ alignSelf: 'center' }}>Made with <RedHeart size="20" title="Love" /> by Rulan Creative</div>
                </BottomFooterInner>
            </Wrapper>
        </BottomFooter>
    </div>
}