import React from "react";
import MainCard from "./MainCard";
import data from "../../DataForServices";


const MainCardSection = () => {
    return (
      <div className="min-h-screen bg-gray-100 py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {data.map((item) => (
            <MainCard
              key={item.id}
              image={item.image}
              service={item.service}
              time={item.time}
              price={item.price}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default MainCardSection;