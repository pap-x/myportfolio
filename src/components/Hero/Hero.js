import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle>
        Welcome to <br />
        My Personal Portfolio
      </SectionTitle>
      <SectionText>
        This is an amazing portfolio so you should take a look. Built using Next.JS and React with minimum effort.
      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'} alt>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;