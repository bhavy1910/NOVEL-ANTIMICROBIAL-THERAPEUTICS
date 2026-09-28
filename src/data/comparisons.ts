export interface ComparisonRow {
  approach: string;
  primaryTarget: string;
  specificity: string;
  keyChallenge: string;
  resistanceRisk: string;
  clinicalStatus: string;
  highlight?: boolean;
}

export const COMPARISON_DATA: ComparisonRow[] = [
  {
    approach: 'Conventional Antibiotics',
    primaryTarget: 'Cell wall synthesis, 70S ribosome translation, DNA gyrase / topoisomerase',
    specificity: 'Variable (broad to moderate spectrum)',
    keyChallenge: 'Rapid evolution of cross-resistance; destruction of host commensal microbiome',
    resistanceRisk: 'High (intense bactericidal selection pressure; horizontal gene transfer)',
    clinicalStatus: 'Established standard of care (diminishing efficacy against ESKAPE pathogens)'
  },
  {
    approach: 'Phage Therapy',
    primaryTarget: 'Specific bacterial surface receptors, cell envelope & peptidoglycan',
    specificity: 'High in many contexts (strain- or species-specific)',
    keyChallenge: 'Host range limitations; rapid immunological clearance; receptor mutations',
    resistanceRisk: 'Moderate (bacterial receptor loss counterbalanced by phage co-evolution)',
    clinicalStatus: 'Emerging / compassionate clinical use; active Phase I/II trials',
    highlight: true
  },
  {
    approach: 'Antimicrobial Peptides (AMPs)',
    primaryTarget: 'Bacterial phospholipid membranes / intracellular macromolecular targets',
    specificity: 'Variable (electrostatically selective for negative bacterial membranes)',
    keyChallenge: 'Systemic stability, proteolytic cleavage, host cytotoxicity at high doses',
    resistanceRisk: 'Low to Moderate (requires fundamental membrane lipid architecture remodeling)',
    clinicalStatus: 'Emerging (topical/inhaled formulations approved; systemic analogs in pipeline)',
    highlight: true
  },
  {
    approach: 'Anti-Virulence Therapy',
    primaryTarget: 'Bacterial virulence factors, quorum sensing circuits, secretion systems',
    specificity: 'Target-dependent (pathogen or virulence system specific)',
    keyChallenge: 'Translational challenges; reliance on intact host immune clearance',
    resistanceRisk: 'Low (minimal selective pressure on baseline microbial viability)',
    clinicalStatus: 'Emerging (monoclonal anti-toxin antibodies approved; small molecules in trials)',
    highlight: true
  },
  {
    approach: 'CRISPR-Cas Approaches',
    primaryTarget: 'Specific chromosomal resistance loci or extrachromosomal plasmid DNA/RNA',
    specificity: 'Potentially high (single-nucleotide sequence discrimination)',
    keyChallenge: 'In vivo delivery efficiency, vector immunogenicity, off-target regulation',
    resistanceRisk: 'Low to Moderate (PAM/target mutations or anti-CRISPR phage proteins)',
    clinicalStatus: 'Experimental / preclinical conceptual models',
    highlight: true
  },
  {
    approach: 'Nanoparticle Approaches',
    primaryTarget: 'Multimodal (membrane disruption, ROS generation, intracellular binding)',
    specificity: 'Application-dependent (tunable via surface bio-functionalization)',
    keyChallenge: 'Bio-distribution, tissue accumulation, systemic clearance, scalable manufacturing',
    resistanceRisk: 'Very Low (multimodal physical/chemical biocidal mechanisms)',
    clinicalStatus: 'Emerging (topical and liposomal formulations approved; targeted systems preclinical)',
    highlight: true
  }
];
