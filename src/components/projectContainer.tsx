import { Projects } from "@/app/page";
import Project from "./project";

export default function ProjectContainer({ projects }: { projects: Projects[] }) {
  return (
    <div className="project-container h-[90%] overflow-y-scroll   ">
      {projects.map((project: Projects, i: number) => (
        <Project project={project} index={i} key={i} />
      ))}
    </div>
  );
}
