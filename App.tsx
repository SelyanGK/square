
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Footer } from './components/Footer';
import { LegalModal } from './components/Legal';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [legalType, setLegalType] = useState<'tos' | 'privacy' | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-[#39FF14]/30 selection:text-white">
      <Navbar isScrolled={scrolled} />
      
      <main className="relative">
        <Hero />
        <Features />
      </main>

      <Footer onLegalClick={(type) => setLegalType(type)} />

      {legalType && (
        <LegalModal type={legalType} onClose={() => setLegalType(null)} />
      )}
    </div>
  );
};

export default App;
