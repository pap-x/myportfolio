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
      Hello, I am Chris Papadopoulos and I am a full-stack developer with a strong background in Computer Engineering and a passion for building 
      intuitive and scalable web-based solutions. Proficient in a wide range of web technologies, languages and frameworks, I am comfortable working 
      on both the front-end and back-end of web applications. I have a proven track record of successfully delivering projects from concept to deployment.      </SectionText>
      <Button onClick={() => window.location = 'https://google.com'} alt>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;