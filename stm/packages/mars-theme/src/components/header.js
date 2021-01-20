import React from "react";
import { connect } from "frontity";
import Nav from "./nav";
import MobileMenu from "./menu";

//Header shows either the nav bar or the moblie nav menu 
const Header = ({ state, action, display_nav }) => {
  return (
    <>
      <MobileMenu />
      {display_nav ? <Nav /> : ''}
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);
