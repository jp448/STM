import React, { useState, useEffect, useRef } from "react";
import { styled } from "frontity";
import arrowDown from "./../../img/arrow_down.svg";

//accordian is toggled when user clicks on the title in the project post page. 

function Accordion(props) {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [height, setHeightWindow] = useState(typeof window === "undefined" ? 0 : window.innerHeight);

  useEffect(() => {
    const handleWindowResize = () => {
      setHeightWindow(window.innerHeight);
      if (setActive) {
        setHeightState(
          setActive === "active" ? "0px" : `${content.current.scrollHeight > height - title.current.scrollHeight ? height - title.current.scrollHeight : content.current.scrollHeight}px`
        );
      }
    }
    window.addEventListener("resize", handleWindowResize);

    // Return a function from the effect that removes the event listener
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  const content = useRef(null);
  const title = useRef(null);

  function toggleAccordion() {
    if (typeof window !== "undefined") setHeightWindow(window.innerHeight);
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight > height - title.current.scrollHeight ? height - title.current.scrollHeight : content.current.scrollHeight}px`
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
      <AccordionStyle ref={title} onClick={toggleAccordion}>
        <AccordionTitle><Arrow src={arrowDown}/>{props.title}</AccordionTitle>
      </AccordionStyle>
    </AccordionSection>
  );
}

export default Accordion;

const AccordionSection = styled.div`
  display: flex;
  flex-direction: column-reverse;
  left: 0;
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
    margin: 0px;
    &:hover {
        background-color: #fff;
    }
    &:active {
        background-color: #fff;
    }
`;

const AccordionTitle = styled.div`
    font-family: "Open Sans", sans-serif;
    font-weight: 600;
    font-size: 14px;
`;

const AccordionContent = styled.div`
  background-color: white;
  overflow-x: hidden;
  overflow-y: auto;
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

const Arrow = styled.img`
    height: 16px;
    float: left;
    padding-right: 10px;
`;