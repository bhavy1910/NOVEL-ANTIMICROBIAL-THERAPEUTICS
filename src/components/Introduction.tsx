import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Sparkles, Activity, Layers } from 'lucide-react';

export const Introduction: React.FC = () => {
  const cards = [
    {
      icon: Activity,
      title: 'The Antibiotic Century at Risk',
      description:
        'Since Fleming\'s discovery of penicillin, small-molecule antibiotics transformed global medicine. Yet, decades of relentless clinical and agricultural deployment have precipitated unprecedented microbial evolutionary pushback.',
      stat: '100+ Years',
      statLabel: 'Of Antibiotic Era Foundations'
    },
    {
      icon: ShieldAlert,
      title: 'The Conventional Dilemma',
      description:
        'Traditional antibiotics rely heavily on a narrow set of intracellular targets: cell wall synthesis, DNA gyrase, and ribosomal protein translation. Resistance to one class readily engenders cross-resistance to others.',
      stat: 'Narrow Scope',
      statLabel: 'Traditional Target Repertoire'
    },
    {
      icon: Sparkles,
      title: 'The Novel Paradigm',
      description:
        'Overcoming recalcitrant bacterial pathogens demands moving beyond traditional broad-spectrum growth inhibitors toward biologically targeted, sequence-specific, and membrane-disruptive molecular mechanisms.',
      stat: 'New Modalities',
      statLabel: 'Phages · AMPs · CRISPR · Anti-Virulence'
    }
  ];

  return (
    <section id="introduction" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      {/* Background Subtle Gradient & Molecular Accents */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-48 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>SECTION 01</span>
            <span aria-hidden="true">·</span>
            <span>EXECUTIVE CONTEXT</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 text-balance">
            THE NEXT FRONTIER OF ANTIMICROBIAL THERAPY
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
            Infectious pathogens are acquiring resistance at a velocity far outstripping conventional antibiotic discovery. To avert a post-antibiotic era, contemporary biomedical science is engineering revolutionary therapeutic modalities that bypass standard survival pressures.
          </p>
        </div>

        {/* 3 Structured Core Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {cards.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="group relative p-6 sm:p-8 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-6 group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-slate-100 mb-3 group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed font-sans mb-6">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-800/80 flex items-baseline justify-between">
                  <div className="text-lg font-mono font-bold text-cyan-400">
                    {item.stat}
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    {item.statLabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Presentation Key Insight Callout */}
        <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-slate-900/90 to-slate-900/40 border-l-4 border-cyan-500 border-y border-r border-slate-800/80">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Layers className="w-5 h-5 text-cyan-400 shrink-0" />
              <div>
                <span className="font-semibold text-slate-200 text-sm">Fundamental Objective:</span>
                <span className="text-slate-400 text-sm ml-2">
                  Transitioning from broad-spectrum systemic toxicity toward pathogen-specific, non-selectable molecular interventions.
                </span>
              </div>
            </div>
            <div className="text-xs font-mono text-slate-500 whitespace-nowrap">
              SOURCE: WHO GLOBAL ACTION PLAN ON AMR
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
