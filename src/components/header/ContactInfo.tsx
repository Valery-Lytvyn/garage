import React from "react";
import WorkHours from "../ui/WorkHours";
import { CONTACT_INFO } from "../../data/contactInfo";

const ContactInfo: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 lg:text-xl">
      <a href={`tel:${CONTACT_INFO.tel}`} aria-label="Call us">
        {CONTACT_INFO.tel}
      </a>
      <div className="hidden border-l border-red-700 pl-4 sm:block">
        <WorkHours className="flex flex-col items-center justify-center gap-2" />
      </div>
    </div>
  );
};

export default ContactInfo;
