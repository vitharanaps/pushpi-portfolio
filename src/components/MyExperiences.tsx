"use client";
import React, { useEffect, useState } from "react";
import Title from "./common/Title";
import { IoArrowRedoOutline } from "react-icons/io5";
import ExperienceCard from "./common/ExperiencesCard";
import { supabase } from "@/utils/supebase/client";
import { experienceType } from "@/types";

const MyExperiences = () => {
  const [experiences, setExperiences] = useState<experienceType[]>();

  useEffect(() => {
    const fetchExperiences = async () => {
      const { data, error } = await supabase
        .from("experiences")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) {
        console.error("Error fetching Experiences:", error);
      } else {
        setExperiences(data);
      }
    };

    fetchExperiences();
  }, []);

  return (
    <section id="experience" className="pb-16">
      <div className="py-20">
        <Title
          title="My"
          color_title="Experiences"
          icon={<IoArrowRedoOutline />}
          className=" -rotate-3"
        />
      </div>
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
          {experiences?.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyExperiences;
