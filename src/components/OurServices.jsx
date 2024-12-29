import ServiceAI from "./ServiceAI";
import ServiceDigital from "./ServiceDigital";
import ServiceIT from "./ServiceIT";
import ServiceSalesforce from "./ServiceSalesforce";

function OurSevices() {
  return (
    <>
      <div>
        <ServiceAI />
        <ServiceSalesforce />
        <ServiceDigital />
        <ServiceIT />
      </div>
    </>
  );
}

export default OurSevices;
