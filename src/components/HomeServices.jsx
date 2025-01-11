import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import Card from "./Card"; // Import Card Component
import servicesData from "../ServiceData"; // Import services data

const HomeServices = () => {
  return (
    <div className="bg-blue-200 min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-16">
      {/* Cards Section */}
      <div className="flex justify-center gap-16 flex-wrap">
        {servicesData.map((service) => (
          <Card
            key={service.id}
            title={service.title}
            iconPath={service.iconPath}
            link={service.link}
          />
        ))}
      </div>

      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-8">
          Get Started With{" "}
          <span className="text-blue-800">Teeny Tech Trek</span> Today
        </h1>
        <Link to="/service-booking">
          <button className="px-10 py-4 bg-[#4F78AF] text-white rounded-full shadow hover:bg-blue-700 transition-all text-lg font-medium">
            BOOK A SERVICE
          </button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
