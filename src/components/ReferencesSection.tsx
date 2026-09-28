import React from 'react';
import { SCIENTIFIC_REFERENCES } from '../data/references';
import { BookOpen, ExternalLink } from 'lucide-react';

export const ReferencesSection: React.FC = () => {
  return (
    <section id="references" className="relative py-20 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
            <span>SECTION 11</span>
            <span aria-hidden="true">·</span>
            <span>BIBLIOGRAPHY</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white mb-3">
            AUTHORITATIVE SCIENTIFIC REFERENCES
          </h2>
          <p className="text-sm text-slate-400 font-normal leading-relaxed">
            All statistical data, biological mechanism citations, and epidemiology are grounded in published peer-reviewed journals and global public health agency records.
          </p>
        </div>

        {/* References List */}
        <div className="space-y-4">
          {SCIENTIFIC_REFERENCES.map((ref, idx) => (
            <div
              key={ref.id}
              className="p-5 rounded-xl bg-slate-900/40 border border-slate-800/80 hover:border-slate-700 transition-colors flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs font-sans"
            >
              <div className="space-y-1 max-w-4xl">
                <div className="flex items-center gap-2 text-[11px] font-mono text-cyan-400">
                  <span>[{idx + 1}]</span>
                  <span>{ref.year}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-slate-400">{ref.journalOrOrg}</span>
                </div>
                <h4 className="text-slate-200 font-medium">
                  {ref.title}
                </h4>
                <p className="text-slate-400 text-[11px]">
                  {ref.authors}
                </p>
              </div>

              {ref.linkOrRef && (
                <a
                  href={ref.linkOrRef}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-cyan-400 hover:text-cyan-300 hover:border-cyan-500/50 text-[11px] font-mono shrink-0 transition-colors"
                >
                  <span>Verify DOI</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          ))}
        </div>

        {/* Academic integrity statement */}
        <div className="mt-8 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-500 flex items-center justify-between">
          <span>Peer-Reviewed Literature Synthesis · College Presentation Archive</span>
          <span>Zero Fabricated DOIs or Metrics</span>
        </div>

      </div>
    </section>
  );
};
