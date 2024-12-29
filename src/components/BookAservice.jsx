import Services from "./Services";
import data from "../../DataForServices";

function BookAservice() {
  return (
    <div className="bg-[#B2C6E2]">
      <h2 className="text-center text-4xl font-semibold mb-8 text-slate-800 mt-44">
        Explore Our IT Services
      </h2>
      <div>
        {data.map((serviceData) => (
          <Services key={serviceData.id} data={serviceData} />
        ))}
      </div>
    </div>
  );
}

export default BookAservice;
