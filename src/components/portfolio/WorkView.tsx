import { projects } from "#/lib/portfolio-content";

import { ProjectCard } from "./ProjectCard";

export function WorkView() {
  return (
    <section className="relative z-10 flex w-screen flex-col items-center px-4 pb-20 md:px-6 md:pt-7 md:pb-50 lg:px-0 min-[1440px]:pt-16">
      <div className="flex w-full max-w-220.5 flex-col gap-4 md:mx-auto md:gap-8 min-[1440px]:max-w-261 min-[1440px]:gap-16 min-[1920px]:max-w-360">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index + 1} project={project} />
        ))}
      </div>
    </section>
  );
}
