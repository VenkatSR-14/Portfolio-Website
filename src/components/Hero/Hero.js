import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nonpadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome To<br/>
        My Personal Portfolio!
      </SectionTitle>
      <SectionText>
        I love Problem Solving, Optimization and I have a unique blend of experiences in AI/ML, Data Engineering and Software Engineering
      </SectionText>
      <Button onClick = {() => window.location = 'https://drive.google.com/file/d/1cMl6fPgw7gp_NHk9FqMHjgo6Mc0F58GP/view'}>
        View Resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;