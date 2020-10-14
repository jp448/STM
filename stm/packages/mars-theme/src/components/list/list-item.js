import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";
import FeaturedMedia from "../featured-media";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Item = ({ state, item }) => {
  const author = state.source.author[item.author];
  const date = new Date(item.date);

  const Article = styled.article`
    padding-top: ${Math.floor(Math.random()*100+(-10))}px;
    padding-bottom: ${Math.floor(Math.random()*100+(-10))}px;
    padding-left: ${Math.floor(Math.random()*50+(-10))}px;
    padding-right: ${Math.floor(Math.random()*50+(-10))}px;
  `;
  return (
    <Article>
      <Link link={item.link}>
        <FeaturedMedia id={item.featured_media} title={item.title.rendered} />
      </Link>
    </Article>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Item);



