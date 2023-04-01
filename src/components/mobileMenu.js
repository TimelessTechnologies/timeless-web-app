import React from "react";
import styled from "styled-components";
import SiteInfo from "./siteInfo";
import { graphql, useStaticQuery, Link } from "gatsby";
import { Bars, Close } from '@styled-icons/fa-solid';
import { device } from "../helpers/mediaQueries"


const DropDown = styled.div`
  display: grid;
  position: absolute;
  background: #ededed;
  box-shadow: ${props => (props.isOpen ? '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' : 'none')};
  border-radius: 10px;
  width: -webkit-fill-available;
  margin: 15px;
`

const DropDownControls = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  alignItems: center;
`

const List = styled.ul`
  padding-left: 20px;
`

const ListItem = styled.li`
  display: grid;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 20px;
  font-weight: 600;
`

const DropdownMenu = ({ trigger, menu }) => {
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => { setOpen(!open); };

  return (
    <DropDown isOpen={open} >
      <DropDownControls>
        <div>
          <SiteInfo />
        </div>
        {React.cloneElement(trigger(open), { onClick: handleOpen })}
      </DropDownControls>
      {open ? (
        <List>
          {menu.map((menuItem, index) => (
            <ListItem key={index}>
              {React.cloneElement(menuItem)}
            </ListItem>
          ))}
        </List>
      ) : null}
    </DropDown>
  );
};

const DropDownButtonIconClosed = styled(Close)`
  color: #1a4c1d;
  width: 30px;
`

const DropDownButtonIconOpen = styled(Bars)`
  color: #1a4c1d;
  width: 30px;
`

const MenuItem = styled(Link)`
  text-decoration: none;
  color: black;
`

const Wrapper = styled.div`
  display: block;
  height: 94px;

@media ${device.sm} {
  display: none;
}
`

const MobileMenu = () => {
  const data = useStaticQuery(graphql`
    query {
        wpcontent {
          menus(where: { slug: "main-menu" }) {
            nodes {
              menuItems {
                edges {
                  node {
                    url
                    description
                    label
                    path
                  }
                }
              }
            }
          }
        }
      }
  `)

  return (
    <Wrapper>
      <DropdownMenu
        trigger={open => open ? <DropDownButtonIconClosed /> : <DropDownButtonIconOpen />}
        menu={data.wpcontent.menus.nodes[0].menuItems.edges.map((item) => (
          <MenuItem to={`${item.node.path}`} key={item.node.label}>
            {item.node.label}
          </MenuItem>
        ))}
      />
    </Wrapper>
  );
};

export default MobileMenu;