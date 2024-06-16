import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-10 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 ">
        <ProjectCard

          src="/NextWebsite.png"
          title="Currency Converter"
          description="A currency converter built with Reactjs for seamless currency conversion.It updates conversion results as users interact with the UI."
        />
        <ProjectCard
          src="/CardImage.png"
          title="Grocery Store"
          description="A modern grocery store website crafted with Tailwind CSS, offering a sleek and responsive UI for seamless shopping experiences."
        />
        <ProjectCard
          src="/SpaceWebsite.png"
          title="Space Themed Portfolio"
          description="A dynamic 3-D space themed portfolio website made with Next js 13, Framer Motion, tailwind, threejs and typescript."
        />
      </div>
    </div>
  );
};

export default Projects;