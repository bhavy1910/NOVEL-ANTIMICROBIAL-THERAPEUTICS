import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, Lightbulb, Rocket, Heart } from 'lucide-react';

export const Conclusion: React.FC = () => {
  const pillars = [
    {
      title: 'UNDERSTAND',
      subtitle: 'Resistance Biology & Ecology',
      icon: BookOpen,
      text: 'Deepen genomic and biophysical understanding of bacterial evolution, horizontal gene transfer, biofilm physiology, and the intricate metabolic costs of resistance.'
    },
    {
      title: 'INNOVATE',
      subtitle: 'Orthogonal Mechanisms & Delivery',
      icon: Lightbulb,
      text: 'Engineer next-generation therapeutic modalities—engineered phages, synthetic peptidomimetics, CRISPR guide vectors, and targeted anti-virulence nanocarriers.'
    },
    {
      title: 'TRANSLATE',
      subtitle: 'Clinical Rigor & Global Stewardship',
      icon: Rocket,
      text: 'Advance preclinical successes through rigorous randomized human trials, adaptive regulatory pathways, and equitable worldwide antimicrobial stewardship.'
    }
  ];

  return (
    <section id="conclusion" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center mx-auto">
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>SECTION 10</span>
            <span aria-hidden="true">·</span>
            <span>SYNTHESIS & SUMMARY</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            THE NEXT GENERATION OF ANTIMICROBIAL THERAPEUTICS
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Preserving modern medicine requires a three-pillar foundation combining deep biological discovery, engineering innovation, and translational stewardship.
          </p>
        </div>

        {/* Three Large Presentation Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400 mb-6">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="text-xs font-mono text-cyan-400 font-bold mb-1">
                    PILLAR 0{idx + 1}
                  </div>

                  <h3 className="font-display text-2xl font-extrabold text-white tracking-tight mb-2">
                    {pillar.title}
                  </h3>

                  <p className="text-xs font-mono text-slate-400 mb-4">
                    {pillar.subtitle}
                  </p>

                  <p className="text-sm text-slate-300 font-sans leading-relaxed">
                    {pillar.text}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-800 text-[11px] font-mono text-slate-500">
                  Global Action Directive
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Thank You Graphic */}
        <div className="text-center py-12 px-6 rounded-2xl bg-gradient-to-b from-slate-900/50 to-slate-950 border border-slate-800/80 max-w-3xl mx-auto">
          <h3 className="font-display text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight mb-3">
            THANK YOU
          </h3>
          <p className="text-sm sm:text-base text-slate-300 font-light max-w-lg mx-auto">
            Questions, discussions, and technical inquiries are welcomed.
          </p>
        </div>

      </div>
    </section>
  );
};
