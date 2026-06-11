import { timeline } from "#/lib/portfolio-content";

export function InfoView() {
	return (
		<section className="relative z-10 mx-auto max-w-5xl px-7 pt-48 pb-24 sm:px-12 sm:pt-64 xl:pt-56">
			<div className="mb-10">
				<p className="text-sm font-semibold uppercase tracking-[0.28em] text-portfolio-dim">
					Info
				</p>
				<h1 className="mt-5 text-5xl font-black leading-none text-white sm:text-7xl">
					Career path
				</h1>
			</div>

			<div className="rounded-[34px] border border-portfolio-border bg-portfolio-surface/80 p-4 shadow-[0_24px_90px_rgba(0,0,0,.5)]">
				<div className="rounded-[26px] border border-portfolio-border-soft bg-portfolio-panel p-6 sm:p-8">
					{timeline.map((item) => (
						<div
							key={`${item.period}-${item.title}`}
							className="grid gap-3 border-portfolio-border border-t py-6 first:border-t-0 sm:grid-cols-[160px_1fr] sm:py-7"
						>
							<p className="text-sm font-medium text-portfolio-dim">
								{item.period}
							</p>
							<div>
								<h2 className="text-xl font-semibold text-white sm:text-2xl">
									{item.title}
								</h2>
								<p className="mt-2 text-base text-portfolio-muted sm:text-lg">
									{item.place}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
