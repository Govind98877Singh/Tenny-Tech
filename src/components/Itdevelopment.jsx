import React from "react";
import { Link } from "react-router-dom";

const ITDevelopment = () => {
  return (
    <div className="p-8 bg-gray-100">
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-12 bg-gray-50 p-16 rounded-lg shadow-lg mt-12">
        {/* Left: Full-Height Image */}
        <div className="flex-1 flex justify-center">
          <img
            src="/Images/web.jpg" // Replace with your image path
            alt="Web Development"
            className="w-auto h-screen object-cover rounded-lg shadow-lg" // Makes the image full height of the display
          />
        </div>

        {/* Right: Content */}
        <div className="flex-1 bg-[#B2C6E2] p-12 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-5xl font-bold text-gray-800 mb-6">
            From Idea to Innovation
          </h2>
          <p className="text-gray-700 text-xl leading-relaxed">
            Teeny Tech Trek is committed to delivering exceptional IT
            development services that empower businesses to thrive in the
            digital landscape. Our approach combines innovative technology
            solutions with a deep understanding of client needs, ensuring that
            each project is tailored to meet specific business objectives. From
            custom software development that creates unique applications
            designed for your operational requirements, to web application
            development that enhances user engagement through responsive and
            user-friendly interfaces, we leverage the latest technologies to
            drive efficiency and growth. Additionally, our mobile app
            development services enable organizations to connect with their
            customers on iOS and Android platforms, facilitating seamless
            interactions anytime, anywhere.
          </p>
        </div>
      </div>

      {/* Other Sections (No Change) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
        {/* Custom Software Development */}
        <div className="bg-[#B2C6E2] p-10 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Custom Software Development
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Teeny Tech Trek specializes in creating tailored software solutions
            that are designed to meet the unique needs of businesses across
            various industries. By closely collaborating with clients to
            understand their specific challenges and objectives, we develop
            customized applications that streamline operations, enhance
            productivity, and drive innovation. Our approach ensures that the
            software not only aligns with business goals but also integrates
            seamlessly with existing systems, providing a robust foundation for
            growth.
          </p>
        </div>

        {/* Web Application Development */}
        <div className="bg-[#B2C6E2] p-10 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Web Application Development
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            Our web application development service focuses on creating
            responsive and user-friendly applications that enhance user
            engagement and improve overall experience. Leveraging the latest
            technologies and best practices, we build scalable web applications
            that are optimized for performance across all devices. Whether it's
            a customer-facing platform or an internal tool, our solutions are
            designed to be intuitive and efficient, enabling businesses to
            connect more effectively with their users.
          </p>
        </div>

        {/* Right: Dev Image */}
        <div className="flex justify-center">
          <img
            src="/Images/dev.jpg" // Replace with your image path
            alt="Web Application Development"
            className="w-[80%] object-cover rounded-lg shadow-md"
          />
        </div>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col md:flex-row items-start gap-8 mt-16">
        {/* Mobile App Development */}
        <div className="flex-1 bg-[#B2C6E2] p-10 border border-gray-300 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">
            Mobile App Development
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            In today’s mobile-centric world, reaching customers on their
            preferred devices is crucial. Teeny Tech Trek offers comprehensive
            mobile app development services for both iOS and Android platforms.
            Our team designs and develops high-quality mobile applications that
            provide seamless functionality and an engaging user experience. By
            focusing on performance, usability, and aesthetic appeal, we help
            businesses tap into the growing mobile market, enhancing customer
            interaction and satisfaction while driving brand loyalty.
          </p>
        </div>

        {/* Book a Meeting */}
        <Link to="/meeting">
          <div className="flex-1 bg-[#B2C6E2] p-12 border border-gray-300 rounded-lg shadow-lg flex items-center justify-center">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg text-2xl font-semibold shadow hover:bg-blue-700">
              Book a Meeting &rarr;
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default ITDevelopment;
