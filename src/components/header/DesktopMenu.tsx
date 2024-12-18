import React from "react";
import { Link } from "react-router-dom";
import { NavItem } from "../../types/types";

interface DesktopMenuProps {
  navList: NavItem[];
}

const DesktopMenu: React.FC<DesktopMenuProps> = React.memo(({ navList }) => {
  return (
    <ul className="hidden items-center justify-center gap-2 md:flex">
      {navList.map(({ item, link }) => (
        <li
          className="transition-standard text-lg hover:text-red-500 lg:text-2xl"
          key={item}
        >
          <Link to={link}>{item}</Link>
        </li>
      ))}
    </ul>
  );
});

export default DesktopMenu;
