import React from 'react';
import { assets } from '../assets/frontend/assets';

const SecondHeader = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap  rounded-lg  text-black'>
        
        {/*---- LEFT SECTION ----*/}
        <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute bottom-0 h-auto rounded-lg' src={assets.GroupPhoto} alt="Dental Clinic" />
        </div>

        {/*---- RIGHT SECTION ----*/}
        <div className='md:w-1/2 items-start justify-center flex flex-col gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <h1 className='text-3xl md:text-5xl font-bold leading-tight '>
              Welcome to Dr. Kifaya's Dental Clinic !
            </h1>
            <div className='flex items-center gap-3'>
                <p className='text-sm md:text-base opacity-80'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
  );
};

export default SecondHeader;
