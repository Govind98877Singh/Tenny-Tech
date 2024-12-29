

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
        <div className="w-full md:w-1/2 bg-[#3D6CB9] text-white shadow-md p-6 flex flex-col justify-between rounded-b-2xl md:rounded-r-2xl md:rounded-b-none ml-[-1px] items-center">
          <h3 className="text-xl font-semibold mb-2">{data.service}</h3>
          <span className="bg-white text-[#3D6CB9] px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
            {data.time}
          </span>
          <hr className="border-t border-white w-full mb-4" />
          <p className="text-lg font-medium mb-4">
            <span className="block">{data.time}</span>
            <span className="block">₹{data.price}</span>
          </p>
          <button className="bg-white text-[#3D6CB9] px-4 py-2 rounded-lg font-medium shadow-md hover:bg-[#D5DEF5] hover:text-blue-600 transition duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Services;
