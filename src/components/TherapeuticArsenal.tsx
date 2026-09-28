import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Sparkles, Dna, ShieldCheck, Microscope, Layers, UserCheck } from 'lucide-react';
import { NOVEL_THERAPIES } from '../data/therapies';
import { TherapyItem } from '../types/presentation';
import { TherapyModal } from './TherapyModal';

export const TherapeuticArsenal: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'All' | 'Established' | 'Emerging' | 'Experimental'>('All');
  const [selectedTherapy, setSelectedTherapy] = useState<TherapyItem | null>(null);

  const filteredTherapies = activeCategory === 'All'
    ? NOVEL_THERAPIES
    : NOVEL_THERAPIES.filter((t) => t.category === activeCategory);

  const getIconForTherapy = (id: string) => {
    switch (id) {
      case 'phage-therapy':
        return Microscope;
      case 'antimicrobial-peptides':
        return Layers;
      case 'crispr-approaches':
        return Dna;
      case 'anti-virulence-therapy':
        return ShieldCheck;
      case 'nanoparticle-approaches':
        return Sparkles;
      case 'host-directed-therapies':
        return UserCheck;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="therapeutics" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <span>SECTION 03</span>
              <span aria-hidden="true">·</span>
              <span>EMERGING MODALITIES</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              THE NEW ARSENAL
            </h2>
            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Six transformative therapeutic paradigms designed to bypass conventional resistance mechanisms, restore efficacy, and disarm bacterial pathogens.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons allowed under frontend design skill) */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-900 border border-slate-800 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            {(['All', 'Emerging', 'Experimental'] as const).map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3.5 py-1.5 text-xs font-mono rounded-lg transition-colors whitespace-nowrap focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                  activeCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat} Modalities
              </button>
            ))}
          </div>
        </div>

        {/* Therapy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredTherapies.map((therapy) => {
            const Icon = getIconForTherapy(therapy.id);
            return (
              <div
                key={therapy.id}
                onClick={() => setSelectedTherapy(therapy)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTherapy(therapy);
                  }
                }}
                className="group cursor-pointer p-6 sm:p-7 rounded-xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-cyan-500/10 hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                <div>
                  {/* Top metadata & category label (unboxed clean typography) */}
                  <div className="flex items-center justify-between text-xs font-mono mb-4 text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 inline-block" />
                      {therapy.category}
                    </span>
                    <span className="text-slate-500">{therapy.specificity}</span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:border-cyan-400 group-hover:scale-105 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-display text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                        {therapy.name}
                      </h3>
                      <p className="text-[11px] font-mono text-slate-400 truncate max-w-[200px]">
                        {therapy.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* One-Line Scientific Explanation */}
                  <p className="text-xs text-slate-300 font-sans leading-relaxed my-4">
                    {therapy.tagline}
                  </p>

                  {/* Target Field */}
                  <div className="p-3 rounded-lg bg-slate-950/80 border border-slate-800/80 mb-4">
                    <span className="text-[10px] font-mono uppercase text-slate-500 block mb-0.5">
                      PRIMARY TARGET
                    </span>
                    <p className="text-xs text-slate-300 font-sans line-clamp-2">
                      {therapy.primaryTarget}
                    </p>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="pt-3 border-t border-slate-800 flex items-center justify-between text-xs font-mono text-cyan-400 group-hover:text-cyan-300">
                  <span className="font-semibold tracking-wide">EXPLORE MECHANISM</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Detail Modal */}
      <TherapyModal
        therapy={selectedTherapy}
        onClose={() => setSelectedTherapy(null)}
      />
    </section>
  );
};
