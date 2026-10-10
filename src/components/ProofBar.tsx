import React from 'react';
import { RESUME_DATA } from '../data/resume';

export const ProofBar: React.FC = () => {
  return (
    <section className="border border-zinc-200/90 bg-zinc-50/70 rounded-xl py-7 px-6 sm:px-8 my-8 shadow-2xs">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {RESUME_DATA.metrics.map((metric, idx) => (
          <div key={idx} className="flex flex-col justify-start">
            <span className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 font-mono tabular-nums">
              {metric.value}
            </span>
            <span className="mt-1 text-xs font-semibold text-zinc-800">
              {metric.label}
            </span>
            <span className="mt-0.5 text-[11px] text-zinc-500 leading-normal">
              {metric.detail}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
