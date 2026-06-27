import { createFileRoute } from "@tanstack/react-router";

import { InfoView } from "#/components/portfolio";

export const Route = createFileRoute("/info")({ component: InfoPage });

function InfoPage() {
	return <InfoView />;
}
