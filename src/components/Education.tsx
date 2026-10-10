import React from 'react';
import { Award, Calendar, GraduationCap, MapPin } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

export const Education: React.FC = () => {
  const { education } = RESUME_DATA;

  return (
    <section id="education" className="py-16 border-b border-zinc-200/80">
      <div className="flex flex-col gap-2 mb-8">
        <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
          <GraduationCap className="h-3.5 w-3.5" />
          <span>Academic Background</span>
        </div>
        <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
          Education
        </h2>
        <p className="text-sm text-zinc-600 max-w-xl">
          Academic foundation in core computer science, software systems, and engineering design.
        </p>
      </div>

      <div className="rounded-xl border border-zinc-200/90 bg-white p-6 sm:p-7 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
          <div>
            <h3 className="text-base sm:text-lg font-bold text-zinc-900">
              {education.institution}
            </h3>
            <p className="text-sm font-semibold text-blue-600 mt-0.5 flex items-center gap-1.5">
              <Award className="h-3.5 w-3.5" />
              <span>{education.degree} in {education.discipline}</span>
            </p>
          </div>
          <div className="flex items-center gap-1 text-xs text-zinc-500 font-mono mt-1 sm:mt-0">
            <Calendar className="h-3.5 w-3.5 text-zinc-400" />
            <span>{education.period}</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono mt-2">
          <MapPin className="h-3.5 w-3.5 text-zinc-400" />
          <span>{education.location}</span>
        </div>

        <p className="mt-4 pt-4 border-t border-zinc-100 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
          {education.focus}
        </p>
      </div>
    </section>
  );
};
