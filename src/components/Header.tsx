import React from 'react';
import { RESUME_DATA } from '../data/resume';

interface HeaderProps {
  onContactClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-800/70 bg-[#090a0c]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-8 px-6 py-4 md:px-8">
        {/* Zone 1: Single text wordmark */}
        <a
          href="#top"
          className="group flex items-baseline gap-2.5 text-base font-semibold tracking-tight text-zinc-100 transition-colors hover:text-white shrink-0"
        >
          <span>{RESUME_DATA.name}</span>
          <span className="hidden sm:inline text-xs font-normal text-zinc-500">
            / Full-Stack Mobile
          </span>
        </a>

        {/* Zone 2: Clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-normal text-zinc-400">
          <a
            href="#experience"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-zinc-100"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-zinc-100"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-zinc-100"
          >
            Skills
          </a>
          <a
            href="#education"
            className="whitespace-nowrap shrink-0 transition-colors hover:text-zinc-100"
          >
            Education
          </a>
        </nav>

        {/* Zone 3: 1 primary action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onContactClick}
            type="button"
            className="rounded-md border border-zinc-700/80 bg-zinc-900 px-3.5 py-1.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800 hover:text-white whitespace-nowrap shrink-0"
          >
            Contact
          </button>
        </div>
      </div>
    </header>
  );
};
