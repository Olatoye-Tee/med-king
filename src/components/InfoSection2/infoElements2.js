import styled from 'styled-components';
import { MdArrowForward, MdKeyboardArrowRight } from 'react-icons/md';

export const InfoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  height: 800px;
  position: relative;
  z-index: 1;
  }
`;

export const InfoBg = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

export const InfoContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  position: absolute;
  padding: 8px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 40rem;
`;

export const InfoImage = styled.div`
  z-index: 3;
  position: absolute;
  // padding: 8px 24px;
  // display: flex;
  // flex-direction: column;
  // align-items: center;

  width: 866px;
  height: 900px;
  left: 350px;
  top: 250px;  

  margin-left: -3rem;

  @media screen and (max-width: 768px) {
     margin-left: 0;
  }
`;

export const InfoH1 = styled.h1`
color: #162029;
  font-size: 48px;
  text-align: center;
  width: 650px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 34px;
line-height: 51px;

text-align: center;
letter-spacing: -0.02em;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }
  
  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const InfoP = styled.p`
  margin-top: 24px;
  color: #67767D;
  width: 70%;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  max-width: 600px;

  @media screen and (max-width: 768px) {
    font-size: 22px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const InfoBtnWrapper = styled.div`
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
