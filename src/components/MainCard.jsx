import React from "react";
import { FaVideo } from "react-icons/fa";
import { Link } from "react-router-dom";

const MainCard = ({
  image,
  service = "AI Consultancy",
  time = "1 Hour",
  price = "$200",
}) => {
  return (
    <div
      className="w-full max-w-[350px] mx-auto bg-white border border-gray-200 rounded-lg shadow-md 
      hover:shadow-lg transition-transform duration-300 ease-in-out transform hover:scale-105 
      overflow-hidden flex flex-col min-h-[500px]"
    >
      {/* Image Section */}
      <div className="relative">
        <img
          src={image}
          alt={`${service} image`}
          className="w-full h-56 object-cover rounded-t-lg transition-transform duration-500 ease-in-out transform hover:scale-110"
        />
        <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-md">
          Online
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex flex-col justify-between flex-1">
        <div className="flex flex-col items-center space-y-2">
          <h5 className="text-xl md:text-2xl font-semibold text-center text-gray-800 min-h-[50px]">
            {service}
          </h5>
          <p className="text-sm text-center text-gray-500 flex items-center justify-center">
            <FaVideo className="mr-2 text-blue-600" /> Available Online
          </p>
        </div>

        <hr className="my-4 border-gray-300" />

        <div className="text-center space-y-2">
          <p className="text-base md:text-lg text-gray-700">{time}</p>
          <p className="text-lg md:text-xl font-semibold text-gray-800">
            {price}
          </p>
        </div>

        {/* Action Section */}
        <div className="mt-auto text-center space-y-4">
          <a
            href="#"
            className="text-blue-600 hover:text-blue-700 hover:underline text-sm"
            aria-label={`Read more about ${service}`}
          >
            Read More
          </a>
          {/* Pass service data as state to ToBookService */}
          <Link
            to="/to-book-a-service"
            state={{ data: { service, time, price } }}  
          >
            <button
              className="w-full px-6 py-3 text-white bg-[#3E6AA7] rounded-md 
              transition-all ease-in-out duration-300 cursor-pointer"
            >
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
