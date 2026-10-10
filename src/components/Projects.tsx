import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { Project, RESUME_DATA } from '../data/resume';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'mobile' | 'fullstack'>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = RESUME_DATA.projects.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="py-16 border-b border-zinc-800/80">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <h2 className="text-xl font-semibold tracking-tight text-zinc-100">
            Selected Projects & Apps Shipped
          </h2>
          <p className="mt-1 text-sm text-zinc-400 max-w-xl">
            Production apps published to Google Play Store and Apple App Store, with full lifecycle ownership from schema to deployment.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1 p-1 bg-zinc-900 border border-zinc-800/80 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setFilter('all')}
            type="button"
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            All Work ({RESUME_DATA.projects.length})
          </button>
          <button
            onClick={() => setFilter('mobile')}
            type="button"
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              filter === 'mobile'
                ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Mobile Apps (3)
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            type="button"
            className={`px-3 py-1 text-xs font-medium rounded-md transition-colors whitespace-nowrap shrink-0 ${
              filter === 'fullstack'
                ? 'bg-zinc-800 text-zinc-100 shadow-sm'
                : 'text-zinc-400 hover:text-zinc-200'
            }`}
          >
            Full-Stack Systems (1)
          </button>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="flex flex-col justify-between rounded-lg border border-zinc-800/80 bg-zinc-950/60 p-6 sm:p-7 hover:border-zinc-700/80 transition-colors"
          >
            <div>
              {/* Platforms metadata - clean unboxed text */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 mb-2.5">
                <span>{project.category === 'mobile' ? 'Mobile App' : 'Full-Stack Platform'}</span>
                <span aria-hidden="true">·</span>
                <span>{project.platforms.join(' / ')}</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-mono text-zinc-400">
                {project.tagline}
              </p>

              {/* Summary Description */}
              <p className="mt-4 text-sm text-zinc-300 leading-relaxed">
                {project.description}
              </p>

              {/* Architectural Highlight */}
              <div className="mt-4 pt-3.5 border-t border-zinc-900">
                <span className="block text-[11px] uppercase tracking-wider font-mono text-zinc-500 mb-1">
                  Architecture Note
                </span>
                <p className="text-xs text-zinc-400 leading-relaxed font-mono">
                  {project.architectureHighlight}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-900/80">
              {/* Stack items - unboxed */}
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs font-mono text-zinc-400 mb-5">
                {project.techStack.map((tech, idx) => (
                  <React.Fragment key={idx}>
                    <span className="text-zinc-400">{tech}</span>
                    {idx < project.techStack.length - 1 && (
                      <span className="text-zinc-700" aria-hidden="true">·</span>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-2">
                  {project.links.map((link, lIdx) => (
                    <a
                      key={lIdx}
                      href={link.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 rounded border border-zinc-800 bg-zinc-900 px-2.5 py-1 text-xs font-medium text-zinc-300 hover:border-zinc-700 hover:text-white transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors py-1"
                >
                  <span>Specs</span>
                  <ExternalLink className="h-3 w-3 opacity-70" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Architecture Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
