import ProjectContainer from "@/components/projectContainer";
import { useEffect, useState } from "react";
import TopInfo from "../components/topInfo";
import ProjectsData from "../data/projects.json";
const projects: Projects[] = ProjectsData;
export interface Projects {
  name: string;
  year: string;
  stack: string;
  description: string;
  github: string;
  link: string;
}

export default function Home() {
  return (
    <main className="h-screen bg-black text-font font-vt flex flex-col items-stretch justify-items-stretch overflow-x-hidden">
      <TopInfo />
      <ProjectContainer projects={projects}></ProjectContainer>
    </main>
  );
}
