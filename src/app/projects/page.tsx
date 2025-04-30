import { ProjectCard } from "./card";
import { PROJECTS } from "./data";

export default function Projects() {
  return (
    <div className="py-10 md:pr-3 md:pl-7 px-7 flex flex-col h-full gap-10">
      <div className="transparent md:pl-8 flex flex-col gap-2">
        <p className="text-4xl md:text-left text-center font-semibold font-mono text-three">
          PROJECTS
        </p>
      </div>
      <div className="flex flex-col gap-10 text-white">
        {PROJECTS.map((project, index) => {
          return <ProjectCard key={index} {...project} />;
        })}
      </div>
    </div>
  );
}
