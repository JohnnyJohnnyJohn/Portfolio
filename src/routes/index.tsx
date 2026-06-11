import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Download, Mail } from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/")({ component: Home });

type View = "work" | "info";

type Project = {
  name: string;
  client: string;
  year: string;
  description: string;
  meta: string;
  tone: string;
};

const projects: Project[] = [
  {
    name: "MyShop",
    client: "Airbus",
    year: "'23 - '26",
    description:
      "Industrial tooling platform with multi-role workflows, KPIs, notifications, exports and business rules.",
    meta: "Angular / NestJS / Business app",
    tone: "#343434",
  },
  {
    name: "Oreus",
    client: "Sovereign AI platform",
    year: "'24 - '26",
    description:
      "Back-end foundations for organizations, roles, authentication, permissions, object storage and MCP server capabilities.",
    meta: "NestJS / Logto / MinIO / MCP",
    tone: "#2a3034",
  },
  {
    name: "Sea Edge",
    client: "Icard Maritime",
    year: "'24 - '26",
    description:
      "Maritime application interfaces built with reusable React components, UI consistency, i18n and design system foundations.",
    meta: "React / MUI / Product UI",
    tone: "#263030",
  },
  {
    name: "AI.O",
    client: "ALLinOne RH",
    year: "'23 - '26",
    description:
      "AI-powered job board evolutions across candidate and recruiter flows, API integrations, stabilization and client support.",
    meta: "Full-stack / REST APIs / HR",
    tone: "#312a2a",
  },
  {
    name: "DEVVER",
    client: "ESGI school project",
    year: "'25 - '26",
    description:
      "Preview environments platform designed to accelerate product validation through dashboards, permissions, comments and SSE.",
    meta: "Lead front-end / React / ArgoCD",
    tone: "#2d2a38",
  },
  {
    name: "IZILIFE",
    client: "CDA certification project",
    year: "'24 - '25",
    description:
      "Accessible solution-sharing platform designed around a maintainable microservices architecture and REST API foundation.",
    meta: "NestJS / PostgreSQL / Microservices",
    tone: "#333128",
  },
];

