import React, { useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, Layers, Smartphone, X } from 'lucide-react';
import { Project } from '../data/resume';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-6 sm:p-8 text-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close details"
          className="absolute top-5 right-5 rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
            <span className="font-semibold text-blue-600">
              {project.category === 'mobile' ? 'Mobile Application' : 'Full-Stack Platform'}
            </span>
            <span aria-hidden="true" className="text-zinc-300">·</span>
            <span>{project.platforms.join(' / ')}</span>
          </div>

          <h3 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-zinc-600 leading-relaxed font-normal">
            {project.tagline}
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-zinc-100" />

        {/* Full Overview */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-500 mb-2 font-semibold">
              System Overview
            </h4>
            <p className="text-sm text-zinc-700 leading-relaxed font-normal">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-500 mb-2 flex items-center gap-1.5 font-semibold">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              <span>Architectural Implementation</span>
            </h4>
            <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed bg-zinc-50 border border-zinc-200/80 rounded-lg p-4 font-mono">
              {project.architectureHighlight}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-500 mb-2.5 flex items-center gap-1.5 font-semibold">
              <Smartphone className="h-3.5 w-3.5 text-blue-600" />
              <span>Engineering Ownership & Scope</span>
            </h4>
            <ul className="space-y-2 text-sm text-zinc-700">
              {project.roleScope.map((scope, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology stack */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-500 mb-2 font-semibold">
              Technologies Used
            </h4>
            <div className="flex flex-wrap items-center gap-1.5">
              {project.techStack.map((tech, idx) => (
                <span
                  key={idx}
                  className="rounded bg-zinc-100 px-2.5 py-1 text-xs font-mono text-zinc-800"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Store & Deployment Links */}
          <div className="pt-4 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2.5">
              {project.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg bg-zinc-900 px-3.5 py-2 text-xs font-medium text-white hover:bg-zinc-800 shadow-2xs transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-80" />
                </a>
              ))}
            </div>

            <button
              onClick={onClose}
              type="button"
              className="text-xs font-medium text-zinc-500 hover:text-zinc-800 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
