import React from 'react';
import { motion } from 'motion/react';
import { Dna, Award, Sparkles } from 'lucide-react';

export const TeamCard: React.FC = () => {
  return (
    <section className="relative py-20 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900/70 border border-slate-800 shadow-2xl backdrop-blur-xl">
          
          <div className="w-12 h-12 rounded-2xl bg-cyan-950/60 border border-cyan-500/40 flex items-center justify-center text-cyan-400 mx-auto mb-6">
            <Dna className="w-6 h-6" />
          </div>

          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
            NOVEL ANTIMICROBIAL THERAPEUTICS
          </h2>
          
          <p className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-8">
            Academic Research & Scientific Presentation
          </p>

          <div className="p-6 rounded-2xl bg-slate-950/80 border border-slate-800/80 max-w-xl mx-auto mb-8">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-4 font-semibold">
              PRESENTED BY
            </div>

            {/* Exact required spelling */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-base sm:text-lg font-semibold text-white">
              <span className="text-cyan-200 hover:text-cyan-400 transition-colors">
                Krish Panchal
              </span>
              <span className="hidden sm:inline text-cyan-500/60" aria-hidden="true">•</span>
              <span className="text-cyan-200 hover:text-cyan-400 transition-colors">
                Zeel Desai
              </span>
              <span className="hidden sm:inline text-cyan-500/60" aria-hidden="true">•</span>
              <span className="text-cyan-200 hover:text-cyan-400 transition-colors">
                Nensi Raytthatha
              </span>
            </div>
          </div>

          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-light text-slate-300 font-sans tracking-wide">
            <Sparkles className="w-4 h-4 text-cyan-400 shrink-0" />
            <span>THANK YOU FOR EXPLORING THE FUTURE OF ANTIMICROBIAL THERAPY</span>
          </div>

        </div>

      </div>
    </section>
  );
};
