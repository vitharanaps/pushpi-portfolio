import React from "react";


import { FloatingDock } from "./ui/FloatingDoc";

import { MdCastForEducation } from "react-icons/md";
import { GrProjects } from "react-icons/gr";
import { FaCode, FaLinkedinIn } from "react-icons/fa";
import { IconBrandGithub, IconHome, IconTerminal2 } from "@tabler/icons-react";

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

const Footer = () => {
  return (
    <div className="max-w-7xl flex-col flex items-center justify-center h-[250px] gap-[110px]">
      <div className="flex  items-center justify-center my-5 h-5 w-full z-[150]">
        <FloatingDock mobileClassName="translate-y-20" items={docLinks} />
      </div>
      <p className="text-sm font-thin tracking-wider leading-5 text-center">Developed By <br/> <span className="text-purple-500">Pushpitha Sandakelum Witharana </span></p>
    </div>
  );
};

export default Footer;
