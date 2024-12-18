import React, { useState } from "react";
import { AnimatePresence } from "motion/react";
import ContactInfo from "./ContactInfo";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";
import MobileMenuButton from "./MobileMenuButton";
import AnimatedVerticalSlide from "../motion-components/AnimatedVerticalSlide";
import Logo from "../ui/Logo";
import { ROUTES } from "../../routing/routes";

const navList = [
  { item: "Головна", link: ROUTES.index },
  { item: "Послуги", link: ROUTES.services },
  { item: "Контакти", link: ROUTES.contacts },
];
const Header: React.FC = () => {
  const [isMobileMenu, setIsMobileMenu] = useState(false);
  const toggleMobileMenu = () => setIsMobileMenu((prev) => !prev);

  return (
    <header className="header sticky top-0 z-50 bg-black">
      <div className="relative px-10 pt-4">
        <AnimatedVerticalSlide
          styles="py-6 border-b border-red-500 flex justify-between items-center gap-2 h-26"
          initialTranslateY="-100%"
        >
          <Logo />
          <ContactInfo />
          <DesktopMenu navList={navList} />
          <MobileMenuButton
            isMobileMenu={isMobileMenu}
            toggleMobileMenu={toggleMobileMenu}
          />
        </AnimatedVerticalSlide>
      </div>
      <AnimatePresence>
        {isMobileMenu && (
          <MobileMenu navList={navList} toggleMobileMenu={toggleMobileMenu} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
