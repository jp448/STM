import React from "react";
import { connect, styled } from "frontity";
import logo from "./../img/logo.png";

//The Banner is the first page the user lands on with on stm in large print- the user clicks on stm and enters the site

const Banner = ({ state, actions, onClick }) => {

  return (
    <Container>
      <Title src={logo} onClick={() => onClick(false)} />
    </Container>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Banner);

const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
`;

const Title = styled.img`
    cursor: pointer;
    display: block;
    max-width: 65%;
    max-height: 65vh;
    width: auto;
    height: auto;
`;