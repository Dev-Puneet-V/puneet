import React, { useState, useEffect } from 'react';
import { CheckCircle2, Loader2, Mail, MessageSquare, Send, Smartphone, X } from 'lucide-react';
import { RESUME_DATA } from '../data/resume';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !message.trim()) {
      setErrorMessage('Please enter both your email address and message.');
      setStatus('error');
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    try {
      // 100% Free email dispatch directly to Puneet's Gmail via FormSubmit AJAX API
      const res = await fetch(`https://formsubmit.co/ajax/${RESUME_DATA.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: name.trim() || 'Anonymous Visitor',
          email: email.trim(),
          message: message.trim(),
          _subject: `Portfolio Message from ${name.trim() || email.trim()}`,
          _template: 'table',
        }),
      });

      if (res.ok) {
        setStatus('success');
        setName('');
        setEmail('');
        setMessage('');
      } else {
        // If network issue or endpoint issue, provide fallback
        setStatus('error');
        setErrorMessage('Could not deliver directly via network. You can also use the direct mailto or WhatsApp link below.');
      }
    } catch {
      setStatus('error');
      setErrorMessage('Network error occurred. You can still reach Puneet directly via email or phone.');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-zinc-900/50 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8 text-zinc-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-5 right-5 rounded-lg p-1.5 text-zinc-400 hover:bg-zinc-100 hover:text-zinc-700 transition-colors"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-6">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-mono font-medium mb-2.5 border border-blue-200/60">
            <MessageSquare className="h-3 w-3" />
            <span>Direct Inbox Dispatch (100% Free)</span>
          </div>
          <h2 id="contact-modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
            Send a Direct Note
          </h2>
          <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal">
            Enter your details and message below. It will be sent straight to Puneet's inbox ({RESUME_DATA.email}) immediately.
          </p>
        </div>

        {status === 'success' ? (
          <div className="mt-6 rounded-xl border border-emerald-200 bg-emerald-50/70 p-6 text-center animate-in fade-in duration-200">
            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <h3 className="text-base font-semibold text-emerald-900">
              Message Sent Successfully!
            </h3>
            <p className="mt-1.5 text-xs text-emerald-800 leading-relaxed">
              Your note has been dispatched directly to <strong>{RESUME_DATA.email}</strong>. Puneet will get back to you promptly.
            </p>
            <button
              onClick={() => {
                setStatus('idle');
                onClose();
              }}
              type="button"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white hover:bg-zinc-800 transition-colors"
            >
              Done
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div>
              <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-700 mb-1">
                Your Name <span className="text-zinc-400 font-normal">(Optional)</span>
              </label>
              <input
                id="contact-name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Alex Smith"
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-700 mb-1">
                Your Email <span className="text-red-500">*</span>
              </label>
              <input
                id="contact-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="alex@company.com"
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-colors"
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-700 mb-1">
                Your Note / Message <span className="text-red-500">*</span>
              </label>
              <textarea
                id="contact-message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Hi Puneet, I came across your portfolio and wanted to discuss a React Native / Full-Stack project..."
                className="w-full rounded-lg border border-zinc-200 bg-zinc-50/50 px-3.5 py-2 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-blue-500 focus:bg-white focus:outline-hidden transition-colors resize-none"
              />
            </div>

            {status === 'error' && errorMessage && (
              <p className="text-xs text-red-600 bg-red-50 p-2.5 rounded-md border border-red-200">
                {errorMessage}
              </p>
            )}

            <div className="pt-2 flex items-center justify-between gap-3">
              <div className="text-[11px] text-zinc-400 font-mono">
                No login required
              </div>

              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={onClose}
                  className="rounded-lg px-3.5 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-800 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="inline-flex items-center gap-2 rounded-lg bg-zinc-900 px-4 py-2 text-xs font-medium text-white shadow-xs hover:bg-zinc-800 disabled:opacity-60 transition-colors"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-3.5 w-3.5 animate-spin" />
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-3.5 w-3.5" />
                      <span>Send Note</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        )}

        {/* Alternative direct actions */}
        <div className="mt-6 pt-5 border-t border-zinc-100 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-500">
          <span>Or reach out directly:</span>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${RESUME_DATA.email}`}
              className="inline-flex items-center gap-1 text-zinc-700 hover:text-blue-600 transition-colors"
            >
              <Mail className="h-3 w-3" />
              <span>Mail</span>
            </a>
            <a
              href={`https://wa.me/91${RESUME_DATA.phone.replace(/[^0-9]/g, '').slice(-10)}?text=Hi%20Puneet,%20saw%20your%20portfolio`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-zinc-700 hover:text-emerald-600 transition-colors"
            >
              <Smartphone className="h-3 w-3" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
