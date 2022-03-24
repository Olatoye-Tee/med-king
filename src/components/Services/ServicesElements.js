import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const ServicesContainer = styled.div`
  background: white
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 600px;
  position: relative;
  z-index: 1;
  }
`;

export const ServicesBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const ServicesContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 20rem;

  width: 866px;
  height: 900px;
  left: 300px;
  top: -150px; 
`;

export const ServicesH1 = styled.h1`
  color: #16202A;
  font-size: 48px;
  text-align: center;
  width: 700px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 60px;
line-height: 78px;

text-align: center;
letter-spacing: -0.02em;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;


export const ServicesBtnWrapper = styled.div`
  margin-top: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
  margin-left: 8px;
  font-size: 20px;
`;

export const ArrowRight = styled(MdKeyboardArrowRight)`
  margin-left: 8px;
  font-size: 20px;
`;
