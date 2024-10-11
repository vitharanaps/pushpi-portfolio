"use client";
import { FaCode, FaRegUser } from "react-icons/fa6";
import { TbTerminal2 } from "react-icons/tb";
import { MdCastForEducation } from "react-icons/md";
import { GiMaterialsScience } from "react-icons/gi";



export const navItems = [
  { name: "About", link: "#about", icon : FaRegUser},
  { name: "Projects", link: "#myprojects", icon :TbTerminal2 },
  { name: "Education", link: "#education",icon: MdCastForEducation },
  { name: "Skills", link: "#technologies", icon: GiMaterialsScience },
  { name: "Experience", link: "#experience", icon: FaCode },


];

export const projects = [
  {
    id: 1,
    title: "CRGU TT APP Mobile application",
    des: "The Sri Lanka Railway Guard Union app keeps members updated with daily special time tables and schedule changes. It also provides a contact list of officers for quick, easy communication. Stay connected and informed with just a tap!",
    img: "https://shxrigmsftdzalrerfeu.supabase.co/storage/v1/object/sign/project/Simulator%20Screenshot%20-%2013pro%20-%202024-10-10%20at%2012.51.25.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0L1NpbXVsYXRvciBTY3JlZW5zaG90IC0gMTNwcm8gLSAyMDI0LTEwLTEwIGF0IDEyLjUxLjI1LnBuZyIsImlhdCI6MTcyODU1NzYwOCwiZXhwIjoxNzYwMDkzNjA4fQ.v8neSx8EcFtR5SuVblxLRDEYpvnEp7z-cuEknHPdCU8&t=2024-10-10T10%3A53%3A28.035Z",
    iconLists: ["FaReact", "SiFirebase", "SiExpo", "SiTailwindcss", "FaMobileAlt"],
    link: "",
    
  },
  {
    id: 2,
    title: "CRGU TT APP Admin Panel",
    des: "I developed an admin panel to efficiently manage all functionalities of the CRGU TT app. It streamlines the process of updating schedules, managing user data. This central control ensures smooth operation and updates.",
    img: "https://shxrigmsftdzalrerfeu.supabase.co/storage/v1/object/sign/project/Screenshot%202024-10-10%20at%2014.52.46.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0L1NjcmVlbnNob3QgMjAyNC0xMC0xMCBhdCAxNC41Mi40Ni5wbmciLCJpYXQiOjE3Mjg1NjU3OTQsImV4cCI6MTc2MDEwMTc5NH0.8_LHXs5Ezd22O5e-SVbkkP7OoUuSUI0Jk7PJKLLQB7k&t=2024-10-10T13%3A09%3A55.553Z",
    iconLists: ["FaReact", "SiFirebase", "SiExpo", "SiMui", "FaChartArea", "FaGithub"],
    link: "https://crgu-tt-app-1.firebaseapp.com/",
  },
  {
    id: 3,
    title: "My Portfolio Website",
    des: "I created a portfolio website that highlights my skills, showcases recent projects, and details my professional experiences and education. It serves as a comprehensive overview of my expertise. Explore my work and background all in one place.",
    img: "https://shxrigmsftdzalrerfeu.supabase.co/storage/v1/object/sign/project/Screenshot%202024-10-10%20at%2015.47.23.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0L1NjcmVlbnNob3QgMjAyNC0xMC0xMCBhdCAxNS40Ny4yMy5wbmciLCJpYXQiOjE3Mjg1NjgxNTAsImV4cCI6MTc2MDEwNDE1MH0.hiyDLqc8FqvbhA3gqVM8h9v0WscCzb2sF6ZS2n9aV1U&t=2024-10-10T13%3A49%3A10.599Z",
    iconLists: ["RiNextjsFill","SiShadcnui","FaReact","SiTypescript","SiSupabase","SiTailwindcss"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "My Portfolio website admin Panel",
    des: "I developed an admin panel to manage all functionalities of my portfolio website, enabling easy updates to my skills, projects, experiences, and education. It ensures seamless content management and keeps the site up-to-date. This tool offers full control over my portfolio's presentation.",
    img: "https://shxrigmsftdzalrerfeu.supabase.co/storage/v1/object/sign/project/portfolioAdmin.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJwcm9qZWN0L3BvcnRmb2xpb0FkbWluLnBuZyIsImlhdCI6MTcyODU2OTM3MSwiZXhwIjoxNzYwMTA1MzcxfQ.wrS5Fl3v1nvuNXBv_uvLT6VujaeL2IRxlPMpSkMSX4c&t=2024-10-10T14%3A09%3A31.299Z",
    iconLists: ["RiNextjsFill","SiShadcnui","FaReact","SiTypescript","SiSupabase","SiTailwindcss"],
    link: "/ui.apple.com",
  },
];

import {
  FaReact,
  FaNodeJs,
  FaCss3Alt,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaPython,
} from "react-icons/fa";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
  SiRedux,
  SiGraphql,
  SiDocker,
  SiPostgresql,
  SiFramer,
  SiJest,
} from "react-icons/si";

