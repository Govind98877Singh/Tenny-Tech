function ServiceSalesforce() {
  return (
    <div className="flex flex-col md:flex-row bg-blue-100 p-8 ">
      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
        <img
          src="Images/Salesforce 1.jpeg"
          alt="AI Consultancy"
          className="w-[50rem] h-[35rem]  rounded-lg shadow-lg  "
        />
      </div>

      {/* Text Section */}
      <div className="md:w-1/2 px-6 mt-20">
        <h1 className="text-7xl font-bold text-blue-600 mb-4">
        Salesforce
        </h1>
        <p className="text-gray-700 text-justify leading-relaxed mb-6 mt-16">
        Teeny Tech Trek specializes in Salesforce cloud development, enabling organizations to optimize their customer relationship management through intelligent automation and streamlined processes.Salesforce Product Consulting Services designed to bridge the gap between businesses and their customers through robust automation, AI-driven analytics, and advanced CRM tools. We provide tailored solutions : development, integration, implementation, optimization, ensuring that organizations maximize the value.
      
        </p>
        <a
          href="#"
          className="text-blue-500 text-2xl font-semibold hover:underline flex items-center mt-16"
        >
          <span className="mr-2">Learn More</span>
          <span>➤</span>
        </a>
      </div>
    </div>
  );
}

export default ServiceSalesforce;
