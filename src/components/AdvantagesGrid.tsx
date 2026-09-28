import React from 'react';
import { motion } from 'motion/react';
import { Target, Compass, RefreshCw, Sliders, GitMerge } from 'lucide-react';

export const AdvantagesGrid: React.FC = () => {
  const advantages = [
    {
      icon: Target,
      title: 'Pathogen Specificity',
      subtitle: 'Microbiome Preservation',
      description:
        'Therapeutic phages and sequence-specific CRISPR vectors target precise bacterial species or virulence genes, sparing the commensal human gut and skin microflora from devastating dysbiosis.'
    },
    {
      icon: Compass,
      title: 'Expanded Target Landscape',
      subtitle: 'Beyond Classic Bacterial Enzymes',
      description:
        'Novel approaches interrogate entirely new structural surfaces—bacterial outer membrane charges, extracellular biofilm matrices, secretion needle basals, and extrachromosomal plasmids.'
    },
    {
      icon: RefreshCw,
      title: 'Alternative Mechanisms',
      subtitle: 'Overcoming Existing Cross-Resistance',
      description:
        'Because mechanisms like mechanical pore formation or enzymatic cell-wall lysis operate orthogonally to ribosomally-targeted antibiotics, they remain potent against pan-drug-resistant ESKAPE isolates.'
    },
    {
      icon: Sliders,
      title: 'Precision Personalization',
      subtitle: 'Patient-Specific Matching',
      description:
        'Rapid genomic sequencing enables the compounding of bespoke bacteriophage cocktails and custom guide RNAs matched directly to an individual patient\'s isolate.'
    },
    {
      icon: GitMerge,
      title: 'Combinatorial Synergy',
      subtitle: 'Adjuvant & Resensitizing Potency',
      description:
        'Sub-inhibitory concentrations of membrane-active peptides or phages disrupt bacterial envelopes, facilitating enhanced intracellular penetration of conventional antibiotics and resensitizing resistant strains.'
    }
  ];

  return (
    <section id="advantages" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>SECTION 07</span>
            <span aria-hidden="true">·</span>
            <span>STRATEGIC VALUE</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            WHY NOVEL APPROACHES?
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            By shifting away from broad-spectrum growth inhibition toward orthogonal, biophysically targeted mechanisms, novel therapeutics offer distinct clinical and biological advantages.
          </p>
        </div>

        {/* 5 Distinctive Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 sm:p-7 rounded-xl bg-slate-900/50 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 ${
                  idx === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                }`}
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-cyan-950/50 border border-cyan-500/20 flex items-center justify-center text-cyan-400 mb-5">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-slate-100 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400 mb-3">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-slate-800/80 text-[10px] font-mono text-slate-500 flex items-center justify-between">
                  <span>Advantage Factor 0{idx + 1}</span>
                  <span className="text-emerald-400 font-medium">Investigational Benefit</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Scientifically Cautious Footnote Banner */}
        <div className="mt-10 p-4 rounded-xl bg-slate-900/40 border border-slate-800 text-xs font-mono text-slate-400 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <span>SCIENTIFIC CAVEAT: Advantages represent observed in vitro and preclinical properties requiring rigorous randomized clinical trial validation.</span>
          <span className="text-cyan-400 whitespace-nowrap">Evidence-Based Framing</span>
        </div>

      </div>
    </section>
  );
};
