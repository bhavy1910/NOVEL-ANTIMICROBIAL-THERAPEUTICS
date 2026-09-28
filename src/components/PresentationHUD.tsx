import React, { useEffect, useState } from 'react';
import { ChevronUp, ChevronDown, Monitor } from 'lucide-react';

interface PresentationHUDProps {
  presentationMode: boolean;
}

export const PresentationHUD: React.FC<PresentationHUDProps> = ({ presentationMode }) => {
  const [activeIdx, setActiveIdx] = useState(0);

  const sections = [
    { id: 'hero', label: 'Title' },
    { id: 'introduction', label: 'Introduction' },
    { id: 'amr-crisis', label: 'AMR Crisis' },
    { id: 'therapeutics', label: 'Therapeutics' },
    { id: 'mechanisms', label: 'Target Map' },
    { id: 'visualizer', label: 'Mechanisms' },
    { id: 'comparison', label: 'Comparison' },
    { id: 'advantages', label: 'Advantages' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'future', label: 'Future Vision' },
    { id: 'conclusion', label: 'Conclusion' },
    { id: 'references', label: 'References' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveIdx(i);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Keyboard navigation for presentation mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement) {
        return;
      }
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        if (e.key === ' ') e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        goToPrev();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeIdx]);

  const goToSection = (index: number) => {
    if (index >= 0 && index < sections.length) {
      const targetEl = document.getElementById(sections[index].id);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const goToNext = () => {
    if (activeIdx < sections.length - 1) {
      goToSection(activeIdx + 1);
    }
  };

  const goToPrev = () => {
    if (activeIdx > 0) {
      goToSection(activeIdx - 1);
    }
  };

  return (
    <>
      {/* Desktop Vertical Section Progress Dot Indicator */}
      <aside 
        className="fixed right-6 top-1/2 -translate-y-1/2 z-30 hidden xl:flex flex-col items-end gap-3 pointer-events-auto"
        aria-label="Presentation Slide Navigator"
      >
        <div className="p-2 rounded-full bg-slate-950/70 border border-slate-800/80 backdrop-blur-md shadow-xl flex flex-col items-center gap-2">
          {sections.map((sec, idx) => {
            const isActive = activeIdx === idx;
            return (
              <button
                key={sec.id}
                onClick={() => goToSection(idx)}
                className="group relative flex items-center justify-center p-1 focus:outline-none"
                aria-label={`Jump to slide ${idx + 1}: ${sec.label}`}
              >
                {/* Floating Tooltip */}
                <span className="absolute right-7 px-2 py-0.5 rounded text-[11px] font-mono tracking-wide bg-slate-900 border border-slate-700 text-slate-200 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg">
                  {String(idx + 1).padStart(2, '0')}. {sec.label}
                </span>

                {/* Dot */}
                <span
                  className={`block rounded-full transition-all duration-300 ${
                    isActive
                      ? 'w-2.5 h-6 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]'
                      : 'w-2 h-2 bg-slate-600 hover:bg-slate-400'
                  }`}
                />
              </button>
            );
          })}
        </div>
      </aside>

      {/* Classroom Projector Presentation Mode Floating Bar */}
      {presentationMode && (
        <div 
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 px-5 py-2.5 rounded-full bg-slate-950/90 border border-cyan-500/50 backdrop-blur-xl shadow-2xl flex items-center gap-4 text-xs font-mono animate-in fade-in slide-in-from-bottom-4 duration-200"
          role="toolbar"
          aria-label="Presentation Projector Controls"
        >
          <div className="flex items-center gap-2 text-cyan-400 pr-3 border-r border-slate-800">
            <Monitor className="w-4 h-4 text-cyan-400" />
            <span className="font-semibold tracking-wider">PROJECTOR MODE</span>
          </div>

          <div className="text-slate-300 font-semibold tabular-nums">
            SLIDE <span className="text-cyan-300">{String(activeIdx + 1).padStart(2, '0')}</span> / {String(sections.length).padStart(2, '0')}
          </div>

          <div className="text-slate-400 max-w-[140px] truncate hidden sm:block">
            {sections[activeIdx]?.label}
          </div>

          <div className="flex items-center gap-1 pl-3 border-l border-slate-800">
            <button
              onClick={goToPrev}
              disabled={activeIdx === 0}
              className="p-1.5 rounded-md hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-200 transition-colors"
              title="Previous slide (Left arrow / PageUp)"
              aria-label="Previous slide"
            >
              <ChevronUp className="w-4 h-4" />
            </button>
            <button
              onClick={goToNext}
              disabled={activeIdx === sections.length - 1}
              className="p-1.5 rounded-md hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent text-slate-200 transition-colors"
              title="Next slide (Right arrow / Space / PageDown)"
              aria-label="Next slide"
            >
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};
