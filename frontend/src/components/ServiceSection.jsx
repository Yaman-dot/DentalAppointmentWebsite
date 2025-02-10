import React from 'react';
import ServicesCard from './servicecard';
import { assets } from '../assets/frontend/assets'; // Adjust the import path as needed

const ServicesSection = () => {
  const services = [
    {
      image: assets.placeHolder, // Replace with your image path
      title: 'Teeth Cleaning',
      description: 'Professional teeth cleaning to remove plaque and tartar, ensuring a healthy smile.',
    },
    {
        image: assets.placeHolder, // Replace with your image path
        title: 'Teeth Cleaning',
        description: 'Professional teeth cleaning to remove plaque and tartar, ensuring a healthy smile.',
    },
    {
        image: assets.placeHolder, // Replace with your image path
        title: 'Teeth Cleaning',
        description: 'Professional teeth cleaning to remove plaque and tartar, ensuring a healthy smile.',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12 ">
      <h2 className="text-3xl font-bold text-center mb-8 ">Our Services</h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <ServicesCard
            key={index}
            image={service.image}
            title={service.title}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;