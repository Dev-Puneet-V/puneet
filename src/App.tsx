import React, { useRef } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ProofBar } from './components/ProofBar';
import { Experience } from './components/Experience';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Education } from './components/Education';
import { ContactFooter } from './components/ContactFooter';

export default function App() {
  const contactRef = useRef<HTMLDivElement | null>(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth' });
    } else {
      const el = document.getElementById('contact');
      el?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#090a0c] text-zinc-100 flex flex-col font-sans selection:bg-zinc-800 selection:text-white">
      {/* 3-Zone Top Bar Contract */}
      <Header onContactClick={scrollToContact} />

      {/* Main Container - Confident, intentional, quiet max-width */}
      <main className="mx-auto w-full max-w-5xl px-6 md:px-8 flex-1">
        <Hero />
        <ProofBar />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <ContactFooter contactRef={contactRef} />
      </main>
    </div>
  );
}
