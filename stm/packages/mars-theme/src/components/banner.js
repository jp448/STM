import React from "react";
import { connect, styled } from "frontity";


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
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
    height: 100vh;
`;

const Title = styled.h1`
    color: #AA9039;
    font-size: 20rem;
    font-family: 'Krona One', sans-serif;
    cursor: pointer;
    @media (min-width: 100px) and (max-width: 800px) {
      font-size: 10rem;
  }
`;