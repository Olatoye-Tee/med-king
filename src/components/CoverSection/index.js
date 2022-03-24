import React, { useState } from 'react';
import Background from '../../images/Rectangle 3380 (1).png'
import Dashboard from '../../images/Dashboard.png'
import { CoverContainer, CoverBg, CoverContent, CoverH1, CoverImage, CoverBtnWrapper, ArrowForward, ArrowRight } from './CoverElements';
import { Button } from '../ButtonElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CoverContainer>
      <CoverContent>
        <CoverH1>Find the solution to that health problem</CoverH1>
        <CoverBtnWrapper>
          <Button to="signup"onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true' >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </CoverBtnWrapper>
      </CoverContent>
      <CoverImage>
        <img src = {Dashboard} alt = "dashboard" />
      </CoverImage>
      <CoverBg>
        <img src= {Background} alt='background image'></img>
      </CoverBg>
    </CoverContainer>
  );
};

export default CoverSection;
