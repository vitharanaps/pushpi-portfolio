"use client";
import React, { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/TextGeneratingEffect";
import MagicButton from "./ui/MagicButton";
import { FaDownload } from "react-icons/fa";
import { FloatingDock } from "./ui/FloatingDoc";
import { MdCastForEducation } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaCode, FaLinkedinIn } from "react-icons/fa";
import { IconBrandGithub, IconHome, IconTerminal2 } from "@tabler/icons-react";
import Image from "next/image";
import { Spotlight } from "./ui/Spotlight";
import { Typewriter } from "react-simple-typewriter";
import { supabase } from "@/utils/supebase/client";
import { cursorDataType } from "@/types";
import { useInfo } from "@/context/infoContext";

export const docLinks = [
  {
    title: "Home",
    icon: (
      <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#hero",
  },

  {
    title: "Skills",
    icon: (
      <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#technologies",
  },
  {
    title: "Education",
    icon: (
      <MdCastForEducation className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#education",
  },

  {
    title: "Projects",
    icon: (
      <GrProjects className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#myprojects",
  },

  {
    title: "Experience",
    icon: (
      <FaCode className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "#experience",
  },
  {
    title: "GitHub",
    icon: (
      <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://github.com/vitharanaps",
  },
  {
    title: "LinkIn",
    icon: (
      <FaLinkedinIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
    ),
    href: "https://www.linkedin.com/in/vitharana-p-s-b3bb20259/",
  },
];

const Hero = () => {
  const {  info } = useInfo();
  const [myCursorData, setMyCursorData] = useState<cursorDataType[]>();

  useEffect(() => {
    geCursorData();
  }, []);

  const geCursorData = async () => {
    const { data: cursorData, error } = await supabase
      .from("cursorGenerator")
      .select("*");

    if (error) {
      console.error("Error fetching data:", error.message);
      return;
    }

    if (cursorData && cursorData.length > 0) {
      setMyCursorData(cursorData); // Extracting the first item from the array
    }
  };

  return (
    <section id="hero" className="mb-[100px]">
      <div className="h-screen sm:h-[50vh] md:h-[80vh] ">
        <div className="h-full sm:h-[50vh] md:h-full w-full dark:bg-black-100 bg-white  dark:bg-grid-white/[0.3] bg-grid-grid-black-100/[0.3] relative flex items-center justify-center">
          {/* Radial gradient for the container to give a faded look */}
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />

          <div className="absolute pointer-events-none inset-0 flex  items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] top-0 left-0"></div>
        </div>
        <div className="flex  items-center justify-center  absolute top-20 right-0 w-full ">
          <div className="flex flex-col-reverse gap-5 w-full  justify-center  items-center max-w-[89vw] md:max-w-3xl lg:max-w-[80vw] sm:flex sm:flex-row sm:justify-between sm:items-center  sm:gap-2 my-10 ">
            <div className="flex-1 flex flex-col space-y-4  mt-5 items-center justify-center w-full sm:items-start sm:pl-3 sm:flex-col sm:mt-0 relative">
              <h1 className="text-2xl">Hello! I &apos; m {info?.username} 👋 </h1>
              <TextGenerateEffect
                words={
                  (info && info?.textGenerator) ||
                  "Full Stack Web and Mobile Engineer"
                }
                className="text-center sm:text-start  text-[30px] md:text-4xl lg:text-5xl"
                duration={0.7}
              />

              <span
                style={{ fontWeight: "semibold" }}
                className="text-2xl font-thin text-center text-gray-300 sm:text-start"
              >
                <Typewriter
                  words={
                    myCursorData
                      ? myCursorData?.map((item) => item?.text)
                      : ["Web Developer"]
                  }
                  loop={150}
                  cursor
                  cursorStyle="|"
                  typeSpeed={30}
                  deleteSpeed={30}
                  delaySpeed={1000}
                  //     onLoopDone={handleDone}
                  //   onType={handleType}
                />
              </span>
              <MagicButton
                title="Download My CV"
                icon={<FaDownload />}
                position="right"
                otherClasses=""
                containerStyles="my-6 "
              />
            </div>
            <div className="flex-1  w-full flex items-center justify-center relative">
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
        <div className="hidden sm:flex items-center mb-[40px] justify-center my-5 h-1 sm:h-2 md:h-5  w-full z-[150]">
          <FloatingDock
            mobileClassName="translate-y-20 hidden" // only for demo, remove for production
            items={docLinks}
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
