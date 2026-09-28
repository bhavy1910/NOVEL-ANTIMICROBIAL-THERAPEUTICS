import React, { useState } from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, TrendingUp, ShieldX, RefreshCw, CheckCircle2, Info } from 'lucide-react';

export const AMRCrisis: React.FC = () => {
  const [activeStage, setActiveStage] = useState(0);
  const [simulationState, setSimulationState] = useState<'untreated' | 'conventional' | 'novel'>('untreated');

  const timelineStages = [
    {
      title: 'Antimicrobial Use',
      subtitle: 'Clinical & Agricultural Exposure',
      description:
        'Widespread, often suboptimal administration of broad-spectrum antibiotics exposes trillions of bacteria to sub-lethal and lethal concentrations.',
      icon: TrendingUp,
      mechanisms: 'High selective dosage · Broad-spectrum killing of susceptible microflora'
    },
    {
      title: 'Microbial Selection',
      subtitle: 'Survival of Pre-Existing Mutants',
      description:
        'Susceptible strains are eradicated, while rare spontaneous mutants possessing efflux pumps, modified targets, or beta-lactamase genes survive and proliferate.',
      icon: AlertTriangle,
      mechanisms: 'Selective bottleneck · Elimination of microbial ecological competitors'
    },
    {
      title: 'Resistance Dissemination',
      subtitle: 'Horizontal Gene Transfer (HGT)',
      description:
        'Resistance traits encoded on mobilizable plasmids, transposons, and integrons transfer horizontally across diverse bacterial species and genera.',
      icon: RefreshCw,
      mechanisms: 'Bacterial conjugation · Transformation · Phage transduction'
    },
    {
      title: 'Treatment Challenges',
      subtitle: 'Pan-Drug Resistant Infections',
      description:
        'Clinicians face ESKAPE pathogens refractory to first-, second-, and last-resort reserve antibiotics (e.g. carbapenems and polymyxins).',
      icon: ShieldX,
      mechanisms: 'Therapeutic dead-ends · Prolonged hospitalizations · Escalating mortality'
    }
  ];

  return (
    <section id="amr-crisis" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>SECTION 02</span>
            <span aria-hidden="true">·</span>
            <span>EPIDEMIOLOGY & EVOLUTION</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            THE RESISTANCE CRISIS
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed text-balance">
            Antimicrobial resistance (AMR) is a relentless Darwinian selection engine driven by decades of antibiotic reliance. Understanding this evolutionary cascade illuminates why incremental modifications to existing antibiotics are insufficient.
          </p>
        </div>

        {/* Verified Epidemiological Metrics Banner (GRAM Study 2022) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 p-6 rounded-xl bg-slate-900/60 border border-slate-800">
          <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6">
            <span className="text-xs font-mono uppercase text-slate-400">Direct Global Fatalities (2019)</span>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-rose-400 mt-2">
              1.27 Million
            </div>
            <span className="text-xs text-slate-500 mt-1">Deaths directly attributable to bacterial AMR</span>
          </div>

          <div className="flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-800 pb-4 md:pb-0 md:pr-6 md:pl-6">
            <span className="text-xs font-mono uppercase text-slate-400">Associated Global Fatalities</span>
            <div className="text-3xl sm:text-4xl font-mono font-bold text-amber-400 mt-2">
              4.95 Million
            </div>
            <span className="text-xs text-slate-500 mt-1">Deaths associated with drug-resistant infections</span>
          </div>

          <div className="flex flex-col justify-between md:pl-6 pt-4 md:pt-0">
            <span className="text-xs font-mono uppercase text-slate-400">Critical Priority Pathogens</span>
            <div className="text-xl font-mono font-semibold text-cyan-300 mt-2">
              ESKAPE Group
            </div>
            <span className="text-xs text-slate-500 mt-1">
              E. faecium, S. aureus, K. pneumoniae, A. baumannii, P. aeruginosa, Enterobacter spp.
            </span>
          </div>
          
          <div className="col-span-full pt-3 mt-2 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
            <span>DATA SOURCE: The Lancet GRAM Study (Murray et al., 2022) & WHO Priority List (2024)</span>
            <span className="text-cyan-400">Verified Peer-Reviewed Evidence</span>
          </div>
        </div>

        {/* Stepwise Storytelling Sequence */}
        <div className="mb-20">
          <div className="text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <span>THE RESISTANCE CYCLE SEQUENCE</span>
            <span aria-hidden="true">·</span>
            <span>CLICK TO INSPECT EVOLUTIONARY PHASES</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {timelineStages.map((stage, idx) => {
              const Icon = stage.icon;
              const isSelected = activeStage === idx;
              return (
                <button
                  key={stage.title}
                  onClick={() => setActiveStage(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-200 flex flex-col justify-between relative focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-[0_0_20px_rgba(6,182,212,0.15)] ring-1 ring-cyan-500/50'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/60'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-slate-500">
                        PHASE 0{idx + 1}
                      </span>
                      <Icon className={`w-5 h-5 ${isSelected ? 'text-cyan-400' : 'text-slate-500'}`} />
                    </div>
                    <h3 className="font-display font-semibold text-slate-100 text-base mb-1">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-cyan-400/90 font-mono mb-3">
                      {stage.subtitle}
                    </p>
                    <p className="text-xs text-slate-400 font-sans leading-relaxed">
                      {stage.description}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                    {stage.mechanisms}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Split Screen: WHY DO WE NEED NOVEL THERAPEUTICS? */}
        <div className="pt-8 border-t border-slate-800">
          <div className="max-w-3xl mb-12">
            <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mb-3">
              WHY DO WE NEED NOVEL THERAPEUTICS?
            </h3>
            <p className="text-sm sm:text-base text-slate-400">
              Comparing conventional small-molecule selection bottlenecks against novel precision mechanisms.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Left: Scientific Explanation */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="p-5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <h4 className="font-semibold text-slate-200 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-rose-400" />
                    Enzymatic Neutralization & Efflux
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Bacteria rapidly acquire beta-lactamases, carbapenemases (KPC, NDM-1), and RND-family multi-drug efflux pumps, rendering classical beta-lactam and macrolide scaffolds chemically ineffective.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <h4 className="font-semibold text-slate-200 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-amber-400" />
                    Intense Selective Pressure
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Broad-spectrum bactericidal agents impose an existential evolutionary filter: any rare mutation conferring even a 2-fold increase in MIC is rapidly enriched across the surviving population.
                  </p>
                </div>

                <div className="p-5 rounded-lg bg-slate-900/60 border border-slate-800">
                  <h4 className="font-semibold text-slate-200 text-sm mb-1.5 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400" />
                    The Solution: Orthogonal Mechanistic Modalities
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Novel therapeutics act via fundamentally physical mechanisms (membrane electroporation by AMPs), biological predation (bacteriophage lysis), or pathogenetic disarmament (anti-virulence) that do not share cross-resistance with classical targets.
                  </p>
                </div>
              </div>

              <div className="text-xs text-slate-500 font-mono flex items-center gap-2 pt-2">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Interact with the simulation stage on the right to compare outcomes.</span>
              </div>
            </div>

            {/* Right: Interactive Bacterial Visualization Simulation */}
            <div className="lg:col-span-6 rounded-xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                  <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
                    POPULATION RESPONSE SIMULATOR
                  </div>
                  <div className="text-xs font-mono text-cyan-400">
                    STOCHASTIC COLONY MODEL
                  </div>
                </div>

                {/* State selector tabs */}
                <div className="grid grid-cols-3 gap-2 p-1 bg-slate-950 rounded-lg mb-6 text-xs font-mono">
                  <button
                    onClick={() => setSimulationState('untreated')}
                    className={`py-2 px-3 rounded-md transition-colors ${
                      simulationState === 'untreated'
                        ? 'bg-slate-800 text-white font-semibold shadow'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Untreated Infection
                  </button>
                  <button
                    onClick={() => setSimulationState('conventional')}
                    className={`py-2 px-3 rounded-md transition-colors ${
                      simulationState === 'conventional'
                        ? 'bg-rose-950/80 text-rose-300 border border-rose-600/40 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Conventional Antibiotic
                  </button>
                  <button
                    onClick={() => setSimulationState('novel')}
                    className={`py-2 px-3 rounded-md transition-colors ${
                      simulationState === 'novel'
                        ? 'bg-cyan-950/80 text-cyan-300 border border-cyan-500/40 font-semibold'
                        : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    Novel Multi-Modal Therapy
                  </button>
                </div>

                {/* Visual Colony Representation Stage */}
                <div className="h-56 rounded-lg bg-slate-950 border border-slate-800/80 relative overflow-hidden flex items-center justify-center p-4">
                  {/* Grid background */}
                  <div 
                    className="absolute inset-0 opacity-15"
                    style={{
                      backgroundImage: 'radial-gradient(#38bdf8 1px, transparent 1px)',
                      backgroundSize: '24px 24px'
                    }}
                  />

                  {/* Render bacteria based on state */}
                  <div className="relative z-10 w-full h-full flex flex-wrap items-center justify-center gap-3">
                    {simulationState === 'untreated' && (
                      <>
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div
                            key={i}
                            className={`w-9 h-4 rounded-full border flex items-center justify-center transition-all duration-300 animate-pulse ${
                              i % 6 === 0
                                ? 'bg-amber-500/20 border-amber-400/80 text-[8px] font-mono text-amber-300'
                                : 'bg-emerald-500/20 border-emerald-400/70 text-[8px] font-mono text-emerald-300'
                            }`}
                          >
                            {i % 6 === 0 ? 'Res' : 'Susc'}
                          </div>
                        ))}
                      </>
                    )}

                    {simulationState === 'conventional' && (
                      <>
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div
                            key={i}
                            className={`transition-all duration-500 ${
                              i % 6 === 0
                                ? 'w-10 h-5 rounded-full bg-rose-500/40 border-2 border-rose-400 flex items-center justify-center text-[9px] font-mono text-rose-200 font-bold shadow-[0_0_12px_rgba(244,63,94,0.6)] animate-bounce'
                                : 'w-6 h-3 rounded-full bg-slate-800/20 border border-slate-800/40 opacity-20 scale-75'
                            }`}
                          >
                            {i % 6 === 0 ? 'RES' : ''}
                          </div>
                        ))}
                      </>
                    )}

                    {simulationState === 'novel' && (
                      <>
                        {Array.from({ length: 18 }).map((_, i) => (
                          <div
                            key={i}
                            className="w-6 h-3 rounded-full bg-slate-900 border border-cyan-500/20 opacity-15 scale-50 transition-all duration-500"
                          />
                        ))}
                        <div className="absolute inset-0 flex flex-col items-center justify-center bg-cyan-950/20 backdrop-blur-[1px]">
                          <CheckCircle2 className="w-10 h-10 text-cyan-400 mb-2 animate-bounce" />
                          <div className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                            TARGETED COLONY CLEARANCE
                          </div>
                          <div className="text-[11px] text-slate-400 font-sans mt-0.5">
                            Phage lysis & AMP membrane rupture overcome efflux & beta-lactamase defenses
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                {/* Simulation Legend & Explanation */}
                <div className="mt-4 text-xs font-mono text-slate-400 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80 inline-block" />
                      Susceptible
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80 inline-block" />
                      Resistant Clone
                    </span>
                  </div>
                  <span className="text-cyan-400">
                    {simulationState === 'untreated' && 'Mixed bacterial community'}
                    {simulationState === 'conventional' && 'Selective survival of resistant strains'}
                    {simulationState === 'novel' && 'Mechanistic bypass of classical resistance'}
                  </span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-800 text-[11px] text-slate-500 font-sans">
                {simulationState === 'untreated' &&
                  'Natural bacterial populations harbor rare spontaneous resistance phenotypes (~1 in 10^7 cells).'}
                {simulationState === 'conventional' &&
                  'Conventional antibiotic kills susceptible flora, leaving resistant mutants to expand into the vacated niche.'}
                {simulationState === 'novel' &&
                  'Novel therapies circumvent enzymatic and efflux resistance by directly degrading physical structures or targeted genomes.'}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
