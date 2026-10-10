import React from 'react';
import { RESUME_DATA } from '../data/resume';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-b border-zinc-800/80">
      <div className="flex flex-col gap-2 mb-12">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
          Experience
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl">
          Full-cycle production engineering across mobile frontends, distributed backends, and app marketplace delivery.
        </p>
      </div>

      <div className="space-y-16">
        {RESUME_DATA.experiences.map((exp) => (
          <article key={exp.id} className="relative">
            {/* Header: Title, Company, Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-3">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-base font-semibold text-zinc-100">
                  {exp.role}
                </h3>
                <span className="text-zinc-500 font-normal">at</span>
                <span className="text-base font-medium text-zinc-200">
                  {exp.company}
                </span>
              </div>
              <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Unboxed metadata row with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 font-mono pb-4">
              <span>{exp.type}</span>
              <span aria-hidden="true">·</span>
              <span>{exp.location}</span>
            </div>

            {/* Summary */}
            <p className="text-sm text-zinc-300 leading-relaxed mb-5">
              {exp.summary}
            </p>

            {/* Impact Bullets */}
            <ul className="space-y-2.5 text-sm text-zinc-400 leading-relaxed pl-4 list-disc marker:text-zinc-600">
              {exp.highlights.map((bullet, bIdx) => (
                <li key={bIdx} className="text-balance">
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Unboxed technologies list */}
            <div className="mt-6 pt-4 border-t border-zinc-800/50 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400 font-mono">
              <span className="text-zinc-400 uppercase tracking-wider text-[11px] font-sans font-medium">Stack:</span>
              {exp.technologies.map((tech, tIdx) => (
                <React.Fragment key={tIdx}>
                  <span className="text-zinc-300">{tech}</span>
                  {tIdx < exp.technologies.length - 1 && (
                    <span className="text-zinc-700" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
