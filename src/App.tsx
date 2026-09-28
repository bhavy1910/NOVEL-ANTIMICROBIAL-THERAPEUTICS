import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoModal } from './components/VideoModal';
import { PresentationHUD } from './components/PresentationHUD';
import { Introduction } from './components/Introduction';
import { AMRCrisis } from './components/AMRCrisis';
import { TherapeuticArsenal } from './components/TherapeuticArsenal';
import { CellMechanismMap } from './components/CellMechanismMap';
import { DeepDiveVisualizer } from './components/DeepDiveVisualizer';
import { ComparisonTable } from './components/ComparisonTable';
import { AdvantagesGrid } from './components/AdvantagesGrid';
import { ChallengesBalance } from './components/ChallengesBalance';
import { FutureRoadmap } from './components/FutureRoadmap';
import { Conclusion } from './components/Conclusion';
import { TeamCard } from './components/TeamCard';
import { ReferencesSection } from './components/ReferencesSection';
import { Footer } from './components/Footer';

export default function App() {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [presentationMode, setPresentationMode] = useState(false);
  const [heroForegroundVideoOpen, setHeroForegroundVideoOpen] = useState(false);

  const handleExplore = () => {
    const el = document.getElementById('introduction');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // When "Watch Film" is clicked anywhere, open directly in Hero section foreground!
  const handleOpenWatchFilmInHero = () => {
    setHeroForegroundVideoOpen(true);
    const heroEl = document.getElementById('hero');
    if (heroEl) {
      heroEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-cyan-500/30 selection:text-cyan-200">
      
      {/* Fixed Navigation Bar */}
      <Navbar
        onOpenVideo={handleOpenWatchFilmInHero}
        presentationMode={presentationMode}
        onTogglePresentationMode={() => setPresentationMode(!presentationMode)}
      />

      {/* Presentation HUD (Vertical slide tracker + projector toolbar) */}
      <PresentationHUD presentationMode={presentationMode} />

      {/* Main Presentation Flow */}
      <main className="flex-1">
        {/* 1. Cinematic Hero with provided video IMG_6365.MP4 & Team Members */}
        <Hero
          onExplore={handleExplore}
          foregroundVideoOpen={heroForegroundVideoOpen}
          onSetForegroundVideo={setHeroForegroundVideoOpen}
        />

        {/* 2. Introduction: The Next Frontier of Antimicrobial Therapy */}
        <Introduction />

        {/* 3. The AMR Resistance Crisis & Selective Evolutionary Pressure */}
        <AMRCrisis />

        {/* 4. The New Arsenal: Novel Therapeutic Approaches */}
        <TherapeuticArsenal />

        {/* 5. Subcellular Target Map: Where Do Novel Therapies Act? */}
        <CellMechanismMap />

        {/* 6. Deep-Dive Molecular Mechanisms (Phage, AMPs, CRISPR, Anti-Virulence) */}
        <DeepDiveVisualizer />

        {/* 7. Comparative Therapeutic Matrix */}
        <ComparisonTable />

        {/* 8. Strategic Advantages: Why Novel Approaches? */}
        <AdvantagesGrid />

        {/* 9. The Challenges: Balance of Promise vs Reality */}
        <ChallengesBalance />

        {/* 10. The Future: Roadmap & Vision */}
        <FutureRoadmap />

        {/* 11. Conclusion: Synthesis & Key Directives */}
        <Conclusion />

        {/* 12. Team Presentation End Card */}
        <TeamCard />

        {/* 13. Authoritative Peer-Reviewed Bibliography */}
        <ReferencesSection />
      </main>

      {/* Minimal Footer */}
      <Footer />

      {/* Fullscreen Video Lightbox Player Modal (available as secondary utility) */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

    </div>
  );
}
