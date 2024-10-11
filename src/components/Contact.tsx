"use client";
import React, { ChangeEvent, FormEvent, useState } from "react";
import Title from "./common/Title";
import { IoArrowRedoOutline } from "react-icons/io5";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useInfo } from "@/context/infoContext";
import { FormData } from "@/types";
import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";
import { supabase } from "@/utils/supebase/client";

const BottomGradient = () => (
  <>
    <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
    <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex flex-col space-y-2 w-full", className)}>
    {children}
  </div>
);

const Contact = () => {
  const { info } = useInfo();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    subject: "",
    message: "",
  });

  // Handle input change
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase
      .from("contact")
      .insert(formData)
      .select();

    if (data) {
      console.log("Success!");
      alert("Thank you for contact me!");
      setFormData({ email: "", subject: "", message: "" });
    } else {
      console.log(error);
    }
  };

  return (
    <section id="about" className="mb-[50px]">
      <div className="py-20">
        <Title
          title="Contact"
          color_title="Me"
          icon={<IoArrowRedoOutline />}
          className=" -rotate-3"
        />
      </div>
      <div className="max-w-5xl mx-auto px-8 flex items-center justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-5 w-full">
          <div className="flex flex-col">
            <h3 className="text-xl tracking-wide my-5">Hi, Let's Connect</h3>
            <div className="my-3">
              <ul className="flex flex-col gap-3">
                <li className="flex gap-3">
                  <FaPhone className="text-gray-300" size={18} />
                  <p className="text-sm text-gray-300">+39 35 126 00096</p>
                </li>
                <li className="flex gap-3">
                  <MdAttachEmail className="text-gray-300" size={24} />
                  <p className="text-sm text-gray-300">vitharanaps@gmail.com</p>
                </li>
                <li className="flex gap-3">
                  <FaLocationDot className="text-gray-300" size={24} />
                  <p className="text-sm text-gray-300">Milano</p>
                </li>
              </ul>
            </div>
            <p className="text-sm font-thin text-gray-300 text-wrap my-2 leading-6 justify-center">
              {info?.connectDesc}
            </p>
          </div>
          <div className="flex items-center justify-center flex-col w-full">
            <form
              className="my-8 w-full space-y-[20px]"
              onSubmit={handleSubmit}
            >
              <LabelInputContainer className="mb-4">
                <Label htmlFor="email">Your Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  placeholder="yourmail@gmail.com"
                  type="email"
                  className="font-thin text-sm"
                  value={formData.email}
                  onChange={handleChange}
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Say something"
                  type="text"
                  className="font-thin text-sm"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </LabelInputContainer>

              <LabelInputContainer className="mb-4">
                <Label htmlFor="message">Message</Label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Say something ...."
                  rows={6}
                  className="font-thin text-sm p-3"
                  value={formData.message}
                  onChange={handleChange}
                />
              </LabelInputContainer>

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Send Message &rarr;
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
