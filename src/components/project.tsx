"use client";

import { Projects } from "@/app/page";
import { useState } from "react";

export default function Project({ project, index }: { project: Projects; index: number }) {
  const [activeProject, setActiveProject] = useState({ project: 100000000, active: false });

  return (
    <div className=" h-[calc(100%/1)] md:h-[calc(100%/2)] lg:h-[calc(100%/3)] flex flex-col  snap-start  h-max-[h-[calc(100%/3)] ] items-center justify-center lg:items-stretch lg:justify-between ">
      <div className="project justify-center flex items-center  sm:px-14 py-2">
        <div className="sm:w-full p-1 flex items-center justify-center flex-wrap flex-row relative sm:justify-center lg:justify-start ">
          <div
            className={` ${
              activeProject.project === index && activeProject.active ? "opacity-100" : "opacity-0"
            } links transition-opacity delay-200   sm:p-14 absolute max-w-sm flex flex-col justify-between `}>
            <p className="text-descriptions text-center pointer-events-none lg:text-right">{project.description}</p>
            <br></br>
            <div className="link-container flex justify-between gap-3 lg:py-1">
              <a className="text-general hover:text-white" href={project.github} target="_blank">
                GITHUB
              </a>
              <a className="text-general hover:text-white" href={project.link} target="_blank">
                WEBSITE
              </a>
            </div>
          </div>
          <div
            onClick={() => {
              setActiveProject((prev) => {
                if (prev.project === index && prev.active) {
                  return { project: 10000, active: false };
                } else if (prev.project !== index && prev.active) {
                  return { project: index, active: true };
                } else {
                  return { project: index, active: true };
                }
              });
            }}
            className={`${
              activeProject.project === index && activeProject.active
                ? "animate-displaceUp lg:animate-displace"
                : "animate-displaceOutUp lg:animate-displaceOut"
            }
                     transition-all name  text-[80px] sm:text-[160px] md:text-[200px] lg:text-titles pt-2 cursor-pointer  hover:text-white 
                     text-center`}>
            <span className="mt-3 tracking-[-5px] animate-pulse">{project.name}</span>
          </div>
        </div>
      </div>
      <div>
        <div className="info  flex justify-between items-center pt-2 px-6 flex-col gap-5 md:flex-col py-2 lg:flex-row">
          <span className="tracking-[-.13rem] text-[1.5rem] lg:text-general">{project.stack}</span>
          <span className="text-year pb-2">{project.year}</span>
        </div>
        <hr className="sm:opacity-0 md:opacity-0 lg:opacity-100 opacity-0"></hr>
      </div>
    </div>
  );
}
