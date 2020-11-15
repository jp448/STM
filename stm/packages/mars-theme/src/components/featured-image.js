import React from "react";
import { connect, styled } from "frontity";
import Image from "@frontity/components/image";

const FeaturedImage = ({ state, id, title }) => {
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
          alt={media.title.rendered}
          src={media.source_url}
          srcSet={srcset}
        />
        <Text>{title}</Text>
    </Container>
  );
};

export default connect(FeaturedImage);

const Container = styled.div`
  margin-top: 16px;
  height: 300px;
  width: 400px;
  position: relative;
`;

const Text = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  ${Container}:hover & {
    visibility: visible;
  }
`;

const StyledImage = styled(Image)`
  display: block;
  height: 100%;
  width: 100%;
  -o-object-fit: scale-down;
  object-fit: scale-down;
  overflow: hidden;
  &:hover {
    opacity: 0.3;
  }
  ${Text}:hover & {
    opacity: 0.5;
  }
`;