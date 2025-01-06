import ServiceAI from "./ServiceAI";
import ServiceDigital from "./ServiceDigital";
import ServiceIT from "./ServiceIT";
import ServiceSalesforce from "./ServiceSalesforce";

function OurServices() {
  return (
    <>
      <div className="mt-20">
        <ServiceAI />
        <ServiceSalesforce />
        <ServiceDigital />
        <ServiceIT />
      </div>
    </>
  );
}

export default OurServices;
