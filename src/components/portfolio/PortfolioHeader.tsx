import { ArrowUpRight, AtSign, X } from "lucide-react";
import { type ReactNode, useState } from "react";

import {
  type PortfolioView,
  profile,
  viewOptions,
} from "#/lib/portfolio-content";

import { SegmentedSwitch } from "./SegmentedSwitch";

type PortfolioHeaderProps = {
  activeView: PortfolioView;
  onViewChange: (view: PortfolioView) => void;
};

export function PortfolioHeader({
  activeView,
  onViewChange,
}: PortfolioHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed  pointer-events-none inset-x-0 top-0 z-30 px-4 pt-5 md:px-6 md:pt-8 lg:px-12">
      <div className="relative mx-auto flex items-center justify-between gap-4">
        <div className="min-w-0">
          <div className="translate-y-full opacity-0 transition-all duration-500 ease-out px-6 py-1 rounded-full backdrop-blur-lg md:translate-y-0 md:opacity-100">
            <span className="block text-lg tracking-wider -mb-1 font-semibold text-white">
              {profile.name}
            </span>
            <span className="block text-xs font-medium tracking-tighter text-portfolio-subtle">
              {profile.role}
            </span>
          </div>
        </div>

        <div className="absolute top-0 left-0 pointer-events-auto transition-[left] duration-500 ease-out md:left-[calc(100%-15.25rem)] lg:left-[calc(50%-5.625rem)]">
          <SegmentedSwitch
            value={activeView}
            options={viewOptions}
            onChange={onViewChange}
          />
        </div>

        <div className="absolute top-0 right-0">
          <nav className="flex items-center gap-1.5 text-sm font-medium text-white opacity-0 translate-y-full pointer-events-none lg:pointer-events-auto lg:translate-0 lg:opacity-100 transition-all duration-500 ease-out">
            <HeaderLink href={profile.linkedinHref}>LinkedIn</HeaderLink>
            <HeaderLink href={profile.resumeHref}>Resume</HeaderLink>
          </nav>

          <button
            type="button"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close contact menu" : "Open contact menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
            className="absolute top-0 right-0 grid cursor-pointer pointer-events-auto size-12 shrink-0 place-items-center rounded-full border border-portfolio-border bg-linear-to-b from-white/8 to-white/2 text-white shadow-[0_18px_70px_rgba(0,0,0,.45)] backdrop-blur-xl transition-all duration-500 opacity-100 translate-x-0 md:hover:border-white/20 md:hover:from-white/12 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80 focus-visible:ring-offset-2 focus-visible:ring-offset-portfolio-bg lg:translate-x-full lg:opacity-0 lg:pointer-events-none"
          >
            <span
              aria-hidden="true"
              className={`absolute inset-0 grid place-items-center transition-[opacity,rotate] duration-500 ease-in-out ${
                isMenuOpen ? "rotate-360 opacity-0" : "rotate-0 opacity-100"
              }`}
            >
              <AtSign size={22} />
            </span>
            <span
              aria-hidden="true"
              className={`absolute inset-0 grid place-items-center transition-[opacity,rotate] duration-500 ease-in-out ${
                isMenuOpen ? "rotate-0 opacity-100" : "-rotate-360 opacity-0"
              }`}
            >
              <X size={22} />
            </span>
          </button>
        </div>

        <div
          className={`absolute top-16 right-0 w-40 p-1.5 rounded-3xl border border-portfolio-border bg-linear-to-b from-white/8 to-white/2 text-white shadow-[0_18px_70px_rgba(0,0,0,.45)] backdrop-blur-xl md:hover:border-white/20 md:hover:from-white/12 lg:opacity-0 transition-all duration-500 ease-out ${isMenuOpen ? "translate-x-0 translate-y-0 opacity-100 scale-100 pointer-events-auto lg:pointer-events-none" : "translate-x-1/2 -translate-y-full opacity-0 scale-10 pointer-events-none"}`}
        >
          <MobileMenuLink href={profile.linkedinHref}>LinkedIn</MobileMenuLink>
          <MobileMenuLink href={profile.resumeHref}>Resume</MobileMenuLink>
        </div>
      </div>
    </header>
  );
}

function HeaderLink({ children, href }: { children: ReactNode; href: string }) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 rounded-full py-3.5 px-4 backdrop-blur-lg transition-colors duration-300 md:hover:bg-linear-to-br md:hover:from-white/15 md:hover:to-transparent"
    >
      {children}
      <ArrowUpRight size={20} />
    </a>
  );
}

function MobileMenuLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a
      href={href}
      className="flex items-center justify-between rounded-full w-full h-10 py-3 px-4.5 text-sm font-medium text-white transition-colors md:hover:bg-linear-to-br md:hover:from-white/15 md:hover:to-transparent"
    >
      {children}
      <ArrowUpRight size={14} />
    </a>
  );
}