const timeline = [
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

const skills = [
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

function Home() {
  const [view, setView] = useState<View>("work");

  return (
    <main className="min-h-screen overflow-hidden bg-[#080808] text-[#f5f5f0]">
      <div className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.11),transparent_27%),radial-gradient(circle_at_18%_26%,rgba(255,255,255,0.045),transparent_24%),linear-gradient(180deg,#101010_0%,#080808_38%,#050505_100%)]" />

      <header className="fixed inset-x-0 top-0 z-30 px-8 pt-8 sm:px-12">
        <div className="mx-auto grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <a href="/" className="leading-tight">
            <span className="block text-xl font-semibold text-white">
              Fethi Sedjai
            </span>
            <span className="block text-xs text-[#7f7f7a] font-medium tracking-tighter">
              Application Developer
            </span>
          </a>

          <div className="rounded-full border border-white/10 bg-linear-60 from-white/5 to-transparent p-1 shadow-[0_18px_70px_rgba(0,0,0,.55)] backdrop-blur-md transition-colors hover:from-white/10 hover:border-white/20">
            <div className="relative grid grid-cols-2">
              <span
                className={`absolute top-0 bottom-0 w-1/2 rounded-full  from-white/15 to-transparent backdrop-blur-xl transition-transform duration-300 ease-out ${
                  view === "info"
                    ? "-bg-linear-90 translate-x-full"
                    : "bg-linear-90 translate-x-0"
                }`}
              />
              <SwitchButton label="work" onClick={() => setView("work")}>
                Work
              </SwitchButton>
              <SwitchButton label="info" onClick={() => setView("info")}>
                Info
              </SwitchButton>
            </div>
          </div>

          <nav className="flex justify-end gap-4 text-xs font-medium text-[#b5b5af]">
            <a
              href="mailto:fethisedjai@gmail.com"
              className="hidden transition-colors hover:text-white sm:inline"
            >
              Email
            </a>
            <a
              href="/fethi-sedjai-resume.pdf"
              className="transition-colors hover:text-white"
            >
              Resume
            </a>
          </nav>
        </div>
      </header>

      <section className="relative z-10 mx-auto max-w-6xl px-5 pt-32 pb-14 sm:px-8 sm:pt-40 lg:pt-44">
        <div className="grid gap-8 lg:grid-cols-[1fr_280px] lg:items-end">
          <div>
            <p className="mb-5 text-sm font-medium text-[#8b8b84]">
              Fethi Sedjai — Application Developer
            </p>
            <h1 className="max-w-4xl text-balance text-[clamp(3.2rem,8vw,7.4rem)] font-black leading-[0.88] tracking-normal text-white">
              I craft business apps, systems & product interfaces.
            </h1>
          </div>

          <p className="max-w-sm text-pretty text-sm leading-6 text-[#a7a7a0] lg:pb-2">
            TypeScript developer based in Marseille. Currently building web and
            mobile applications across industrial, AI, maritime and HR contexts.
          </p>
        </div>
      </section>

      {view === "work" ? <WorkView /> : <InfoView />}

      <footer className="relative z-10 mx-auto grid max-w-6xl gap-8 border-white/10 border-t px-5 py-10 text-xs text-[#76766f] sm:grid-cols-[1fr_auto] sm:px-8">
        <div>
          <p className="mb-2 text-[#bdbdb5]">MAIN</p>
          <button
            type="button"
            onClick={() => setView("work")}
            className="mr-4 transition-colors hover:text-white"
          >
            Work
          </button>
          <button
            type="button"
            onClick={() => setView("info")}
            className="transition-colors hover:text-white"
          >
            Info
          </button>
        </div>
        <div className="sm:text-right">
          <p className="mb-2 text-[#bdbdb5]">CONTACT</p>
          <a href="mailto:fethisedjai@gmail.com" className="hover:text-white">
            fethisedjai@gmail.com
          </a>
          <p className="mt-6">© 2026 Fethi Sedjai. All Rights Reserved.</p>
        </div>
      </footer>
    </main>
  );
}

function SwitchButton({
  label,
  children,
  onClick,
}: {
  label: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative cursor-pointer z-10 min-w-20 h-10 rounded-full px-4 py-2 text-xs font-semibold transition-colors duration-300 text-white ${label === "work" ? "hover:bg-linear-to-l" : "hover:bg-linear-to-r"} hover:from-transparent hover:to-white/5`}
    >
      {children}
    </button>
  );
}

function WorkView() {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <div className="mb-7 flex items-end justify-between gap-5">
        <h2 className="text-xl font-semibold text-white">Selected Work '26</h2>
        <p className="text-right text-xs text-[#777770]">
          Product-minded engineering
        </p>
      </div>

      <div className="grid gap-5">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} index={index + 1} project={project} />
        ))}
      </div>
    </section>
  );
}

function InfoView() {
  return (
    <section className="relative z-10 mx-auto grid max-w-6xl gap-10 px-5 pb-24 sm:px-8 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="space-y-8">
        <div>
          <h2 className="text-xl font-semibold text-white">Info</h2>
          <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-[#c8c8bf]">
            I design and build maintainable application foundations for teams
            that need reliable front-end and back-end delivery. My work starts
            with business context, then moves into clean interfaces, explicit
            permissions, stable APIs and code that remains understandable.
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-white/10 bg-white/[0.035] px-3 py-2 text-xs font-medium text-[#b9b9b0]"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href="/fethi-sedjai-resume.pdf"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#ededdf] px-4 py-3 text-sm font-semibold text-[#090909] transition-transform hover:-translate-y-0.5"
          >
            Resume
            <Download size={16} />
          </a>
          <a
            href="mailto:fethisedjai@gmail.com"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/[0.07]"
          >
            Email
            <Mail size={16} />
          </a>
        </div>
      </div>

      <div className="rounded-[28px] border border-white/10 bg-[#111]/80 p-4 shadow-[0_24px_90px_rgba(0,0,0,.5)]">
        <div className="rounded-[20px] border border-white/8 bg-[#0a0a0a] p-5 sm:p-7">
          <p className="mb-6 text-xs font-semibold uppercase text-[#777770]">
            Career path
          </p>
          <div className="space-y-0">
            {timeline.map((item) => (
              <div
                key={`${item.period}-${item.title}`}
                className="grid gap-2 border-white/10 border-t py-5 first:border-t-0 sm:grid-cols-[130px_1fr]"
              >
                <p className="text-xs font-medium text-[#777770]">
                  {item.period}
                </p>
                <div>
                  <h3 className="font-semibold text-white">{item.title}</h3>
                  <p className="mt-1 text-sm text-[#9c9c94]">{item.place}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <article className="group rounded-[28px] border border-white/10 bg-[#121212]/90 p-3 shadow-[0_26px_90px_rgba(0,0,0,.55)] transition-transform duration-300 hover:-translate-y-1">
      <div
        className="relative overflow-hidden rounded-[22px] border border-white/8 p-5 sm:p-7"
        style={{
          background: `radial-gradient(circle at 50% 0%, color-mix(in srgb, ${project.tone}, white 12%) 0%, ${project.tone} 28%, #0b0b0b 80%)`,
        }}
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,.13),transparent_26%),linear-gradient(180deg,rgba(255,255,255,.05),transparent_45%)]" />

        <div className="relative mb-8 flex items-start justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold text-white">
              {project.name}
            </h3>
            <p className="mt-1 text-sm text-[#9e9e96]">
              {project.client}, {project.year} — {project.description}
            </p>
          </div>
          <span className="grid size-9 shrink-0 place-items-center rounded-full border border-white/10 bg-black/35 text-[#d9d9d0] transition-colors group-hover:bg-[#ededdf] group-hover:text-[#090909]">
            <ArrowUpRight size={16} />
          </span>
        </div>

        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-[18px] border border-white/10 bg-[#101010] shadow-[0_24px_70px_rgba(0,0,0,.45)]">
          <div className="flex items-center gap-2 border-white/10 border-b bg-[#171717] px-4 py-3">
            <span className="size-2 rounded-full bg-[#4f4f4a]" />
            <span className="size-2 rounded-full bg-[#62625b]" />
            <span className="size-2 rounded-full bg-[#77776e]" />
            <span className="ml-4 h-2 w-28 rounded-full bg-white/10" />
          </div>
          <ProjectMockup index={index} />
        </div>

        <p className="relative mt-5 text-xs font-medium uppercase text-[#8b8b84]">
          {project.meta}
        </p>
      </div>
    </article>
  );
}

