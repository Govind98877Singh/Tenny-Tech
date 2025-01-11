import React from "react";
import SalesforceFeatures from "./SalesforceFeautures";

const SalesforceDescription = () => {
  const sections = [
    {
      title: "Salesforce Consulting Services",
      content: `Whether you're new to Salesforce or a seasoned user, our experienced
        consultants will tailor Salesforce strategies to meet your unique
        business requirements. We focus on aligning your objectives to
        enhance efficiency and elevate your overall Salesforce experience.`,
      img: "Images/AI-images/AdobeStock_936338603_Preview.jpeg",
      reverse: false,  // No need to reverse for this card
    },
    {
      title: "Integration Services",
      content: `Leverage our expertise to seamlessly integrate Salesforce with over
        100 external applications. We tackle challenges related to system
        compatibility, data synchronization, and intricate workflows,
        ensuring a smooth interaction and optimal performance across all
        your interconnected platforms.`,
      img: "Images/AI-images/AdobeStock_708497019_Preview.jpeg",
      reverse: true,  // Reverse image and text for this card
    },
    {
      title: "Implementation Services",
      content: `We offer comprehensive Salesforce implementation services,
        encompassing architecture design, data migration, integration
        strategies, and change management. Our holistic approach ensures a
        smooth deployment and continuous support across various Salesforce
        Clouds and tailored industry solutions.`,
      img: "Images/AI-images/AdobeStock_976508244_Preview.jpeg",
      reverse: false,  // No reverse for this card
    },
    {
      title: "Salesforce Optimization",
      content: `Enhance your Salesforce configuration with our optimization
        services. We perform thorough audits, cleanse your data, streamline
        processes, and tailor features to meet your unique needs, ensuring
        peak performance through automation, customization, improved
        reporting, and ongoing user support.`,
      img: "Images/AI-images/AdobeStock_1003588398_Preview.jpeg",
      reverse: true,  // Reverse image and text for this card
    },
    {
      title: "Support and Maintenance",
      content: `Our dedicated Salesforce support team is available around the clock,
        managing governance processes and offering flexible, tiered
        assistance. We ensure your Salesforce deployment operates at peak
        performance by delivering ongoing maintenance and prompt support
        tailored to your unique needs.`,
      img: "Images/AI-images/AdobeStock_1151862441_Preview.jpeg",
      reverse: false,  // No reverse for this card
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4 mt-24">
      {/* Salesforce Detailed Description Section */}
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mb-8 min-h-[400px]">
        <h1 className="text-4xl font-extrabold text-gray-800 mb-4">Salesforce</h1>
        <p className="text-gray-600 text-lg mb-4">
          Bridge the gap between your business and customers with our Salesforce Products Consulting Services. We leverage robust automation, AI-driven analytics, and advanced CRM tools to streamline operations and enhance customer engagement. Through deep technical expertise, we ensure your Salesforce ecosystem is fully integrated, scalable, and aligned with your strategic objectives, driving customer-centric solutions and maximizing ROI. Maximize the value of your Salesforce platform with our expert Salesforce consulting services, powered by AI-driven insights.

          Our team of certified consultants leverages advanced artificial intelligence tools to optimize workflows, enhance customer interactions, and deliver data-driven strategies tailored to your unique business needs. From initial implementation to ongoing improvements, we ensure seamless integration of Salesforce products, boosting operational efficiency and maximizing ROI. With our AI-enhanced solutions, you can unlock the full potential of Salesforce, driving smarter decisions and sustainable growth.
        </p>
      </div>

      {/* Dynamic Sections */}
      {sections.map((section, index) => (
        <div
          key={index}
          className={`w-full max-w-5xl bg-[#B2C6E2] rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center mb-8 min-h-[500px] transform transition duration-300 hover:shadow-2xl hover:scale-105 ${section.reverse ? 'md:flex-row-reverse' : ''}`}
        >
          {/* Image Section */}
          <div className="w-full md:w-1/2 flex justify-center p-4">
            <div className="bg-white w-full max-w-full h-full shadow-md">
              <img
                src={section.img}
                alt={`${section.title} Illustration`}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Content Section */}
          <div className="w-full md:w-1/2 p-4">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-4">
              {section.title}
            </h1>
            <p className="text-gray-600 text-lg">{section.content}</p>
          </div>
        </div>
      ))}

      <SalesforceFeatures />
    </div>
  );
};

export default SalesforceDescription;




