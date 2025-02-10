import React from 'react'
import {assets} from '../assets/frontend/assets'
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className='md:mx-10'>
      <hr className='my-10'/>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>
        {/* --------Left Section-----------*/}
        <div>
          <img onClick = {()=>navigate('/')} className='mb-5 w-20 cursor-pointer' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-gray-600 leading-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
        </div>
        {/* --------Center Sect ion-----------*/}
        <div>
          <p className='text-xl font-medium mb-5'>DR. KIFAYA'S CLINIC</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>Home</li>
            <li>Our Services</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        {/* --------Right Section-----------*/}
        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li>+962-7-8693-2156</li>
            <li>Clinic@KifayasDentalClinic.com</li>
          </ul>
        </div>
      </div>

      {/*CopyRight Text*/}
      <div>
        <hr/>
        <p className='py-5 text-sm text-center'>Copyright 2024 @ Dr.KifayasDentalClinic - All Right Reserved.</p>
      </div>
    </div>
  )
}

export default Footer