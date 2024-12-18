import React from "react";
import { IoClose } from "react-icons/io5";
import { RxHamburgerMenu } from "react-icons/rx";

interface MobileMenuButtonProps {
  isMobileMenu: boolean;
  toggleMobileMenu: () => void;
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
  isMobileMenu,
  toggleMobileMenu,
}) => {
  return (
    <button
      onClick={toggleMobileMenu}
      className="text-2xl md:hidden"
      aria-label={isMobileMenu ? "Close mobile menu" : "Open mobile menu"}
    >
      {isMobileMenu ? <IoClose /> : <RxHamburgerMenu />}
    </button>
  );
};

export default MobileMenuButton;
