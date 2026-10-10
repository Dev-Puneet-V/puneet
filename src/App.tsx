import React, { useRef, useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Blogs } from './components/Blogs';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ContactFooter } from './components/ContactFooter';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const contactRef = useRef<HTMLDivElement | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleContactAction = () => {
    // If on larger screens, smooth scroll to the direct contact form
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      setIsContactModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#fcfcfd] text-zinc-900 flex flex-col font-sans selection:bg-zinc-900 selection:text-white">
      {/* 3-Zone Top Bar */}
      <Header onContactClick={handleContactAction} />

      {/* Main Container - Crisp, professional max-width */}
      <main className="mx-auto w-full max-w-5xl px-6 md:px-8 flex-1">
        <Hero />
        <ProofBar />
        <Experience />
        <Projects />
        <Blogs />
        <Skills />
        <Education />
        <ContactFooter
          contactRef={contactRef}
          onOpenModal={() => setIsContactModalOpen(true)}
        />
      </main>

      {/* Direct Contact Modal */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}
