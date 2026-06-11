export type PortfolioView = "work" | "info";

export type ViewOption = {
	value: PortfolioView;
	label: string;
};

export type Project = {
	name: string;
	client: string;
	year: string;
	description: string;
	thumbnail: string;
	glow: string;
	href?: string;
};

export type TimelineItem = {
	period: string;
	title: string;
	place: string;
};

export const profile = {
	name: "Fethi Sedjai",
	role: "Application Developer",
	email: "fethisedjai@gmail.com",
	linkedinHref: "https://www.linkedin.com",
	resumeHref: "/fethi-sedjai-resume.pdf",
	heroEyebrow: "Fethi Sedjai — Application Developer",
	headlineLead: "I build products, solutions &",
	headlineAccent: "stories.",
	intro: "Developer at Dev-id. Based in Marseille.",
	introMuted: "Focused on Software Architecture.",
} as const;

export const viewOptions: ViewOption[] = [
	{ value: "work", label: "Work" },
	{ value: "info", label: "Info" },
];

export const projects: Project[] = [
	{
		name: "Sea Edge",
		client: "Icard Maritime",
		year: "2026",
		description:
			"Shaping a maritime operations interface around reusable React/MUI components for planning, crews, vessels and maintenance.",
		thumbnail: "/sea-edge.png",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(137,185,212,.42),transparent_62%),radial-gradient(circle_at_50%_0,rgba(146,203,183,.24),transparent_68%),radial-gradient(circle_at_50%_0,rgba(14,37,53,.65),transparent)]",
	},
	{
		name: "Devver",
		client: "Annual School Project",
		year: "2025-26",
		description:
			"Helping product teams validate branches in seconds through preview URLs, a React dashboard and contextual feedback overlay.",
		href: "https://devver.app",
		thumbnail: "/devver.png",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(52,211,153,.22),transparent_62%),radial-gradient(circle_at_50%_0,rgba(137,119,68,.2),transparent_70%),radial-gradient(circle_at_50%_0,rgba(37,37,37,.74),transparent)]",
	},
	{
		name: "Oreus",
		client: "Oreus",
		year: "2025",
		description:
			"Building the service layer behind a sovereign AI platform: organizations, permissions, storage, AI agents and MCP-ready workflows.",
		href: "https://oreus.ai",
		thumbnail: "/oreus.png",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(116,132,155,.3),transparent_64%),radial-gradient(circle_at_50%_0,rgba(143,118,117,.22),transparent_72%),radial-gradient(circle_at_50%_0,rgba(23,23,25,.78),transparent)]",
	},
	{
		name: "ALLinOne RH",
		client: "Twinin Group",
		year: "2024-25",
		description:
			"Improving an AI-powered recruiting platform across candidate journeys, recruiter workflows, ATS integrations and operational dashboards.",
		href: "https://allinonerh.ai",
		thumbnail: "/aio.png",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(106,107,224,.32),transparent_62%),radial-gradient(circle_at_50%_0,rgba(126,142,214,.24),transparent_70%),radial-gradient(circle_at_50%_0,rgba(206,155,118,.18),transparent)]",
	},
	{
		name: "MyShop",
		client: "Airbus",
		year: "2023-25",
		description:
			"Turning industrial tool management into traceable workflows for Airbus teams, with requests, roles, KPIs, notifications and exports.",
		thumbnail: "/myshop.png",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(88,103,139,.26),transparent_64%),radial-gradient(circle_at_50%_0,rgba(177,184,201,.16),transparent_74%),radial-gradient(circle_at_50%_0,rgba(22,43,93,.72),transparent)]",
	},
	{
		name: "IziLife",
		client: "Certification project",
		year: "2023-24",
		description:
			"Designing a platform where accessibility solutions, discussions and resources become easier to share, discover and maintain.",
		href: "https://izilife.fr",
		thumbnail: "/izilife.png",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(131,102,152,.34),transparent_62%),radial-gradient(circle_at_50%_0,rgba(236,72,153,.18),transparent_72%),radial-gradient(circle_at_50%_0,rgba(75,51,87,.48),transparent)]",
	},
];

export const timeline: TimelineItem[] = [
	{
		period: "Since 2025",
		title: "Master's degree in Software Architecture",
		place: "ESGI Aix-en-Provence",
	},
	{
		period: "Since 2023",
		title: "Web & mobile application developer",
		place: "DEV-ID, Marseille",
	},
	{
		period: "2023 - 2025",
		title: "Application Designer & Developer",
		place: "Simplon / DEV-ID",
	},
	{
		period: "2022 - 2023",
		title: "Web & Mobile Web Developer",
		place: "Simplon",
	},
];

export const skills = [
	"TypeScript",
	"React",
	"Angular",
	"NestJS",
	"REST APIs",
	"PostgreSQL",
	"MongoDB",
	"Docker",
	"CI/CD",
	"Clean Code",
	"Logto",
	"RustFS",
];
