import React from "react";
import styled from "styled-components";
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
    display: grid;
  
  @media ${device.sm} {
        display: grid;
        padding-right: 50px;
        width: 550px;
    }
`

const Input = styled.input`
    border: none;
    border-radius: 0px;
    margin-bottom: 20px;
    padding: 15px;
    font-size: 25px;
    font-weight: 400;
  
  @media ${device.sm} {
        border: none;
        border-radius: 0px;
        margin-bottom: 20px;
        padding: 15px;
        font-size: 25px;
        font-weight: 400;
    };
`

const Textarea = styled.textarea`
    border: none;
    border-radius: 0px;
    margin-bottom: 20px;
    padding: 15px;
    font-size: 25px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    resize: none;
  
    @media ${device.sm} {
        border: none;
        border-radius: 0px;
        margin-bottom: 20px;
        padding: 15px;
        font-size: 25px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        resize: none;
    };
`

const SendButton = styled.button`
    border-radius: 80px;
    height: 55px;
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
    color: #fff;
    align-self: center;
    border-width: 0px;
    background: rgb(255,224,0);
    margin-top: 40px;
    background: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%);
  
    @media ${device.sm} {
        border-radius: 80px;
        width: 230px;
        height: 55px;
        font-size: 20px;
        font-family: 'Montserrat', sans-serif;
        color: #fff;
        align-self: center;
        border-width: 0px;
        background: rgb(255,224,0);
        margin-top: 40px;
        background: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%);
  };
`

export default function ContactForm() {

    return <Wrapper>
        <Input type="text" placeholder="Name"></Input>
        <Input type="text" placeholder="Email"></Input>
        <Textarea placeholder="Message" rows="4" cols="50"/>
        <SendButton>Send</SendButton>
    </Wrapper>
}