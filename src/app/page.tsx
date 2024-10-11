"use client"
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import Image from "next/image";
import { navItems } from "@/lib/data";
import MyProjects from "@/components/MyProjects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import MyExperiences from "@/components/MyExperiences";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { useInfo } from "@/context/infoContext";

export default function Home() {
  const {loading} = useInfo();



  if(loading){
    return(
      <div className="bg-black-100 h-screen flex items-center justify-center">
        <p className="text-lg text-white">Loading .....</p>
      </div>
    )
  }

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5 overflow-hidden">

      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} className="" />
        <Hero />
        <Skills />
        <Education />
        <MyProjects />
        <MyExperiences />
        <About />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