export const skills = [
  {
    id: 1,
    name: "React",
    smallDesc: "A JavaScript library for building user interfaces.",
    icon: FaReact, // React icon
  },
  {
    id: 2,
    name: "JavaScript",
    smallDesc: "The programming language of the web.",
    icon: SiJavascript, // JavaScript icon
  },
  {
    id: 3,
    name: "TypeScript",
    smallDesc: "JavaScript with syntax for types.",
    icon: SiTypescript, // TypeScript icon
  },
  {
    id: 4,
    name: "Node.js",
    smallDesc: "JavaScript runtime for building server-side applications.",
    icon: FaNodeJs, // Node.js icon
  },
  {
    id: 5,
    name: "Firebase",
    smallDesc: "Google's platform for building web and mobile applications.",
    icon: SiFirebase, // Firebase icon
  },
  {
    id: 6,
    name: "CSS",
    smallDesc: "Styling language for designing web pages.",
    icon: FaCss3Alt, // CSS3 icon
  },
  {
    id: 7,
    name: "Tailwind CSS",
    smallDesc:
      "Utility-first CSS framework for rapidly building custom designs.",
    icon: SiTailwindcss, // Tailwind CSS icon
  },
  {
    id: 8,
    name: "Git",
    smallDesc: "Version control system for tracking changes in code.",
    icon: FaGitAlt, // Git icon
  },
  {
    id: 9,
    name: "Next.js",
    smallDesc:
      "A React framework for building server-side rendered and static web applications.",
    icon: SiNextdotjs, // Next.js icon
  },
  {
    id: 10,
    name: "Framer Motion",
    smallDesc: "A library for creating animations in React applications.",
    icon: SiFramer, // Framer Motion icon
  },
  {
    id: 11,
    name: "HTML5",
    smallDesc:
      "Markup language used for structuring and presenting content on the web.",
    icon: FaHtml5, // HTML5 icon
  },
  {
    id: 12,
    name: "MongoDB",
    smallDesc: "NoSQL database for modern applications.",
    icon: SiMongodb, // MongoDB icon
  },
  {
    id: 13,
    name: "Redux",
    smallDesc: "A predictable state container for JavaScript apps.",
    icon: SiRedux, // Redux icon
  },
  {
    id: 14,
    name: "GraphQL",
    smallDesc: "A query language for your API.",
    icon: SiGraphql, // GraphQL icon
  },
  {
    id: 15,
    name: "Docker",
    smallDesc: "Platform for developing, shipping, and running applications.",
    icon: SiDocker, // Docker icon
  },
  {
    id: 16,
    name: "PostgreSQL",
    smallDesc: "A powerful, open-source relational database system.",
    icon: SiPostgresql, // PostgreSQL icon
  },
  {
    id: 17,
    name: "Jest",
    smallDesc:
      "A JavaScript testing framework for ensuring correctness of codebases.",
    icon: SiJest, // Jest icon
  },
  {
    id: 18,
    name: "Java",
    smallDesc:
      "A high-level programming language used for building server-side applications.",
    icon: FaJava, // Java icon
  },
  {
    id: 19,
    name: "Python",
    smallDesc:
      "A high-level programming language for general-purpose programming.",
    icon: FaPython, // Python icon
  },
  {
    id: 20,
    name: "SQL",
    smallDesc: "A standard language for managing and manipulating databases.",
    icon: SiPostgresql, // SQL/PostgreSQL icon
  },
];
