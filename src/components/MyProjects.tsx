"use client";

import { projects } from "@/lib/data";
import { FaLocationArrow } from "react-icons/fa6";
import { PinContainer } from "./ui/Pin3d";
import MagicButton from "./ui/MagicButton";
import Title from "./common/Title";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FiRefreshCcw } from "react-icons/fi";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";
import * as AiIcons from "react-icons/ai";
import * as MdIcons from "react-icons/md";
import * as RiIcons from "react-icons/ri";
import Link from "next/link";
import React from "react";

const MyProjects = () => {
  // Define the props that your icons will accept
  interface IconProps {
    size?: number;
    className?: string;
  }

  // Cast the iconLibraries object to a type that includes IconProps
  const iconLibraries: { [key: string]: React.ComponentType<IconProps> | undefined } = {
    ...FaIcons,
    ...SiIcons,
    ...AiIcons,
    ...MdIcons,
    ...RiIcons,
  };

  return (
    <section id="myprojects">
      <div className="py-20">
        <Title
          title="My"
          color_title="Recent Projects"
          icon={<IoArrowRedoOutline />}
          className="-rotate-3"
        />
        <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
          {projects.map((item) => (
            <div
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw] md:w-[30vw]"
              key={item.id}
            >
              <PinContainer title={item.title} href="https://twitter.com/mannupaaji">
                <div className="relative flex items-center justify-center sm:w-96 w-[80vw] md:w-[30vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                  <div
                    className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                    style={{ backgroundColor: "#13162D" }}
                  ></div>
                  <img
                    src={item.img}
                    alt="cover"
                    className="z-10 absolute bottom-0"
                  />
                </div>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex justify-center items-center">
                    {item.link === "" ? (
                      <></>
                    ) : (
                      <Link href={item.link} className="flex">
                        <>
                          <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                            Visit
                          </p>
                          <FaLocationArrow className="ms-3" color="#CBACF9" />
                        </>
                      </Link>
                    )}
                  </div>

                  <div className="flex items-center">
                    {item.iconLists.map((icon, index) => {
                      // Cast the icon component to IconProps
                      const IconComponent = iconLibraries[icon];
                      return (
                        <div
                          key={index}
                          className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index + 2}px)`,
                          }}
                        >
                          {IconComponent ? (
                            <IconComponent
                              size={40} // Pass size prop
                              className="w-8 h-8 mx-auto group-hover:text-purple-500"
                            />
                          ) : (
                            <span>Icon not found</span>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>

                <h1 className="font-[400] lg:text-xl md:text-lg text-base line-clamp-1">
                  {item.title}
                </h1>

                <p
                  className="lg:text-lg lg:font-thin font-light text-sm line-clamp-2"
                  style={{
                    color: "#BEC1DD",
                    margin: "1vh 0",
                  }}
                >
                  {item.des}
                </p>
              </PinContainer>
            </div>
          ))}
        </div>

        {projects?.length > 6 && (
          <div className="flex items-center justify-center mt-10">
            <MagicButton
              title="View More Projects"
              icon={<FiRefreshCcw />}
              position="right"
              otherClasses=""
              containerStyles="my-6"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default MyProjects;
