import Services from "./Services";
import data from "../../DataForServices";

function BookAservice() {
  return (
    <div className="bg-[#B2C6E2]">
      <h2 className="text-center text-4xl font-semibold mb-8 text-slate-800 mt-44">
        Explore Our IT Services
      </h2>
      <div>
        {Array.isArray(data) && data.length > 0 ? (
          data.map((serviceData) => (
            <Services key={serviceData.id} data={serviceData} />
          ))
        ) : (
          <p>No services available</p>
        )}
      </div>
    </div>
  );
}

export default BookAservice;
