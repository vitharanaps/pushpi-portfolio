import React from "react";
import { IconBase } from "react-icons";

type titleProps = {
  title: string;
  color_title: string;
  icon?: React.ReactNode;
  className?:string;
};

const Title = ({ title, color_title, icon, className }: titleProps) => {
  return (
    <div className={`flex flex-col items-center justify-center gap-2 ${className} `}>
      <h1 className="text-2xl text-center">
        {" "}
        {title} <span className="text-purple ml-3">{color_title}</span>{" "}
      </h1>
      <div className="w-[100px] h-2 bg-purple-500"></div>
    </div>
  );
};

export default Title;
