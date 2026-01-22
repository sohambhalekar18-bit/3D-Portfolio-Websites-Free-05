import { ProjectCard } from "@/components/sub/project-card";
import { PROJECTS } from "@/constants";

export const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 w-full"
    >
      {/* Title */}
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-12">
        My Projects
      </h1>

      {/* Horizontal Slider */}
      <div className="w-full overflow-x-auto scrollbar-hide">
        <div className="flex gap-10 px-10 min-w-max">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="min-w-[320px] max-w-[320px]"
            >
              <ProjectCard
                src={project.image}
                title={project.title}
                description={project.description}
                link={project.link}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
