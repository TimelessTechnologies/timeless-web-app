import React, { useState } from 'react';
import styled from 'styled-components';
import { ChevronRight } from '@styled-icons/fa-solid';
import { device } from "../helpers/mediaQueries";

const AccordionContainer = styled.div`
  width: 100%;
`;

const AccordionHeader = styled.div`
  background-color: #f5f5f5;
  padding: 10px;
  cursor: pointer;
`;

const AccordionContent = styled.div`
  display: ${({ isOpen }) => (isOpen ? 'block' : 'none')};
  background-color: #ffffff;
  padding: 10px;
`;

const Chevron = styled(ChevronRight)`
  width: 15px;

  @media ${device.sm} {
    width: 10px;
  }
`

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AccordionContainer>
      <AccordionHeader onClick={toggleAccordion}><Chevron /> {title}</AccordionHeader>
      <AccordionContent isOpen={isOpen}>{children}</AccordionContent>
    </AccordionContainer>
  );
};

export default Accordion;