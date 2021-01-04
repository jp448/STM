import React from "react";
import { connect, styled } from "frontity";
import Item from "./list-item";

function shuffleArray(array) {
  // only shuffle in client side to prevent images not matching item description
  if (typeof window !== 'undefined') {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  return array;
}

const List = ({ state }) => {
  // Get the data of the current list.
  const data = state.source.get(state.router.link);

  let projects = shuffleArray([...data.items]);

  let sizeArray = [false];
  let toggle = true;
  for (let i = 1; i < projects.length; i += 2) {
    sizeArray.push(toggle);
    if (i + 2 <= projects.length) {
      sizeArray.push(toggle);
    }
    toggle = !toggle;
  }
  let iterator = -1;

  return (
    <Container>
      {/* If the list is a taxonomy, we render a title. */}

      {projects.map(({ type, id }) => {
        const item = state.source[type][id];
        iterator += 1;
        // Render one Item component for each one.
        return (<Item key={item.id} item={item} large={sizeArray[iterator]} />);
       })}
    </Container>
  );
};

export default connect(List);

const Container = styled.section`
  margin: 0;
  padding: 24px;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  @media (min-width: 100px) and (max-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    padding: 0px;
    margin-top: 60px;
  }
`;
