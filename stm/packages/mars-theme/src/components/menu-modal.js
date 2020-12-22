import React, { useState } from "react";
import { styled, connect } from "frontity";

const MenuModal = ({ state, actions }) => {

  const [openSubMenu, setOpenSubMenu] = useState(-1);

  const onClick = (event, link) => {
    setOpenSubMenu(-1);
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
      submenuItems.push(
        <SubMenuLink key={e.name} href={e.link} onClick={(event) => onClick(event, e.link)} aria-current={state.router.link === e.link ? "page" : undefined}>
          {e.name}</SubMenuLink>)
    })
    return submenuItems;
  }
  
  const showSubMenu = (id) => {
    openSubMenu === id ? setOpenSubMenu(-1) : setOpenSubMenu(id);
  }

  const { menu } = state.theme;
  const isThereLinks = menu != null && menu.length > 0;

  let menuList = [];
  isThereLinks && menu.map((e, idx) => {
    const submenuList = generateSubMenu(idx);
    menuList.push(
      e.menu.length === 0 ? <MenuLink key={e.name} href={e.link} onClick={(event) => onClick(event, e.link)} aria-current={state.router.link === e.link ? "page" : undefined}>
      {e.name}</MenuLink> : <><MenuLink key={e.name} arria-current="page" onClick={() => showSubMenu(e.id)}>{e.name}</MenuLink><NavSub 
      style={{display: e.id === openSubMenu ? `inline` : `none`}}>{submenuList}</NavSub></>
    );
  });    

  return (
    <>
      <MenuOverlay />
      <MenuContent as="nav">
        {menuList}
      </MenuContent>
    </>
  );
};

const MenuOverlay = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
`;

const MenuContent = styled.div`
  z-index: 3;
`;

const NavSub = styled.div`
  color: gray;
`;

const MenuLink = styled.a`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: 1.2rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.05);
  }
  /* styles for active link */
  &[aria-current="page"] {
    color: black;
    font-weight: bold;
    /* border-bottom: 4px solid black; */
  }
`;

const SubMenuLink = styled(MenuLink)`
  font-size: 15px;
`;

export default connect(MenuModal);
