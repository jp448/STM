import React, {useState, useEffect } from 'react';
import { connect, styled } from "frontity";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import arrowLeft from "./../img/arrow-left.svg";
import arrowRight from "./../img/arrow-right.svg";
import arrowLeftpng from "./../img/arrows-left.png";
import arrowRightpng from "./../img/arrows-right.png";
import exit from "./../img/exit.svg";

//Renders the carousel on each project page that displays the projects images 
const PostGallery = ({ state, actions, images }) => {
  if (!images) return null // exception handling if no ids are given


  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    
    window.addEventListener("resize", handleResize);
    
    handleResize();
    
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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

  const clickExit = (e) => {
    window.history.back();
    };

  return (
    <Container>
      <CarouselProvider
        naturalSlideWidth={windowSize.width !== undefined ? windowSize.width : 800}
        naturalSlideHeight={windowSize.height !== undefined ? windowSize.height : 350}
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
  margin: 0;
  position: relative;
  top: 50%;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  // Smallest device
  @media (min-width: 100px) and (max-width: 576px) {
    display: none;
  }
  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) {
    margin-top: 0;
  }
  // Medium devices (tablets, 768px and up)
  @media (min-width: 768px) {
    margin-top: 0;
  }
  // Large devices (desktops, 992px and up)
  @media (min-width: 992px) {
    width: 100%;
    margin-top: 0;
  }
`;

const GalleryContainer = styled.div`
  position: relative;
`;

const ButtonBackStyled = styled(ButtonBack)`
  width: 50vw;
  left: 0;
  height: 100%;
  position: absolute;
  top: 3vh;
  background: transparent;
  border: none;
  z-index: 0;
  cursor: url(${arrowLeft}), url(${arrowLeftpng}), pointer;
  cursor: -webkit-image-set(url(${arrowLeftpng})), pointer;
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
  height: 100%;
  position: absolute;
  top: 3vh;
  cursor: url(${arrowRight}), url(${arrowRightpng}), pointer;
  cursor: -webkit-image-set(url(${arrowRightpng})), pointer;
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
  position: fixed;
  top: 30px;
  right: -8px;
  -ms-transform: translateY(-50%);
  transform: translateY(-50%);
  -ms-transform: translateX(-50%);
  transform: translateX(-50%);
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