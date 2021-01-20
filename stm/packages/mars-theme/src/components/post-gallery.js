import React from 'react';
import { connect, styled } from "frontity";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import arrowLeft from "./../img/arrow-left.svg";
import arrowRight from "./../img/arrow-right.svg";

//Renders the carousel on each project page that displays the projects images 
const PostGallery = ({ state, actions, images }) => {
  if (!images) return null // exception handling if no ids are given

  const items = []

  for (const [index, value] of images.entries()) {
    items.push(
    <SlideStyled index={index} key={index}>
      <ImageStyled
        className="d-block w-100"
        alt={images[index].alt}
        src={images[index].sizes.gallery ? images[index].sizes.gallery : images[index].url}
      />
    </SlideStyled>)
  }

  return (
    <Container>
        <CarouselProvider
        naturalSlideWidth={800}
        naturalSlideHeight={350}
        totalSlides={items.length}
        infinite={false}
      >
        <GalleryContainer>
          <SliderStyled>
            {items}
          </SliderStyled>
          <ButtonBackStyled></ButtonBackStyled>
          <ButtonNextStyled></ButtonNextStyled>
        </GalleryContainer>
      </CarouselProvider>
    </Container>
  );
};

export default connect(PostGallery);

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  @media (min-width: 100px) and (max-width: 576px) {
    display: none;
  }
  @media (min-width: 768px) {
    margin-top: 200px;
  }
  @media (min-width: 992px) {
    width: 100%;
    margin-top: 35px;
  }
`;

const GalleryContainer = styled.div`
  position: relative;
`;

const ButtonBackStyled = styled(ButtonBack)`
  width: 50vw;
  left: 0;
  height: 80vh;
  position: absolute;
  top: 3vh;
  background: transparent;
  border: none;
  z-index: 0;
  cursor: url(${arrowLeft}), auto;
  &:focus {
    outline:0;
  }
  @media (min-width: 100px) and (max-width: 576px) {
    display: none;
  }
  &:disabled {
    display: none;
  }
`;

const ButtonNextStyled = styled(ButtonNext)`
  width: 50vw;
  right: 0;
  height: 80vh;
  position: absolute;
  top: 3vh;
  cursor: url(${arrowRight}), auto;
  background: transparent;
  border: none;
  z-index: 0;
  &:focus {
    outline:0;
  }
  @media (min-width: 100px) and (max-width: 576px) {
    display: none;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    display: none;
  }
  &:disabled {
    display: none;
  }
`;

const SliderStyled = styled(Slider)`
`;

const SlideStyled = styled(Slide)`
`;

const ImageStyled = styled.img`
  position: absolute;
  margin: auto;
  object-fit: contain;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  max-height: 100%;
  max-width: 100%;
`;