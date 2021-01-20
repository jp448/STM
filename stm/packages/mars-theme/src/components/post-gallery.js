import React from 'react';
import { connect, styled } from "frontity";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import arrowLeft from "./../img/arrow-left.svg";
import arrowRight from "./../img/arrow-right.svg";
import exit from "./../img/exit.svg";

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
  console.log(state.router);
  const clickExit = (e) => {
    window.history.back();
    };

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
      <ButtonExitStyled onClick={clickExit}><img src={exit}/></ButtonExitStyled>
    </Container>
  );
};

export default connect(PostGallery);

const Container = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  // Smallest device
  @media (min-width: 100px) and (max-width: 576px) {
    display: none;
  }
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    margin-top: 6vw;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    margin-top: 3vw;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 100%;
    margin-top: 20px;
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
  @media (min-width: 576px) and (max-width: 768px) {
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
  @media (min-width: 576px) and (max-width: 768px){
    display: none;
  }
  &:disabled {
    display: none;
  }
`;
const ButtonExitStyled = styled.div`
  width: 2rem;
  position: absolute;
  top: 0;
  right: 50px;
  border: none;
  &:hover {
    cursor: pointer;
  }
  @media (min-width: 100px) and (max-width: 576px) {
    display: none;
  }
  @media (min-width: 576px) {
    width: 1.5rem;
  }
  @media (min-width: 768px) and (max-width: 992px) {
    width: 1.5rem;
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