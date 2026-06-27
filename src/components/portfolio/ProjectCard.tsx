import { ArrowUpRight } from "lucide-react";
import type { PointerEvent } from "react";

import BorderGlow from "#/components/BorderGlow";
import type { Project } from "#/lib/portfolio-content";

type ProjectCardProps = {
	project: Project;
	index: number;
};

function updateInnerGlowPosition(event: PointerEvent<HTMLAnchorElement>) {
	if (event.pointerType !== "mouse") return;

	const rect = event.currentTarget.getBoundingClientRect();
	const normalizedX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
	const normalizedY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;

	event.currentTarget.style.setProperty(
		"--project-glow-x",
		`${normalizedX * 256}px`,
	);
	event.currentTarget.style.setProperty(
		"--project-glow-y",
		`${normalizedY * 192}px`,
	);
	event.currentTarget.style.setProperty(
		"--project-image-x",
		`${normalizedX * 12}px`,
	);
	event.currentTarget.style.setProperty(
		"--project-image-y",
		`${normalizedY * 8}px`,
	);
}

export function ProjectCard({ project, index }: ProjectCardProps) {
	return (
		<BorderGlow
			className="group w-full rounded-3xl border-white/5 p-2 outline-1 -outline-offset-1 outline-white/5 shadow-[0_40px_80px_rgba(0,0,0,.5)] transition-shadow duration-500 md:hover:shadow-[0_48px_110px_rgba(0,0,0,.62),0_0_90px_rgba(242,242,242,.08)] min-[1920px]:rounded-[36px] min-[1920px]:p-3"
			colors={project.borderGlow.colors}
			glowColor={project.borderGlow.glowColor}
		>
			<a
				href={project.href}
				aria-label={`Open ${project.name}`}
				target="_blank"
				rel="noreferrer"
				onPointerMove={updateInnerGlowPosition}
				className="relative flex h-auto flex-col gap-12 overflow-hidden rounded-2xl [clip-path:inset(0_round_1rem)] border border-white/30 bg-[linear-gradient(190deg,#252525,#101010)] px-6 pt-6.5 text-[#f2f2f2] no-underline transition-colors duration-400 md:h-147 md:gap-14 md:px-7 md:pt-8 md:hover:border-[#888] min-[1440px]:h-174 min-[1440px]:gap-16 min-[1440px]:px-8 min-[1440px]:pt-9 min-[1920px]:h-240 min-[1920px]:gap-22 min-[1920px]:rounded-3xl min-[1920px]:[clip-path:inset(0_round_1.5rem)] min-[1920px]:px-11 min-[1920px]:pt-11"
			>
				<div
					className="pointer-events-none absolute inset-[-18%] transition-transform duration-300 ease-out"
					style={{
						transform:
							"translate3d(var(--project-glow-x, 0px), var(--project-glow-y, 0px), 0)",
					}}
				>
					<div
						className={`absolute inset-0 opacity-100 blur-2xl saturate-150 transition-[opacity,transform,filter] duration-700 md:opacity-0 md:blur-3xl md:group-hover:scale-105 md:group-hover:opacity-100 ${project.glow}`}
					/>
				</div>
				<div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_-12%,rgba(255,255,255,.34),rgba(255,255,255,.12)_24%,transparent_58%)] opacity-0 mix-blend-screen transition-opacity duration-500 md:group-hover:opacity-65" />
				<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(16,16,16,.16)_48%,rgba(16,16,16,.78)_100%)] opacity-0 transition-opacity duration-500 md:group-hover:opacity-100" />

				<div className="relative z-10 flex flex-col gap-2 min-[1920px]:gap-3">
					<div className="flex items-center justify-between">
						<h3 className="flex font-['Neue_Montreal',ui-sans-serif,sans-serif] text-2xl font-medium leading-none tracking-normal text-[#f2f2f2] [text-shadow:0_-2px_10px_rgba(255,255,255,.2)] min-[1920px]:text-[2rem]">
							{project.name}
						</h3>
						{project.href && (
							<ArrowUpRight
								className="size-8 shrink-0 text-[#f2f2f2] min-[1920px]:size-12 transition-transform duration-500 delay-150 ease-out md:group-hover:translate-x-3 md:group-hover:-translate-y-3"
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

				<div
					className="relative z-10 mx-auto w-full max-w-full self-center transition-transform duration-500 ease-out md:max-w-[90%]"
					style={{
						transform:
							"translate3d(var(--project-image-x, 0px), var(--project-image-y, 0px), 0)",
					}}
				>
					<img
						src={project.thumbnail}
						alt=""
						loading={index === 1 ? "eager" : "lazy"}
						className="block w-full shadow-[0_44px_80px_12px_rgba(0,0,0,.32)] transition-transform duration-500 ease-out md:group-hover:-translate-y-6 md:group-hover:scale-102"
					/>
				</div>
			</a>
		</BorderGlow>
	);
}
