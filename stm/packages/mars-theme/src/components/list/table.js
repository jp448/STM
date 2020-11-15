import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

/**
 * Item Component
 *
 * It renders the preview of a blog post. Each blog post contains
 * - Title: clickable title of the post
 * - Author: name of author and published date
 * - FeaturedMedia: the featured image/video of the post
 */
const Table = ({ state, items }) => {

  return (
    <Table>
      <Link link={item.link}>
        <FeaturedImage id={item.featured_media} title={item.title.rendered} />
      </Link>
    </Table>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Table);



