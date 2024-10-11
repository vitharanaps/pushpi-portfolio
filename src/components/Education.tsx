"use client"
import React, { useEffect, useState } from "react";
import Title from "./common/Title";
import { IoArrowRedoOutline } from "react-icons/io5";
import EducationCard from "./common/EducationCard";
import { supabase } from "@/utils/supebase/client";
import { educationTypes } from "@/types";

const Education = () => {
  const [educations, setEducations] = useState<educationTypes[]>();


  useEffect(() => {
    const fetchEducations = async () => {
      const { data, error } = await supabase.from('education').select('*').order('created_at', { ascending: false });
      if (error) {
        console.error('Error fetching Education:', error);
      } else {
        setEducations(data);
      }
    };

    fetchEducations();
  }, []);



  return (
    <section id="education" className="pb-16" >
      <div className="py-20">
        <Title
          title="My"
          color_title="Education"
          icon={<IoArrowRedoOutline />}
          className=" -rotate-3"
        />
        </div>
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
         
         {
          educations?.map((item=>(
            
            <EducationCard  education ={item}/>
          )))
         }
        
        </div>
      </div>
    </section>
  );
};

export default Education;
