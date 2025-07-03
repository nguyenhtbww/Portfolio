import React from "react";
import ProjectsText from "../sub/ProjectsText";
import ProjectsConten from "../sub/ProjectsConten";


const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pt-30 z-[20]"
      style={{ transform: "scale(0.9)" }}
    >
      <ProjectsText/><br/>
      <ProjectsConten/>

    </section>
  );
};

export default Projects;
