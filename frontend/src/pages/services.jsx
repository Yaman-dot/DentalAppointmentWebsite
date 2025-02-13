import React, { useContext, useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { ServicesContext } from '../context/ServiceContext';
import ServiceCard from '../components/servicecard';

const Service = () => {
  const { services } = useContext(ServicesContext);
  const [filteredServices, setFilteredServices] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const type = searchParams.get('type');
  const [showFilter, setShowFilter] = useState(false)

  useEffect(() => {
    if (type) {
      setFilteredServices(services.filter(service => service.type === type));
    } else {
      setFilteredServices(services);
    }
  }, [type, services]);

  const filterServicesByType = (type) => {
    navigate(`/services?type=${type}`);
  };

  return (
    <div className="flex flex-col sm:flex-row">
      <div>
        <p className='text-gray-600'>Browse through our services</p>
        <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter? 'bg-primary text-white' : ''}`} onClick={()=>setShowFilter(prev => !prev)}>Filters</button>
        <div className={` flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
          <p onClick={() => filterServicesByType('')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "All Services" ? "bg-green-100 text-black" : ""}`}>All Services</p>
          <p onClick={() => filterServicesByType('Preventive')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Preventive" ? "bg-green-100 text-black" : ""}`}>Preventive</p>
          <p onClick={() => filterServicesByType('Restorative')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Restorative" ? "bg-green-100 text-black" : ""}`}>Restorative</p>
          <p onClick={() => filterServicesByType('Therapeutic')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Therapeutic" ? "bg-green-100 text-black" : ""}`}>Therapeutic</p>
          <p onClick={() => filterServicesByType('Cosmetic')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Cosmetic" ? "bg-green-100 text-black" : ""}`}>Cosmetic</p>
          <p onClick={() => filterServicesByType('Orthodontic')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Orthodontic" ? "bg-green-100 text-black" : ""}`}>Orthodontic</p>
          <p onClick={() => filterServicesByType('Surgical')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${type === "Surgical" ? "bg-green-100 text-black" : ""}`}>Surgical</p>
        </div>
      </div>
      </div>

      {/* Service Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4 w-3/4">
        {filteredServices.map((service) => (
          <div key={service.id} onClick={() => navigate(`/services/${service.id}`)} className="cursor-pointer">
            <ServiceCard
              image={service.image}
              title={service.title}
              description={service.description}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;