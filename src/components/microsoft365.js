import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import Accordion from "./accordian";
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
    margin-top: 10px;
    margin-bottom: 10px;
    height: 0px;
  }
  @media ${device.xl} {
    border-width: 1px;
    border-style: solid;
    border-image: linear-gradient(90deg, rgba(255,224,0,1) 13%, rgba(29,89,32,1) 100%) 1;
    margin-top: 10px;
    margin-bottom: 10px;
    height: 0px;
  }
`;

const Intro = styled.div`
  color: #1a4c1d;
  font-size: 15px;
  
  @media ${device.sm} {
    color: #1a4c1d;
    font-size: 15px;
  }
  @media ${device.lg} {
    color: #1a4c1d;
    font-size: 25px;
  }
  @media ${device.xl} {
    color: #1a4c1d;
    font-size: 25px;
  }
`;

const ProductWrapper = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  float: left;
  display: flex;
  justify-content: space-between;
  width: 100%;
  flex-wrap: wrap;

  @media ${device.sm} {
    margin-top: 50px;
    margin-bottom: 50px;
    float: left;
    display: flex;
    justify-content: space-around;
  }

  @media ${device.lg} {
    margin-top: 50px;
    margin-bottom: 50px;
    float: left;
    display: flex;
    justify-content: space-between;
  }

  @media ${device.xl} {
    margin-top: 50px;
    margin-bottom: 50px;
    float: left;
    display: flex;
    justify-content: space-between;
  }


`;

const ProductCard = styled.div`
  width: 100%;
  border-radius: 3px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
  overflow: hidden;

  @media ${device.xxs} {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
    overflow: hidden;
    padding: 20px;
    margin-bottom: 40px;
  }
  @media ${device.xs} {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
    overflow: hidden;
    padding: 20px;
    margin-bottom: 40px;
  }
  @media ${device.sm} {
    width: 100%;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
    overflow: hidden;
    padding: 20px;
    margin-bottom: 40px;
  }
  @media ${device.md} {
    width: 40%;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
    overflow: hidden;
    padding: 20px;
    margin-bottom: 40px;
  }
  @media ${device.lg} {
    width: 20%;
    transform: translate(-50 %, -50 %) translateZ(0);
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
    padding: 10px;
    justify-content: center;
    display: grid;
  }
  @media ${device.xl} {
    transform: translate(-50 %, -50 %) translateZ(0);
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, .3);
    padding: 10px;
    justify-content: center;
    display: grid;
  }
`;

const Title = styled.h2`
  position: relative;
  margin: 10px 0;
  letter-spacing: 3px;
  color: #152536;
  font-size: 1rem;
  text-transform: uppercase;
  text-shadow: 0 0 0px #32577f;
  
  @media ${device.sm} {
    position: relative;
    letter-spacing: 3px;
    color: #152536;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 0px #32577f;
    height: 5vh;
  }

  @media ${device.lg} {
    position: relative;
    letter-spacing: 3px;
    color: #152536;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 0px #32577f;
    height: 5vh;
  }

  @media ${device.xl} {
    position: relative;
    letter-spacing: 3px;
    color: #152536;
    font-size: 1rem;
    text-align: center;
    text-transform: uppercase;
    text-shadow: 0 0 0px #32577f;
    height: 5vh;
  }
`;

const OrderButton = styled(Link)`
  font-size: 15px;
  text-align: center;
  font-family: 'Montserrat', sans-serif;
  color: #fff;
  align-self: center;
  border-width: 0px;
  background: rgb(255,224,0);
  justify-self: center;
  background: #5A7B20;
  padding: 5px 5px;
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

  @media ${device.sm} {
    width: 100%;
  }

  @media ${device.lg} {
  }

  @media ${device.xl} {
  }
`;

const AppWrapper = styled.div`
  float: left;
  text-align: center;
  
  @media ${device.sm} {
    float: left;
    text-align: center;
    margin: 10px;
  }
  @media ${device.lg} {
    float: left;
    text-align: center;
    margin: 0px;
  }
  @media ${device.xl} {
    float: left;
    text-align: center;
    margin: 0px;
  }
`;

const AppText = styled.div`
  font-size: 10px;

  @media ${device.sm} {
    font-size: 10px;
  }
  @media ${device.lg} {
    font-size: 10px;
  }
  @media ${device.xl} {
    font-size: 10px;
  }
`;

