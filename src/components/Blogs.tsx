import React, { useState } from 'react';
import { ArrowRight, BookOpen, Calendar, Clock, Tag } from 'lucide-react';
import { BlogPost, RESUME_DATA } from '../data/resume';
import { BlogModal } from './BlogModal';

export const Blogs: React.FC = () => {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const posts = RESUME_DATA.blogs || [];

  return (
    <section id="blogs" className="py-16 border-b border-zinc-200/80">
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-blue-600 mb-1.5 uppercase tracking-wider font-semibold">
            <BookOpen className="h-3.5 w-3.5" />
            <span>Technical Writing & Insights</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-semibold tracking-tight text-zinc-900">
            Engineering Notes & Articles
          </h2>
          <p className="mt-1 text-sm text-zinc-600 max-w-xl">
            Real architectural deep-dives on query tuning, native mobile geofencing, dual-store release workflows, and automation pipelines.
          </p>
        </div>
        <span className="text-xs font-mono text-zinc-500 self-start sm:self-auto">
          {posts.length} Publications
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <article
            key={post.id}
            className="group flex flex-col justify-between rounded-xl border border-zinc-200 bg-white p-6 sm:p-7 shadow-xs hover:shadow-md hover:border-zinc-300 transition-all duration-200"
          >
            <div>
              {/* Metadata */}
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500 mb-3">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-3.5 w-3.5 text-zinc-400" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <Clock className="h-3.5 w-3.5 text-zinc-400" />
                  {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h3
                onClick={() => setSelectedPost(post)}
                className="text-base sm:text-lg font-semibold tracking-tight text-zinc-900 group-hover:text-blue-600 cursor-pointer transition-colors leading-snug"
              >
                {post.title}
              </h3>

              {/* Summary */}
              <p className="mt-2.5 text-sm text-zinc-600 leading-relaxed line-clamp-3">
                {post.summary}
              </p>
            </div>

            <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-col gap-4">
              {/* Tags */}
              <div className="flex flex-wrap items-center gap-1.5">
                {post.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="inline-flex items-center gap-1 rounded bg-zinc-100 px-2 py-0.5 text-[11px] font-mono text-zinc-700"
                  >
                    <Tag className="h-3 w-3 text-zinc-400" />
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action */}
              <div className="flex items-center justify-between pt-1">
                <button
                  onClick={() => setSelectedPost(post)}
                  type="button"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-700 group-hover:translate-x-0.5 transition-all"
                >
                  <span>Read Article</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>

                <span className="text-[11px] font-mono text-zinc-400">
                  Technical Architecture
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      <BlogModal
        post={selectedPost}
        onClose={() => setSelectedPost(null)}
      />
    </section>
  );
};
