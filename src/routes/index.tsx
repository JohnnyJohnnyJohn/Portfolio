import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

import {
	InfoView,
	PortfolioFooter,
	PortfolioHeader,
	PortfolioHero,
	WorkView,
} from "#/components/portfolio";
import type { PortfolioView } from "#/lib/portfolio-content";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	const [view, setView] = useState<PortfolioView>("work");

	return (
		<main className="min-h-screen overflow-hidden bg-portfolio-bg text-portfolio-fg">
			<PortfolioBackground />
			<PortfolioHeader activeView={view} onViewChange={setView} />
			{view === "work" ? (
				<>
					<PortfolioHero />
					<WorkView />
				</>
			) : (
				<InfoView />
			)}
			<PortfolioFooter onViewChange={setView} />
		</main>
	);
}

function PortfolioBackground() {
	return (
		<div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.11),transparent_27%),radial-gradient(circle_at_18%_26%,rgba(255,255,255,0.045),transparent_24%),linear-gradient(180deg,var(--portfolio-bg-soft)_0%,var(--portfolio-bg)_38%,var(--portfolio-bg-deep)_100%)]" />
	);
}
