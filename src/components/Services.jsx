
import React, { useState, useEffect } from 'react';
import Card from './Card';
import servicesData from '../ServiceData';

const Services = () => {
  const [services, setServices] = useState([]);

  // Simulating data fetching
  useEffect(() => {
    setServices(servicesData); // In real-world apps, data can come from APIs
  }, []);

  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-16">
      {/* Cards Section */}
      <div className="flex justify-center gap-16 flex-wrap">
        {services.map((service) => (
          <Card key={service.id} title={service.title} iconPath={service.iconPath} link={service.link} />
        ))}
      </div>

      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">
          Get Started With <span className="text-blue-800">Teeny Tech Trek</span> Today
        </h1>
        <button className="px-10 py-4 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all text-lg font-medium">
          BOOK A SERVICE
        </button>
      </div>
    </div>
  );
};

export default Services;


