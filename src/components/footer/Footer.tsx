import React from "react";
import Logo from "../ui/Logo";
import WorkHours from "../ui/WorkHours";
import { CONTACT_INFO } from "../../data/contactInfo";
import AnimatedVerticalSlide from "../motion-components/AnimatedVerticalSlide";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black">
      <AnimatedVerticalSlide
        styles="mx-10 flex flex-col gap-4  border-red-700 border-t"
        initialTranslateY="100%"
      >
        <div className="flex flex-col justify-between gap-2 pt-5 md:flex-row">
          <div className="flex flex-col items-center justify-center gap-2">
            <a
              href={`tel:${CONTACT_INFO.tel}`}
              aria-label="Call us"
              className="rounded-md bg-red-700 px-4 py-2 uppercase hover:bg-red-500"
            >
              Подзвонити
            </a>
            <Logo />
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl text-red-700">Наша адреса:</h3>
            <p className="text-center">{CONTACT_INFO.address}</p>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h3 className="text-2xl text-red-700">Графік роботи:</h3>
            <WorkHours className="flex flex-col gap-2" />
          </div>
        </div>
        <p className="py-4 text-center text-xs text-white/30">
          © 2024 Усі права захищені
        </p>
      </AnimatedVerticalSlide>
    </footer>
  );
};

export default Footer;
