import React from 'react';
import Header from '../components/Header';
import ServicesSection from '../components/ServiceSection';
import SecondHeader from '../components/SecondHeader';
import SpecialityMenu from '../components/SpecialityMenu';

const Home = () => {
  return (
    <div >
      <Header  />
      <SecondHeader/>
      <ServicesSection />
      <SpecialityMenu />
    </div>
  );
};

export default Home;
