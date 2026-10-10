import React, { useState } from 'react';
import { ArrowUpRight, ExternalLink, Smartphone } from 'lucide-react';
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
    <section id="projects" className="py-16 border-b border-zinc-200/80">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 uppercase tracking-wider font-semibold">
            <Smartphone className="h-3.5 w-3.5" />
            <span>Production Portfolio</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
            Selected Projects & Apps Shipped
          </h2>
          <p className="mt-1 text-sm text-zinc-600 max-w-xl">
            Real applications published to Google Play Store and Apple App Store, with full lifecycle ownership from database schema to deployment.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-1 p-1 bg-zinc-100 border border-zinc-200 rounded-lg self-start sm:self-auto">
          <button
            onClick={() => setFilter('all')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              filter === 'all'
                ? 'bg-white text-zinc-900 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            All Work ({RESUME_DATA.projects.length})
          </button>
          <button
            onClick={() => setFilter('mobile')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              filter === 'mobile'
                ? 'bg-white text-zinc-900 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-900'
            }`}
          >
            Mobile Apps (3)
          </button>
          <button
            onClick={() => setFilter('fullstack')}
            type="button"
            className={`px-3 py-1.5 text-xs font-medium rounded-md transition-all whitespace-nowrap shrink-0 ${
              filter === 'fullstack'
                ? 'bg-white text-zinc-900 shadow-2xs'
                : 'text-zinc-600 hover:text-zinc-900'
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
            className="flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs hover:border-zinc-300 hover:shadow-md transition-all duration-200"
          >
            <div>
              {/* Platforms metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
                <span className="font-semibold text-blue-600">
                  {project.category === 'mobile' ? 'Mobile App' : 'Full-Stack Platform'}
                </span>
                <span aria-hidden="true" className="text-zinc-300">·</span>
                <span>{project.platforms.join(' / ')}</span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-lg font-bold tracking-tight text-zinc-900">
                {project.title}
              </h3>
              <p className="mt-1 text-xs font-mono text-zinc-500">
                {project.tagline}
              </p>

              {/* Summary Description */}
              <p className="mt-3.5 text-sm text-zinc-600 leading-relaxed font-normal">
                {project.description}
              </p>

              {/* Architectural Highlight */}
              <div className="mt-4 pt-3.5 border-t border-zinc-100">
                <span className="block text-[11px] uppercase tracking-wider font-mono text-zinc-400 mb-1 font-semibold">
                  Architecture Note
                </span>
                <p className="text-xs text-zinc-700 leading-relaxed font-mono bg-zinc-50 border border-zinc-200/60 rounded-md p-3">
                  {project.architectureHighlight}
                </p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100">
              {/* Stack items */}
              <div className="flex flex-wrap items-center gap-1.5 mb-5">
                {project.techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="rounded bg-zinc-100 px-2 py-0.5 text-xs font-mono text-zinc-700"
                  >
                    {tech}
                  </span>
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
                      className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-white px-2.5 py-1 text-xs font-medium text-zinc-800 hover:bg-zinc-50 hover:text-blue-600 shadow-2xs transition-colors"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3 w-3 opacity-60" />
                    </a>
                  ))}
                </div>

                <button
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="inline-flex items-center gap-1 text-xs font-medium text-blue-600 hover:text-blue-700 transition-colors py-1"
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
