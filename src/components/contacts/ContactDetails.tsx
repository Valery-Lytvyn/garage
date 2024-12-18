import React from "react";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GoClock } from "react-icons/go";
import { IoLocationSharp } from "react-icons/io5";
import WorkHours from "../ui/WorkHours";
import { CONTACT_INFO } from "../../data/contactInfo";

const ContactDetails: React.FC = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 self-start py-8">
      <div className="flex flex-1 items-center justify-center gap-4">
        <IoLocationSharp className="text-2xl text-red-700" />
        <p className="text-center">{CONTACT_INFO.address}</p>
      </div>
      <div className="flex flex-1 items-center justify-center gap-4">
        <GoClock className="text-4xl text-red-700" />
        <WorkHours className="flex flex-col gap-2" />
      </div>
      <div className="flex flex-1 items-center justify-center gap-4">
        <BsFillTelephoneFill className="text-xl text-red-700" />
        <a href={`tel:${CONTACT_INFO.tel}`}>{CONTACT_INFO.tel}</a>
      </div>
    </div>
  );
};

export default ContactDetails;
