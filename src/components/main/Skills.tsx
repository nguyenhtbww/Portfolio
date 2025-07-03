import React from "react";
import SkillText from "../sub/SkillText";
import SkillsSwiper from "../sub/SkillsSwiper";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-30 z-[20]"
      style={{ transform: "scale(0.9)" }}
    >
      <SkillText />
       <SkillsSwiper />
    </section>
  );
};

export default Skills;
