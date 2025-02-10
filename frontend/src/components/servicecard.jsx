import React from 'react';
import PropTypes from 'prop-types';

const ServiceCard = ({ image, title, type }) => {
  return (
    <div className="border border-green-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-50 bg-white">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="bg-green-50 w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-4">
        {/* Availability Indicator */}
        <div className="flex items-center gap-2 text-sm text-center text-green-500">
          <p className="w-2 h-2 bg-green-500 rounded-full"></p>
          <p>Available</p>
        </div>

        {/* Service Name */}
        <p className="text-gray-900 text-lg font-medium">{title}</p>

        {/* Service Type */}
        <p className="text-gray-600 text-sm">{type}</p>
      </div>
    </div>
  );
};

ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired, // Now correctly defined
};

export default ServiceCard;
