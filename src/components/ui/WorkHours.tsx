import React from "react";
import { CONTACT_INFO } from "../../data/contactInfo";

interface WorkHoursProps {
  className: string;
}

const WorkHours: React.FC<WorkHoursProps> = ({ className }) => {
  return (
    <div className={className}>
      <p>
        <span className="pr-1 text-red-700">Пн-Пт</span>
        {CONTACT_INFO.weekdaysTime}
      </p>
      <p>
        <span className="pr-1 text-red-700">Сб</span>
        {CONTACT_INFO.weekendTime}
      </p>
    </div>
  );
};

export default WorkHours;
