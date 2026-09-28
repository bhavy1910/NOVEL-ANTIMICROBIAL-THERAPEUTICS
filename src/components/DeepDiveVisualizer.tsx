import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Microscope, Layers, Dna, ShieldCheck, ChevronRight, ChevronLeft, Play, RotateCcw } from 'lucide-react';

export const DeepDiveVisualizer: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'phage' | 'amp' | 'crispr' | 'antivirulence'>('phage');
  const [phageStep, setPhageStep] = useState(0);
  const [ampStep, setAmpStep] = useState(0);
  const [crisprStep, setCrisprStep] = useState(0);
  const [virulenceStep, setVirulenceStep] = useState(0);

  // Phage Therapy Sequence (Section 15)
  const phageSteps = [
    {
      title: '1. Bacteriophage',
      summary: 'Specialized lytic virus with icosahedral capsid containing double-stranded DNA genome and contractile tail fibers.',
      detail: 'Bacteriophages are nature\'s precision bacterial predators, evolved to recognize specific bacterial hosts without infecting human cells.'
    },
    {
      title: '2. Recognition',
      summary: 'Tail fibers scan and bind specific outer membrane proteins, lipopolysaccharide (LPS), or teichoic acid motifs.',
      detail: 'High molecular affinity ensures extreme strain specificity, leaving commensal human microflora unharmed.'
    },
    {
      title: '3. Attachment',
      summary: 'Baseplate conformational shift pins the phage irreversibly to the bacterial cell envelope.',
      detail: 'Tail pins engage secondary receptors and trigger conformational collapse of the tail sheath.'
    },
    {
      title: '4. Genetic Material Delivery',
      summary: 'Contractile sheath drives hollow tail tube through outer membrane and peptidoglycan, injecting viral DNA into cytoplasm.',
      detail: 'The empty protein capsid remains outside as a "ghost" while the viral genome enters the bacterial interior.'
    },
    {
      title: '5. Replication Hijacking',
      summary: 'Bacterial RNA polymerase transcribes viral genes; host chromosome is degraded and redirected to produce virion progeny.',
      detail: 'Head capsids, tail sheaths, and baseplates assemble within the cytoplasm; viral DNA is packaged under high pressure.'
    },
    {
      title: '6. Cell Lysis',
      summary: 'Synchronized activation of phage holins and endolysins shatters the peptidoglycan wall, triggering osmotic burst.',
      detail: 'Dozens to hundreds of newborn virions burst into the medium to infect neighboring target bacteria.'
    }
  ];

  // AMP Membrane Disruption Sequence (Section 16)
  const ampSteps = [
    {
      title: '1. Cationic Peptide',
      summary: 'Amphipathic alpha-helical or beta-sheet peptide bearing net positive charges (+2 to +9) from Lysine and Arginine residues.',
      detail: 'Positively charged motifs are naturally electrostatically attracted to negatively charged bacterial outer surfaces.'
    },
    {
      title: '2. Membrane Interaction',
      summary: 'Electrostatic attraction draws peptides to negatively charged phospholipid heads (phosphatidylglycerol and lipid A).',
      detail: 'Peptides align parallel to the outer leaflet surface in the "carpet model", displacing divalent cations (Mg2+, Ca2+).'
    },
    {
      title: '3. Membrane Disruption',
      summary: 'Upon reaching a critical peptide-to-lipid threshold ratio, peptides insert perpendicularly, forming toroidal or barrel-stave pores.',
      detail: 'Rapid collapse of transmembrane electrical potential, dissipation of proton-motive force, and catastrophic leakage of cellular metabolites.'
    }
  ];

  // CRISPR Genetic Targeting Sequence (Section 17)
  const crisprSteps = [
    {
      title: '1. Target DNA',
      summary: 'Bacterial chromosomal resistance loci (e.g. mecA, blaKPC) or autonomous antibiotic resistance plasmids.',
      detail: 'The pathogenic genetic sequence responsible for antibiotic inactivation is identified and cataloged.'
    },
    {
      title: '2. Programmable Guide',
      summary: 'Engineered single-guide RNA (sgRNA) matching a 20-nucleotide target sequence adjacent to a Protospacer Adjacent Motif (PAM).',
      detail: 'Can be rapidly reprogrammed in the laboratory to target newly emerging resistance gene variants.'
    },
    {
      title: '3. Target Recognition',
      summary: 'Cas9/Cas12 ribonucleoprotein unwinds the double helix and performs precision Watson-Crick base-pairing.',
      detail: 'Exact nucleotide matching ensures single-base discrimination, sparing benign non-target sequences.'
    },
    {
      title: '4. Genetic Intervention',
      summary: 'Endonuclease cleaves double-stranded DNA; non-homologous end joining is absent, causing bacterial lethality or plasmid curing.',
      detail: 'Conceptual precision therapeutic strategy currently in preclinical animal model validation.'
    }
  ];

  // Anti-Virulence Sequence
  const virulenceSteps = [
    {
      title: '1. Pathogen Disarmament',
      summary: 'Small-molecule inhibitors target Type III/IV/VI secretion needles and exotoxin assembly machinery.',
      detail: 'Bacteria remain viable but lose the biochemical weaponry needed to breach host epithelial barriers.'
    },
    {
      title: '2. Quorum Quenching',
      summary: 'Enzymes (lactonases) or antagonist molecules intercept autoinducer signals coordinating group virulence attacks.',
      detail: 'Bacterial population remains dispersed in low-density solitary state, suppressing concerted toxin release.'
    },
    {
      title: '3. Biofilm Dismantling',
      summary: 'Enzymatic dissolution of extracellular polymeric substance (EPS) matrix and extracellular DNA (eDNA).',
      detail: 'Recalcitrant biofilms break apart into vulnerable planktonic individual cells.'
    },
    {
      title: '4. Host Immune Clearance',
      summary: 'Disarmed, biofilm-free bacteria are easily engulfed and eliminated by host macrophages and neutrophils.',
      detail: 'Infection is cleared with minimal evolutionary pressure driving drug resistance emergence.'
    }
  ];

  return (
    <section id="visualizer" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>SECTION 05</span>
            <span aria-hidden="true">·</span>
            <span>MECHANISTIC SEQUENCING</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            DEEP-DIVE MOLECULAR MECHANISMS
          </h2>
          <p className="text-base text-slate-300 font-normal leading-relaxed">
            Step through verified laboratory visual sequences demonstrating how phages lyse hosts, peptides perforate lipid membranes, CRISPR cleaves resistance loci, and anti-virulence disarms pathogens.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2 p-1.5 bg-slate-900 border border-slate-800 rounded-xl mb-8 max-w-2xl">
          <button
            onClick={() => setActiveTab('phage')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 focus:outline-none ${
              activeTab === 'phage'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Microscope className="w-4 h-4" />
            <span>Phage Therapy</span>
          </button>

          <button
            onClick={() => setActiveTab('amp')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 focus:outline-none ${
              activeTab === 'amp'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Layers className="w-4 h-4" />
            <span>Antimicrobial Peptides</span>
          </button>

          <button
            onClick={() => setActiveTab('crispr')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 focus:outline-none ${
              activeTab === 'crispr'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <Dna className="w-4 h-4" />
            <span>CRISPR-Cas Targeting</span>
          </button>

          <button
            onClick={() => setActiveTab('antivirulence')}
            className={`flex-1 min-w-[140px] py-2.5 px-3 rounded-lg text-xs font-mono transition-all flex items-center justify-center gap-2 focus:outline-none ${
              activeTab === 'antivirulence'
                ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                : 'text-slate-400 hover:text-white hover:bg-slate-800'
            }`}
          >
            <ShieldCheck className="w-4 h-4" />
            <span>Anti-Virulence</span>
          </button>
        </div>

        {/* Tab 1: Phage Therapy */}
        {activeTab === 'phage' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            
            {/* Left: Scientific Visualizer Card */}
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl mb-4 group">
                <img
                  src="/src/assets/images/phage_therapy_bacterium_1790617581929.jpg"
                  alt="Phage Therapy Lytic Action"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  STEP {phageStep + 1} OF {phageSteps.length}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-slate-200">
                  {phageSteps[phageStep].title}
                </div>
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setPhageStep((prev) => Math.max(0, prev - 1))}
                  disabled={phageStep === 0}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-800 disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>PREVIOUS</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {phageSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPhageStep(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        phageStep === i ? 'w-6 bg-cyan-400' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to step ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setPhageStep((prev) => Math.min(phageSteps.length - 1, prev + 1))}
                  disabled={phageStep === phageSteps.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 disabled:opacity-30 disabled:hover:bg-cyan-500/20 transition-colors"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Step Details & Biological Flow */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  LYTIC CASCADE PROGRESSION
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {phageSteps[phageStep].title}
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {phageSteps[phageStep].summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-6">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    BIOPHYSICAL DETAIL
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {phageSteps[phageStep].detail}
                  </p>
                </div>

                {/* Overall Step Path Indicator */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-[11px] font-mono">
                  {phageSteps.map((s, idx) => (
                    <button
                      key={s.title}
                      onClick={() => setPhageStep(idx)}
                      className={`p-2 rounded-lg border text-left truncate transition-colors ${
                        phageStep === idx
                          ? 'bg-cyan-950/60 border-cyan-400 text-cyan-300 font-semibold'
                          : 'bg-slate-950/40 border-slate-800 text-slate-400 hover:text-white'
                      }`}
                    >
                      {s.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>Biological Modality: Lytic Bacteriophage</span>
                <span>Cell-Autonomous Replicating Entity</span>
              </div>
            </div>

          </div>
        )}

        {/* Tab 2: Antimicrobial Peptides */}
        {activeTab === 'amp' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl mb-4 group">
                <img
                  src="/src/assets/images/antimicrobial_peptides_membrane_1790617598806.jpg"
                  alt="Antimicrobial Peptide Membrane Disruption"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  STAGE {ampStep + 1} OF {ampSteps.length}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-slate-200">
                  {ampSteps[ampStep].title}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setAmpStep((prev) => Math.max(0, prev - 1))}
                  disabled={ampStep === 0}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-800 disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>PREV</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {ampSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setAmpStep(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        ampStep === i ? 'w-6 bg-cyan-400' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to stage ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setAmpStep((prev) => Math.min(ampSteps.length - 1, prev + 1))}
                  disabled={ampStep === ampSteps.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 disabled:opacity-30 transition-colors"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  MEMBRANE DISRUPTION MECHANISM
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {ampSteps[ampStep].title}
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {ampSteps[ampStep].summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-6">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    PHYSICAL BIOCHEMISTRY
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {ampSteps[ampStep].detail}
                  </p>
                </div>

                {/* Pore Models Comparison */}
                <div className="grid grid-cols-3 gap-2 text-xs font-mono text-center">
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-cyan-400 font-bold block">Barrel-Stave</span>
                    <span className="text-[10px] text-slate-500">Staves form bundle pore</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-cyan-400 font-bold block">Toroidal Pore</span>
                    <span className="text-[10px] text-slate-500">Lipids bend into pore</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                    <span className="text-cyan-400 font-bold block">Carpet Model</span>
                    <span className="text-[10px] text-slate-500">Detergent-like micellization</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>Target: Bacterial Phospholipid Bilayer</span>
                <span>Selectivity: Anionic Charge Affinity</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: CRISPR-Cas Targeting */}
        {activeTab === 'crispr' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl mb-4 group">
                <img
                  src="/src/assets/images/crispr_cas_dna_cleavage_1790617612599.jpg"
                  alt="CRISPR Cas9 DNA Cleavage"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  PHASE {crisprStep + 1} OF {crisprSteps.length}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-slate-200">
                  {crisprSteps[crisprStep].title}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setCrisprStep((prev) => Math.max(0, prev - 1))}
                  disabled={crisprStep === 0}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-800 disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>PREV</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {crisprSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCrisprStep(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        crisprStep === i ? 'w-6 bg-cyan-400' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to stage ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setCrisprStep((prev) => Math.min(crisprSteps.length - 1, prev + 1))}
                  disabled={crisprStep === crisprSteps.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 disabled:opacity-30 transition-colors"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  PROGRAMMABLE NUCLEOTIDE TARGETING
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {crisprSteps[crisprStep].title}
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {crisprSteps[crisprStep].summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-6">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    GENOMIC MECHANICS
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {crisprSteps[crisprStep].detail}
                  </p>
                </div>

                {/* Conceptual Notice Box (Mandatory scientific discipline) */}
                <div className="p-3 rounded-lg bg-amber-950/20 border border-amber-600/40 text-[11px] text-amber-200/90 font-mono">
                  NOTICE: CRISPR-based antimicrobials currently represent an experimental, conceptual therapeutic strategy primarily in preclinical animal models.
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>Modality: Sequence-Specific Endonuclease</span>
                <span>Delivery: Phagemids / Lipid Nanoparticles</span>
              </div>
            </div>
          </div>
        )}

        {/* Tab 4: Anti-Virulence */}
        {activeTab === 'antivirulence' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-slate-900/60 border border-slate-800 rounded-2xl p-6 sm:p-8">
            <div className="lg:col-span-6 flex flex-col justify-between">
              <div className="relative aspect-video rounded-xl overflow-hidden border border-slate-800 bg-slate-950 shadow-xl mb-4 group">
                <img
                  src="/src/assets/images/antivirulence_biofilm_matrix_1790617629677.jpg"
                  alt="Anti-Virulence Biofilm Degradation"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
                  STEP {virulenceStep + 1} OF {virulenceSteps.length}
                </div>

                <div className="absolute bottom-3 left-3 right-3 text-xs font-mono text-slate-200">
                  {virulenceSteps[virulenceStep].title}
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between pt-2">
                <button
                  onClick={() => setVirulenceStep((prev) => Math.max(0, prev - 1))}
                  disabled={virulenceStep === 0}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg border border-slate-800 text-xs font-mono text-slate-300 hover:bg-slate-800 disabled:opacity-30 transition-colors"
                >
                  <ChevronLeft className="w-3.5 h-3.5" />
                  <span>PREV</span>
                </button>

                <div className="flex items-center gap-1.5">
                  {virulenceSteps.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setVirulenceStep(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        virulenceStep === i ? 'w-6 bg-cyan-400' : 'bg-slate-700 hover:bg-slate-500'
                      }`}
                      aria-label={`Jump to stage ${i + 1}`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setVirulenceStep((prev) => Math.min(virulenceSteps.length - 1, prev + 1))}
                  disabled={virulenceStep === virulenceSteps.length - 1}
                  className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-cyan-500/20 border border-cyan-500/40 text-xs font-mono text-cyan-300 hover:bg-cyan-500/30 disabled:opacity-30 transition-colors"
                >
                  <span>NEXT</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
              <div>
                <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-2">
                  PATHOGENICITY SUPPRESSION
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">
                  {virulenceSteps[virulenceStep].title}
                </h3>
                <p className="text-sm text-slate-300 font-sans leading-relaxed mb-6">
                  {virulenceSteps[virulenceStep].summary}
                </p>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800/80 mb-6">
                  <span className="text-[11px] font-mono uppercase text-slate-400 block mb-1">
                    IMMUNOBIOLOGICAL DYNAMICS
                  </span>
                  <p className="text-xs text-slate-300 font-sans leading-relaxed">
                    {virulenceSteps[virulenceStep].detail}
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-600/40 text-[11px] text-emerald-200/90 font-mono">
                  BENEFIT: Does not exert bactericidal growth selection pressure, radically lowering the mathematical likelihood of resistance mutations.
                </div>
              </div>

              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-800 flex items-center justify-between">
                <span>Targets: T3SS needles, Quorum autoinducers, Biofilms</span>
                <span>Immune Synergy: Macrophage & Neutrophil Clearance</span>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
