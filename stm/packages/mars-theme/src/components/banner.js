import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";


const Banner = ({ state, actions, onClick }) => {

  return (
    <Container>
      <Title onClick={() => onClick(false)}>stm°</Title>
    </Container>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Banner);

const Container = styled.div`
    margin: 0;
`;

const Title = styled.h1`
    margin-top: 10rem;
    text-align: center;
    color: #AA9039;
    font-size: 20rem;
    font-family: 'Krona One', sans-serif;
    cursor: pointer;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;