"use client";

import React from "react";
import { motion } from "framer-motion";
import { LayoutTemplate, Grid2X2, Aperture } from "lucide-react";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

const services = [
  {
    icon: (
      // text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500
      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 inline-block p-4 rounded-full transition-transform duration-500 ease-in-out hover:rotate-[360deg] cursor-pointer">
        <LayoutTemplate size={40} className="text-white" />
      </div>
    ),
    title: "Front-End Development",
    description:
      "I optimize user experience using HTML, CSS, JS and modern frameworks like React, Angular and Vue. Clean code & performance are key.",
  },
  {
    icon: (
      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 inline-block p-4 rounded-full transition-transform duration-500 ease-in-out hover:rotate-[360deg] cursor-pointer">
        <Grid2X2 size={40} className="text-white" />
      </div>
    ),
    title: "UI/UX Design",
    description:
      "I translate business goals into clean, usable interfaces using Figma, wireframes, and user testing to ensure great usability.",
  },
  {
    icon: (
      <div className="bg-gradient-to-r from-purple-500 to-cyan-500 inline-block p-4 rounded-full transition-transform duration-500 ease-in-out hover:rotate-[360deg] cursor-pointer">
        <Aperture size={40} className="text-white" />
      </div>
    ),
    title: "Logo & Icon Design",
    description:
      "Custom logos & brand visuals that speak your identity. I blend minimalism and clarity to create unique brand marks.",
  },
];

const FeaturesContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="w-full px-4 py-2 flex flex-col items-center justify-center"
    >
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={slideInFromLeft(0.2 + index * 0.2)}
            className="bg-[#161b22] p-8 rounded-2xl shadow-md hover:shadow-purple-500/80 hover:scale-105 transition duration-300"
          >
            <div className="mb-5 ">{service.icon}</div>
            <h3 className="text-white text-2xl font-semibold mb-3">
              {service.title}
            </h3>
            <p className="text-gray-300 text-base leading-relaxed">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FeaturesContent;
