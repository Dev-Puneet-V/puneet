import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Check, Copy, Mail, Phone } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

interface ContactFooterProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ contactRef }) => {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState<string>('');

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Kolkata',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: true,
        }).format(now);
        setLocalTime(formatted);
      } catch {
        setLocalTime('IST (UTC+5:30)');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(RESUME_DATA.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    }
  };

  return (
    <footer ref={contactRef} id="contact" className="pt-20 pb-16">
      <div className="rounded-xl border border-zinc-800 bg-zinc-950/80 p-8 sm:p-12 mb-16">
        <div className="max-w-2xl">
          <div className="text-xs font-mono text-zinc-400 mb-3 tracking-tight">
            <span>Direct Communication</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-100">
            Let's build something durable.
          </h2>

          <p className="mt-3 text-sm sm:text-base text-zinc-300 leading-relaxed">
            Whether you need a mobile application delivered to app stores from scratch, complex backend API optimization, or full product ownership—feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="inline-flex items-center gap-2 rounded-md bg-zinc-100 px-4 py-2.5 text-xs font-medium text-zinc-900 transition-colors hover:bg-white"
            >
              <Mail className="h-4 w-4" />
              <span>{RESUME_DATA.email}</span>
            </a>

            <button
              onClick={handleCopyEmail}
              type="button"
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 px-4 py-2.5 text-xs font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:text-white"
            >
              {copied ? (
                <>
                  <Check className="h-4 w-4 text-zinc-300" />
                  <span>Email Copied</span>
                </>
              ) : (
                <>
                  <Copy className="h-4 w-4 text-zinc-400" />
                  <span>Copy Address</span>
                </>
              )}
            </button>

            <a
              href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 text-xs font-medium text-zinc-300 transition-colors hover:border-zinc-700 hover:text-white"
            >
              <Phone className="h-4 w-4 text-zinc-400" />
              <span>{RESUME_DATA.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar: Wordmark, Status, Links */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs text-zinc-400 font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-zinc-300 font-sans font-medium">{RESUME_DATA.name}</span>
          <span className="hidden sm:inline text-zinc-600" aria-hidden="true">·</span>
          <span>Tirupati, India {localTime ? `(${localTime} IST)` : ''}</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-zinc-200 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
          <a
            href={RESUME_DATA.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-zinc-200 transition-colors"
          >
            <span>Twitter</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
          <a
            href="#top"
            className="hover:text-zinc-200 transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
