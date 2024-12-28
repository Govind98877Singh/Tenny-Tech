
function ServiceDigital()
{
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
          AI Consultancy
        </h1>
        <p className="text-gray-700 text-justify leading-relaxed mb-6 mt-16">
          Teeny Tech Trek offers comprehensive AI consultancy services designed
          to help businesses harness the power of artificial intelligence for
          enhanced operational efficiency and strategic growth. Our consultancy
          encompasses a range of solutions, including the integration of AI
          technologies tailored to specific business needs, data analytics to
          derive actionable insights, and the development of custom AI models.
          <br />
          <br />
          By leveraging industry expertise and cutting-edge tools, we empower
          our clients to navigate the complexities of AI implementation,
          ensuring they remain competitive in an increasingly data-driven
          marketplace.
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
  )
}

export default ServiceDigital;