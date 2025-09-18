// src/components/sections/services/ServiceList.tsx
import { serviceData } from '@/content/services';
import React from 'react';

const ServiceList = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      {serviceData.map((category, index) => (
        <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-24 last:mb-0">
          {/* Text Content */}
          <div className={`${index % 2 !== 0 ? 'md:order-2' : ''}`}>
            <h3 className="text-3xl font-bold mb-8">{category.category}</h3>
            <div className="space-y-6">
              {category.services.map((service, sIndex) => (
                <div key={sIndex} className="border-l-2 border-brand-primary pl-4">
                  <h4 className="font-bold text-xl mb-1">{service.title}</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Illustration Placeholder */}
          <div className={`flex items-center justify-center ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
            <div className="w-full h-80 bg-brand-light-gray rounded-lg flex items-center justify-center">
              <p className="text-gray-400">Illustration for {category.category}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceList;