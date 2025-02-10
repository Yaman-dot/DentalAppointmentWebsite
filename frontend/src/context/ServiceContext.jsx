import React, { createContext, useContext } from 'react';
import { servicesData } from '../assets/frontend/assets'; // Adjust the path as needed
import { AppContext } from '../context/AppContext'; // Assuming this context provides doctors and currencySymbol

export const ServicesContext = createContext();

const ServicesContextProvider = (props) => {
  const { doctors, currencySymbol } = useContext(AppContext); // Access doctors and currencySymbol from AppContext

  const value = {
    services: servicesData,
    doctors,
    currencySymbol, // Include currencySymbol in the context value
  };

  return (
    <ServicesContext.Provider value={value}>
      {props.children}
    </ServicesContext.Provider>
  );
};

export default ServicesContextProvider;