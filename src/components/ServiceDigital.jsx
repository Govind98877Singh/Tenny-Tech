import React from "react";
import { Link } from "react-router-dom";
function ServiceDigital() {
  return (
    <div className="flex flex-col md:flex-row bg-blue-100 p-8 ">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="Images/Design Thinking 1.webp"
          alt="AI Consultancy"
          className="w-[50rem] h-[35rem]  rounded-lg shadow-lg  "
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 px-6 mt-20">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">
        Design Thinking
        </h1>
        <p className="text-gray-700 text-justify leading-relaxed mb-6 mt-16">
        Teeny Tech Trek provides specialized design thinking consultancy services aimed at fostering innovation and enhancing problem-solving capabilities for businesses. By employing a user-centered approach, the consultancy guides organizations through structured workshops and tailored consulting sessions that focus on understanding user needs and rearticulating challenges. Our methodology emphasizes collaboration, encouraging cross-functional teams to generate fresh ideas and develop rapid prototypes that undergo iterative feedback cycles. We empower our clients to transform their ideas into practical applications, ensuring that their products and services resonate with users and adapt effectively to market demands.
        </p>
        <Link
        to="/learn-more-Design"
        className="text-blue-500 text-2xl font-semibold hover:underline flex items-center mt-16"
      >
        <span className="mr-2">Learn More</span>
        <span>➤</span>
      </Link>
      </div>
    </div>
  );
}

export default ServiceDigital;
