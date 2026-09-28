import React, { useEffect } from 'react';
import { X, CheckCircle, AlertTriangle, ShieldCheck, ArrowRight, Dna } from 'lucide-react';
import { TherapyItem } from '../types/presentation';

interface TherapyModalProps {
  therapy: TherapyItem | null;
  onClose: () => void;
}

export const TherapyModal: React.FC<TherapyModalProps> = ({ therapy, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (therapy) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [therapy, onClose]);

  if (!therapy) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="therapy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div 
        className="absolute inset-0" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl z-10 flex flex-col">
        
        {/* Header with Hero Banner */}
        <div className="relative p-6 sm:p-8 border-b border-slate-800 bg-gradient-to-r from-slate-950 via-slate-900 to-cyan-950/30">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                <span>{therapy.category} Modality</span>
                <span aria-hidden="true">·</span>
                <span>{therapy.specificity}</span>
              </div>
              <h3 id="therapy-modal-title" className="font-display text-2xl sm:text-3xl font-bold text-white mb-1">
                {therapy.name}
              </h3>
              <p className="text-sm font-mono text-slate-300">
                {therapy.subtitle}
              </p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Tagline */}
          <p className="mt-4 text-sm text-slate-300 font-sans leading-relaxed border-t border-slate-800/80 pt-4">
            {therapy.tagline}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-8 text-sm">
          
          {/* Target & Research Status Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                PRIMARY MOLECULAR TARGET
              </span>
              <p className="text-slate-200 font-medium font-sans">
                {therapy.primaryTarget}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-950 border border-slate-800">
              <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1">
                CURRENT RESEARCH & CLINICAL STATUS
              </span>
              <p className="text-slate-300 text-xs font-sans leading-relaxed">
                {therapy.researchStatus}
              </p>
            </div>
          </div>

          {/* Detailed Mechanism Sequence */}
          <div>
            <div className="text-xs font-mono uppercase tracking-widest text-cyan-400 mb-3 flex items-center gap-2">
              <Dna className="w-4 h-4 text-cyan-400" />
              <span>DETAILED MECHANISM OF ACTION</span>
            </div>
            <div className="space-y-2.5 p-4 rounded-xl bg-slate-950 border border-slate-800">
              {therapy.detailedMechanism.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-xs leading-relaxed text-slate-300">
                  <span className="w-5 h-5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/80 flex items-center justify-center font-mono text-[10px] shrink-0 font-bold mt-0.5">
                    {idx + 1}
                  </span>
                  <span>{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Advantages vs Key Challenges */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Advantages */}
            <div className="p-5 rounded-xl bg-emerald-950/20 border border-emerald-800/40">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
                <CheckCircle className="w-4 h-4" />
                <span>POTENTIAL ADVANTAGES</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                {therapy.potentialAdvantages.map((adv, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-400 mt-1">•</span>
                    <span>{adv}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Challenges */}
            <div className="p-5 rounded-xl bg-rose-950/20 border border-rose-800/40">
              <div className="flex items-center gap-2 text-xs font-mono text-rose-400 uppercase tracking-wider mb-3">
                <AlertTriangle className="w-4 h-4" />
                <span>KEY CHALLENGES & TRANSLATION LIMITS</span>
              </div>
              <ul className="space-y-2 text-xs text-slate-300 font-sans leading-relaxed">
                {therapy.keyChallenges.map((chal, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-rose-400 mt-1">•</span>
                    <span>{chal}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* Image preview if available */}
          {therapy.image && (
            <div>
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                SCIENTIFIC RENDER
              </div>
              <div className="rounded-xl overflow-hidden border border-slate-800 max-h-64">
                <img
                  src={therapy.image}
                  alt={therapy.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          )}

        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <div className="text-xs text-slate-400 font-mono">
            Scientific Reference: Peer-reviewed literature & WHO 2024 guidance
          </div>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-slate-900 bg-cyan-400 hover:bg-cyan-300 rounded-lg transition-colors font-mono"
          >
            CLOSE DETAILS
          </button>
        </div>

      </div>
    </div>
  );
};
