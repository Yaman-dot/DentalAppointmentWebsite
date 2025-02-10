import React, { useContext } from 'react';
import ServicesCard from './ServiceCard';
import { ServicesContext } from '../context/ServiceContext';
import { Link } from 'react-router-dom';

const ServicesSection = () => {
  const { services } = useContext(ServicesContext); // Fetching services from context

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="text-3xl font-medium text-center mb-8">Our Services</h2>

      {/* Grid Layout for Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <Link to={`/services/${service.id}`} key={index} className="no-underline">
            <ServicesCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServicesSection;