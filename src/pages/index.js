import React, { useState } from 'react';
import CoverSection from '../components/CoverSection';
import Footer from '../components/Footer';
import InfoSection1 from '../components/InfoSection1';
import InfoSection2 from '../components/InfoSection2';
import { signupmedObj, signupuserObj, firstaidObj, mobileappObj } from '../components/InfoSection1/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <CoverSection />
      <InfoSection1 {...signupmedObj} />
      <InfoSection1 {...signupuserObj} />
      <InfoSection2 />
      <InfoSection1 {...mobileappObj} />
      <Services />
      <Footer />
    </>
  );
};

export default Home;
