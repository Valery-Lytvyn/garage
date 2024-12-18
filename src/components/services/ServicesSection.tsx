import React from "react";
import CarLogos from "./CarLogos";
import ServiceTiles from "./ServiceTiles";
import SectionTitle from "../ui/SectionTitle";
import BackgroundImage from "../ui/BackgroundImage";
import servicePicture from "../../assets/images/desktop/service.webp";
import servicePictureMobile from "../../assets/images/mobile/service_mobile.webp";
import { servicesSectionTitles } from "../../data/textData";
import useIsMobile from "../../hooks/useIsMobile";
const ServicesSection: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative w-full bg-cover">
      <BackgroundImage
        src={`${isMobile ? servicePictureMobile : servicePicture}`}
        alt="Service picture background image"
        blur="radial-gradient"
      />
      <div className="flex h-full w-full">
        <div className="z-10 flex h-full w-full flex-col items-center p-10 xl:px-36">
          <SectionTitle
            mainTitle={servicesSectionTitles.mainTitle}
            highlightedText={servicesSectionTitles.highlightedText}
            subtitle={servicesSectionTitles.subtitle}
          />
          <ServiceTiles />
          <CarLogos />
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
