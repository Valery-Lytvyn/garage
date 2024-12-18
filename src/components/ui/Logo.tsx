import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routing/routes";
const Logo: React.FC = () => {
  return (
    <Link
      to={ROUTES.index}
      className="h-50 flex w-28 items-center justify-center"
    >
      <div className="group relative flex h-8 w-full -skew-x-12 items-center justify-center bg-gray-800">
        <div className="h-0.5 w-full border-t border-dashed" />
        <div className="absolute m-auto flex w-fit items-center justify-center bg-gray-800">
          <span className="transition-standard z-10 text-3xl font-bold leading-none text-red-700 group-hover:scale-[2]">
            7
          </span>
          <span className="bg-gray-800 pr-1 font-semibold">миля</span>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
