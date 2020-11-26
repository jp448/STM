import React, { useState, useRef } from "react";
import { styled } from "frontity";

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
  }

  return (
    <AccordionSection>
      <AccordionContent 
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
      >
        <AccordionText>
            {props.content}
        </AccordionText> 
      </AccordionContent>  
      <AccordionStyle onClick={toggleAccordion}>
        <AccordionTitle>{props.title}</AccordionTitle>
      </AccordionStyle>
    </AccordionSection>
  );
}

export default Accordion;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const AccordionStyle = styled.button`
    background-color: #fff;
    color: #444;
    cursor: pointer;
    padding: 18px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
    &:hover {
        background-color: #fff;
    }
    &:active {
        background-color: #fff;
    }
`;

const AccordionTitle = styled.p`
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
`;

const AccordionContent = styled.div`
  background-color: white;
  overflow: hidden;
  transition: max-height 0.6s ease;
`;

const AccordionText = styled.div`
    font-family: "Open Sans", sans-serif;
    font-weight: 400;
    font-size: 14px;
    padding: 18px;
    border-top: 4px solid black;
    font-family: 'Cutive Mono', monospace;
`;