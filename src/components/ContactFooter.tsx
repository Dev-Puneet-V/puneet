import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Check, CheckCircle2, Copy, Loader2, Mail, MessageSquare, Phone, Send, Smartphone } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

interface ContactFooterProps {
  contactRef: React.RefObject<HTMLDivElement | null>;
  onOpenModal?: () => void;
}

export const ContactFooter: React.FC<ContactFooterProps> = ({ contactRef, onOpenModal }) => {
  const [copied, setCopied] = useState(false);
  const [localTime, setLocalTime] = useState<string>('');

  // Inline Contact Form State
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [senderNote, setSenderNote] = useState('');
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formError, setFormError] = useState('');

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

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail.trim() || !senderNote.trim()) {
      setFormError('Please provide both your email address and message.');
      setFormStatus('error');
      return;
    }

    setFormStatus('submitting');
    setFormError('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${RESUME_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: senderName.trim() || 'Visitor from Portfolio',
          email: senderEmail.trim(),
          message: senderNote.trim(),
          _subject: `New Message from ${senderName.trim() || senderEmail.trim()} (Portfolio)`,
          _template: 'table',
        }),
      });

      if (response.ok) {
        setFormStatus('success');
        setSenderName('');
        setSenderEmail('');
        setSenderNote('');
      } else {
        setFormStatus('error');
        setFormError('Could not send via direct dispatch. You can still reach me directly using the email or phone buttons below.');
      }
    } catch {
      setFormStatus('error');
      setFormError('Network request failed. Please use direct email or phone below.');
    }
  };

  return (
    <footer ref={contactRef} id="contact" className="pt-20 pb-16">
      <div className="rounded-2xl border border-zinc-200 bg-gradient-to-b from-zinc-50/70 to-white p-7 sm:p-12 mb-16 shadow-xs">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Info & Statement */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-medium mb-3 border border-blue-200/60">
                <MessageSquare className="h-3 w-3" />
                <span>Direct Communication</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-950">
                Let's build something durable.
              </h2>

              <p className="mt-3 text-sm text-zinc-600 leading-relaxed font-normal">
                Whether you need a mobile application delivered to app stores from scratch, complex backend API optimization, or full product ownership—feel free to drop a note.
              </p>

              <div className="mt-6 flex flex-col gap-2.5">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
                  <span className="font-semibold text-zinc-800">Email:</span>
                  <a href={`mailto:${RESUME_DATA.email}`} className="text-blue-600 hover:underline">
                    {RESUME_DATA.email}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-600">
                  <span className="font-semibold text-zinc-800">Phone / WhatsApp:</span>
                  <a href={`tel:${RESUME_DATA.phone.replace(/\s+/g, '')}`} className="text-zinc-800 hover:text-blue-600">
                    {RESUME_DATA.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-500">
                  <span>Location:</span>
                  <span>Tirupati, India</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-2.5">
              <button
                onClick={handleCopyEmail}
                type="button"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-zinc-900 transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-emerald-600" />
                    <span className="text-emerald-700 font-medium">Copied Email</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5 text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${RESUME_DATA.email}`}
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-blue-600 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-zinc-400" />
                <span>Direct Mail</span>
              </a>

              <a
                href={`https://wa.me/91${RESUME_DATA.phone.replace(/[^0-9]/g, '').slice(-10)}?text=Hi%20Puneet,%20saw%20your%20portfolio`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 rounded-lg border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-700 shadow-2xs hover:bg-zinc-50 hover:text-emerald-600 transition-colors"
              >
                <Smartphone className="h-3.5 w-3.5 text-emerald-600" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Right Column: Direct On-Page Contact Form */}
          <div className="lg:col-span-7 bg-white rounded-xl border border-zinc-200 p-6 sm:p-7 shadow-xs">
            <div className="flex items-center justify-between pb-4 border-b border-zinc-100 mb-5">
              <div>
                <h3 className="text-sm font-bold text-zinc-900">
                  Send Me a Direct Message
                </h3>
                <p className="text-xs text-zinc-500 font-normal">
                  Lands directly in Puneet's inbox with zero sign-up required.
                </p>
              </div>
            </div>

            {formStatus === 'success' ? (
              <div className="py-8 text-center animate-in fade-in duration-200">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-base font-bold text-emerald-950">
                  Note Sent Successfully!
                </h4>
                <p className="mt-1 text-xs text-emerald-800 max-w-sm mx-auto">
                  Your message has been delivered to <strong>{RESUME_DATA.email}</strong>. I will reply to you as soon as possible.
                </p>
                <button
                  onClick={() => setFormStatus('idle')}
                  type="button"
                  className="mt-5 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label htmlFor="footer-sender-name" className="block text-xs font-medium text-zinc-700 mb-1">
                      Your Name <span className="text-zinc-400 font-normal">(Optional)</span>
                    </label>
                    <input
                      id="footer-sender-name"
                      type="text"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      placeholder="e.g. Alex"
                      className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-colors"
                    />
                  </div>

                  <div>
                    <label htmlFor="footer-sender-email" className="block text-xs font-medium text-zinc-700 mb-1">
                      Your Email <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="footer-sender-email"
                      type="email"
                      required
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="footer-sender-note" className="block text-xs font-medium text-zinc-700 mb-1">
                    Your Message / Note <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="footer-sender-note"
                    required
                    rows={4}
                    value={senderNote}
                    onChange={(e) => setSenderNote(e.target.value)}
                    placeholder="Hi Puneet, I'd like to discuss a mobile engineering opportunity / project..."
                    className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-xs sm:text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-colors resize-none"
                  />
                </div>

                {formStatus === 'error' && formError && (
                  <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-lg border border-red-200">
                    {formError}
                  </p>
                )}

                <div className="pt-1 flex items-center justify-between">
                  <span className="text-[11px] font-mono text-zinc-400">
                    Protected by CORS & spam filters
                  </span>

                  <button
                    type="submit"
                    disabled={formStatus === 'submitting'}
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-5 py-2.5 text-xs font-medium text-white shadow-xs hover:bg-zinc-800 disabled:opacity-60 transition-colors"
                  >
                    {formStatus === 'submitting' ? (
                      <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        <span>Sending to Inbox...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-3.5 w-3.5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar: Wordmark, Status, Links */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 text-xs text-zinc-500 font-mono">
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
          <span className="text-zinc-900 font-sans font-bold">{RESUME_DATA.name}</span>
          <span className="hidden sm:inline text-zinc-300" aria-hidden="true">·</span>
          <span>Tirupati, India {localTime ? `(${localTime} IST)` : ''}</span>
        </div>

        <div className="flex items-center gap-5">
          <a
            href={RESUME_DATA.linkedin}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-blue-600 transition-colors"
          >
            <span>LinkedIn</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
          <a
            href={RESUME_DATA.twitter}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 hover:text-zinc-900 transition-colors"
          >
            <span>Twitter</span>
            <ArrowUpRight className="h-3 w-3 opacity-60" />
          </a>
          <a
            href="#top"
            className="hover:text-zinc-900 transition-colors"
          >
            Back to Top ↑
          </a>
        </div>
      </div>
    </footer>
  );
};
