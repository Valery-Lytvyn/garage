import React from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { NavItem } from "../../types/types";

interface MobileMenuProps {
  navList: NavItem[];
  toggleMobileMenu: () => void;
}
const MobileMenu: React.FC<MobileMenuProps> = ({
  navList,
  toggleMobileMenu,
}) => {
  return (
    <motion.div
      className="fixed inset-0 -z-10 h-screen w-screen"
      initial={{ translateX: "100%" }}
      animate={{ translateX: 0 }}
      transition={{ duration: 0.4, ease: "linear" }}
      exit={{ translateX: "100%" }}
    >
      <div className="relative h-full w-full bg-black">
        <ul
          className="flex h-full w-full flex-col items-end gap-2 px-10 pt-32 sm:pt-40"
          onClick={toggleMobileMenu}
        >
          {navList.map(({ item, link }) => (
            <li className="text-lg lg:text-2xl" key={item}>
              <Link to={link}>{item}</Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default MobileMenu;
