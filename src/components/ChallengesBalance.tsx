import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Scale, AlertTriangle, CheckCircle2, ShieldAlert, Truck, Sparkles, DollarSign, FileCheck } from 'lucide-react';

export const ChallengesBalance: React.FC = () => {
  const [balanceRatio, setBalanceRatio] = useState<number>(50); // 0 = all challenges, 100 = all promise

  const challengesList = [
    {
      icon: ShieldAlert,
      title: 'Novel Resistance Pathways',
      desc: 'Bacteria co-evolve: shedding phage surface receptors, producing Anti-CRISPR (Acr) proteins, or altering membrane charge to repel AMPs.'
    },
    {
      icon: Truck,
      title: 'In Vivo Delivery Barriers',
      desc: 'Systemic delivery of large biologicals (phages, CRISPR complexes) past the reticuloendothelial system and into deep abscesses remains formidable.'
    },
    {
      icon: AlertTriangle,
      title: 'Serum Stability & Half-Life',
      desc: 'Host serum and bacterial proteases rapidly degrade linear peptides; neutralizing antibodies clear repeated phage doses within hours.'
    },
    {
      icon: DollarSign,
      title: 'Manufacturing & Scalability',
      desc: 'Complex GMP manufacturing, endotoxin purification, cold-chain distribution, and low chemical yield of large cyclic peptides elevate costs.'
    },
    {
      icon: FileCheck,
      title: 'Regulatory & Trial Paradigms',
      desc: 'Current regulatory approval models were designed for fixed small molecules, posing hurdles for evolving phage cocktails and patient-specific vectors.'
    }
  ];

  const promiseList = [
    {
      icon: Sparkles,
      title: 'Activity Against Pan-Resistant Strains',
      desc: 'Efficacy demonstrated against isolates resistant to all 26 FDA-approved systemic antibiotic classes.'
    },
    {
      icon: CheckCircle2,
      title: 'Microbiome-Sparing Precision',
      desc: 'Avoids collateral damage to gut microbiota, reducing secondary opportunistic Clostridioides difficile superinfections.'
    },
    {
      icon: Scale,
      title: 'Anti-Virulence Synergy',
      desc: 'Disarming toxins prevents septic shock and tissue death while allowing the host immune system to execute clearance.'
    }
  ];

  return (
    <section id="challenges" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      {/* Subtle darker atmosphere background */}
      <div className="absolute inset-0 bg-radial-[at_center_center] from-slate-950 via-slate-950/95 to-black pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-amber-400 uppercase tracking-widest mb-3">
            <span>SECTION 08</span>
            <span aria-hidden="true">·</span>
            <span>TRANSLATIONAL REALITY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            THE CHALLENGES & TRANSLATIONAL BALANCE
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Novel antimicrobials are not magical panaceas. Rigorous scientific inquiry acknowledges that microbial counter-adaptation, physiological delivery hurdles, and manufacturing costs create significant translational barriers.
          </p>
        </div>

        {/* Interactive Animated Balance Graphic: PROMISE ↔ CHALLENGE */}
        <div className="mb-14 p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-slate-400">
              <Scale className="w-4 h-4 text-cyan-400" />
              <span>DYNAMIC BALANCE: TRANSLATIONAL MATURITY</span>
            </div>
            
            <div className="text-xs font-mono text-slate-400 flex items-center gap-4">
              <span className="text-rose-400 font-semibold">Hurdles: {100 - balanceRatio}%</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-semibold">Biological Promise: {balanceRatio}%</span>
            </div>
          </div>

          {/* Interactive slider rail */}
          <div className="space-y-2">
            <input
              type="range"
              min="15"
              max="85"
              value={balanceRatio}
              onChange={(e) => setBalanceRatio(Number(e.target.value))}
              className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-cyan-400"
              aria-label="Adjust balance between hurdles and therapeutic promise"
            />
            <div className="flex justify-between text-[11px] font-mono text-slate-500">
              <span>WEIGHT TOWARD CHALLENGES</span>
              <span>EQUILIBRIUM</span>
              <span>WEIGHT TOWARD PROMISE</span>
            </div>
          </div>

          {/* Visual Seesaw / Balance Scale Rendering */}
          <div className="mt-8 flex items-center justify-center py-4">
            <div className="relative w-full max-w-lg flex flex-col items-center">
              {/* Fulcrum base */}
              <div
                className="w-full h-2 bg-gradient-to-r from-rose-500 via-slate-700 to-cyan-500 rounded-full transition-transform duration-300 shadow-md"
                style={{
                  transform: `rotate(${(50 - balanceRatio) * 0.3}deg)`
                }}
              />
              <div className="w-0 h-0 border-x-8 border-x-transparent border-b-16 border-b-slate-600 -mt-1" />
              <div className="w-16 h-2 bg-slate-700 rounded-sm mt-0.5" />
            </div>
          </div>
        </div>

        {/* Two-Column Comparison: Hurdles vs Promise */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Challenges Column */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-rose-400 mb-2">
              <AlertTriangle className="w-4 h-4" />
              <span>CRITICAL BOTTLENECKS TO CLINICAL TRANSLATION</span>
            </div>

            {challengesList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-rose-500/40 transition-colors flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-rose-950/40 border border-rose-800/30 flex items-center justify-center text-rose-400 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-100 text-sm mb-1">
                      {idx + 1}. {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Promise Column */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-cyan-400 mb-2">
              <CheckCircle2 className="w-4 h-4" />
              <span>THE SCIENTIFIC IMPERATIVE TO PURSUE THEM</span>
            </div>

            {promiseList.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-start gap-4"
                >
                  <div className="w-9 h-9 rounded-lg bg-cyan-950/40 border border-cyan-800/30 flex items-center justify-center text-cyan-400 shrink-0 mt-0.5">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-slate-100 text-sm mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            {/* Scientific conclusion box */}
            <div className="p-5 rounded-xl bg-slate-900 border-l-4 border-amber-500 border-y border-r border-slate-800 text-xs text-slate-300 font-sans leading-relaxed">
              <strong className="text-white block font-mono text-[11px] uppercase mb-1">
                Conclusion on Translation:
              </strong>
              Novel therapies are most effectively developed not as standalone replacements for all antibiotics, but as specialized precision tools and combinatorial adjuvants targeting refractory infections.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
