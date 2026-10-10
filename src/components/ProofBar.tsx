import React from 'react';
import { RESUME_DATA } from '../data/resume';

export const ProofBar: React.FC = () => {
  return (
    <section className="border-y border-zinc-800/80 py-8 my-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
        {RESUME_DATA.metrics.map((metric, idx) => (
          <div key={idx} className="flex flex-col justify-start">
            <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100 font-mono tabular-nums">
              {metric.value}
            </span>
            <span className="mt-1 text-xs font-medium text-zinc-300">
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
