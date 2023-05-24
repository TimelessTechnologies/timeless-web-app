import React, { useState } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
    display: grid;
  
    @media ${device.sm} {
        display: grid;
    }

    @media ${device.lg} {
        display: grid;
        padding-right: 50px;
    }

    @media ${device.xl} {
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
    font-size: 15px;
    font-weight: 400;
  
    @media ${device.sm} {
        border: none;
        border-radius: 0px;
        margin-bottom: 20px;
        padding: 15px;
        font-size: 15px;
        font-weight: 400;
    };
    @media ${device.lg} {
        border: none;
        border-radius: 0px;
        margin-bottom: 20px;
        padding: 15px;
        font-size: 25px;
        font-weight: 400;
    };
    @media ${device.xl} {
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
    font-size: 15px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 500;
    resize: none;
  
    @media ${device.sm} {
        border: none;
        border-radius: 0px;
        margin-bottom: 20px;
        padding: 15px;
        font-size: 15px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        resize: none;
    };
    @media ${device.lg} {
        border: none;
        border-radius: 0px;
        margin-bottom: 20px;
        padding: 15px;
        font-size: 25px;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        resize: none;
    };
    @media ${device.xl} {
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
    @media ${device.lg} {
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
    @media ${device.xl} {
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
const Form = styled.form`
    display: grid;
    margin: auto;
    margin-bottom: 20px;
    @media ${device.sm} {
        width: 70%;
    }
    @media ${device.lg} {
        width: 80%;
    }
    @media ${device.xl} {
        width: 100%;
    }
`


const MESSAGE_MUTATION = gql`
  mutation CreateMessageMutation(
    $clientMutationId: String!,
    $name: String!,
    $email: String!,
    $message: String!
    ) {
    newContactMessage(
        input: {
            clientMutationId: $clientMutationId,
            name: $name,
            email: $email,
            message: $message
        }
    ) {
        success
        data
    }
  }
`

export default function ContactForm() {

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [messageValue, setMessageValue] = useState('')

    const isBrowser = typeof window !== "undefined"

    return <Wrapper>
        {isBrowser && (<Mutation mutation={MESSAGE_MUTATION}>
            {(newContactMessage, { loading, error, data }) => (
                <div>
                    <Form
                        onSubmit={async event => {
                            event.preventDefault()
                            newContactMessage({
                                variables: {
                                    clientMutationId: 'example',
                                    name: nameValue,
                                    email: emailValue,
                                    message: messageValue,
                                }
                            })
                        }}>
                        <Input
                            type="text"
                            placeholder="Name"
                            value={nameValue}
                            onChange={event => {
                                setNameValue(event.target.value)
                            }} />
                        <Input
                            type="text"
                            placeholder="Email"
                            value={emailValue}
                            onChange={event => {
                                setEmailValue(event.target.value)
                            }} />
                        <Textarea
                            placeholder="Message"
                            rows="4"
                            cols="50"
                            value={messageValue}
                            onChange={event => {
                                setMessageValue(event.target.value)
                            }}
                        />
                        <SendButton type="submit">Send</SendButton>
                    </Form>
                    <div>
                        {loading && <p>Loading....</p>}
                        {error && (<p>An error occured, please try again later....</p>)}
                        {data && <p>Message Sent</p>}
                    </div>
                </div>

            )}

        </Mutation>)}
    </Wrapper>
}