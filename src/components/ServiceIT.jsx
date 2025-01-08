import React from "react";
import { Link } from "react-router-dom";
function ServiceIT() {
  return (
    <div className="flex flex-col md:flex-row bg-blue-100 p-8 ">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="Images/Web Development 1.webp"
          alt="AI Consultancy"
          className="w-[50rem] h-[35rem]  rounded-lg shadow-lg  "
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 px-6 mt-20">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">
        IT Solutions
        </h1>
        <p className="text-gray-700 text-justify leading-relaxed mb-6 mt-16">
        Teeny Tech Trek offers a robust suite of web development and digital marketing services tailored to meet the needs of modern businesses. Our web development team specializes in creating responsive, user-friendly websites and applications that leverage the latest technologies to ensure optimal performance and seamless user experiences. Additionally, we provide digital marketing services that encompass search engine optimization (SEO), social media marketing, and content creation, all aimed at enhancing online visibility and engagement. By integrating these services, they help businesses not only establish a strong online presence but also effectively reach and connect with their target audiences, driving growth and fostering brand loyalty in an increasingly competitive digital landscape.
        </p>
        <Link
        to="/learn-more-it"
        className="text-blue-500 text-2xl font-semibold hover:underline flex items-center mt-16"
      >
        <span className="mr-2">Learn More</span>
        <span>➤</span>
      </Link>
      </div>
    </div>
  );
}

export default ServiceIT;
