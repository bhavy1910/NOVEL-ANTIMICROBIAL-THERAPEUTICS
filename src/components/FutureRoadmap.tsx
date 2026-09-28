import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Compass, Microscope, TestTube, CheckCircle, Hospital, ShieldCheck, LucideIcon } from 'lucide-react';

interface RoadmapStep {
  stage: string;
  name: string;
  subtitle: string;
  icon: LucideIcon;
  desc: string;
}

export const FutureRoadmap: React.FC = () => {
  const [selectedPhase, setSelectedPhase] = useState(2);

  const roadmapSteps: RoadmapStep[] = [
    {
      stage: '01',
      name: 'Discovery',
      subtitle: 'Genomic & Metagenomic Mining',
      icon: Compass,
      desc: 'Computational screening of environmental microbiomes, synthetic biology design of peptide libraries, and CRISPR-Cas engineering.'
    },
    {
      stage: '02',
      name: 'Preclinical Research',
      subtitle: 'In Vitro & Animal Efficacy',
      icon: Microscope,
      desc: 'Pharmacokinetics (PK/PD) profiling, membrane selectivity testing, cytotoxicity assays in mammalian cells, and resistance selection indexing.'
    },
    {
      stage: '03',
      name: 'Clinical Validation',
      subtitle: 'Phase I–III Clinical Trials',
      icon: TestTube,
      desc: 'Randomized controlled trials establishing safety margins, non-inferiority, human serum half-life, and pathogen eradication endpoints.'
    },
    {
      stage: '04',
      name: 'Regulatory Evaluation',
      subtitle: 'Modernized Biological Frameworks',
      icon: CheckCircle,
      desc: 'Adaptive pathways for evolving biologics (phage cocktails), companion diagnostic standardization, and accelerated antimicrobial approval.'
    },
    {
      stage: '05',
      name: 'Clinical Application',
      subtitle: 'Targeted Bedside Integration',
      icon: Hospital,
      desc: 'Rapid diagnostic PCR/sequencing pairing patients with specific phage clones, AMP topical/inhalation regimens, or adjuvant therapy.'
    },
    {
      stage: '06',
      name: 'Responsible Stewardship',
      subtitle: 'One Health Global Governance',
      icon: ShieldCheck,
      desc: 'Surveillance networks monitoring potential resistance mutations, restricted veterinary/agricultural use, and global access equity.'
    }
  ];

  return (
    <section id="future" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      {/* Brighter blue/cyan visual radiance backdrop */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-600/10 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>SECTION 09</span>
            <span aria-hidden="true">·</span>
            <span>TRANSLATIONAL PIPELINE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            THE FUTURE ROADMAP
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            The multi-stage journey translating laboratory biophysical breakthroughs into validated, bedside precision clinical treatments.
          </p>
        </div>

        {/* 6-Stage Interactive Horizontal / Stepper Roadmap */}
        <div className="mb-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-3">
            {roadmapSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = selectedPhase === idx;
              return (
                <button
                  key={step.stage}
                  onClick={() => setSelectedPhase(idx)}
                  className={`text-left p-4 rounded-xl border transition-all duration-200 flex flex-col justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.2)] ring-1 ring-cyan-400/50'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[11px] font-mono text-cyan-400 font-bold">
                        PHASE {step.stage}
                      </span>
                      <Icon className={`w-4 h-4 ${isSelected ? 'text-cyan-300' : 'text-slate-500'}`} />
                    </div>
                    <h3 className="font-display font-semibold text-slate-100 text-sm mb-1">
                      {step.name}
                    </h3>
                    <p className="text-[11px] font-mono text-slate-400 mb-2">
                      {step.subtitle}
                    </p>
                  </div>
                  <div className="text-[11px] text-slate-400 font-sans leading-relaxed pt-2 border-t border-slate-800">
                    {step.desc}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Section 22: Grand Future Vision Statement */}
        <div className="relative p-8 sm:p-12 md:p-16 rounded-2xl bg-gradient-to-b from-slate-900/90 via-slate-900/70 to-slate-950 border border-cyan-500/30 shadow-2xl text-center overflow-hidden">
          
          <div className="absolute inset-0 bg-radial-[at_center_center] from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 inline-block font-semibold">
              THE STRATEGIC PARADIGM SHIFT
            </span>

            {/* Large Statement Required in Prompt */}
            <h3 className="font-display text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
              FROM BROAD-SPECTRUM TREATMENT
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
                TO PRECISION ANTIMICROBIAL STRATEGIES
              </span>
            </h3>

            {/* 2-3 Concise Explanatory Sentences */}
            <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mx-auto text-balance">
              The next era of infectious disease management replaces indiscriminate chemical eradication with pathogen-specific, non-selectable molecular interventions. By coupling point-of-care rapid diagnostics with bespoke biologicals, clinical medicine can eliminate refractory infections while safeguarding the vital human microbiome.
            </p>

            <div className="pt-4 flex flex-wrap items-center justify-center gap-4 text-xs font-mono text-cyan-400">
              <span className="px-3 py-1 rounded-md bg-slate-950 border border-cyan-500/30">Target-Specific Lysis</span>
              <span className="px-3 py-1 rounded-md bg-slate-950 border border-cyan-500/30">Microbiome Sparing</span>
              <span className="px-3 py-1 rounded-md bg-slate-950 border border-cyan-500/30">Sustainable Co-Evolution</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
