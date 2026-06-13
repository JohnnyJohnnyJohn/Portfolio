import {
	type PortfolioView,
	profile,
	viewOptions,
} from "#/lib/portfolio-content";

type PortfolioFooterProps = {
	onViewChange: (view: PortfolioView) => void;
};

export function PortfolioFooter({ onViewChange }: PortfolioFooterProps) {
	return (
		<footer className="relative z-10 mx-auto grid max-w-6xl gap-8 border-portfolio-border border-t px-5 py-10 text-xs text-portfolio-dim sm:grid-cols-[1fr_auto] sm:px-8">
			<div>
				<p className="mb-2 text-portfolio-soft">MAIN</p>
				{viewOptions.map((option) => (
					<button
						key={option.value}
						type="button"
						onClick={() => onViewChange(option.value)}
						className="mr-4 transition-colors last:mr-0 md:hover:text-white"
					>
						{option.label}
					</button>
				))}
			</div>
			<div className="sm:text-right">
				<p className="mb-2 text-portfolio-soft">CONTACT</p>
				<a href={`mailto:${profile.email}`} className="md:hover:text-white">
					{profile.email}
				</a>
				<p className="mt-6">© 2026 {profile.name}. All Rights Reserved.</p>
			</div>
		</footer>
	);
}
