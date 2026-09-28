import React, { useState, useEffect } from 'react';
import { Play, Maximize2, Minimize2, Menu, X, Dna } from 'lucide-react';

interface NavbarProps {
  onOpenVideo: () => void;
  presentationMode: boolean;
  onTogglePresentationMode: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenVideo,
  presentationMode,
  onTogglePresentationMode
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      setScrolled(currentScroll > 40);
      setScrollProgress(totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0);

      const sectionIds = [
        'hero',
        'introduction',
        'amr-crisis',
        'therapeutics',
        'mechanisms',
        'visualizer',
        'comparison',
        'advantages',
        'challenges',
        'future',
        'conclusion',
        'references'
      ];

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setActiveSection(sectionIds[i]);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'introduction', label: 'Overview' },
    { id: 'amr-crisis', label: 'AMR Crisis' },
    { id: 'therapeutics', label: 'Therapeutics' },
    { id: 'mechanisms', label: 'Cell Targets' },
    { id: 'visualizer', label: 'Mechanisms' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'future', label: 'Future' },
    { id: 'conclusion', label: 'Conclusion' }
  ];

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Scroll Progress Bar at very top */}
      <div 
        className="fixed top-0 left-0 right-0 h-[2px] z-50 bg-slate-900/60 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className="h-full bg-gradient-to-r from-cyan-500 via-sky-400 to-blue-500 transition-all duration-150 ease-out shadow-[0_0_10px_rgba(6,182,212,0.8)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Top Bar */}
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg shadow-black/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Zone 1: Single text element wordmark */}
            <button
              onClick={() => scrollTo('hero')}
              className="group flex items-center gap-2.5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-sm"
              aria-label="Novel Antimicrobial Therapeutics Home"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 transition-colors">
                <Dna className="w-4 h-4 text-cyan-400" />
              </div>
              <span className="font-display font-bold tracking-tight text-slate-100 text-sm sm:text-base whitespace-nowrap">
                NOVEL ANTIMICROBIAL THERAPEUTICS
              </span>
            </button>

            {/* Zone 2: 4-6 clean text navigation links */}
            <nav className="hidden lg:flex items-center gap-6 text-xs font-medium tracking-wide">
              {navLinks.map((link) => {
                const isActive = activeSection === link.id;
                return (
                  <button
                    key={link.id}
                    onClick={() => scrollTo(link.id)}
                    className={`transition-colors whitespace-nowrap relative py-1 hover:text-cyan-400 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                      isActive ? 'text-cyan-400 font-semibold' : 'text-slate-300'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(6,182,212,0.8)]" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Zone 3: 1-2 primary actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={onOpenVideo}
                className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/40 rounded-lg hover:bg-cyan-900/60 hover:border-cyan-400 transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap"
                title="Watch full cinematic presentation video"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Film</span>
              </button>

              <button
                onClick={onTogglePresentationMode}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 whitespace-nowrap ${
                  presentationMode
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-[0_0_12px_rgba(6,182,212,0.4)]'
                    : 'bg-slate-900/80 text-slate-200 border-slate-700 hover:border-slate-500 hover:text-white'
                }`}
                title={presentationMode ? 'Exit Presentation Mode' : 'Enter Classroom Projector Presentation Mode'}
              >
                {presentationMode ? (
                  <>
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Normal Mode</span>
                  </>
                ) : (
                  <>
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Present Mode</span>
                  </>
                )}
              </button>

              {/* Mobile menu trigger */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-slate-400 hover:text-white focus:outline-none"
                aria-label="Toggle Navigation Menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden px-4 pt-3 pb-5 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-left px-3 py-2 text-sm rounded-md transition-colors ${
                    activeSection === link.id
                      ? 'bg-cyan-500/10 text-cyan-400 font-semibold'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <div className="pt-2 border-t border-slate-800 flex gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenVideo();
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-cyan-300 bg-cyan-950/80 border border-cyan-500/40 rounded-lg"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Watch Presentation Film</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
