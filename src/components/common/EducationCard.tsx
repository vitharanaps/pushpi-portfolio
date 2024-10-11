import { educationTypes } from "@/types";
import Image from "next/image";
import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { MdOutlineDateRange } from "react-icons/md";

const EducationCard = ({ education }: { education: educationTypes }) => {
  return (
    <div className=" min-h-[120px] flex flex-col items-center   lg:justify-between  lg:flex-row mx-2 hover:ring-2 hover:scale-90 hover:ring-purple-500  bg-slate-800  rounded-lg ring-2 my-1 py-3  transition-all ">
      <div className="basis-1/3 h-full flex items-center justify-center my-5 mx-6">
        <Image
          src={education.img ? education.img : "/img/noImage.png"}
          height={159}
          width={150}
          alt=""
          className="h-[150px] w-[150px]  object-contain"
        />
      </div>
      <div className=" h-full basis-2/3 mx-2 flex items-center justify-center md:justify-start md:items-center">
        <div className=" space-y-2 ">
          <h3 className="text-sm text-center sm:text-lg ">
            {education?.instituteName}
          </h3>
          <div className="flex flex-col  items-center  justify-center gap-3">
            <span className="text-gray-400 text-center text-[12px] sm:text-xs font-thin flex gap-2">
              <MdOutlineDateRange /> {education?.startDate} - 
              {education.endDate}
            </span>
            <span className="text-gray-400 text-center text-[12px] sm:text-xs font-thin flex gap-2">
              <FaLocationDot />
              {education?.location}
            </span>
          </div>
          <p className=" text-center text-[14px] sm:text-sm">
            {education?.course}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
