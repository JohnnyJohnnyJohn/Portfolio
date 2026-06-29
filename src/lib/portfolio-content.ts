export type PortfolioView = "work" | "info";
export type PortfolioRouteHref = "/" | "/info";

export type ViewOption = {
	value: PortfolioView;
	label: string;
	href: PortfolioRouteHref;
};

export type Project = {
	name: string;
	client: string;
	year: string;
	description: string;
	thumbnail: string;
	glow: string;
	borderGlow: BorderGlowTheme;
	href?: string;
};

export type BorderGlowTheme = {
	glowColor: string;
	colors: string[];
};

export type TimelineItem = {
	period: string;
	title: string;
	place: string;
};

export type InfoStoryBlock = {
	title: string;
	copy: string[];
	image: string;
	imageAlt: string;
	hasClosing?: boolean;
	imageFirst?: boolean;
	offset?: boolean;
};

export type InfoExperienceItem = {
	company: string;
	role: string;
	period: string;
	description: string;
};

export type InfoFocusItem = {
	name: string;
	meta: string;
	detail: string;
};

export const profile = {
	name: "Fethi Sedjai",
	role: "Application Developer",
	email: "fethisedjai@gmail.com",
	linkedinHref: "https://www.linkedin.com/in/fethisedjai/",
	resumeHref: "/fethi-sedjai-resume.pdf",
	heroEyebrow: "Fethi Sedjai — Application Developer",
	headlineLead: "I build products, solutions &",
	headlineAccent: "stories.",
	intro: "Developer at Dev-id. Based in Marseille.",
	introMuted: "Focused on Software Architecture.",
} as const;

export const viewOptions: ViewOption[] = [
	{ value: "work", label: "Work", href: "/" },
	{ value: "info", label: "Info", href: "/info" },
];

export const heroBorderGlow: BorderGlowTheme = {
	glowColor: "0 0 92",
	colors: ["#f2f2f2", "#aeb4c2", "#7a7481"],
};