function ProjectMockup({ index }: { index: number }) {
  return (
    <div className="grid min-h-[260px] gap-4 p-4 sm:grid-cols-[0.85fr_1.15fr] sm:p-5">
      <div className="space-y-4">
        <div className="rounded-2xl border border-white/8 bg-white/[0.045] p-4">
          <p className="mb-7 text-xs text-[#777770]">Project {index}</p>
          <div className="h-3 w-2/3 rounded-full bg-[#d7d7cb]" />
          <div className="mt-4 h-3 w-1/2 rounded-full bg-white/12" />
          <div className="mt-8 grid grid-cols-2 gap-3">
            <div className="h-20 rounded-xl bg-white/[0.055]" />
            <div className="h-20 rounded-xl bg-white/[0.08]" />
          </div>
        </div>
        <div className="grid grid-cols-3 gap-3">
          <div className="h-16 rounded-xl bg-white/[0.045]" />
          <div className="h-16 rounded-xl bg-white/[0.065]" />
          <div className="h-16 rounded-xl bg-white/[0.045]" />
        </div>
      </div>
      <div className="space-y-4">
        <div className="grid grid-cols-3 gap-3">
          <div className="h-24 rounded-xl bg-white/[0.045]" />
          <div className="h-24 rounded-xl bg-white/[0.075]" />
          <div className="h-24 rounded-xl bg-white/[0.045]" />
        </div>
        <div className="rounded-2xl border border-white/8 bg-white/[0.045] p-4">
          <div className="mb-4 flex items-center justify-between">
            <div className="h-2 w-24 rounded-full bg-white/14" />
            <div className="h-6 w-16 rounded-full bg-[#d7d7cb]/80" />
          </div>
          <div className="space-y-3">
            <div className="h-2 rounded-full bg-white/10" />
            <div className="h-2 w-10/12 rounded-full bg-white/10" />
            <div className="h-2 w-7/12 rounded-full bg-white/10" />
          </div>
        </div>
        <div className="h-20 rounded-2xl border border-white/8 bg-white/[0.04]" />
      </div>
    </div>
  );
}
