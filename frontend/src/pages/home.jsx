import React from 'react';
import Header from '../components/Header';
import ServicesSection from '../components/ServiceSection';
import SecondHeader from '../components/SecondHeader';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';
import Banner from '../components/Banner';

const Home = () => {
  return (
    <div >
      <Header  />
      <SecondHeader/>
      <ServicesSection />
      <SpecialityMenu />
      <TopDoctors />
      <Banner />
    </div>
  );
};

export default Home;
