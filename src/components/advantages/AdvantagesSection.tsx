import React from "react";
import AdvantageTiles from "./AdvantageTiles";
import SectionTitle from "../ui/SectionTitle";
import { advantageSectionTitles } from "../../data/textData";

const AdvantagesSection: React.FC = () => {
  return (
    <section className="flex flex-col items-center p-10 xl:px-36">
      <SectionTitle
        mainTitle={advantageSectionTitles.mainTitle}
        highlightedText={advantageSectionTitles.highlightedText}
        subtitle={advantageSectionTitles.subtitle}
      />
      <AdvantageTiles />
    </section>
  );
};

export default AdvantagesSection;
