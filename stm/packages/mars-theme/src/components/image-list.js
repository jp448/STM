import React from 'react';
import { connect, styled } from "frontity";

const ImageList = ({ state, actions, images }) => {
  if (!images) return null // exception handling if no ids are given

  const items = []

  for (const [index, value] of images.entries()) {
    items.push(
      <ImageStyled
        className="d-block w-100"
        alt={images[index].alt}
        src={images[index].sizes.gallery ? images[index].sizes.gallery : images[index].url}
        key={images[index].id}
      />)
  }

  return (
    <Container>
        {items}
    </Container>
  );
};

export default connect(ImageList);

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 100px) and (max-width: 576px) {
    margin-top: 70px;
    margin-left: 0;
    margin-right: 0;
    padding-bottom: 0;
    width: 100%;
  }
  @media (min-width: 577px) {
    display: none;
  }
`;

const ImageStyled = styled.img`
  margin: auto;
  max-height: 100%;
  max-width: 100%;
  padding-bottom: 20px;
  display: block;
`;