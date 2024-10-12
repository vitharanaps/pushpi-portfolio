"use client";
import React from "react";
import Title from "./common/Title";
import { IoArrowRedoOutline } from "react-icons/io5";
import Image from "next/image";
import { useInfo } from "@/context/infoContext";


const About = () => {
  const {info} = useInfo();
  return (
    <section id="about" className="mb-[50px]">
    
      <div className="py-20">
        <Title
          title="About"
          color_title="My Story"
          icon={<IoArrowRedoOutline />}
          className=" -rotate-3"
        />
      </div>
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 w-full">
          <div className=" flex justify-center flex-col">
            <h3 className="text-xl tracking-wide my-5">Hi , I &apos; m {info?.username}</h3>

            <p className="text-sm font-thin text-gray-300 my-2 leading-6   justify-center text-justify ">
         {info?.myDesc}
            </p>
     
          </div>
          <div className="flex items-center justify-center flex-col relative">
          <div className="shadow-2xl w-[400px] h-[400px] flex items-center justify-center rounded-full overflow-hidden">
              <Image
                src={"/img/noAvatar.png"}
                width={300}
                height={300}
                alt=""
                className="w-[200px] md:w-[300px] z-50 flex items-center justify-center "
              />
             </div> 
              <div className="glow absolute bottom-[150px] left-[40%]"> 

            </div>
          </div>
        
        </div>
       
      </div>
    </section>
  );
};

export default About;