const Apps = styled.div`
  justify-content: space-between;
  display: flex;  
  flex-wrap: wrap;
  height: fit-content;

  @media ${device.sm} {
    justify-content: space-between;
    display: flex;  
    flex-wrap: wrap;
    height: fit-content;
  }
  @media ${device.lg} {
    justify-content: space-between;
    display: flex;  
    flex-wrap: wrap;
    height: 30vh;
  }
  @media ${device.xl} {
    justify-content: space-between;
    display: flex;  
    flex-wrap: wrap;
  }
}
`;

const FeatureList = styled.ul`
  height: 30vh;
  @media ${device.sm} {
    height: 30vh;
  };
  @media ${device.lg} {
    height: 30vh;
  };
  @media ${device.xl} {
    height: 30vh;
   };

`;

export default function ServiceItems() {

  return <Wrapper>
    <Header>
      Microsoft365
    </Header>
    <Divider />
    <Intro>
      Microsoft 365 is the productivity cloud designed to help
      you pursue your passion and run your business. More than
      just apps like Word, Excel, PowerPoint, Microsoft 365
      brings together best-in-class productivity apps with powerful
      cloud services, device management, and advanced security in one,
      connected experience.
      Use professional email and calendaring to reach customers and
      coworkers wherever work takes you. Store, access, and share files
      from anywhere with 1 TB of online storage per user.
      Keep your team on the same page with group chat, online meetings,
      and calling in Microsoft Teams, the hub for teamwork.
      Help protect your employees, your data, and your customer
      information with advanced security and device management.
    </Intro>
      <h2>Available Packages:</h2>
    <ProductWrapper>
      <ProductCard>
        <Title>Microsoft 365 Business Basic</Title>
        <OrderButton to={`/quote-request`} state={{ service: 'Microsoft 365 Business Basic' }}>Request Quote</OrderButton>
        <FeatureList>
          <li>Web and mobile versions of Microsoft 365 apps only</li>
          <li>Chat, call, meet up to 300 attendees</li>
          <li>1 TB of cloud storage per user</li>
          <li>Business-class email</li>
          <li>Standard security</li>
          <li>Anytime phone and web support</li>
        </FeatureList>
        <Divider />
        <div><b>Microsoft 365 Business Basic:</b></div>
        <Apps>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Word_256x256.png' />
            <AppText>Word</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Excel_256x256.png' />
            <AppText>Excel</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Powerpoint_256x256.png' />
            <AppText>PowerPoint</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Microsoft-Teams_256x256.png' />
            <AppText>Teams</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Outlook_256x256.png' />
            <AppText>Outlook</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Onedrive_256x256.png' />
            <AppText>OneDrive</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Sharepoint_256x256.png' />
            <AppText>SharePoint</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Word_256x256.png' />
            <AppText>Exchange</AppText>
          </AppWrapper>
        </Apps>
      </ProductCard>
      <ProductCard>
        <Title>Microsoft 365 Business Standard</Title>
        <OrderButton to={`/quote-request`} state={{ service: 'Microsoft 365 Business Standard' }}>Request Quote</OrderButton>
        <FeatureList>
          <AppText><b>Everything in Microsoft 365 Business Basic, plus:</b></AppText>
          <li>Desktop versions of Microsoft 365 apps with premium features</li>
          <li>Easily host webinars</li>
          <li>1 TB of cloud storage per user</li>
          <li>Attendee registration and reporting tools</li>
          <li>Manage customer appointments</li>
        </FeatureList>
        <Divider />
        <div><b>Desktop, web, and mobile apps and services:</b></div>
        <Apps>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Word_256x256.png' />
            <AppText>Word</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Excel_256x256.png' />
            <AppText>Excel</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Powerpoint_256x256.png' />
            <AppText>PowerPoint</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Microsoft-Teams_256x256.png' />
            <AppText>Teams</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Outlook_256x256.png' />
            <AppText>Outlook</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Onedrive_256x256.png' />
            <AppText>OneDrive</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Sharepoint_256x256.png' />
            <AppText>SharePoint</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Word_256x256.png' />
            <AppText>Exchange</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Access_256x256.png' />
            <AppText>Access (PC Only)</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Publisher_256x256.png' />
            <AppText>Publisher (PC Only)</AppText>
          </AppWrapper>
        </Apps>
      </ProductCard>
      <ProductCard>
        <Title>Microsoft 365 Business Premium</Title>
        <OrderButton to={`/quote-request`} state={{ service: 'Microsoft 365 Business Premium' }}>Request Quote</OrderButton>
        <FeatureList>
          <AppText><b>Everything in Microsoft 365 Business Standard, plus:</b></AppText>
          <li>Advanced security</li>
          <li>Chat, call, meet up to 300 attendees</li>
          <li>Access and data control</li>
          <li>Cyberthreat protection</li>
        </FeatureList>
        <Divider />
        <div><b>Desktop, web, and mobile apps and services:</b></div>
        <Apps>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Word_256x256.png' />
            <AppText>Word</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Excel_256x256.png' />
            <AppText>Excel</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Powerpoint_256x256.png' />
            <AppText>PowerPoint</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Microsoft-Teams_256x256.png' />
            <AppText>Teams</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Outlook_256x256.png' />
            <AppText>Outlook</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Onedrive_256x256.png' />
            <AppText>OneDrive</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Sharepoint_256x256.png' />
            <AppText>SharePoint</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Word_256x256.png' />
            <AppText>Exchange</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Access_256x256.png' />
            <AppText>Access</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Publisher_256x256.png' />
            <AppText>Publisher</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Intune_256x256.png' />
            <AppText>Intune</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Azure_256x256.png' />
            <AppText>Azure</AppText>
          </AppWrapper>
        </Apps>
      </ProductCard>
      <ProductCard>
        <Title>Microsoft 365 Apps for business</Title>
        <OrderButton to={`/quote-request`} state={{ service: 'Microsoft 365 Apps for business' }}>Request Quote</OrderButton>
        <FeatureList>
          <li>Desktop versions of Microsoft 365 apps with premium features</li>
          <li>1 TB of cloud storage per user</li>
          <li>Standard security</li>
          <li>Anytime phone and web support</li>
        </FeatureList>
        <Divider />
        <div><b>Desktop, web, and mobile apps and services:</b></div>
        <Apps>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Word_256x256.png' />
            <AppText>Word</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Excel_256x256.png' />
            <AppText>Excel</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Powerpoint_256x256.png' />
            <AppText>PowerPoint</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Microsoft-Teams_256x256.png' />
            <AppText>Teams</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Outlook_256x256.png' />
            <AppText>Outlook</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Onedrive_256x256.png' />
            <AppText>OneDrive</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Sharepoint_256x256.png' />
            <AppText>SharePoint</AppText>
          </AppWrapper>
          <AppWrapper>
            <img alt="" height="50" src='http://timeless.local/wp-content/uploads/2023/05/Word_256x256.png' />
            <AppText>Exchange</AppText>
          </AppWrapper>
        </Apps>
      </ProductCard>
    </ProductWrapper>
    <div>
      <h1>Frequently Asked Questions</h1>
      <Accordion title="How reliable is Microsoft 365">
        <p>All Microsoft 365 services are available with a 99.9% uptime, financially backed service guarantee.</p>
      </Accordion>

      <Accordion title="What happened to Office363 Business Plans">
        <p>
          Some Office 365 plans are now Microsoft 365 plans. New name, same great value, same price.
          Office 365 Business Essentials is now Microsoft 365 Business Basic
          Office 365 Business Premium is now Microsoft 365 Business Standard
          Microsoft 365 Business is now Microsoft 365 Business Premium
          Office 365 Business is now Microsoft 365 Apps for business
          Office 365 ProPlus is now Microsoft 365 Apps for enterprise
        </p>
      </Accordion>

      <Accordion title="How many devices can I install Microsoft365 apps on if i have Microsoft365 Business Plan?">
        <p>
          Install Microsoft 365 apps on up to five PCs or Macs, five tablets,
          and five mobile devices. Hybrid Windows devices, such as the Microsoft
          Surface Pro, count as either a PC or a tablet.
        </p>
      </Accordion>

      <Accordion title="Can I switch to other Microsoft365 Business Plan?">
        <p>
          Yes. You can transition your account to a different plan as the needs of your business change.
        </p>
      </Accordion>

      <Accordion title="Does Microsoft365 Business support domain-based email addresses?">
        <p>
          Yes. You can include a professional custom email domain as part of your Microsoft 365 subscription
          or leverage an existing domain registered through another provider.
        </p>
      </Accordion>

      <Accordion title="Does Microsoft365 Business work without internet access?">
        <p>
          The Microsoft 365 apps that you install on your PC or Mac—such as Word,
          Excel, PowerPoint, and Outlook—are available to you when you’re not online.
          With OneDrive in Microsoft 365, get file storage that you can
          access when you’re offline. When you make changes while offline,
          they’ll be synced to OneDrive and across the rest of your devices
          when you reconnect.
          With Outlook, read emails already delivered to your inbox, or
          draft new emails and meeting requests. Your inbox and outbox will
          sync across the rest of your devices when you reconnect.
        </p>
      </Accordion>

      <Accordion title="Can I mix and match different Microsoft365 Business Plans?">
        <p>
          Yes, you can mix and match Microsoft 365 plans.
          Please note that there are some license limitations at
          the plan level. The Microsoft 365 Business Basic, Apps for
          business, Business Standard, and Business Premium plans each have
          a limit of 300 users, while the Enterprise plans are for an
          unlimited number of users. For example, you can purchase 300
          Business Premium seats, 300 Business Standard seats, and 500
          Enterprise E3 seats on a single tenant.
        </p>
      </Accordion>

      <Accordion title="Can I purchase Microsoft365 add-on services to supplementmy subscription?">
        <p>
          Many customers purchase a business SKU and then depending on their
          need they can choose to buy any number of add-on Microsoft 365 and
          Office 365 Services to round out their Microsoft 365 or Office 365
          implementation.
          Customers with Microsoft 365 E3 subscriptions are eligible to purchase
          Microsoft 365 E5 compliance and Microsoft 365 E5 security as add-ons to
          their Microsoft 365 E3 subscriptions. Depending on the subscription level,
          customers can also combine their Microsoft 365 Enterprise subscriptions with
          plans and add-ons from Azure, Dynamics 365, Enterprise Mobility + Security, and Office 365.
          Additionally, customers may choose to purchase functionality from one of
          the thousands of third-party vendors available in the Office store.

        </p>
      </Accordion>

      <Accordion title="Can I cancel my subscription at anytime?">
        <p>
          You can cancel your subscription at any time. However,
          depending on the product and the type of subscription you have,
          there may be a penalty for cancelling before the end of your contract.
          For subscriptions with a monthly commitment payment, there is no penalty
          for cancelling your contract at any time. Annual commitment subscriptions
          that are paid month to month may incur some penalties if cancelled early.
          Annual commitment subscriptions that are paid up front do not receive a
          refund if cancelled prior to the full contract period.
        </p>
      </Accordion>

      <Accordion title="What happens to my data when i cancel my subscription?">
        <p>
          Your data is yours. If you decide to cancel your Microsoft 365 subscription,
          you can download your data—for example, your email and documents on team
          sites—and save it to another location. You should save your data before you
          cancel. After you cancel your subscription, data associated with your Microsoft
          365 account will be available to your administrator(s) in a limited function account for 90 days.
        </p>
      </Accordion>

      <Accordion title="How many userscan I host for online meetings and video calls using Microsoft Teams?">
        <p>
          With Microsoft 365 Business Basic, Microsoft 365 Business Standard, Microsoft 365
          Business Premium, and Microsoft Apps for Business plans, you can host online meetings
          and video calls for up to 300 people using Microsoft Teams.

          With Microsoft 365 E3 and E5, Microsoft 365 A3 and A5, and Microsoft 365 Government G3
          and G5 plans, this limit increases up to 1,000 people.

          Compatibility

          This plan works with Office 2021, Office 2019, Office 2016, Office 2013, and Office 2011
          for Mac. Previous versions of Office, such as Office 2010 and Office 2007 may work with
          Microsoft 365 with reduced functionality. This compatibility with Office does not include
          the Office 365 F3 plans.
          For HD calling, compatible HD hardware and broadband connection with at least 4 Mbps required.
          Compatible with Windows 10 or later. For complete requirements for PC and Mac

        </p>
      </Accordion>
    </div>
  </Wrapper>
}