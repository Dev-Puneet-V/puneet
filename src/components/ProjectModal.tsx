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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-lg border border-zinc-800 bg-[#0d0f12] p-6 sm:p-8 text-zinc-100 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close details"
          className="absolute top-5 right-5 rounded-md p-1.5 text-zinc-400 hover:bg-zinc-800 hover:text-zinc-100 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8">
          <div className="flex flex-wrap items-center gap-2 text-xs font-mono text-zinc-500 mb-2">
            <span>{project.category === 'mobile' ? 'Mobile Application' : 'Full-Stack Platform'}</span>
            <span aria-hidden="true">·</span>
            <span>{project.platforms.join(' / ')}</span>
          </div>

          <h3 id="modal-title" className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-100">
            {project.title}
          </h3>

          <p className="mt-2 text-sm text-zinc-300 leading-relaxed">
            {project.tagline}
          </p>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-zinc-800" />

        {/* Full Overview */}
        <div className="space-y-6">
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2">
              System Overview
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2 flex items-center gap-1.5">
              <Layers className="h-3.5 w-3.5 text-zinc-400" />
              <span>Architectural Implementation</span>
            </h4>
            <p className="text-sm text-zinc-300 leading-relaxed bg-zinc-900/60 border border-zinc-800/80 rounded-md p-3.5 font-mono text-xs">
              {project.architectureHighlight}
            </p>
          </div>

          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2.5 flex items-center gap-1.5">
              <Smartphone className="h-3.5 w-3.5 text-zinc-400" />
              <span>Engineering Ownership & Scope</span>
            </h4>
            <ul className="space-y-2 text-sm text-zinc-400">
              {project.roleScope.map((scope, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-zinc-400 mt-0.5 shrink-0" />
                  <span>{scope}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology stack */}
          <div>
            <h4 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-300 font-mono">
              {project.techStack.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="text-zinc-200">{tech}</span>
                  {idx < project.techStack.length - 1 && (
                    <span className="text-zinc-700" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Store & Deployment Links */}
          <div className="pt-4 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              {project.links.map((link, lIdx) => (
                <a
                  key={lIdx}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-zinc-700 bg-zinc-800/90 px-3 py-1.5 text-xs font-medium text-zinc-100 hover:border-zinc-500 hover:bg-zinc-700 transition-colors"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="h-3.5 w-3.5 opacity-70" />
                </a>
              ))}
            </div>

            <button
              onClick={onClose}
              type="button"
              className="text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
