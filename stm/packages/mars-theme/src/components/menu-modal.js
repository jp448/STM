import React, { useState } from "react";
import { styled, connect } from "frontity";
import exit from "./../img/exit.svg";

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
      e.menu.length === 0 ? 
      <MenuLink 
        key={e.name} 
        href={e.link} 
        onClick={(event) => onClick(event, e.link)} 
        aria-current={state.router.link === e.link 
        ? "page" : undefined}>
            {e.icon !== undefined ? 
              <ImageContent>
                <img src={require(`./../img/${e.icon}.png`)} width="50px" height= "50px" />
                {e.name !== "stm" ?
                  <ToolTipText>{e.name}</ToolTipText> :
                ""}
              </ImageContent> : e.name}
        </MenuLink> : 
        <>
          <MenuLink 
            key={e.name} 
            arria-current="page" 
            onClick={() => showSubMenu(e.id)}>
              {e.icon !== undefined ? 
              <ImageContent>
                <img src={require(`./../img/${e.icon}.png`)} width="50px" height= "50px" />
                <ToolTipText>{e.name}</ToolTipText>
              </ImageContent> : e.name}
          </MenuLink>
          <NavSub 
            style={{display: e.id === openSubMenu ? `inline` : `none`}}>
              {submenuList}
          </NavSub>
        </>
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

export default connect(MenuModal);

const MenuOverlay = styled.div`
  background-color: #fff;
  width: 100vw;
  height: 100vh;
  overflow: hidden auto;
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;

  @media screen and (min-width: 560px) {
    display: none;
  }
`;

const MenuContent = styled.div`
  z-index: 3;

  @media screen and (min-width: 560px) {
    display: none;
  }
`;

const NavSub = styled.div`
  color: #AD8C26;
  font-weight: lighter;
`;

const MenuLink = styled.a`
  width: 100%;
  display: inline-block;
  outline: 0;
  font-size: 20px;
  text-align: center;
  padding: .8rem 0;

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0);
  }
  /* styles for active link */
  &[aria-current="page"] {
    font-weight: 900;
    /* border-bottom: 4px solid black; */
  }
`;

const SubMenuLink = styled(MenuLink)`
  font-size: 15px;
`;

const ToolTipText = styled.p`
  color: #AD8C26;
  text-align: center;
  font-weight: lighter;
  font-size: 11px;
  padding: 10px;
`;

const ImageContent = styled.div`
  display: flex;
  justify-content: center;
  align-items; center;
`;
