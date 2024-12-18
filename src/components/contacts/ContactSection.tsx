import React, { Suspense } from "react";
import ContactDetails from "./ContactDetails";
import SectionTitle from "../ui/SectionTitle";
import GarageImage from "../ui/GarageImage";
import AnimatedHorizontalSlide from "../motion-components/AnimatedHorizontalSlide";
import { contactsSectionTitles } from "../../data/textData";

const LocationMap = React.lazy(() => import("./LocationMap"));
const ContactSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center p-10 xl:px-36">
      <SectionTitle
        mainTitle={contactsSectionTitles.mainTitle}
        highlightedText={contactsSectionTitles.highlightedText}
        subtitle={contactsSectionTitles.subtitle}
      />
      <ContactDetails />
      <div className="flex w-full flex-col gap-4 lg:flex-row">
        <AnimatedHorizontalSlide
          initialTranslateX="-50%"
          styles="overflow-hidden w-full lg:flex-1 lg:h-[500px] h-[300px] rounded-2xl"
        >
          <Suspense fallback={<div>Loading Map...</div>}>
            <LocationMap />
          </Suspense>
        </AnimatedHorizontalSlide>
        <AnimatedHorizontalSlide
          initialTranslateX="50%"
          styles="overflow-hidden w-full lg:flex-1 lg:h-[500px] h-[300px] rounded-2xl"
        >
          <GarageImage />
        </AnimatedHorizontalSlide>
      </div>
    </section>
  );
};

export default ContactSection;
