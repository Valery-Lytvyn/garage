import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { carLogos } from "../../data/carLogos";

const CarLogos: React.FC = () => {
  return (
    <div className="flex flex-wrap justify-center gap-8 lg:gap-12">
      {carLogos.map((item) => (
        <LazyLoadImage
          key={item}
          className="transition-standard h-10 w-10 object-contain hover:scale-125"
          src={item}
          alt="Car logotype"
        />
      ))}
    </div>
  );
};

export default CarLogos;
