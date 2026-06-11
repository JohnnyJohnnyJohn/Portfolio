import { ArrowUpRight, AtSign, X } from "lucide-react";
import { type ReactNode, useState } from "react";

import {
	type PortfolioView,
	profile,
	viewOptions,
} from "#/lib/portfolio-content";

import { SegmentedSwitch } from "./SegmentedSwitch";

type PortfolioHeaderProps = {
	activeView: PortfolioView;
	onViewChange: (view: PortfolioView) => void;
};

export function PortfolioHeader({
	activeView,
	onViewChange,
}: PortfolioHeaderProps) {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	return (
		<header className="fixed inset-x-0 top-0 z-30 px-4 pt-5 md:px-6 md:pt-8 min-[1440px]:px-12">
			<div className="relative mx-auto flex items-center justify-between gap-4">
				<div className="min-w-0">
					<div className="hidden px-6 py-1 rounded-full backdrop-blur-lg md:block">
						<span className="block text-lg tracking-wider -mb-1 font-semibold text-white">
							{profile.name}
						</span>
						<span className="block text-xs font-medium tracking-tighter text-portfolio-subtle">
							{profile.role}
						</span>
					</div>
					<div className="md:hidden">
						<SegmentedSwitch
							value={activeView}
							options={viewOptions}
							onChange={onViewChange}
						/>
					</div>
				</div>

				<div className="absolute top-0 left-1/2 hidden -translate-x-1/2 min-[1440px]:block">
					<SegmentedSwitch
						value={activeView}
						options={viewOptions}
						onChange={onViewChange}
					/>
				</div>

				<div className="flex gap-4">
					<div className="hidden md:max-[1439px]:block">
						<SegmentedSwitch
							value={activeView}
							options={viewOptions}
							onChange={onViewChange}
						/>
					</div>

					<nav className="hidden items-center gap-1.5 text-sm font-medium text-white min-[1440px]:flex">
						<HeaderLink href={profile.linkedinHref}>LinkedIn</HeaderLink>
						<HeaderLink href={profile.resumeHref}>Resume</HeaderLink>
					</nav>

					<button
						type="button"
						aria-expanded={isMenuOpen}
						aria-label={isMenuOpen ? "Close contact menu" : "Open contact menu"}
						onClick={() => setIsMenuOpen((current) => !current)}
						className="grid cursor-pointer size-12 shrink-0 place-items-center rounded-full border border-portfolio-border bg-linear-to-b from-white/8 to-white/2 text-white shadow-[0_18px_70px_rgba(0,0,0,.45)] backdrop-blur-xl transition-colors hover:border-white/20 hover:from-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg min-[1440px]:hidden"
					>
						{isMenuOpen ? <X size={22} /> : <AtSign size={22} />}
					</button>
				</div>

				{isMenuOpen ? (
					<div className="absolute top-16 right-0 w-40 p-1.5 rounded-3xl border border-portfolio-border bg-linear-to-b from-white/8 to-white/2 text-white shadow-[0_18px_70px_rgba(0,0,0,.45)] backdrop-blur-xl transition-colors hover:border-white/20 hover:from-white/12 min-[1440px]:hidden">
						<MobileMenuLink href={profile.linkedinHref}>
							LinkedIn
						</MobileMenuLink>
						<MobileMenuLink href={profile.resumeHref}>Resume</MobileMenuLink>
					</div>
				) : null}
			</div>
		</header>
	);
}

function HeaderLink({ children, href }: { children: ReactNode; href: string }) {
	return (
		<a
			href={href}
			className="inline-flex items-center gap-2 rounded-full py-3.5 px-4 backdrop-blur-lg transition-colors duration-300 hover:bg-linear-to-r hover:from-white/8 hover:to-transparent"
		>
			{children}
			<ArrowUpRight size={20} />
		</a>
	);
}

function MobileMenuLink({
	children,
	href,
}: {
	children: ReactNode;
	href: string;
}) {
	return (
		<a
			href={href}
			className="flex items-center justify-between rounded-full w-full h-10 py-3 px-4.5 text-sm font-medium text-white transition-colors hover:bg-linear-to-br hover:from-white/8 hover:to-transparent"
		>
			{children}
			<ArrowUpRight size={14} />
		</a>
	);
}
