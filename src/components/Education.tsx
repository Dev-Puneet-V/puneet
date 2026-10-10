import React from 'react';
import { RESUME_DATA } from '../data/resume';

export const Education: React.FC = () => {
  const { education } = RESUME_DATA;

  return (
    <section id="education" className="py-16 border-b border-zinc-800/80">
      <div className="flex flex-col gap-2 mb-8">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
          Education
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl">
          Academic foundation in core computer science principles and software systems.
        </p>
      </div>

      <div className="rounded-lg border border-zinc-800/80 bg-zinc-950/40 p-6 sm:p-7">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div>
            <h3 className="text-base font-semibold text-zinc-100">
              {education.institution}
            </h3>
            <p className="text-sm text-zinc-300 mt-0.5">
              {education.degree} in {education.discipline}
            </p>
          </div>
          <span className="text-xs text-zinc-400 font-mono mt-1 sm:mt-0">
            {education.period}
          </span>
        </div>

        <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono mt-2">
          <span>{education.location}</span>
        </div>

        <p className="mt-4 pt-4 border-t border-zinc-900 text-xs sm:text-sm text-zinc-400 leading-relaxed">
          {education.focus}
        </p>
      </div>
    </section>
  );
};
