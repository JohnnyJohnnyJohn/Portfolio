import type { ReactNode } from "react";

import type { PortfolioView } from "#/lib/portfolio-content";

import { PortfolioFooter } from "./PortfolioFooter";
import { PortfolioHeader } from "./PortfolioHeader";

type PortfolioLayoutProps = {
	activeView: PortfolioView | null;
	children: ReactNode;
};

export function PortfolioLayout({
	activeView,
	children,
}: PortfolioLayoutProps) {
	return (
		<main className="min-h-screen overflow-hidden bg-portfolio-bg text-portfolio-fg">
			<PortfolioBackground />
			<PortfolioHeader activeView={activeView} />
			{children}
			<PortfolioFooter />
		</main>
	);
}

function PortfolioBackground() {
	return (
		<div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.11),transparent_27%),radial-gradient(circle_at_18%_26%,rgba(255,255,255,0.045),transparent_24%),linear-gradient(180deg,var(--portfolio-bg-soft)_0%,var(--portfolio-bg)_38%,var(--portfolio-bg-deep)_100%)]" />
	);
}
