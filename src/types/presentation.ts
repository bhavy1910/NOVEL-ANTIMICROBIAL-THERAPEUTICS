export interface TherapyItem {
  id: string;
  name: string;
  subtitle: string;
  tagline: string;
  category: 'Established' | 'Emerging' | 'Experimental';
  primaryTarget: string;
  specificity: string;
  keyChallenge: string;
  mechanismSummary: string;
  detailedMechanism: string[];
  potentialAdvantages: string[];
  keyChallenges: string[];
  researchStatus: string;
  image?: string;
}

export interface CellTarget {
  id: string;
  name: string;
  markerPosition: { x: number; y: number }; // percentage inside bacterial coordinate map
  targetDescription: string;
  mechanism: string;
  therapeuticApproach: string;
  clinicalSignificance: string;
  color: string;
}

export interface ReferenceItem {
  id: string;
  authors: string;
  title: string;
  journalOrOrg: string;
  year: string;
  linkOrRef: string;
  doi?: string;
}
