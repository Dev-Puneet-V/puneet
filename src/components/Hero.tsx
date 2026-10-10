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
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <section id="top" className="pt-20 pb-16 md:pt-28 md:pb-20">
      <div className="max-w-3xl">
        {/* Subtle unboxed metadata kicker */}
        <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs text-zinc-500 font-mono tracking-tight mb-6">
          <span>{RESUME_DATA.location}</span>
          <span aria-hidden="true">·</span>
          <span>Full-Stack & Mobile</span>
          <span aria-hidden="true">·</span>
          <span>2 Years Production Experience</span>
        </div>

        {/* Primary Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-100 leading-[1.15] text-balance">
          {RESUME_DATA.name}
        </h1>

        {/* Lead subhead & statement */}
        <p className="mt-6 text-lg sm:text-xl text-zinc-300 font-normal leading-relaxed text-balance">
          {RESUME_DATA.bio}
        </p>

        {/* Direct contact and action row */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <button
            onClick={handleCopyEmail}
            type="button"
            className="inline-flex items-center gap-2 rounded-md border border-zinc-700/80 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-800 hover:text-white"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-zinc-300" />
                <span>Copied to Clipboard</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5 text-zinc-400" />
                <span>Copy Email</span>
              </>
            )}
          </button>

          <a
            href={`mailto:${RESUME_DATA.email}`}
            className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
          >
            <Mail className="h-3.5 w-3.5 text-zinc-400" />
            <span>Send Email</span>
          </a>

          <a
            href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-950 px-4 py-2 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
          >
            <Phone className="h-3.5 w-3.5 text-zinc-400" />
            <span>{RESUME_DATA.phone}</span>
          </a>

          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>

          <a
            href={RESUME_DATA.twitter}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-zinc-400 transition-colors hover:text-zinc-200"
          >
            <span>Twitter / X</span>
            <ArrowUpRight className="h-3.5 w-3.5 opacity-60" />
          </a>
        </div>
      </div>
    </section>
  );
};
