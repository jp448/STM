import React, { useEffect } from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import List from "./list";
import PostGallery from "./post-gallery";
import InfoContainer from "./info-container";

const Post = ({ state, actions, libraries }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  // Get the data of the post.
  const post = state.source[data.type][data.id];

  console.log(data.type);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */
  useEffect(() => {
    actions.source.fetch("/");
    List.preload();
  }, []);

  // Load the post, but only if the data is ready.
  return data.isReady ? (
    <Container>
      {/* Look at the settings to see if we should include the featured image */}
      {state.theme.featured.showOnPost && (
        <PostGalleryStyled images={post.acf.gallery} />
      )}
      <InfoContainerStyled post={post} />
    </Container>
  ) : null;
};

export default connect(Post);

const Container = styled.div`
  width: 100%;
  margin: 0;
`;

const PostGalleryStyled = styled(PostGallery)`
  z-index: 0;
`;

const InfoContainerStyled = styled(InfoContainer)`
  z-index: 10;
`;

