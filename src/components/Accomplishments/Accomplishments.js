import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AccomplishmentsStyles";

const data = [
  { number: 10, text: "Years of Experience" },
  { number: 6, text: "Successful EU Projects" },
  { number: 6, text: "Publications" },
  { number: 4, text: "Development Stacks" },
];

const Accomplishments = () => (
  <Section>
    <SectionDivider colorAlt />
    <br />
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Accomplishments;
