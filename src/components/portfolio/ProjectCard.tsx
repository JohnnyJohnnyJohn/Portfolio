import { ArrowUpRight } from "lucide-react";

import BorderGlow from "#/components/BorderGlow";
import type { Project } from "#/lib/portfolio-content";

type ProjectCardProps = {
  project: Project;
  index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <BorderGlow
      className="group mb-8 w-full rounded-3xl border-white/15 p-2 outline-1 -outline-offset-1 outline-[#f2f2f2]/5 shadow-[0_40px_80px_rgba(0,0,0,.5)] transition-shadow duration-500 md:hover:shadow-[0_48px_110px_rgba(0,0,0,.62),0_0_90px_rgba(242,242,242,.08)] min-[1920px]:rounded-[36px] min-[1920px]:p-3"
      colors={project.borderGlow.colors}
      glowColor={project.borderGlow.glowColor}
    >
      <a
        href={project.href}
        aria-label={`Open ${project.name}`}
        className="relative flex h-auto flex-col gap-12 overflow-hidden rounded-2xl border border-[#3d3d3d] bg-[linear-gradient(190deg,#252525,#101010)] px-6 pt-6.5 text-[#f2f2f2] no-underline transition-colors duration-400 hover:border-[#888] md:h-147 md:gap-14 md:px-7 md:pt-8 min-[1440px]:h-174 min-[1440px]:gap-16 min-[1440px]:px-8 min-[1440px]:pt-9 min-[1920px]:h-240 min-[1920px]:gap-22 min-[1920px]:rounded-3xl min-[1920px]:px-11 min-[1920px]:pt-11"
      >
        <div
          className={`pointer-events-none absolute inset-[-18%] opacity-0 blur-2xl saturate-150 transition-[opacity,transform,filter] duration-700 md:blur-3xl md:group-hover:scale-105 md:group-hover:opacity-100 ${project.glow}`}
        />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,.34),rgba(255,255,255,.12)_24%,transparent_58%)] opacity-0 mix-blend-screen transition-opacity duration-500 md:group-hover:opacity-65" />
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(16,16,16,.16)_48%,rgba(16,16,16,.78)_100%)] opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

        <div className="relative z-10 flex flex-col gap-2 min-[1920px]:gap-3">
          <div className="flex items-center justify-between">
            <h3 className="flex font-['Neue_Montreal',ui-sans-serif,sans-serif] text-2xl font-medium leading-none tracking-normal text-[#f2f2f2] [text-shadow:0_-2px_10px_rgba(255,255,255,.2)] min-[1920px]:text-[2rem]">
              {project.name}
            </h3>
            {project.href && (
              <ArrowUpRight
                className="size-8 shrink-0 text-[#f2f2f2] min-[1920px]:size-12 transition-transform duration-300 delay-150 ease-out md:group-hover:translate-x-3 md:group-hover:-translate-y-3"
                strokeWidth={1.7}
              />
            )}
          </div>

          <p className="max-w-full pr-8 text-[15px] font-normal leading-4.75 tracking-normal text-[#f2f2f2]/50 md:text-sm md:leading-5 min-[1440px]:text-base min-[1920px]:text-lg min-[1920px]:leading-6.5">
            <span className="font-medium text-[#f2f2f2]/80">
              {project.client}, {project.year}
            </span>{" "}
            <span aria-hidden="true">—</span> <span>{project.description}</span>
          </p>
        </div>

        <img
          src={project.thumbnail}
          alt=""
          loading={index === 1 ? "eager" : "lazy"}
          className="relative z-10 mx-auto block w-full max-w-full self-center shadow-[0_44px_80px_12px_rgba(0,0,0,.32)] transition-transform ease-out duration-300 md:max-w-[90%] md:group-hover:-translate-y-6 md:group-hover:scale-102"
        />
      </a>
    </BorderGlow>
  );
}
