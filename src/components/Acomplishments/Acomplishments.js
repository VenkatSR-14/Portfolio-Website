import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Kaggle Competition', text: 'Secured 3rd Place.'},
  { number: 'Patent', text: 'Injury detection patent.(202241054225)', },
  { number: 'Spot Award', text: 'Award @Airbus', },
  { number: 'Silver Medalist', text: 'Badminton(Interzonals)', },
  { number: 'Author', text: "Fidelity's Web Capturing Pillar", }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider/>
  </Section>
);

export default Acomplishments;
