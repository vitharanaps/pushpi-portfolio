"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import * as FaIcons from 'react-icons/fa';
import * as SiIcons from 'react-icons/si';
import * as AiIcons from 'react-icons/ai';
import * as MdIcons from 'react-icons/md';
import { IconProps } from "@/types";
export const CardHover = ({
  items,
  className,
}: {
  items: {
    id: number;
    skill: string;
    icon_name: string;
    created_at: string;
  }[];
  className?: string;
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const iconLibraries: { [key: string]: React.ComponentType<IconProps> | undefined } = {
    ...FaIcons,
    ...SiIcons,
    ...AiIcons,
    ...MdIcons,
  };


  return (
    <div
      className={cn(
        "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4  lg:grid-cols-5  py-10",
        className
      )}
    >
      {items?.map((item, idx) => {
        //  const Icons = item.icon_name;
        const IconComponent = iconLibraries[item.icon_name];
        return (
          <div
            key={idx}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block  rounded-lg"
                  layoutId="hoverBackground"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-md w-full p-4 overflow-hidden bg-black-100 group-hover:ring-2 ring-purple-500 relative z-20   transition-all duration-500 ">
              <div className="py-10 z-50 relative space-y-5">
                {IconComponent ? (
                  <IconComponent
                    size={40}
                    className="w-8 h-8 mx-auto group-hover:text-purple-500"
                  />
                ) : (
                  <span>Icon not found</span>
                )}

                {/* <Icons className="w-8 h-8 mx-auto group-hover:text-purple-500" /> */}
                <p className="text-sm font-thin text-center text-gray-300">
                  {item?.skill}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
