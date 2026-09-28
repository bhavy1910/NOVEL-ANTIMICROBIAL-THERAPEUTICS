import React from 'react';
import { Dna, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-slate-950 border-t border-slate-900 py-12 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-900">
          
          {/* Brand & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
              <Dna className="w-4 h-4" />
            </div>
            <div>
              <div className="font-display font-bold text-slate-100 text-sm tracking-wide">
                NOVEL ANTIMICROBIAL THERAPEUTICS
              </div>
              <div className="text-[11px] font-mono text-cyan-400/90 mt-0.5">
                Biomedical Science • Pharmaceutical Innovation • Antimicrobial Research
              </div>
            </div>
          </div>

          {/* Presentation Team */}
          <div className="text-center md:text-right font-medium text-slate-300 font-sans">
            <span className="text-slate-500 block text-[10px] font-mono uppercase tracking-wider mb-1">
              Presented By
            </span>
            <span>Krish Panchal</span>
            <span className="mx-2 text-slate-600">•</span>
            <span>Zeel Desai</span>
            <span className="mx-2 text-slate-600">•</span>
            <span>Nensi Raytthatha</span>
          </div>

        </div>

        {/* Bottom copyright & back to top */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] font-mono text-slate-600">
          <div>
            Academic Scientific Presentation · Department of Biomedical Science
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 text-slate-400 hover:text-cyan-400 transition-colors focus:outline-none"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
