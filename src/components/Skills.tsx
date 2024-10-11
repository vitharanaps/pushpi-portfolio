"use client";
import React, { useEffect, useState } from "react";
import { IoArrowRedoOutline } from "react-icons/io5";
import Title from "./common/Title";
import { CardHover } from "./ui/CardHoverEffect";
import { skills } from "@/lib/data";
import MagicButton from "./ui/MagicButton";
import { FiRefreshCcw } from "react-icons/fi";
import { supabase } from "@/utils/supebase/client";
import { technologyTypes } from "@/types";

const Skills = () => {
  const [technologiesDb, setTechnologiesDb] = useState<technologyTypes[]>();

  useEffect(() => {
    const fetchSkills = async () => {
      const { data, error } = await supabase.from("technologies").select("*");
      if (error) {
        console.error("Error fetching skills:", error);
      } else {
        setTechnologiesDb(data);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="technologies">
      <div className="py-20 mt-10">
        <Title
          title="My"
          color_title="Technologies"
          icon={<IoArrowRedoOutline />}
          className=" -rotate-3"
        />
      </div>
      <div className="max-w-5xl mx-auto px-8">
        <CardHover items={technologiesDb || []} className="text-sm" />
      </div>

      {technologiesDb && technologiesDb?.length > 30 && (
        <div className="flex items-center justify-center mt-10">
          <MagicButton
            title="View All Skills"
            icon={<FiRefreshCcw />}
            position="right"
            otherClasses=""
            containerStyles="my-6 "
          />
        </div>
      )}
    </section>
  );
};

export default Skills;
