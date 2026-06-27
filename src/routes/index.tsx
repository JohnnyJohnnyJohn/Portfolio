import { createFileRoute } from "@tanstack/react-router";

import { PortfolioHero, WorkView } from "#/components/portfolio";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
	return (
		<>
			<PortfolioHero />
			<WorkView />
		</>
	);
}
