import React from 'react';
import { connect, styled } from "frontity";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons'

const PostGallery = ({ state, actions, images }) => {
  if (!images) return null // exception handling if no ids are given

  const items = []

  for (const [index, value] of images.entries()) {
    items.push(
    <SlideStyled index={index}>
      <ImageStyled
        className="d-block w-100"
        alt={images[index].alt}
        src={images[index].sizes.large}
      />
    </SlideStyled>)
  }

  return (
    <Container>
        <CarouselProvider
        naturalSlideWidth={800}
        naturalSlideHeight={425}
        totalSlides={items.length}
        infinite={false}
      >
        <GalleryContainer>
          <SliderStyled>
            {items}
          </SliderStyled>
          <ButtonBackStyled><FontAwesomeIcon icon={faCaretLeft} size="4x"/></ButtonBackStyled>
          <ButtonNextStyled><FontAwesomeIcon icon={faCaretRight} size="4x"/></ButtonNextStyled>
        </GalleryContainer>
      </CarouselProvider>
    </Container>
  );
};

export default connect(PostGallery);

const Container = styled.div`
  position: relative;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  padding-bottom: 100px;
`;

const GalleryContainer = styled.div`
  position: relative;
`;

const ButtonBackStyled = styled(ButtonBack)`
  left: -50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  @media (min-width: 100px) and (max-width: 576px) {
    display: none;
  }
`;

const ButtonNextStyled = styled(ButtonNext)`
  right: -50px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  @media (min-width: 100px) and (max-width: 576px) {
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