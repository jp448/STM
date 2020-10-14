import React from 'react';
import { connect, styled, Global, css } from "frontity";
import Image from "@frontity/components/image";
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';

const PostGallery = ({ state, actions, ids }) => {
  let gallery = ids.split(",");
  const image_ids = gallery.map(id => Number(id));

  if (!image_ids || !image_ids.length) return null;

  const gallery_images = image_ids.map(element => state.source.data['media/']['items'].find(o => o.id === element));

  const items = []

  for (const [index, value] of gallery_images.entries()) {
    items.push(
    <Slide index={index}>
    <img
      className="d-block w-100"
      alt={gallery_images[index].title.rendered}
      src={gallery_images[index].source_url}
    />
  </Slide>)
  }

  return (
    <Container>
        <CarouselProvider
        naturalSlideWidth={800}
        naturalSlideHeight={600}
        totalSlides={items.length}
      >
        <Slider>
          {items}
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
      </CarouselProvider>
    </Container>
  );
};

export default connect(PostGallery);

const Container = styled.div`
  margin-top: 16px;
  height: 300px;
  width: 400px;
  position: relative;
`;
