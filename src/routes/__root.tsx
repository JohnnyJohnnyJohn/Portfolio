import {
	createRootRoute,
	HeadContent,
	Outlet,
	Scripts,
	useLocation,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import { PortfolioLayout, PortfolioNotFound } from "#/components/portfolio";
import type { PortfolioView } from "#/lib/portfolio-content";

import appCss from "../styles.css?url";

export const Route = createRootRoute({
	component: RootComponent,
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Fethi Sedjai | Application Developer",
			},
			{
				name: "description",
				content:
					"Portfolio of Fethi Sedjai, TypeScript application developer based in Marseille.",
			},
		],
		links: [
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg",
				sizes: "any",
			},
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),
	notFoundComponent: RootNotFoundComponent,
	shellComponent: RootDocument,
});

function RootComponent() {
	const { pathname } = useLocation();
	const activeView: PortfolioView | null =
		pathname === "/" ? "work" : pathname === "/info" ? "info" : null;

	return (
		<PortfolioLayout activeView={activeView}>
			<Outlet />
		</PortfolioLayout>
	);
}

function RootNotFoundComponent() {
	return (
		<PortfolioLayout activeView={null}>
			<PortfolioNotFound />
		</PortfolioLayout>
	);
}

function RootDocument({ children }: { children: ReactNode }) {
	return (
		<html lang="en">
			<head>
				<HeadContent />
			</head>
			<body>
				{children}
				<Scripts />
			</body>
		</html>
	);
}
