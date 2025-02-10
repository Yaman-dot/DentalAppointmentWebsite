import React from 'react'
import PropTypes from 'prop-types'
import { assets } from '../assets/frontend/assets'

const ServiceCard = ({image, title, description}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="p-6">
        {/* Service Name */}
        <h3 className="text-xl font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-600 mb-4">{description}</p>

        {/* Learn More Button */}
        <button className="bg-primary text-white px-4 py-2 rounded-md hover:bg-primary-dark transition">
          Learn More
        </button>
      </div>
    </div>
  )
}
ServiceCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}

export default ServiceCard