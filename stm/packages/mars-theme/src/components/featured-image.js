import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedImage = ({ state, id, title, large }) => {
  const media = state.source.attachment[id];

  if (!media) return null;

  const srcset =
    Object.values(media.media_details.sizes)
      // Get the url and width of each size.
      .map((item) => [item.source_url, item.width])
      // Recude them to a string with the format required by `srcset`.
      .reduce(
        (final, current, index, array) =>
          final.concat(
            `${current.join(" ")}w${index !== array.length - 1 ? ", " : ""}`
          ),
        ""
      ) || null;

  return (
    <Container>
        <StyledImage
          style={{backgroundImage: `url(${media.media_details.sizes.medium.source_url})`, height: media.media_details.sizes.medium.height, width: media.media_details.sizes.medium.width}}
        >
        <Text>{title}</Text>
        </StyledImage>
    </Container>
  );
};

export default connect(FeaturedImage);

const Container = styled.div`
  margin-top: 16px;
  height: 300px;
  width: 400px;
  position: relative;
  @media (min-width: 100px) and (max-width: 576px) {
    width: 100%;
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
`;

const StyledImage = styled.div`
  position: absolute;
  background-size: contain;
  background-repeat: no-repeat;
  -o-object-fit: scale-down;
  object-fit: scale-down;
  overflow: hidden;

  ${Container}:hover & {
    opacity: 0.3;
  }
`;