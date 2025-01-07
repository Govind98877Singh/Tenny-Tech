import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router

const Card = ({ title, iconPath, link }) => {
  return (
    <div className="bg-[#436EA9] w-80 h-80 flex flex-col justify-center items-center rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      <div className="w-32 h-32 mb-6">
        <img
          src={iconPath}
          alt={`${title} Icon`}
          className="w-full h-full object-contain rounded-full"
        />
      </div>
      <Link
        to={link} // Link to the respective service description page
        className="text-white text-center text-2xl font-semibold underline decoration-white hover:decoration-4"
      >
        {title}
      </Link>
    </div>
  );
};

export default Card;
