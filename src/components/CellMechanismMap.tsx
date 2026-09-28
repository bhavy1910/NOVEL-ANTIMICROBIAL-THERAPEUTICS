import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CELL_TARGETS } from '../data/cellTargets';
import { CellTarget } from '../types/presentation';
import { Crosshair, Shield, Activity, Target, Zap } from 'lucide-react';

export const CellMechanismMap: React.FC = () => {
  const [selectedTarget, setSelectedTarget] = useState<CellTarget>(CELL_TARGETS[0]);

  return (
    <section id="mechanisms" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>SECTION 04</span>
            <span aria-hidden="true">·</span>
            <span>SUBCELLULAR TOPOLOGY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            WHERE DO NOVEL THERAPIES ACT?
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Select subcellular bacterial structures below to explore their physiological role, molecular mechanisms of action, and novel therapeutic interventions.
          </p>
        </div>

        {/* Interactive Workspace Console */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Center: Interactive Stylized Bacterial Cell Stage */}
          <div className="lg:col-span-7 bg-slate-900/70 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            
            {/* Top Bar HUD */}
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-slate-800 text-xs font-mono text-slate-400">
              <div className="flex items-center gap-2">
                <Crosshair className="w-4 h-4 text-cyan-400 animate-spin" style={{ animationDuration: '10s' }} />
                <span>BACTERIAL CROSS-SECTION (BACILLUS SCHEMATIC)</span>
              </div>
              <span className="text-cyan-400 font-semibold">CLICK TARGET SITES</span>
            </div>

            {/* Stylized SVG Cell Canvas */}
            <div className="relative w-full aspect-[16/10] bg-slate-950/90 rounded-xl border border-slate-800/80 overflow-hidden flex items-center justify-center">
              
              {/* Scientific Grid lines */}
              <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cell-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                    <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#38bdf8" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cell-grid)" />
              </svg>

              {/* Bacterial Cell Anatomy SVG */}
              <svg
                viewBox="0 0 800 500"
                className="w-full h-full max-h-[460px] select-none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  {/* Gradients */}
                  <linearGradient id="cellBodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#0f172a" />
                    <stop offset="50%" stopColor="#1e293b" />
                    <stop offset="100%" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="wallGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0284c7" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#0369a1" stopOpacity="0.8" />
                  </linearGradient>
                  <filter id="cyanGlow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                </defs>

                {/* 1. Biofilm Extracellular Polymeric Substance (EPS Matrix) Cloud */}
                <path
                  d="M 120 180 Q 200 60 400 70 Q 620 60 700 170 Q 760 250 720 340 Q 640 440 400 430 Q 180 440 100 350 Q 60 250 120 180 Z"
                  fill="#ec4899"
                  fillOpacity={selectedTarget.id === 'biofilm-formation' ? '0.2' : '0.06'}
                  stroke="#ec4899"
                  strokeWidth={selectedTarget.id === 'biofilm-formation' ? '3' : '1'}
                  strokeDasharray="6 6"
                  className="transition-all duration-300"
                />

                {/* 2. Outer Capsule / LPS Layer */}
                <rect
                  x="170"
                  y="130"
                  width="460"
                  height="240"
                  rx="120"
                  fill="none"
                  stroke="#38bdf8"
                  strokeWidth="3"
                  strokeOpacity={selectedTarget.id === 'cell-wall' ? '1' : '0.4'}
                  filter={selectedTarget.id === 'cell-wall' ? 'url(#cyanGlow)' : undefined}
                />

                {/* 3. Peptidoglycan Cell Wall Mesh */}
                <rect
                  x="185"
                  y="145"
                  width="430"
                  height="210"
                  rx="105"
                  fill="none"
                  stroke="#0284c7"
                  strokeWidth="5"
                  strokeDasharray="8 4"
                  strokeOpacity={selectedTarget.id === 'cell-wall' ? '1' : '0.6'}
                />

                {/* 4. Cytoplasmic Cell Membrane */}
                <rect
                  x="198"
                  y="158"
                  width="404"
                  height="184"
                  rx="92"
                  fill="url(#cellBodyGrad)"
                  stroke="#06b6d4"
                  strokeWidth={selectedTarget.id === 'cell-membrane' ? '5' : '3'}
                  filter={selectedTarget.id === 'cell-membrane' ? 'url(#cyanGlow)' : undefined}
                />

                {/* 5. Intracellular Cytoplasm Organelles & Ribosomes */}
                {/* Ribosomes (Green dots) */}
                <g opacity={selectedTarget.id === 'protein-synthesis' ? '1' : '0.6'}>
                  {[
                    [250, 200], [280, 240], [260, 290], [330, 190], [360, 310],
                    [440, 190], [480, 310], [530, 220], [540, 280], [390, 200]
                  ].map(([rx, ry], idx) => (
                    <circle
                      key={idx}
                      cx={rx}
                      cy={ry}
                      r={selectedTarget.id === 'protein-synthesis' ? '6' : '4'}
                      fill="#10b981"
                      className="transition-all duration-300"
                    />
                  ))}
                </g>

                {/* 6. Bacterial Chromosome / DNA / Plasmids (Violet helical loops) */}
                <g
                  opacity={selectedTarget.id === 'dna-rna' ? '1' : '0.6'}
                  filter={selectedTarget.id === 'dna-rna' ? 'url(#cyanGlow)' : undefined}
                >
                  <path
                    d="M 310 250 Q 350 200 400 250 T 490 250 T 400 290 T 320 250"
                    fill="none"
                    stroke="#8b5cf6"
                    strokeWidth={selectedTarget.id === 'dna-rna' ? '6' : '4'}
                  />
                  <path
                    d="M 330 260 Q 370 290 420 240 T 470 270"
                    fill="none"
                    stroke="#c084fc"
                    strokeWidth={selectedTarget.id === 'dna-rna' ? '4' : '2'}
                  />
                  {/* Extrachromosomal Plasmid Ring */}
                  <circle
                    cx="480"
                    cy="210"
                    r={selectedTarget.id === 'dna-rna' ? '18' : '14'}
                    fill="none"
                    stroke="#a855f7"
                    strokeWidth="3"
                    strokeDasharray="4 2"
                  />
                </g>

                {/* 7. Virulence Factor: Type III Secretion Needle Complex */}
                <g
                  transform="translate(620, 240)"
                  opacity={selectedTarget.id === 'virulence-factors' ? '1' : '0.6'}
                >
                  {/* Basal body */}
                  <rect x="0" y="-12" width="16" height="24" rx="3" fill="#f59e0b" />
                  {/* Needle rod */}
                  <rect x="16" y="-4" width="40" height="8" rx="2" fill="#d97706" />
                  {/* Secreted toxin droplets */}
                  <circle cx="68" cy="-6" r="4" fill="#fbbf24" />
                  <circle cx="78" cy="8" r="5" fill="#f59e0b" />
                  <circle cx="92" cy="-2" r="3" fill="#fbbf24" />
                </g>

                {/* 8. Bacteriophage landing on outer cell wall (Phage Therapy action visual) */}
                <g transform="translate(240, 95) scale(0.65)" opacity="0.85">
                  {/* Icosahedral Phage Head */}
                  <polygon points="50,10 80,30 80,65 50,85 20,65 20,30" fill="#38bdf8" stroke="#0284c7" strokeWidth="2" />
                  {/* Sheath */}
                  <rect x="46" y="85" width="8" height="30" fill="#0369a1" />
                  {/* Baseplate & fibers */}
                  <line x1="50" y1="115" x2="30" y2="135" stroke="#38bdf8" strokeWidth="3" />
                  <line x1="50" y1="115" x2="70" y2="135" stroke="#38bdf8" strokeWidth="3" />
                </g>

                {/* 9. Interactive Hotspot Markers (Selectable Targets) */}
                {CELL_TARGETS.map((target) => {
                  const isSelected = selectedTarget.id === target.id;
                  // Map percentage coordinates into 800x500 viewBox
                  const cx = (target.markerPosition.x / 100) * 800;
                  const cy = (target.markerPosition.y / 100) * 500;

                  return (
                    <g
                      key={target.id}
                      onClick={() => setSelectedTarget(target)}
                      className="cursor-pointer group"
                    >
                      {/* Pulsing ring */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? '20' : '14'}
                        fill={target.color}
                        fillOpacity={isSelected ? '0.4' : '0.2'}
                        stroke={target.color}
                        strokeWidth={isSelected ? '3' : '1.5'}
                        className={isSelected ? 'animate-ping' : 'group-hover:opacity-100'}
                      />
                      {/* Core anchor dot */}
                      <circle
                        cx={cx}
                        cy={cy}
                        r={isSelected ? '9' : '6'}
                        fill={target.color}
                        stroke="#ffffff"
                        strokeWidth="2"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Target Quick Tag Legend on Stage */}
              <div className="absolute bottom-3 left-3 flex flex-wrap gap-2 text-[10px] font-mono pointer-events-none">
                <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-700 text-slate-300">
                  Active Focus: <strong className="text-cyan-400">{selectedTarget.name}</strong>
                </span>
              </div>
            </div>

            {/* Target Selectors Ribbon */}
            <div className="mt-4 pt-4 border-t border-slate-800 grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs font-mono">
              {CELL_TARGETS.map((target) => {
                const isSelected = selectedTarget.id === target.id;
                return (
                  <button
                    key={target.id}
                    onClick={() => setSelectedTarget(target)}
                    className={`py-2 px-3 rounded-lg border text-left transition-all flex items-center gap-2 focus:outline-none focus-visible:ring-1 focus-visible:ring-cyan-400 ${
                      isSelected
                        ? 'bg-slate-800 border-cyan-400 text-white font-semibold shadow-md'
                        : 'bg-slate-950/60 border-slate-800/80 text-slate-400 hover:text-white hover:border-slate-700'
                    }`}
                  >
                    <span
                      className="w-2.5 h-2.5 rounded-full shrink-0"
                      style={{ backgroundColor: target.color }}
                    />
                    <span className="truncate">{target.name.split(' ')[0]}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right: Technical Inspector Console */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div>
              {/* Target Header */}
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-4 h-4 rounded-full shadow-[0_0_10px_currentColor]"
                    style={{ backgroundColor: selectedTarget.color, color: selectedTarget.color }}
                  />
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                    TARGET INSPECTOR
                  </span>
                </div>
                <span className="text-xs font-mono text-cyan-400">ACTIVE SELECTION</span>
              </div>

              {/* Target Name */}
              <h3 className="font-display text-2xl font-bold text-white mb-2">
                {selectedTarget.name}
              </h3>
              <p className="text-xs text-slate-300 font-sans leading-relaxed mb-6">
                {selectedTarget.targetDescription}
              </p>

              {/* Data Blocks */}
              <div className="space-y-4">
                
                {/* 1. Mechanism of Action */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-1.5">
                    <Activity className="w-3.5 h-3.5" />
                    <span>MECHANISM</span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {selectedTarget.mechanism}
                  </p>
                </div>

                {/* 2. Therapeutic Approach */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-1.5">
                    <Zap className="w-3.5 h-3.5" />
                    <span>THERAPEUTIC APPROACH</span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {selectedTarget.therapeuticApproach}
                  </p>
                </div>

                {/* 3. Clinical Significance */}
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-wider mb-1.5">
                    <Shield className="w-3.5 h-3.5" />
                    <span>CLINICAL RELEVANCE TO AMR</span>
                  </div>
                  <p className="text-xs text-slate-200 font-sans leading-relaxed">
                    {selectedTarget.clinicalSignificance}
                  </p>
                </div>

              </div>
            </div>

            {/* Footer Summary note */}
            <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500">
              <span>Bacterial Target Domain</span>
              <span>Single-cell Resolution</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
