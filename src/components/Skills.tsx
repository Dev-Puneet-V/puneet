import React from 'react';
import { Cpu } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-16 border-b border-zinc-200/80">
      <div className="flex flex-col gap-2 mb-10">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
          <Cpu className="h-3.5 w-3.5" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
          Technical Toolkit & Capabilities
        </h2>
        <p className="text-sm text-zinc-600 max-w-xl">
          Core technologies used to architect, build, optimize, and operate production mobile apps and distributed full-stack systems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {RESUME_DATA.skillsPillars.map((pillar, idx) => (
          <div
            key={idx}
            className="flex flex-col rounded-xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-xs hover:border-zinc-300 transition-colors"
          >
            <h3 className="text-sm font-bold text-zinc-900">
              {pillar.category}
            </h3>
            <p className="mt-1 text-xs text-zinc-500 leading-normal mb-4 font-normal">
              {pillar.description}
            </p>

            {/* Badged items */}
            <div className="pt-3 border-t border-zinc-100 flex flex-wrap items-center gap-1.5">
              {pillar.items.map((item, itemIdx) => (
                <span
                  key={itemIdx}
                  className="rounded-md bg-zinc-50 border border-zinc-200/70 px-2.5 py-1 text-xs font-mono text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-colors"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
