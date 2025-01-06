import Services from "./Services";
import data from "../../DataForServices";

function BookAservice() {
  return (
    <div className="bg-[#B2C6E2] min-h-screen flex flex-col">
      <h2 className="text-center text-4xl font-semibold mb-8 text-slate-800 mt-32">
        Explore Our IT Services
      </h2>
      <div className="flex-grow">
        {Array.isArray(data) && data.length > 0 ? (
          data.map((serviceData) => (
            <Services key={serviceData.id} data={serviceData} />
          ))
        ) : (
          <p className="text-center text-lg text-slate-800">No services available</p>
        )}
      </div>
    </div>
  );
}

export default BookAservice;
