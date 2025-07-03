"use client";

import React from "react";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Welcome to my world</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-5xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Hi, I&apos;m
            {" "}Trung Hieu{" "}
            <br/>a {" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            <Typewriter
              words={[
                "Front-End Developer.",
                "UI/UX Designer.",
                "Professional Coder.",
              ]}
              loop={0}      
              cursor
              cursorStyle="|"
              typeSpeed={30}
              deleteSpeed={30}
              delaySpeed={800}
            />
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          I am an experienced Front-End Developer and UI/UX Designer with Three
          years plus experience building and designing websites and web apps
          from scratch. Html, CSS, Scss, Javascript, Angular,React, Next, Vue, and
          NodeJs are the field of my expertise when it comes to building
          websites and web apps. I deal with servers as well. I am flawless
          using Figma, and Photoshop for the design. Photography is also one of
          the skills I use in my design.
        </motion.p>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
      >
        <Image
          src="/me.jpg"
          alt="work icons"
          height={450}
          width={450}
          className="rounded-xl"
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
