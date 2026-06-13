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
  { value: "work", label: "Work" },
  { value: "info", label: "Info" },
];

export const heroBorderGlow: BorderGlowTheme = {
  glowColor: "0 0 92",
  colors: ["#f2f2f2", "#aeb4c2", "#7a7481"],
};

export const projects: Project[] = [
  {
    name: "Sea Edge",
    client: "Icard Maritime",
    year: "2026",
    description:
      "Shaping a maritime operations interface around reusable React/MUI components for planning, crews, vessels and maintenance.",
    thumbnail: "/sea-edge.png",
    glow: "bg-[radial-gradient(circle_at_50%_0,rgba(137,185,212,.78),transparent_58%),radial-gradient(circle_at_50%_0,rgba(146,203,183,.42),transparent_68%),radial-gradient(circle_at_50%_0,rgba(14,37,53,.88),transparent)]",
    borderGlow: {
      glowColor: "196 64 78",
      colors: ["#89b9d4", "#92cbb7", "#0e2535"],
    },
  },
  {
    name: "Devver",
    client: "Annual School Project",
    year: "2025-26",
    description:
      "Helping product teams validate branches in seconds through preview URLs, a React dashboard and contextual feedback overlay.",
    href: "https://devver.app",
    thumbnail: "/devver.png",
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
    thumbnail: "/oreus.png",
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
    thumbnail: "/aio.png",
    glow: "bg-[radial-gradient(circle_at_50%_0,rgba(106,107,224,.6),transparent_58%),radial-gradient(circle_at_50%_0,rgba(126,142,214,.38),transparent_70%),radial-gradient(circle_at_50%_0,rgba(206,155,118,.28),transparent)]",
    borderGlow: {
      glowColor: "239 66 65",
      colors: ["#6a6be0", "#7e8ed6", "#ce9b76"],
    },
  },
  {
    name: "MyShop",
    client: "Airbus",
    year: "2023-25",
    description:
      "Turning industrial tool management into traceable workflows for Airbus teams, with requests, roles, KPIs, notifications and exports.",
    thumbnail: "/myshop.png",
    glow: "bg-[radial-gradient(circle_at_50%_0,rgba(88,103,139,.46),transparent_60%),radial-gradient(circle_at_50%_0,rgba(177,184,201,.28),transparent_74%),radial-gradient(circle_at_50%_0,rgba(22,43,93,.9),transparent)]",
    borderGlow: {
      glowColor: "223 62 37",
      colors: ["#58678b", "#b1b8c9", "#162b5d"],
    },
  },
  {
    name: "IziLife",
    client: "Certification project",
    year: "2023-24",
    description:
      "Designing a platform where accessibility solutions, discussions and resources become easier to share, discover and maintain.",
    href: "https://izilife.fr",
    thumbnail: "/izilife.png",
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
