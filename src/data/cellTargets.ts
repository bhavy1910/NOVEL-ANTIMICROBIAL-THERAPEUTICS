import { CellTarget } from '../types/presentation';

export const CELL_TARGETS: CellTarget[] = [
  {
    id: 'cell-membrane',
    name: 'Cell Membrane',
    markerPosition: { x: 26, y: 35 },
    targetDescription: 'The phospholipid bilayer governing electrochemical gradients, proton-motive force, and selective molecular transport.',
    mechanism: 'Electrostatic binding followed by carpet-like accumulation, toroidal pore formation, or membrane depolarization and cytoplasmic leakage.',
    therapeuticApproach: 'Antimicrobial Peptides (AMPs), Synthetic Peptidomimetics, Lipopeptides (Daptomycin), Membrane-active Cationic Nanoparticles.',
    clinicalSignificance: 'Fundamental physical target difficult for bacteria to alter through simple single-point mutations without compromising baseline viability.',
    color: '#06b6d4' // Cyan
  },
  {
    id: 'cell-wall',
    name: 'Cell Wall (Peptidoglycan & Outer Membrane)',
    markerPosition: { x: 18, y: 55 },
    targetDescription: 'Rigid mesh-like polymer of alternating N-acetylglucosamine (NAG) and N-acetylmuramic acid (NAM) crosslinked by peptide bridges, resisting turgor pressure.',
    mechanism: 'Enzymatic cleavage of glycan backbone or peptide crosslinks via bacteriophage-encoded lysins and holin complexes.',
    therapeuticApproach: 'Bacteriophage Endolysins (Enzybiotics), Engineered Phage Lysins, Artilysins, Specialized Peptidoglycan Hydrolases.',
    clinicalSignificance: 'Rapid bactericidal action within seconds upon external contact, effective even on metabolically dormant persister cells.',
    color: '#3b82f6' // Blue
  },
  {
    id: 'dna-rna',
    name: 'DNA & RNA Genetic Elements',
    markerPosition: { x: 50, y: 52 },
    targetDescription: 'Bacterial circular chromosome and autonomous extrachromosomal resistance plasmids encoding beta-lactamases, efflux systems, and aminoglycoside-modifying enzymes.',
    mechanism: 'Sequence-specific PAM binding followed by targeted endonuclease-mediated double-strand cleavage (Cas9/Cas12) or mRNA cleavage (Cas13), triggering lethal SOS response or plasmid curing.',
    therapeuticApproach: 'CRISPR-Cas Systems delivered via Phagemids, Antisense Oligonucleotides, Engineered Peptide Nucleic Acids (PNAs).',
    clinicalSignificance: 'Enables eradication of specific multi-drug resistance plasmids without killing benign symbiotic microflora, potentially re-sensitizing strains.',
    color: '#8b5cf6' // Violet
  },
  {
    id: 'protein-synthesis',
    name: 'Protein Synthesis & Ribosomal Assembly',
    markerPosition: { x: 62, y: 40 },
    targetDescription: 'Bacterial 70S ribosomes (30S and 50S subunits) responsible for translating mRNA into vital structural and catalytic proteins.',
    mechanism: 'Targeting non-conventional ribosomal sites, riboswitches, or peptide elongation factors; bypassing classical ribosomal mutation sites.',
    therapeuticApproach: 'Novel Non-ribosomal Peptide Synthetase (NRPS) products, Odilorhabdins, Ribosome-targeting Antimicrobial Peptides (e.g., Onc112).',
    clinicalSignificance: 'Overcomes cross-resistance to macrolides, aminoglycosides, and tetracyclines by engaging evolutionary conserved contact pockets.',
    color: '#10b981' // Emerald
  },
  {
    id: 'virulence-factors',
    name: 'Virulence Factors & Secretion Systems',
    markerPosition: { x: 80, y: 62 },
    targetDescription: 'Specialized nanomachine delivery needles (Type III/IV/VI Secretion Systems), pore-forming exotoxins, and quorum-sensing autoinducers.',
    mechanism: 'Inhibition of needle assembly, chemical interception of quorum sensing signal loops (quorum quenching), and antibody neutralization of secreted toxins.',
    therapeuticApproach: 'Anti-Virulence Small Molecules, Monoclonal Antibodies (e.g. against Staphylococcal alpha-toxin), Quorum Quenching Enzymes (AiiA lactonase).',
    clinicalSignificance: 'Neutralizes tissue destruction and immune evasion without killing bacteria directly, exerting near-zero selective pressure for resistant mutants.',
    color: '#f59e0b' // Amber
  },
  {
    id: 'biofilm-formation',
    name: 'Biofilm Matrix & Extracellular Polymeric Substance (EPS)',
    markerPosition: { x: 74, y: 22 },
    targetDescription: 'Structured multicellular community shielded by extracellular DNA (eDNA), polysaccharides, amyloid proteins, and lipids, causing extreme phenotypic tolerance.',
    mechanism: 'Enzymatic dissolution of structural matrix polymers, dispersion signal activation, and synergistic nano-carrier penetration.',
    therapeuticApproach: 'Dispersin B, Recombinant DNase I, Matrix-degrading Bacteriophages (depolymerase-expressing phages), Nitric oxide-releasing nanoparticles.',
    clinicalSignificance: 'Transforms chronically recalcitrant implant, catheter, and cystic fibrosis infections from 1,000-fold antibiotic tolerant back to vulnerable planktonic state.',
    color: '#ec4899' // Rose
  }
];
