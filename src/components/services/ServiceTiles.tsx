import React from "react";
import ServiceTile from "./ServiceTile";
import { servicesData } from "../../data/servicesData";

const ServiceTiles: React.FC = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 py-5 md:grid-cols-3 lg:py-10">
      {servicesData.map(({ title, pic }) => (
        <ServiceTile title={title} pic={pic} key={title} />
      ))}
    </div>
  );
};

export default ServiceTiles;
