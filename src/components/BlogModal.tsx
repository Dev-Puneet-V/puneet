import React, { useEffect } from 'react';
import { ArrowLeft, BookOpen, Calendar, CheckCircle2, Clock, Share2, Tag, X } from 'lucide-react';
import { BlogPost } from '../data/resume';

interface BlogModalProps {
  post: BlogPost | null;
  onClose: () => void;
}

const renderInlineFormatted = (text: string): React.ReactNode => {
  const parts = text.split(/(\*\*[^*]+\*\*|`[^`]+`)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-semibold text-zinc-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    if (part.startsWith('`') && part.endsWith('`')) {
      return (
        <code key={i} className="font-mono text-xs bg-zinc-100 text-zinc-800 px-1.5 py-0.5 rounded border border-zinc-200">
          {part.slice(1, -1)}
        </code>
      );
    }
    return part;
  });
};

export const BlogModal: React.FC<BlogModalProps> = ({ post, onClose }) => {
  const [copied, setCopied] = React.useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (post) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [post, onClose]);

  if (!post) return null;

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="blog-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-xl border border-zinc-200 bg-white p-6 sm:p-10 text-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Action Bar */}
        <div className="flex items-center justify-between pb-6 border-b border-zinc-100">
          <button
            onClick={onClose}
            type="button"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 hover:text-zinc-900 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Portfolio</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={handleShare}
              type="button"
              className="inline-flex items-center gap-1.5 rounded-md border border-zinc-200 bg-zinc-50 px-2.5 py-1 text-xs font-medium text-zinc-700 hover:bg-zinc-100 transition-colors"
            >
              <Share2 className="h-3.5 w-3.5" />
              <span>{copied ? 'Link Copied!' : 'Share'}</span>
            </button>
            <button
              onClick={onClose}
              type="button"
              aria-label="Close modal"
              className="rounded-md p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Article Meta */}
        <div className="mt-6">
          <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-500 font-mono mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="h-3.5 w-3.5 text-zinc-400" />
              {post.date}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5 text-zinc-400" />
              {post.readTime}
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1 text-blue-600 font-medium">
              <BookOpen className="h-3.5 w-3.5" />
              Engineering Note
            </span>
          </div>

          <h1 id="blog-modal-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900 leading-snug">
            {post.title}
          </h1>

          <p className="mt-3 text-base text-zinc-600 leading-relaxed font-normal">
            {post.summary}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-1.5">
            {post.tags.map((tag, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1 rounded-md bg-zinc-100 px-2 py-0.5 text-[11px] font-mono text-zinc-700"
              >
                <Tag className="h-3 w-3 text-zinc-400" />
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Key Takeaways Highlight Box */}
        {post.keyTakeaways && post.keyTakeaways.length > 0 && (
          <div className="mt-8 rounded-lg border border-blue-100 bg-blue-50/60 p-5">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-blue-900 mb-3 font-mono">
              Key Engineering Insights
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-blue-950">
              {post.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-600 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body */}
        <div className="mt-8 space-y-4 text-sm sm:text-base text-zinc-700 leading-relaxed">
          {post.content.map((paragraph, pIdx) => {
            if (paragraph.startsWith('### ')) {
              return (
                <h3 key={pIdx} className="text-base sm:text-lg font-semibold text-zinc-900 pt-3 tracking-tight">
                  {paragraph.replace('### ', '')}
                </h3>
              );
            }
            if (paragraph.startsWith('• ') || paragraph.startsWith('- ')) {
              return (
                <div key={pIdx} className="flex items-start gap-2.5 pl-1.5 text-zinc-700">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-600 mt-2 shrink-0" />
                  <div className="flex-1 leading-relaxed">{renderInlineFormatted(paragraph.slice(2))}</div>
                </div>
              );
            }
            return (
              <p key={pIdx} className="leading-relaxed">
                {renderInlineFormatted(paragraph)}
              </p>
            );
          })}
        </div>

        {/* Footer Note */}
        <div className="mt-10 pt-6 border-t border-zinc-100 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-zinc-500">
          <div>
            <span>Authored by </span>
            <strong className="text-zinc-900 font-semibold">Puneet Verma</strong>
            <span> · Full-Stack Mobile Engineer</span>
          </div>
          <button
            onClick={onClose}
            type="button"
            className="rounded-md bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition-colors self-start sm:self-auto"
          >
            Close Article
          </button>
        </div>
      </div>
    </div>
  );
};
