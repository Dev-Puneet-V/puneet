import React from 'react';
import { RESUME_DATA } from '../data/resume';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-b border-zinc-800/80">
      <div className="flex flex-col gap-2 mb-10">
        <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
          Technical Toolkit & Capabilities
        </h2>
        <p className="text-sm text-zinc-400 max-w-xl">
          Core technologies used to build, optimize, and operate production mobile and full-stack systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
        {RESUME_DATA.skillsPillars.map((pillar, idx) => (
          <div key={idx} className="flex flex-col">
            <h3 className="text-sm font-semibold text-zinc-200">
              {pillar.category}
            </h3>
            <p className="mt-1 text-xs text-zinc-400 leading-normal mb-3">
              {pillar.description}
            </p>

            {/* Unboxed items list with typographic separators */}
            <div className="pt-3 border-t border-zinc-800/60 flex flex-wrap items-center gap-x-2.5 gap-y-1.5 text-xs text-zinc-300 font-mono">
              {pillar.items.map((item, itemIdx) => (
                <React.Fragment key={itemIdx}>
                  <span className="hover:text-white transition-colors">{item}</span>
                  {itemIdx < pillar.items.length - 1 && (
                    <span className="text-zinc-700" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
