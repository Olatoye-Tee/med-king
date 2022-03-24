import React, { useState } from 'react';
import CTA from '../../images/CTA.png'
import { ServicesContainer, ServicesBg, ServicesContent, ServicesH1, ServicesBtnWrapper, ArrowForward, ArrowRight } from './ServicesElements';
import { Button } from '../ButtonElements';

const ServicesSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <ServicesContainer>
      <ServicesContent>
        <ServicesH1>Find medical personnel around you</ServicesH1>
        <ServicesBtnWrapper>
          <Button to="signup" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='false'>
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </ServicesBtnWrapper>
      </ServicesContent>
      <ServicesBg>
        <img src= {CTA} alt='background image'></img>
      </ServicesBg>
    </ServicesContainer>
  );
};

export default ServicesSection;

