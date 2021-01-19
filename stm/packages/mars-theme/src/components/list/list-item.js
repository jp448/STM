import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedImage from "../featured-image";

/**
 * Item Component
 *
 * It renders the preview of a project. Each project contains
 * - Title: title of the project (when hovered over)
 * - FeaturedMedia: the featured image of the project
 */

const Item = ({ state, item, large }) => {

  /** Creates the random padding on each post to makes the posts look different on each render */
  const Article = styled.article`
    @media (min-width: 576px) {
      padding-top: ${Math.floor(Math.random()*50+(10))}px;
      padding-bottom: ${Math.floor(Math.random()*50+(10))}px;
      padding-left: ${Math.floor(Math.random()*20)}px;
      padding-right: ${Math.floor(Math.random()*20)}px;
      max-width: ${large? 60 : 30}%;
    }
    @media (min-width: 100px) and (max-width: 576px) {
      padding: 0;
      margin-bottom: 35px;
    }
  `;

  return (
    <Article>
      <Link link={item.link}>
        <FeaturedImage key={item.featured_media} id={item.featured_media} title={item.title.rendered} large={large} />
      </Link>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);