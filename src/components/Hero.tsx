import React, { useState } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="top" className="pt-16 pb-14 md:pt-24 md:pb-18">
      <div className="max-w-3xl">
        {/* Unboxed metadata kicker */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-500 font-mono tracking-tight mb-5">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium border border-emerald-200/80">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for Engineering Roles
          </span>
          <span aria-hidden="true" className="text-zinc-300">·</span>
          <span>{RESUME_DATA.location}</span>
          <span aria-hidden="true" className="text-zinc-300">·</span>
          <span>2 Years Production Experience</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-950 leading-[1.18] text-balance">
          {RESUME_DATA.name}
        </h1>

        <p className="mt-2 text-base sm:text-lg font-medium text-blue-600 font-mono">
          {RESUME_DATA.role}
        </p>

        {/* Lead subhead & statement */}
        <p className="mt-5 text-base sm:text-lg text-zinc-600 font-normal leading-relaxed text-balance">
          {RESUME_DATA.bio}
        </p>

        {/* Direct contact and action row */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${RESUME_DATA.email}`}
            className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2.5 text-xs font-medium text-white shadow-xs transition-colors hover:bg-zinc-800"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>Send Email</span>
          </a>

          <button
            onClick={handleCopyEmail}
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-700 shadow-2xs transition-colors hover:bg-zinc-50 hover:text-zinc-900"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-emerald-600" />
                <span className="text-emerald-700 font-medium">Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-4 py-2.5 text-xs font-medium text-zinc-700 shadow-2xs transition-colors hover:bg-zinc-50 hover:text-zinc-900"
          >
            <Phone className="h-3.5 w-3.5 text-zinc-400" />
            <span>{RESUME_DATA.phone}</span>
          </a>

          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-medium text-zinc-700 shadow-2xs transition-colors hover:bg-zinc-50 hover:text-blue-600"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>

          <a
            href={RESUME_DATA.twitter}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3.5 py-2.5 text-xs font-medium text-zinc-700 shadow-2xs transition-colors hover:bg-zinc-50 hover:text-zinc-900"
          >
            <span>Twitter / X</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
};
