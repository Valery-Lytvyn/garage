import React from "react";

const HeroMotto: React.FC = () => {
  return (
    <>
      <h2 className="text-2xl font-bold sm:text-4xl md:text-6xl">
        Обслуговування та
        <br /> ремонт авто в Одесі
      </h2>
      <span className="py-6 text-2xl font-semibold text-red-700">
        бензинові та дизельні авто
      </span>
    </>
  );
};

export default HeroMotto;
