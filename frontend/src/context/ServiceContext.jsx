import React, { createContext } from 'react';
import { servicesData } from '../assets/frontend/assets'; // Adjust the path as needed

export const ServicesContext = createContext();

const ServicesContextProvider = (props) => {
    const value = {
        services: servicesData
    };

    return (
        <ServicesContext.Provider value={value}>
            {props.children}
        </ServicesContext.Provider>
    );
};

export default ServicesContextProvider;