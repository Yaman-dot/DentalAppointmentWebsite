import React from 'react';
import { assets } from '../assets/frontend/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20 text-white'>
        
        {/*---- LEFT SECTION ----*/}
        <div className='md:w-1/2 items-start justify-center flex flex-col gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
            <h1 className='text-3xl md:text-5xl font-bold leading-tight'>
              Welcome to Dr. Kifaya's Dental Clinic
            </h1>
            <p className='text-lg md:text-xl opacity-90'>
              Providing exceptional dental care in Jordan
            </p>
            <div className='flex items-center gap-3'>
                <img src={assets.group_profiles} alt="Doctors" />
                <p className='text-sm md:text-base opacity-80'>
                  Book an appointment with our most trusted doctors
                </p>
            </div>
            <a href="#speciality" className='flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-md font-medium hover:bg-opacity-90 transition w-max transform hover:scale-105 shadow-md md:justify-center'>
                Book Appointment
                <img className='w-5' src={assets.arrow_icon} alt="Arrow" />
            </a>
        </div>

        {/*---- RIGHT SECTION ----*/}
        <div className='md:w-1/2 relative'>
            <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="Dental Clinic" />
        </div>
    </div>
  );
};

export default Header;
