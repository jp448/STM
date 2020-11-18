import React, { useState, useRef }  from "react";
import { connect, styled } from "frontity";
import Link from "./link";

/**
 * Navigation Component
 *
 * It renders the navigation links
 */
const Nav = ({ state, actions }) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [menuIdx, setMenuIdx] = useState(0);
  const [menuPadding, setMenuPadding] = useState("0px");

  const submenu = useRef(null);

  function toggleNavBar(id) {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : "30px"
    );
    setMenuIdx(id);
    setMenuPadding(
      (id*85) + 'px'
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
        {/* If link url is the current page, add `aria-current` for a11y */}
        <Link link={e.link} aria-current={state.router.link === e.link ? "page" : undefined}>
          {e.name}</Link>
      </NavItem>)
    })
    return submenuItems;
  }
  
  const menuItems = []
  state.theme.menu.map((e, idx) => {
    menuItems.push(<NavItem key={e.name}>
      {/* If link url is the current page, add `aria-current` for a11y */}
      { e.menu.length === 0 ? <NavLink href={e.link} onClick={(event) => onClick(event, e.link)} aria-current={state.router.link === e.link ? "page" : undefined}>
        {e.name}</NavLink> : <NavLink arria-current="page" onClick={() => toggleNavBar(idx)}>{e.name}</NavLink> }   
    </NavItem>)
  })

  return (
    <NavContainer>
      <NavTop>{menuItems}</NavTop>
      <NavBottom
        ref={submenu}
        style={{ maxHeight: `${setHeight}`, paddingLeft: `${menuPadding}`  }}
      >{generateSubMenu(menuIdx)}</NavBottom>
    </NavContainer>
  );
};

export default connect(Nav);

const NavContainer = styled.nav`
`;

const NavTop = styled.div`
  list-style: none;
  display: flex;
  width: 848px;
  max-width: 100%;
  box-sizing: border-box;
  padding: 0 24px;
  margin: 0;
  overflow-x: auto;
  left: 15%;
  position: fixed;
  background-color: #fff;

  @media screen and (max-width: 560px) {
    display: none;
  }
`;

const NavLink = styled.a`
  cursor: pointer;
`;

const NavBottom = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
  display: flex;
  list-style: none;
  width: 848px;
  max-width: 100%;
  margin: 0;
  padding: 0 24px;
  overflow-x: auto;
  top: 30px;
  left: 15%;
  position: fixed;
`;

const NavItem = styled.div`
  padding: 0;
  margin: 0 16px;
  color: #050401;
  font-size: 0.9em;
  box-sizing: border-box;
  flex-shrink: 0;
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
    background: black;
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
