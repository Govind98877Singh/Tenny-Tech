
function Services({ data }) {
  return (
    <div className="bg-[#B2C6E2] py-10 px-4 flex justify-center">
      <div className="flex flex-col md:flex-row items-stretch justify-center w-[68rem] rounded-2xl overflow-hidden">
        {/* Service Image */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src={data.image}
            className="shadow-md w-full h-96 rounded-t-2xl md:rounded-l-2xl md:rounded-t-none"
            alt={data.service}
          />
        </div>

        {/* Service Details */}
        <div className="w-full md:w-1/2 bg-[#3D6CB9] text-white shadow-md p-6 flex flex-col justify-between rounded-b-2xl md:rounded-r-2xl md:rounded-b-none ml-[-1px] items-center pt-10 ">
          <h3 className="text-2xl font-semibold mb-2">{data.service}</h3>
          {/* Conditionally render "Available Online" */}
          {data.service !== "AI Consultancy - In Person" && (
            <span className="bg-white text-[#3D6CB9] px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
              Available Online
            </span>
          )}
          <hr className="border-t border-white w-full mb-4" />
          <p className="text-lg font-medium mb-4">
            <span className="block">{data.time}</span>
            <span className="block">₹{data.price}</span>
          </p>
          <button className="bg-white text-[#3D6CB9] px-4 py-2 rounded-lg font-medium shadow-md hover:bg-[#D5DEF5] hover:text-blue-600 transition duration-300" >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
// import React, { useState, useEffect } from 'react';
// import Card from './Card';
// import servicesData from '../ServiceData';


// const Services = () => {
//   const [services, setServices] = useState([]);

//   // Simulating data fetching
//   useEffect(() => {
//     setServices(servicesData); // In real-world apps, data can come from APIs
//   }, []);

//   return (
//     <div className="bg-blue-200 min-h-screen flex flex-col items-center justify-center px-4 py-16 space-y-16">
//       {/* Cards Section */}
//       <div className="flex justify-center gap-16 flex-wrap">
//         {services.map((service) => (
//           <Card key={service.id} title={service.title} iconPath={service.iconPath} link={service.link} />
//         ))}
//       </div>

//       {/* Header Section */}
//       <div className="text-center">
//         <h1 className="text-5xl font-bold text-blue-600 mb-8">
//           Get Started With <span className="text-blue-800">Teeny Tech Trek</span> Today
//         </h1>
//         <button className="px-10 py-4 bg-blue-600 text-white rounded-full shadow hover:bg-blue-700 transition-all text-lg font-medium">
//           BOOK A SERVICE
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Services;

