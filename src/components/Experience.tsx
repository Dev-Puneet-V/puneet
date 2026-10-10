import React from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 border-b border-zinc-200/80">
      <div className="flex flex-col gap-2 mb-12">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
          <Briefcase className="h-3.5 w-3.5" />
          <span>Work History</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
          Professional Experience
        </h2>
        <p className="text-sm text-zinc-600 max-w-xl">
          Full-cycle production engineering across mobile frontends, distributed backends, database query optimization, and app marketplace delivery.
        </p>
      </div>

      <div className="space-y-12">
        {RESUME_DATA.experiences.map((exp) => (
          <article
            key={exp.id}
            className="rounded-xl border border-zinc-200/90 bg-white p-6 sm:p-8 shadow-xs hover:border-zinc-300 transition-colors"
          >
            {/* Header: Title, Company, Period */}
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-2">
              <div className="flex items-baseline gap-2 flex-wrap">
                <h3 className="text-base sm:text-lg font-bold text-zinc-900">
                  {exp.role}
                </h3>
                <span className="text-zinc-400 font-normal">at</span>
                <span className="text-base font-semibold text-blue-600">
                  {exp.company}
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                <span>{exp.period}</span>
              </div>
            </div>

            {/* Unboxed metadata row with typographic separators */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500 font-mono pb-4">
              <span className="inline-flex items-center gap-1">
                <MapPin className="h-3 w-3 text-zinc-400" />
                {exp.location}
              </span>
              <span aria-hidden="true" className="text-zinc-300">·</span>
              <span className="rounded bg-zinc-100 px-2 py-0.5 text-zinc-700 font-medium">
                {exp.type}
              </span>
            </div>

            {/* Summary */}
            <p className="text-sm text-zinc-700 leading-relaxed mb-5 font-normal">
              {exp.summary}
            </p>

            {/* Impact Bullets */}
            <ul className="space-y-2.5 text-sm text-zinc-600 leading-relaxed pl-4 list-disc marker:text-zinc-400">
              {exp.highlights.map((bullet, bIdx) => (
                <li key={bIdx} className="text-balance">
                  {bullet}
                </li>
              ))}
            </ul>

            {/* Technologies list */}
            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap items-center gap-1.5">
              <span className="text-zinc-500 uppercase tracking-wider text-[11px] font-mono mr-1">
                Tech Stack:
              </span>
              {exp.technologies.map((tech, tIdx) => (
                <span
                  key={tIdx}
                  className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-mono text-zinc-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
