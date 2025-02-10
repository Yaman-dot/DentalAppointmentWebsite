import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RelatedDoctors from '../components/RelatedDoctors';
import { assets } from '../assets/frontend/assets'; // Assuming assets are available
import { ServicesContext } from '../context/ServiceContext';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const { services, doctors, currencySymbol } = useContext(ServicesContext); // Use ServicesContext
  const [service, setService] = useState(null);
  const [relatedDoctors, setRelatedDoctors] = useState([]);

  console.log('Services:', services); // Debug: Check if services are loaded
  console.log('Doctors:', doctors); // Debug: Check if doctors are loaded
  console.log('Currency Symbol:', currencySymbol); // Debug: Check if currencySymbol is available

  useEffect(() => {
    const foundService = services.find((s) => s.id === serviceId);
    console.log('Found Service:', foundService); // Debug: Check if service is found
    setService(foundService);

    if (foundService) {
      const relDocs = doctors.filter((doc) => doc.speciality === foundService.specialist); // Match doctors by specialist
      console.log('Related Doctors:', relDocs); // Debug: Check if related doctors are found
      setRelatedDoctors(relDocs);
    }
  }, [serviceId, services, doctors]);

  if (!service) {
    return <div>Loading...</div>; // Show loading state if service is not found
  }

  return (
    <div>
      {/* ---------- Service Details ----------------*/}
      <div className="flex flex-col sm:flex-row gap-4">
        <div>
          <img
            className="bg-primary w-full sm:max-w-72 rounded-lg"
            src={service.image}
            alt={service.title}
          />
        </div>
        <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
          {/* -----------Service info----------------*/}
          <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">
            {service.title}
            <img className="w-5" src={assets.verified_icon} alt="" />
          </p>
          <div className="flex items-center gap-2 text-sm mt-1 text-gray-600">
            <p>{service.type}</p>
            <button className="py-0.5 px-2 border text-xs rounded-md">
              {service.specialist}
            </button>
          </div>
          {/*------Service About ---------- */}
          <div>
            <p className="flex items-center gap-1 text-sm font-medium text-gray-900 mt-3">
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className="text-sm text-gray-500 max-w-[700px] mt-1">
              {service.description}
            </p>
          </div>
          <p className="text-gray-500 font-medium mt-4">
            Service fee: <span className="text-gray-600">{currencySymbol}{service.fee}</span>
          </p>
        </div>
      </div>

      {/* Related Doctors */}
      <RelatedDoctors speciality={service.specialist} docId={null} />
    </div>
  );
};

export default ServiceDetail;