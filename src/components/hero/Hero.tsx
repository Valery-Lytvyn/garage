import React from "react";
import HeroLogo from "./HeroLogo";
import HeroMotto from "./HeroMotto";
import AnimatedHorizontalSlide from "../motion-components/AnimatedHorizontalSlide";
import BackgroundImage from "../ui/BackgroundImage";
import heroBanner from "../../assets/images/desktop/banner.webp";
import heroBannerMobile from "../../assets/images/mobile/banner_mobile.webp";
import useIsMobile from "../../hooks/useIsMobile";

const Hero: React.FC = () => {
  const isMobile = useIsMobile();
  return (
    <section className="relative min-h-[400px] w-full bg-cover lg:min-h-[800px]">
      <BackgroundImage
        src={`${isMobile ? heroBannerMobile : heroBanner}`}
        alt="Hero banner"
        blur="bg-black/70"
        styles="h-full"
      />
      <div className="flex min-h-[400px] w-full flex-col lg:min-h-[800px] xl:flex-row">
        <AnimatedHorizontalSlide
          initialTranslateX="-50%"
          styles="flex-1  p-10  xl:px-36 flex  flex-col z-10"
        >
          <HeroMotto />
        </AnimatedHorizontalSlide>
        <AnimatedHorizontalSlide
          initialTranslateX="50%"
          styles="flex-1 p-10  lg:px-36 flex items-end justify-end z-10"
        >
          <HeroLogo />
        </AnimatedHorizontalSlide>
      </div>
    </section>
  );
};

export default Hero;
