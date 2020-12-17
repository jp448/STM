import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedImage = ({ state, id, title, large }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  let media_selected = media.media_details.sizes.home_small;
  
  if (large) {
    media_selected = media.media_details.sizes.home_large;
    if (!media_selected) {
      // If an image is smaller than the size to be generated it fails to be generated. Hence fallback!
      media_selected = media.media_details.sizes.home_small;
    }
  }

  const height = media_selected.height;
  const width = media_selected.width;

  return (
    <Container style={{height: height, width: width}} >
        <StyledImage
          style={{backgroundImage: `url(${media_selected.source_url})`, height: height, width: width}}
        >
        <Layer style={{height: height, width: width}}></Layer>
        <Text>{title}</Text>
        </StyledImage>
    </Container>
  );
};

export default connect(FeaturedImage);

const Container = styled.div`
  margin-top: 16px;
  position: relative;
  @media (min-width: 100px) and (max-width: 576px) {
    width: 100%;
  }
`;

const StyledImage = styled.div`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  -o-object-fit: scale-down;
  object-fit: scale-down;
  overflow: hidden;
  &:hover {

  }
`;

const Layer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  ${StyledImage}:hover & {
    background-color: rgba(230,230,230,0.7);
  }
`;

const Text = styled.div`
  bottom: 8px;
  left: 16px;
  position: absolute;
  font-family: 'Cutive Mono', monospace;
  visibility: hidden;
  ${StyledImage}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