export const projects: Project[] = [
	{
		name: "Devver",
		client: "Annual School Project",
		year: "2025-26",
		description:
			"Helping product teams validate branches in seconds through preview URLs, a React dashboard and contextual feedback overlay.",
		href: "https://devver.app",
		thumbnail: "/devver.webp",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(52,211,153,.46),transparent_60%),radial-gradient(circle_at_50%_0,rgba(137,119,68,.34),transparent_70%),radial-gradient(circle_at_50%_0,rgba(37,37,37,.9),transparent)]",
		borderGlow: {
			glowColor: "156 67 58",
			colors: ["#34d399", "#897744", "#252525"],
		},
	},
	{
		name: "Oreus",
		client: "Oreus",
		year: "2025",
		description:
			"Building the service layer behind a sovereign AI platform: organizations, permissions, storage, AI agents and MCP-ready workflows.",
		href: "https://oreus.ai",
		thumbnail: "/oreus.webp",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(116,132,155,.52),transparent_60%),radial-gradient(circle_at_50%_0,rgba(143,118,117,.36),transparent_72%),radial-gradient(circle_at_50%_0,rgba(23,23,25,.9),transparent)]",
		borderGlow: {
			glowColor: "216 18 64",
			colors: ["#74849b", "#8f7675", "#171719"],
		},
	},
	{
		name: "ALLinOne RH",
		client: "Twinin Group",
		year: "2024-25",
		description:
			"Improving an AI-powered recruiting platform across candidate journeys, recruiter workflows, ATS integrations and operational dashboards.",
		href: "https://allinonerh.ai",
		thumbnail: "/aio.webp",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(106,107,224,.6),transparent_58%),radial-gradient(circle_at_50%_0,rgba(126,142,214,.38),transparent_70%),radial-gradient(circle_at_50%_0,rgba(206,155,118,.28),transparent)]",
		borderGlow: {
			glowColor: "239 66 65",
			colors: ["#6a6be0", "#7e8ed6", "#ce9b76"],
		},
	},
	{
		name: "IziLife",
		client: "Certification project",
		year: "2023-24",
		description:
			"Designing a platform where accessibility solutions, discussions and resources become easier to share, discover and maintain.",
		href: "https://izilife.fr",
		thumbnail: "/izilife.webp",
		glow: "bg-[radial-gradient(circle_at_50%_0,rgba(131,102,152,.62),transparent_58%),radial-gradient(circle_at_50%_0,rgba(236,72,153,.3),transparent_72%),radial-gradient(circle_at_50%_0,rgba(75,51,87,.74),transparent)]",
		borderGlow: {
			glowColor: "279 22 58",
			colors: ["#836698", "#ec4899", "#4b3357"],
		},
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

export const infoHero = {
	overline: "ABOUT ME",
	headlineLead:
		"I build applications with the conviction that limits can be understood, questioned",
	headlineAccent: "and then surpassed.",
	textShadow:
		"0 5px 10px rgba(0,87,255,.15), 0 -5px 10px rgba(255,90,0,.1), 0 -5px 25px rgba(255,255,255,.3)",
	serifShadow:
		"0 5px 15px rgba(0,87,255,.1), 0 -5px 15px rgba(255,90,0,.08), 0 0 30px rgba(255,255,255,.2)",
} as const;

export const infoSectionLabels = {
	experience: "EXPERIENCE",
	focus: "FOCUS",
} as const;

const infoStoryContent = {
	developer: {
		title: "A developer shaped by constraints.",
		copy: [
			"I’m Fethi Sedjai, a web developer, application designer, and software architecture student based in Marseille.",
			"I build clear, useful, and maintainable products, from interface decisions to architecture choices. My work is shaped by one belief: constraints are starting points for better thinking.",
		],
	},
	question: {
		title: "The question I had to answer.",
		copy: [
			"I was born with a disability affecting all four limbs. Growing up, I followed a regular school path, with strong grades and a real interest in mathematics and science.",
			"After my scientific baccalaureate, two years between engineering prep school and a Mathematics and Computer Science degree, I stopped. Not because I had lost interest, but because I needed to answer one question: does my disability define my limits, and if so, where are those limits?",
		],
	},
	testing: {
		title: "Testing limits in real life.",
		copy: [
			"I decided to test that question outside of theory, in real life.",
			"I traveled, performed on stage, trained in sound engineering, and tried activities that once felt impossible: skydiving, paragliding, skiing, scuba diving, powerchair football, and hiking with a joëlette.",
		],
	},
	music: {
		title: "A long chapter in music.",
		copy: [
			"Music became one of the biggest chapters of my life.",
			"I co-founded Label Étoile, a rap group that lasted more than fifteen years, with concerts across France. I also trained in technical sound operations at CFPMS Marseille, where I learned discipline, pressure, and live production.",
		],
	},
	constraints: {
		title: "Constraints are not boundaries.",
		copy: [
			"Those years changed the way I understand constraints.",
			"My disability is part of my reality, but it does not define the size of what I can build, learn, or become. A constraint asks for adaptation. It does not automatically mean impossibility.",
		],
	},
	learning: {
		title: "Learning the craft.",
		copy: [
			"I came back to my first love through code.",
			"After the Apple Foundation Program and Web Developer training at Simplon, I continued as an Application Designer and Developer apprentice at Dev-id. Today, I keep learning there while pursuing a master’s degree in Software Architecture at ESGI.",
		],
	},
} satisfies Record<string, Pick<InfoStoryBlock, "title" | "copy">>;

export const infoDesktopStoryBlocks: InfoStoryBlock[] = [
	{
		...infoStoryContent.question,
		image: "/bloc1.webp",
		imageAlt: "Portrait of Fethi Sedjai",
		imageFirst: true,
	},
	{
		...infoStoryContent.developer,
		image: "/bloc2.webp",
		imageAlt: "Child portrait outdoors",
		offset: true,
	},
	{
		...infoStoryContent.music,
		image: "/bloc3.webp",
		imageAlt: "Scuba diving scene underwater",
		imageFirst: true,
	},
	{
		...infoStoryContent.testing,
		image: "/bloc4.webp",
		imageAlt: "Rapper performing on stage",
		offset: true,
	},
	{
		...infoStoryContent.learning,
		hasClosing: true,
		image: "/bloc5.webp",
		imageAlt: "Skydiving over a wide landscape",
		imageFirst: true,
	},
	{
		...infoStoryContent.constraints,
		image: "/bloc6.webp",
		imageAlt: "Cinematic technology portrait at night",
		offset: true,
	},
];

export const infoMobileStoryBlocks: InfoStoryBlock[] = [
	{
		...infoStoryContent.developer,
		image: "/bloc1.webp",
		imageAlt: "Portrait of Fethi Sedjai by the sea",
	},
	{
		...infoStoryContent.question,
		image: "/bloc2.webp",
		imageAlt: "Child portrait outdoors",
	},
	{
		...infoStoryContent.testing,
		image: "/bloc3.webp",
		imageAlt: "Scuba diving scene underwater",
	},
	{
		...infoStoryContent.music,
		image: "/bloc4.webp",
		imageAlt: "Rapper performing on stage",
	},
	{
		...infoStoryContent.constraints,
		image: "/bloc5.webp",
		imageAlt: "Skydiving over a wide landscape",
	},
	{
		...infoStoryContent.learning,
		hasClosing: true,
		image: "/bloc6.webp",
		imageAlt: "Cinematic technology portrait at night",
	},
];

export const infoExperiences: InfoExperienceItem[] = [
	{
		company: "Dev-id",
		role: "Web & mobile application developer",
		period: "Since 2023",
		description:
			"Contributing to business applications for industrial, AI, maritime and HR contexts, from Angular and React interfaces to NestJS services, permissions, workflows, KPIs and reusable UI foundations.",
	},
	{
		company: "ESGI Aix-en-Provence",
		role: "Master's degree in Software Architecture",
		period: "Since 2025",
		description:
			"Strengthening software architecture, maintainability, DevOps and delivery practices through a more structured view of how applications absorb change over time.",
	},
	{
		company: "Simplon / DEV-ID",
		role: "Application Designer & Developer",
		period: "2023 - 2025",
		description:
			"Designed and implemented complete application flows, connecting user needs, interface decisions, APIs, data persistence and deployment constraints.",
	},
	{
		company: "Simplon",
		role: "Web & Mobile Web Developer",
		period: "2022 - 2023",
		description:
			"Built the foundations of modern web development through responsive interfaces, JavaScript, server-side logic and accessible UI patterns.",
	},
];

export const infoFocusItems: InfoFocusItem[] = [
	{
		name: "Business workflows",
		meta: "Roles, statuses, requests, KPIs",
		detail:
			"Understanding the rule behind the screen before turning it into interface and service behavior.",
	},
	{
		name: "Interface systems",
		meta: "React, Angular, MUI, Tailwind",
		detail:
			"Building reusable components, forms and UI patterns that stay coherent as the product grows.",
	},
	{
		name: "Backend foundations",
		meta: "NestJS, auth, storage, APIs",
		detail:
			"Contributing to modules where permissions, organizations, files and integrations need clear boundaries.",
	},
	{
		name: "Architecture mindset",
		meta: "Maintainability, responsibility, change",
		detail:
			"Thinking about how decisions age: where code belongs, what should stay simple and what must be isolated.",
	},
	{
		name: "Delivery discipline",
		meta: "Backlog, PRs, reviews, API testing",
		detail:
			"Working in a way that makes features understandable, reviewable and maintainable by the team.",
	},
	{
		name: "Adaptability",
		meta: "Front-end, back-end, AI platforms",
		detail:
			"Moving between stacks and domains by reading the existing code, asking precise questions and progressing steadily.",
	},
];
