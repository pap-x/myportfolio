import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 8, text: 'Years of Experience', },
  { number: 6, text: 'Successful EU Projects'},
  { number: 5, text: 'Publications', },
  { number: 4, text: 'Development Stacks', }

];

const Acomplishments = () => (
  <Section>
    <SectionDivider colorAlt/>
    <br/>
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

export default Acomplishments;
