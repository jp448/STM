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
      width: ${large? 55 : 25}vw;
      margin-left: 5vw;
      margin-right: 5vw;
      margin-bottom: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
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
        <Text>{item.title.rendered}</Text>
      </Link>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);

const Text = styled.div`
  display: none;
  @media (min-width: 100px) and (max-width: 576px) {
    display: inline-block;
    margin-left: 16px;
    font-family: "Cutive Mono", monospace;
  }
`;