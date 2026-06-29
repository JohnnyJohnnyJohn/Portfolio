import { Link } from "@tanstack/react-router";
import { ArrowLeft, Info } from "lucide-react";

export function PortfolioNotFound() {
	return (
		<section className="relative z-10 flex min-h-[calc(100vh-14rem)] items-center justify-center px-4 pt-36 pb-20 md:px-6 md:pt-44 md:pb-28 lg:px-0">
			<div className="flex w-full max-w-220.5 flex-col gap-10 min-[1440px]:max-w-261 min-[1920px]:max-w-360">
				<div className="flex flex-col gap-6">
					<p className="flex items-center gap-2 text-sm font-medium text-[#f2f2f2]/50">
						<span className="size-2.5 rounded-full bg-[#f2f2f2] shadow-[0_0_16px_rgba(255,255,255,.7)]" />
						404
					</p>
					<h1 className="max-w-4xl text-5xl font-medium leading-[.95] tracking-normal text-[#f2f2f2] md:text-7xl min-[1440px]:text-8xl">
						This page does not exist.
					</h1>
					<p className="max-w-2xl text-lg leading-7 font-light text-[#f2f2f2]/60 md:text-xl md:leading-8">
						The URL may be outdated, moved, or unavailable.{" "}
						<br className="hidden sm:block" />
						You can return to the work overview or read more about me.
					</p>
				</div>

				<div className="flex flex-col gap-3 sm:flex-row">
					<Link
						to="/"
						className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-portfolio-border bg-linear-to-b from-white/8 to-white/2 px-5 text-sm font-semibold text-[#f2f2f2] shadow-[0_18px_70px_rgba(0,0,0,.35)] backdrop-blur-xl transition-colors md:hover:border-white/20 md:hover:from-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg"
					>
						<ArrowLeft size={18} strokeWidth={2} />
						Back to work
					</Link>
					<Link
						to="/info"
						className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-portfolio-border bg-linear-to-b from-white/8 to-white/2 px-5 text-sm font-semibold text-[#f2f2f2] shadow-[0_18px_70px_rgba(0,0,0,.35)] backdrop-blur-xl transition-colors md:hover:border-white/20 md:hover:from-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg"
					>
						<Info size={18} strokeWidth={2} />
						About me
					</Link>
				</div>
			</div>
		</section>
	);
}
