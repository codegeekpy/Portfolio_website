import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import QuickStats from './components/QuickStats';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import EducationAndAwards from './components/EducationAndAwards';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? 'dark bg-zinc-950 text-zinc-100' : 'light bg-zinc-50 text-zinc-900'} relative transition-colors duration-300 selection:bg-emerald-500/20 selection:text-emerald-400`}>
      {/* Background dot/grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-70 pointer-events-none fixed" />
      
      {/* Ambient radial glow top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-gradient pointer-events-none fixed" />

      {/* Main app content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar 
          darkMode={darkMode} 
          setDarkMode={setDarkMode} 
          onOpenResume={() => setIsResumeOpen(true)} 
        />

        <main className="flex-grow">
          <Hero onOpenResume={() => setIsResumeOpen(true)} />
          <QuickStats />
          <Projects />
          <Experience />
          <Skills />
          <EducationAndAwards />
          <Certifications />
          <Contact />
        </main>

        <Footer />

        <ResumeModal 
          isOpen={isResumeOpen} 
          onClose={() => setIsResumeOpen(false)} 
        />
      </div>
    </div>
  );
}
