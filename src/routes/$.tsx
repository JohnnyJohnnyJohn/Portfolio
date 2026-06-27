import { createFileRoute, notFound } from "@tanstack/react-router";

import { PortfolioNotFound } from "#/components/portfolio";

export const Route = createFileRoute("/$")({
	beforeLoad: () => {
		throw notFound();
	},
	head: () => ({
		meta: [
			{
				title: "Page not found | Fethi Sedjai",
			},
			{
				name: "description",
				content: "The requested portfolio page could not be found.",
			},
			{
				name: "robots",
				content: "noindex, follow",
			},
		],
	}),
	notFoundComponent: PortfolioNotFound,
});
