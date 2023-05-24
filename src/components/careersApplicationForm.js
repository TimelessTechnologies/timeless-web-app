import React, { useState } from "react";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";
import { device } from "../helpers/mediaQueries";

const Wrapper = styled.div`
    display: grid;
    margin: 10px;
  
  @media ${device.sm} {
        display: grid;
    }
  
  @media ${device.lg} {
        display: grid;
    }
  
  @media ${device.xl} {
        display: grid;
        padding-right: 50px;
        justify-content: center;
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
    width: 100%;
  
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

const CAREER_APPLICATION_MUTATION = gql`
  mutation CreateCareerMutation(
    $clientMutationId: String!,
    $name: String!,
    $email: String!,
    $apply_for: String!,
    $upload_cv: Upload!
    ) {
    newCareerApplication(
        input: {
            clientMutationId: $clientMutationId,
            name: $name,
            email: $email,
            apply_for: $apply_for,
            upload_cv: $upload_cv,
        }) {
        success
        data
    }
  }
`

export default function CareerApplicationForm() {

    const [nameValue, setNameValue] = useState('')
    const [emailValue, setEmailValue] = useState('')
    const [applyForValue, setApplyForValue] = useState('')
    const [uploadCvValue, setUploadCvValue] = useState(null)

    const isBrowser = typeof window !== "undefined"

    return <Wrapper>
        {isBrowser && (<Mutation mutation={CAREER_APPLICATION_MUTATION} fetchPolicy="no-cache">
            {(newCareerApplication, { loading, error, data }) => (
                <div>
                    <Form
                        onSubmit={async event => {
                            event.preventDefault()
                            try {
                                await newCareerApplication({
                                    variables: {
                                        clientMutationId: 'example',
                                        name: nameValue,
                                        email: emailValue,
                                        apply_for: applyForValue,
                                        upload_cv: uploadCvValue,
                                    },
                                    fetchPolicy: 'no-cache',
                                    context: {
                                        useMultipart: true,
                                        hasUpload: true
                                    }
                                })
                            } catch (e) { console.log({ e }) }
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
                        <Input
                            type="text"
                            placeholder="Apply For"
                            value={applyForValue}
                            onChange={event => {
                                setApplyForValue(event.target.value)
                            }}
                        />
                        <Input
                            type="file"
                            required
                            placeholder="Upload CV"
                            onChange={event => {
                                setUploadCvValue(event.target.files[0]);
                            }}
                        />
                        <SendButton type="submit">Send</SendButton>
                    </Form>
                    <div>
                        {loading && <p>Loading....</p>}
                        {error && (<p>An error occured, please try again later....</p>)}
                        {data && <p>Application Sent</p>}
                    </div>
                </div>

            )}

        </Mutation>)}
    </Wrapper>
}