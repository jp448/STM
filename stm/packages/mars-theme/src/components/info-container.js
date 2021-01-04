import React from "react";
import { connect, styled } from "frontity";
import Accordion from "./utility/accordion";

const InfoContainer = ({ state, actions, post, libraries }) => {

  // Get the html2react component.
  const Html2React = libraries.html2react.Component;
  
  const ProjectTitle = <Title dangerouslySetInnerHTML={{ __html: post.title.rendered }} />;

  const ContentAccordion = <div>
    <p>Project info</p>
    {(post.acf.year === undefined || post.acf.year === "") ? "" : <p>jahr: {post.acf.year}</p>}
    {(post.acf.location === undefined || post.acf.location === "")  ? "" : <p>ort: {post.acf.location}</p>}
    {(post.acf.programm === undefined || post.acf.programm === "")  ? "" : <p>programm: {post.acf.program}</p>}
    {/* Render the content using the Html2React component so the HTML is processed
    by the processors we included in the libraries.html2react.processors array. */}
    <Html2React html={post.content.rendered} />
  </div>;

  return (
    <CollapsibleStyled>
        <Accordion
            title={ProjectTitle}
            content={ContentAccordion}
        />            
    </CollapsibleStyled>
  );
};

export default connect(InfoContainer);

const CollapsibleStyled = styled.div`
  bottom: 0;
  position: fixed;
  width: 100%;
`;

const Title = styled.h1`
  margin: 0;
  color: rgba(12, 17, 43);
  font-size: 1rem !important;
  text-align: center !important;
  text-decoration: none !important;
`;
