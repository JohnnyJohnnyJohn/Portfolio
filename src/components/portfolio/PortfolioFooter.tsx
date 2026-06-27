import { ArrowUpRight } from "lucide-react";

import { profile, viewOptions } from "#/lib/portfolio-content";

export function PortfolioFooter() {
	return (
		<footer className="relative z-10 flex justify-center border-portfolio-border border-t px-4 pt-16 pb-12 text-[#f2f2f2] md:px-6 md:pt-22 md:pb-20 lg:px-0">
			<div className="flex w-full max-w-220.5 flex-col gap-12 md:gap-16">
				<div className="flex items-start justify-between">
					<div className="flex gap-4 md:gap-12">
						<div className="flex w-24 flex-col items-start gap-3 md:w-26.5 md:gap-4">
							<p className="text-[9px] leading-3.25 tracking-[1.5px] text-[#f2f2f2]/50">
								MAIN
							</p>
							<div className="flex flex-col gap-2">
								{viewOptions.map((option) => (
									<a
										key={option.value}
										href={option.href}
										className="flex h-10 w-24 items-center text-left text-base leading-5 tracking-[.2px] text-[#f2f2f2] font-semibold cursor-pointer md:w-26.5"
									>
										{option.label}
									</a>
								))}
							</div>
						</div>

						<div className="flex w-24 flex-col items-start gap-3 md:w-26.5 md:gap-4">
							<p className="text-[9px] leading-3.25 tracking-[1.5px] text-[#f2f2f2]/50">
								CONTACT
							</p>
							<div className="flex flex-col gap-2">
								<a
									href={profile.linkedinHref}
									target="_blank"
									rel="noreferrer"
									className="flex h-10 w-24 items-center text-base leading-5 tracking-[.2px] text-[#f2f2f2] font-semibold cursor-pointer md:w-26.5"
								>
									LinkedIn{" "}
									<ArrowUpRight className="ml-1.5" size={22} strokeWidth={2} />
								</a>
								<a
									href={profile.resumeHref}
									target="_blank"
									rel="noreferrer"
									className="flex h-10 w-24 items-center text-base leading-5 tracking-[.2px] text-[#f2f2f2] font-semibold cursor-pointer md:w-26.5"
								>
									Resume{" "}
									<ArrowUpRight className="ml-1.5" size={22} strokeWidth={2} />
								</a>
							</div>
						</div>
					</div>
				</div>

				<div className="flex flex-col items-end gap-2 tracking-[.2px] w-full md:gap-1">
					<p className="text-sm font-semibold leading-4.5 md:text-base md:leading-6">
						© 2026 {profile.name}. All Rights Reserved.
					</p>
					<p className="text-xs leading-4 text-[#f2f2f2]/50 md:text-sm md:leading-5">
						Made with care in Marseille.
					</p>
				</div>
			</div>
		</footer>
	);
}
