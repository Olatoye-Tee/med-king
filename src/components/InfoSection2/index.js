import React, { useState } from 'react';
import DocSearch from '../../images/DocSearch.png'
import Background2 from '../../images/Background2.png'
import { InfoContainer, InfoBg, InfoContent, InfoH1, InfoImage, InfoP,} from './infoElements2';


const InfoSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <InfoContainer>
      <InfoContent>
        <InfoH1>Get First Aid</InfoH1>
        <InfoP>Get medical assistance from professionals near you, 
 as fast as possible from your home.</InfoP>
      </InfoContent>
      <InfoImage>
        <img src = {DocSearch} alt = "dashboard" />
      </InfoImage>
      <InfoBg>
      <img src = {Background2} alt = "dashboard" />
      </InfoBg>
    </InfoContainer>
  );
};

export default InfoSection;
