import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedImage from "../featured-image";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item, large }) => {

  const Article = styled.article`
    @media (min-width: 576px) {
      padding-top: ${Math.floor(Math.random()*200+(10))}px;
      padding-bottom: ${Math.floor(Math.random()*100+(10))}px;
      padding-left: ${Math.floor(Math.random()*20+(10))}px;
      padding-right: ${Math.floor(Math.random()*20+(10))}px;
    }
    @media (min-width: 100px) and (max-width: 576px) {
      padding: 0;
    }
  `;
  // const Article = styled.article`
  // `;

  return (
    <Article>
      <Link link={item.link}>
        <FeaturedImage id={item.featured_media} title={item.title.rendered} large={large} />
      </Link>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);



