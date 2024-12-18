import React from "react";
import { IconType } from "react-icons";

interface AdvantageTileProps {
  title: string;
  description: string;
  icon: IconType;
}

const AdvantageTile: React.FC<AdvantageTileProps> = ({
  title,
  description,
  icon: Icon,
}) => {
  return (
    <div className="transition-standard group flex h-full cursor-pointer flex-col items-center gap-2 rounded-2xl border border-white/10 px-2 py-6 text-center hover:border-red-700">
      <Icon className="transition-standard text-5xl text-white/20 group-hover:text-white" />
      <h3 className="transition-standard text-2xl uppercase text-red-700 group-hover:tracking-wide">
        {title}
      </h3>
      <p>{description}</p>
    </div>
  );
};

export default AdvantageTile;
