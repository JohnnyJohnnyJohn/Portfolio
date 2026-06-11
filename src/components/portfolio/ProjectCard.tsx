import { ArrowUpRight } from "lucide-react";

import type { Project } from "#/lib/portfolio-content";

type ProjectCardProps = {
	project: Project;
	index: number;
};

export function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<div className="group relative w-full rounded-[24px] bg-[#f2f2f2]/[.04] p-2 mb-8 outline outline-1 -outline-offset-1 outline-[#f2f2f2]/[.05] shadow-[0_40px_80px_rgba(0,0,0,.5)] min-[1920px]:rounded-[36px] min-[1920px]:p-3">
			<a
				href={project.href}
				aria-label={`Open ${project.name}`}
				className="relative flex h-auto flex-col gap-12 overflow-hidden rounded-[16px] border border-[#3d3d3d] bg-[linear-gradient(190deg,#252525,#101010)] px-6 pt-[26px] text-[#f2f2f2] no-underline transition-colors duration-400 hover:border-[#888] md:h-[588px] md:gap-14 md:px-7 md:pt-8 min-[1440px]:h-[696px] min-[1440px]:gap-16 min-[1440px]:px-8 min-[1440px]:pt-9 min-[1920px]:h-[960px] min-[1920px]:gap-[88px] min-[1920px]:rounded-[24px] min-[1920px]:px-11 min-[1920px]:pt-11"
			>
				<div
					className={`pointer-events-none absolute inset-0 opacity-100 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 ${project.glow}`}
				/>

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

					<p className="max-w-full pr-8 font-['Neue_Montreal',ui-sans-serif,sans-serif] text-[15px] font-normal leading-[19px] tracking-normal text-[#f2f2f2]/50 md:text-sm md:leading-5 min-[1440px]:text-base min-[1920px]:text-lg min-[1920px]:leading-[26px]">
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
					className="relative z-10 mx-auto block w-full max-w-full self-center shadow-[0_40px_50px_10px_rgba(0,0,0,.25)] transition-transform ease-out duration-300 md:max-w-[90%] md:group-hover:-translate-y-6 md:group-hover:scale-102"
				/>
			</a>
		</div>
	);
}
