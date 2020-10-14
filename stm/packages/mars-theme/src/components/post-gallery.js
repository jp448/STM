import React from 'react';
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const PostGallery = ({ state, actions, ids }) => {
  let gallery = ids.split(",");
  const image_ids = gallery.map(id => Number(id));

  if (!image_ids || !image_ids.length) return null;

  const gallery_images = image_ids.map(element => state.source.data['media/']['items'].find(o => o.id === element));

  const items = []

  for (const [index, value] of gallery_images.entries()) {
    items.push(
    <Carousel.Item>
    <img
      className="d-block w-100"
      alt={gallery_images[index].title.rendered}
      src={gallery_images[index].source_url}
    />
  </Carousel.Item>)
  }

  return (
    <Container>
        <Carousel>
            {items}
        </Carousel>
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

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  -o-object-fit: scale-down;
  object-fit: scale-down;
  overflow: hidden;
  &:hover {
    opacity: 0.5;
  }
`;

const getMedia = async (libraries, state, setData) => {

    // Get other images
    const response = await libraries.source.api.get({
      endpoint: "media",
    });
    const entitiesAdded = await libraries.source.populate({ response, state });
    await setData({
      isReady: true,
      items: entitiesAdded
    });
  
  };