import React from "react";
import ResumeText from "../sub/ResumeText";
import ResumeConten from "../sub/ResumeConten";


const Resume = () => {
  return (
    <section
      id="resume"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-30 z-[20]"
      style={{ transform: "scale(0.9)" }}
    >
      <ResumeText/><br /><br />
      <ResumeConten/>
    </section>
  );
};

export default Resume;
