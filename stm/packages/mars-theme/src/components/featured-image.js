import React from "react";
import { connect, styled } from "frontity";

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

  //const height = media_selected.height;
  const width = media_selected.width;

  return (
    <Container>
        <StyledImage
          src={media_selected.source_url} width={width} alt="test" 
        />
        <Text>{title}</Text>
    </Container>
  );
};

export default connect(FeaturedImage);

const Container = styled.div`
  margin-top: 16px;
  position: relative;
`;

const StyledImage = styled.img`
  max-width: 100%;
  height: auto;
  margin: auto;
  display: block;
  ${Container}:hover & {
    opacity: 0.4;
  }
  @media (min-width: 100px) and (max-width: 576px) {
    max-width: 100% !important;
    width: auto !important;
    height: auto !important;
    display: block;
  }
`;

const Text = styled.div`
  bottom: 8px;
  left: 16px;
  position: absolute;
  font-family: 'Cutive Mono', monospace;
  visibility: hidden;
  ${Container}:hover & {
    visibility: visible;
  }
  @media (min-width: 100px) and (max-width: 576px) {
    bottom: -24px;
    visibility: visible;
  }
`;

