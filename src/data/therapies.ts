import { TherapyItem } from '../types/presentation';

export const NOVEL_THERAPIES: TherapyItem[] = [
  {
    id: 'phage-therapy',
    name: 'Phage Therapy',
    subtitle: 'Bacteriophage-Mediated Targeted Lysis',
    tagline: 'Targeted bacteriophages infect and destroy susceptible bacterial cells through lytic cycles.',
    category: 'Emerging',
    primaryTarget: 'Specific bacterial surface receptors, cell wall & envelope',
    specificity: 'High (strain- or species-specific)',
    keyChallenge: 'Narrow host range, rapid phage clearance, bacterial receptor mutations',
    mechanismSummary: 'Bacteriophages bind surface receptors, inject their genetic payload, hijack bacterial machinery to produce virions, and lyse the host cell wall via endolysins and holins.',
    detailedMechanism: [
      'Tail fiber recognition of outer membrane proteins or lipopolysaccharide (LPS) motifs.',
      'Conformational contraction and genetic material injection into host cytoplasm.',
      'Suppression of host transcription and transcriptional redirection toward viral replication.',
      'Assembly of progeny capsids, tail fibers, and DNA packaging.',
      'Synchronized holin membrane permeabilization and endolysin peptidoglycan degradation triggering explosive cell lysis.'
    ],
    potentialAdvantages: [
      'Bactericidal against multidrug-resistant (MDR) and extensively drug-resistant (XDR) strains.',
      'Sparing of beneficial commensal human microflora due to high target specificity.',
      'Auto-dosing capability: phages replicate locally as long as susceptible bacterial hosts are present.',
      'Low intrinsic toxicity profile toward eukaryotic human cells.'
    ],
    keyChallenges: [
      'Bacterial resistance through receptor loss, CRISPR immunity, or restriction-modification systems.',
      'Host immune neutralization (neutralizing antibodies) and rapid hepatic/splenic clearance.',
      'Requirement for rapid pathogen identification and personalized phage cocktail matching.',
      'Complex regulatory frameworks for biological, evolving medicinal entities.'
    ],
    researchStatus: 'Under active compassionate-use protocols and phase I/II randomized clinical trials globally; established in select Eastern European centers.',
    image: '/src/assets/images/phage_therapy_bacterium_1790617581929.jpg'
  },
  {
    id: 'antimicrobial-peptides',
    name: 'Antimicrobial Peptides',
    subtitle: 'Membrane-Active Amphipathic Cationic Effectors',
    tagline: 'Host-defense peptides interact electrostatically with anionic microbial membranes to induce physical pore formation.',
    category: 'Emerging',
    primaryTarget: 'Bacterial phospholipid bilayer (phosphatidylglycerol, cardiolipin, lipid A)',
    specificity: 'Moderate to Broad (selectivity driven by negative membrane charge)',
    keyChallenge: 'Systemic cytotoxicity (hemolysis), protease instability, high production cost',
    mechanismSummary: 'Cationic amphipathic peptide chains bind negatively charged bacterial outer leaflets, accumulate past a threshold concentration, and insert perpendicularly to disrupt membrane integrity via toroidal or barrel-stave pores.',
    detailedMechanism: [
      'Electrostatic attraction between cationic peptide domains (+Arg, +Lys) and anionic bacterial lipids (PG, CL).',
      'Surface parallel orientation ("carpet model") leading to membrane thinning and surface strain.',
      'Critical threshold transition: perpendicular insertion into lipid core.',
      'Formation of toroidal or barrel-stave pores causing immediate loss of transmembrane proton-motive force.',
      'Efflux of essential cytoplasmic ions (K+, ATP) followed by osmotic collapse or intracellular target inhibition.'
    ],
    potentialAdvantages: [
      'Rapid bactericidal kinetics (often within minutes of exposure).',
      'Significantly lower propensity for resistance emergence due to fundamental physical disruption of lipid bilayer.',
      'Synergistic activity when co-administered with conventional antibiotics (improving drug penetration).',
      'Additional immunomodulatory and endotoxin-neutralizing capabilities.'
    ],
    keyChallenges: [
      'Rapid enzymatic proteolytic degradation by serum and bacterial proteases (e.g. aureolysin).',
      'Systemic toxicity, nephrotoxicity, and red blood cell lysis at elevated therapeutic concentrations.',
      'High chemical synthesis costs for complex linear and cyclic peptide sequences.',
      'Reduced efficacy in high salt/physiological serum ionic strength conditions.'
    ],
    researchStatus: 'Multiple topical formulations approved (e.g., polymyxins, daptomycin, gramicidin); engineered synthetic peptides and peptidomimetics in preclinical and phase II trials.',
    image: '/src/assets/images/antimicrobial_peptides_membrane_1790617598806.jpg'
  },
  {
    id: 'crispr-approaches',
    name: 'CRISPR-Cas Approaches',
    subtitle: 'Sequence-Specific Precision Genomic Elimination',
    tagline: 'Programmable genetic targeting cleaves chromosomal DNA or eliminates resistance plasmids within specific pathogens.',
    category: 'Experimental',
    primaryTarget: 'Bacterial chromosomal resistance genes, virulence loci, or plasmid replicons',
    specificity: 'Extremely High (nucleotide sequence-dependent single-base discrimination)',
    keyChallenge: 'In vivo delivery vehicles (phagemids/nanoparticles), off-target risk, delivery efficiency',
    mechanismSummary: 'Engineered Cas endonucleases (Cas9, Cas12, Cas13) guided by single-guide RNAs identify specific antibiotic resistance determinants and execute targeted double-strand breaks, triggering bacterial death or plasmid curing.',
    detailedMechanism: [
      'Packaging of CRISPR-Cas expression cassettes into engineered phage capsids or synthetic lipid nanoparticles.',
      'Transduction into target bacterial cells without killing innocent commensals.',
      'Transcription of guide RNA and assembly of ribonucleoprotein (RNP) complex.',
      'Sequence search, PAM recognition, and Watson-Crick base-pairing with resistance loci (e.g., blaNDM-1, vanA, mecA).',
      'Endonucleolytic cleavage creating non-repairable double-strand breaks that kill the bacterium or eliminate the resistance plasmid.'
    ],
    potentialAdvantages: [
      'Unprecedented sequence-level precision without collateral microbiome depletion.',
      'Direct eradication of horizontal gene transfer vehicles (plasmid curing).',
      'Programmable versatility: can be retargeted to emerging resistance variants by updating 20-nucleotide guide sequence.',
      'Potential to resensitize previously resistant pathogen populations to classical antibiotics.'
    ],
    keyChallenges: [
      'Delivery bottlenecks: achieving high transduction efficiency throughout dense infection foci and biofilms.',
      'Bacterial anti-CRISPR (Acr) proteins capable of blocking Cas nuclease activity.',
      'Potential evolutionary escape through single-nucleotide point mutations in target or PAM sites.',
      'Complex regulatory landscape for live genetic modification vectors in human clinical therapy.'
    ],
    researchStatus: 'Preclinical in vitro and in vivo animal models; phagemid-delivered Cas systems undergoing early proof-of-concept investigations.',
    image: '/src/assets/images/crispr_cas_dna_cleavage_1790617612599.jpg'
  },
  {
    id: 'anti-virulence-therapy',
    name: 'Anti-Virulence Therapy',
    subtitle: 'Disarming Pathogenicity Without Direct Growth Selection',
    tagline: 'Targets mechanisms that contribute to pathogenicity rather than relying solely on bacterial killing.',
    category: 'Emerging',
    primaryTarget: 'Quorum sensing networks, Type III/IV/VI secretion needles, exotoxins, adhesins',
    specificity: 'Target-dependent (pathogen or virulence system specific)',
    keyChallenge: 'Translational validation, requirement for intact host immunity, disease-specific timing',
    mechanismSummary: 'Compounds disarm bacterial weapons (neutralizing pore-forming toxins, dismantling secretion systems, or quenching quorum communication), allowing the host immune system to clear the non-lethal pathogen without exerting intense survival selection pressure.',
    detailedMechanism: [
      'Small molecule inhibition of quorum sensing autoinducer synthases (e.g. LuxI homologs) or receptor binding (LuxR).',
      'Blockade of syringe-like secretion apparatus (Type III Secretion System) preventing effector toxin injection.',
      'Neutralization of secreted exotoxins (e.g., alpha-hemolysin, leukocidins) via monoclonal antibodies or nanobodies.',
      'Enzymatic degradation of extracellular polymeric substance (EPS) matrix and extracellular DNA (eDNA) in biofilms.',
      'Host macrophage and neutrophil clearance of exposed, non-toxic bacteria.'
    ],
    potentialAdvantages: [
      'Significantly reduced selective pressure for resistance development compared to traditional bactericidal agents.',
      'Preservation of the host commensal microbiome.',
      'Prevention of severe tissue necrosis and septic shock by intercepting toxin cascades before damage occurs.',
      'High potential for combinatorial synergy with low-dose conventional antibiotics.'
    ],
    keyChallenges: [
      'Incapable of eliminating pathogens independently in immunocompromised or neutropenic patients.',
      'High pathogen specificity requires rapid, definitive diagnostic confirmation before initiation.',
      'Clinical trial endpoints differ fundamentally from standard bactericidal clearing assays.',
      'Timing sensitivity: treatments must often be administered early before irreversible toxin-mediated tissue destruction.'
    ],
    researchStatus: 'Monoclonal anti-toxin antibodies (e.g., bezlotoxumab, obiltoxaximab) approved; quorum sensing and secretion inhibitors in late preclinical & phase I/II trials.',
    image: '/src/assets/images/antivirulence_biofilm_matrix_1790617629677.jpg'
  },
  {
    id: 'nanoparticle-approaches',
    name: 'Nanoparticle Approaches',
    subtitle: 'Engineered Nano-Architecture & Targeted Biocides',
    tagline: 'Engineered nanoparticles investigated for intrinsic antimicrobial activity or targeted therapeutic delivery.',
    category: 'Emerging',
    primaryTarget: 'Multimodal: bacterial envelope, intracellular enzymes, biofilm barriers',
    specificity: 'Application-dependent (functionalized ligands confer targeting)',
    keyChallenge: 'Long-term tissue accumulation, bio-clearance, potential mammalian cytotoxicity',
    mechanismSummary: 'Engineered metallic (Ag, Au, ZnO), lipid, or polymeric nanoparticles penetrate dense biofilm matrices, generate localized reactive oxygen species (ROS), disrupt membrane potential, and deliver concentrated drug payloads directly to infection sites.',
    detailedMechanism: [
      'Surface functionalization with targeting ligands (sugars, aptamers, peptides) for selective bacterial affinity.',
      'Deep penetration through negatively charged polysaccharide channels in mature biofilms.',
      'Generation of localized reactive oxygen species (ROS) inducing oxidative stress on bacterial enzymes.',
      'Direct physical interaction and membrane depolarization.',
      'Triggered stimuli-responsive release (pH-dependent, enzyme-triggered) of encapsulated therapeutic agents.'
    ],
    potentialAdvantages: [
      'Unsurpassed ability to penetrate physical barriers and stubborn biofilm matrices.',
      'Multimodal biocidal action makes the emergence of single-step resistance mathematically rare.',
      'Protection of encapsulated fragile payloads (AMPs, enzymes, CRISPR cassettes) from degradation.',
      'Controlled, sustained localized release reducing required systemic dosages.'
    ],
    keyChallenges: [
      'Nanotoxicity concerns: non-specific accumulation in hepatic, splenic, and renal reticuloendothelial tissues.',
      'Colloidal stability and aggregation in high-protein biological fluids.',
      'Manufacturing batch reproducibility and stringent quality control standards.',
      'Complex clearance pharmacokinetics in human patients.'
    ],
    researchStatus: 'Silver-based wound dressings and liposomal antibiotic formulations (e.g., liposomal amikacin) clinically approved; targeted smart nanocarriers in preclinical pipeline.'
  },
  {
    id: 'host-directed-therapies',
    name: 'Host-Directed Therapies (HDTs)',
    subtitle: 'Potentiating Host Cellular Defenses & Immune Modulation',
    tagline: 'Approaches that modify or support host responses to improve control and clearance of infection.',
    category: 'Emerging',
    primaryTarget: 'Host macrophage autophagy, antimicrobial peptide synthesis, cytokine signaling',
    specificity: 'Host-targeted (pathogen-agnostic, effective across broad resistance profiles)',
    keyChallenge: 'Risk of excessive inflammatory tissue damage, auto-reactivity, complex patient heterogeneity',
    mechanismSummary: 'Modulates host immune cell pathways—upregulating intracellular autophagy, stimulating endogenous cathelicidin production, or dampening harmful hyper-inflammation—to empower the host to eliminate resistant pathogens without acting directly on microbial genes.',
    detailedMechanism: [
      'Activation of host macrophage AMP-activated protein kinase (AMPK) to stimulate xenophagy of intracellular pathogens.',
      'Nutritional and metabolic reprogramming (e.g., iron withholding mechanisms) to starve invading microbes.',
      'Up-regulation of endogenous host defense peptide synthesis via vitamin D receptor or toll-like receptor pathways.',
      'Fine-tuned immunomodulation to prevent lethal cytokine storms while maintaining effective phagocytosis.',
      'Repurposing of host kinase inhibitors to restrict pathogen exploitation of host cellular machinery.'
    ],
    potentialAdvantages: [
      'Zero direct selective pressure on the microbial genome, virtually eliminating conventional resistance risks.',
      'Broad efficacy against intracellular bacterial pathogens (e.g., Mycobacterium tuberculosis, Salmonella, Listeria).',
      'Potential to repurpose well-characterized, FDA-approved drugs with known safety and pharmacological profiles.',
      'Effective against co-infections and polymicrobial disease presentations.'
    ],
    keyChallenges: [
      'Narrow therapeutic window between protective immune boosting and destructive immunopathology.',
      'Inter-individual host variability in immune responsiveness, genetics, and baseline inflammatory state.',
      'Inadequate monotherapy efficacy in severe acute fulminant infections; primarily adjunct therapy.',
      'Requires delicate timing to match host immune trajectory during acute vs chronic stages.'
    ],
    researchStatus: 'Repurposed agents (e.g., metformin, statins, imatinib, HDAC inhibitors) under investigation in clinical trials as adjunct treatments for resistant intracellular infections.'
  }
];
