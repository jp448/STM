import React, { useState }  from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import exit from "./../img/exit.svg";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */

const Nav = ({ state, actions }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  function toggleNavBar() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : "50px"
    );
  }

  function resetNavbar() {
    setActiveState("");
    setHeightState("0px");
  }

  const onClick = (event, link) => {
    resetNavbar();
    // Do nothing if it's an external link
    if (link.startsWith("http")) return;

    event.preventDefault();
    // Set the router to the new url.
    actions.router.set(link);

    // Scroll the page to the top
    window.scrollTo(0, 0);

    // if the menu modal is open, close it so it doesn't block rendering
    if (state.theme.isMobileMenuOpen) {
      actions.theme.closeMobileMenu();
    }
  };

  function generateSubMenu(id) {
    const submenuItems = []
    state.theme.menu[id].menu.map(e => {
      submenuItems.push(<NavItem key={e.name}>
        <Link link={e.link} aria-current={state.router.link === e.link ? "page" : undefined}>
          {e.name}</Link>
      </NavItem>)
    })
    return submenuItems;
  }
  
  const menuItems = []
  state.theme.menu.map((e, idx) => {
    // if with submenu get submenu
    const submenuList = generateSubMenu(idx);
    menuItems.push(<NavItem key={e.name}>
      { e.menu.length === 0 ? 
        <NavLink 
          href={e.link}
          onClick={(event) => onClick(event, e.link)} 
          aria-current={state.router.link === e.link ? "page" : undefined}>
            {e.icon !== undefined ? 
              <>
              <img src={require(`./../img/${e.icon}.png`)} width="50px" height= "50px"/>
              {e.name !== "stm" ?
              <ToolTipText>{e.name}</ToolTipText> :
              ""}
              </> : 
              e.name}
        </NavLink> 
        :<>
        <NavLink 
          arria-current="page" 
          onClick={() => toggleNavBar()}>
            {e.icon !== undefined ? 
              <>
                <img src={require(`./../img/${e.icon}.png`)} width="50px" height= "50px" />
                <ToolTipText>{e.name}</ToolTipText>
              </> : e.name}
        </NavLink>
        <NavSub
          style={{ maxHeight: `${setHeight}`}}>
            {submenuList}
        </NavSub>
      </> }   
    </NavItem>)
  })

  return (
    <NavContainer>
      {menuItems}    
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
  z-index: 10;
  list-style-type: none;
  width: 100%;
  height: 127px;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  left: 0;
  position: fixed;
  background-color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const ToolTipText = styled.span`
  visibility: hidden;
  color: #AD8C26;
  text-align: center;
  position: absolute;
  z-index: 1;
  font-weight: lighter;
  font-size: 11px;
  padding: 10px;

  @media screen and (max-width: 850px) {
    display: none;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
  display: inline-block;
  position: relative;

  &:hover ${ToolTipText} {
    visibility: visible;
  }
`;

const NavItem = styled.div`
  padding: 0;
  float: left;
  margin: 0 17px;
  color: #050401;
  font-size: 1em;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  position: relative;

  & > a {
    display: inline-block;
    line-height: 2em;
    border-bottom: 2px solid;
    border-bottom-color: transparent;
    /* Use for semantic approach to style the current link */
 
  }

  & > a:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: 0;
    left: 0;
    background: #AD8C26;
    visibility: hidden;
    border-radius: 5px;
    transform: scaleX(0);
    transition: .50s linear;
  }

  & > a:hover:before {
    visibility: visible;
    transform: scaleX(1);
  }

  & > a:focus:before  {
    visibility: visible;
    transform: scaleX(1);
  }

  &:after {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  &:before {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
  }

  &:first-of-type {
    margin-left: 0;
  }

  &:last-of-type {
    margin-right: 0;

    &:after {
      content: "";
      display: inline-block;
    }
  }
`;

const NavSub = styled.div`
  background-color: white;
  transition: max-height 0.6s ease;
  list-style: none;
  font-weight: lighter;
  min-width: 600px;
  margin: 0;
  overflow-x: auto;
  top: 60px;
  left: 7px;
  transform: translateX(-50%);
  position: absolute;
  z-index: 15;

  ${NavItem}:hover {
    color: #AD8C26;
  }
`;
