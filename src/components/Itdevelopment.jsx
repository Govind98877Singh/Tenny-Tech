import React from "react";

const ITDevelopment = () => {
  return (
    <>
    <div className="flex flex-col md:flex-row items-center bg-gray-50 p-16 rounded-lg shadow-lg mt-24">
      {/* Left Side: Image Section */}
      <div className="flex-1 flex justify-center">
        <img
          src="\Images\web.jpg" // Replace with the actual image URL
          alt="Web Development Illustration"
          className="w-4/5 h-[550px] object-cover rounded-lg"
        />
      </div>

      {/* Right Side: Content Section */}
      <div className="flex-1 mt-8 md:mt-0 md:ml-12 flex justify-center">
        {/* Text Container */}
        <div className="bg-[#B2C6E2] p-8 border border-gray-400 rounded-lg w-4/5 h-[550px] overflow-hidden">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            From Idea to Innovation.
          </h2>
          <p className="text-gray-700 text-justify text-lg leading-relaxed">
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
    </div>
     <div className="p-16 bg-gray-50 rounded-lg shadow-lg">
     {/* Top Section */}
     <div className="flex flex-col md:flex-row items-start md:items-center gap-8 mb-16">
       {/* Left Side: Text Container */}
       <div className="flex-1 bg-[#B2C6E2] p-8 border border-gray-400 rounded-lg">
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

       {/* Right Side: Text Container */}
       <div className="flex-1 bg-[#B2C6E2] p-8 border border-gray-400 rounded-lg">
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

       {/* Right Side: Image with Scroll */}
  <div className="flex-1 flex justify-center max-h-[700px] overflow-y-auto">
    <img
      src="\Images\dev.jpg" // Replace with the actual image URL
      alt="Web Application Development"
      className="w-3/4 h-auto object-cover rounded-lg"
    />
  </div>
     </div>

     {/* Bottom Section */}
     <div className="flex flex-col md:flex-row items-start md:items-center gap-8">
       {/* Left Side: Text Container */}
       <div className="flex-1 bg-[#B2C6E2] p-8 border border-gray-400 rounded-lg">
         <h2 className="text-4xl font-bold text-gray-800 mb-6">
           Mobile App Development
         </h2>
         <p className="text-gray-700 text-lg leading-relaxed">
           In today’s mobile-centric world, reaching customers on their
           preferred devices is crucial. Teeny Tech Trek offers comprehensive
           mobile app development services for both iOS and Android platforms.
           Our team designs and develops high-quality mobile applications that
           provide seamless functionality and an engaging user experience,
           helping businesses connect effectively with their audiences.
         </p>
       </div>

       {/* Right Side: CTA Section */}
       <div className="flex-1 bg-[#B2C6E2] p-8 border border-gray-400 rounded-lg flex items-center justify-center">
         <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-xl shadow hover:bg-blue-700">
           Book a Meeting &rarr;
         </button>
       </div>
     </div>
   </div>
   </>
  );
};

export default ITDevelopment;


