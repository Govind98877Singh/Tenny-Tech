import React from "react";
import { FaVideo } from "react-icons/fa"; // Importing a video icon from react-icons

const MainCard = ({ image, service, time, price }) => {
  return (
    <div className="w-full max-w-md bg-white border border-gray-200 rounded-lg shadow-md mx-auto overflow-hidden">
      {/* Card Image */}
      <img
        src={image}
        alt={service}
        className="rounded-t-lg h-72 w-full object-cover"
      />

      {/* Card Content */}
      <div className="p-6">
        <h5 className="text-2xl font-bold text-center text-gray-800">
          {service}
        </h5>

        {/* Available Online Section with Video Icon */}
        <p className="text-sm text-center text-gray-500 mb-4 flex items-center justify-center">
          <FaVideo className="mr-2 text-blue-500" /> Available Online
        </p>

        <hr className="my-4" />

        {/* Service Details */}
        <p className="text-center text-lg text-gray-600">{time}</p>
        <p className="text-center text-xl font-semibold text-gray-800 mt-2">
          {price}
        </p>

        {/* Read More Link */}
        <div className="text-center mt-6">
          <a
            href="#"
            className="text-blue-500 hover:underline text-sm block mb-4"
          >
            Read More
          </a>
          <button className="w-full px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-md">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;


