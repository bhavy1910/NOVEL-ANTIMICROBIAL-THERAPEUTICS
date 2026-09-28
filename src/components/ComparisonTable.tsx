import React, { useState } from 'react';
import { COMPARISON_DATA, ComparisonRow } from '../data/comparisons';
import { Table, Search, Check, AlertCircle } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredRows = COMPARISON_DATA.filter((row) =>
    row.approach.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.primaryTarget.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.specificity.toLowerCase().includes(searchTerm.toLowerCase()) ||
    row.keyChallenge.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="comparison" className="relative py-24 sm:py-32 bg-slate-950 text-slate-100 overflow-hidden border-t border-slate-900">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 uppercase tracking-widest mb-3">
              <span>SECTION 06</span>
              <span aria-hidden="true">·</span>
              <span>SYSTEMATIC EVALUATION</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
              COMPARATIVE THERAPEUTIC MATRIX
            </h2>
            <p className="text-base text-slate-300 font-normal leading-relaxed">
              Evaluating conventional antibiotics alongside five emerging modalities across molecular targets, biological specificity, resistance emergence risks, and translational hurdles.
            </p>
          </div>

          {/* Search filter input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Filter approaches or targets..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-xs font-mono text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-cyan-400 transition-all"
            />
          </div>
        </div>

        {/* Desktop / Tablet Table View */}
        <div className="hidden md:block overflow-x-auto rounded-2xl border border-slate-800 bg-slate-900/40 shadow-2xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80 text-slate-400 font-mono text-[11px] uppercase tracking-wider">
                <th className="py-4 px-6 font-semibold">Therapeutic Approach</th>
                <th className="py-4 px-6 font-semibold">Primary Target</th>
                <th className="py-4 px-6 font-semibold">Specificity</th>
                <th className="py-4 px-6 font-semibold">Key Challenge</th>
                <th className="py-4 px-6 font-semibold">Resistance Risk</th>
                <th className="py-4 px-6 font-semibold">Clinical Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/80 font-sans">
              {filteredRows.map((row) => (
                <tr
                  key={row.approach}
                  className={`hover:bg-slate-900/80 transition-colors ${
                    row.highlight ? 'bg-slate-900/20' : 'bg-transparent'
                  }`}
                >
                  {/* Approach */}
                  <td className="py-4 px-6 font-medium text-slate-100 whitespace-nowrap">
                    <div className="flex items-center gap-2">
                      {row.highlight && (
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0 shadow-[0_0_6px_rgba(6,182,212,0.8)]" />
                      )}
                      <span className="font-display font-semibold text-sm text-cyan-200">
                        {row.approach}
                      </span>
                    </div>
                  </td>

                  {/* Primary Target */}
                  <td className="py-4 px-6 text-slate-300 max-w-xs leading-relaxed">
                    {row.primaryTarget}
                  </td>

                  {/* Specificity */}
                  <td className="py-4 px-6 text-slate-300 font-mono text-[11px] whitespace-nowrap">
                    {row.specificity}
                  </td>

                  {/* Key Challenge */}
                  <td className="py-4 px-6 text-slate-400 max-w-xs leading-relaxed">
                    {row.keyChallenge}
                  </td>

                  {/* Resistance Risk */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    <span
                      className={`font-mono text-[11px] font-medium ${
                        row.resistanceRisk.startsWith('High')
                          ? 'text-rose-400'
                          : row.resistanceRisk.startsWith('Very Low') || row.resistanceRisk.startsWith('Low')
                          ? 'text-emerald-400'
                          : 'text-amber-400'
                      }`}
                    >
                      {row.resistanceRisk}
                    </span>
                  </td>

                  {/* Clinical Status */}
                  <td className="py-4 px-6 text-slate-400 text-[11px] leading-relaxed max-w-xs">
                    {row.clinicalStatus}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Responsive Card Stack */}
        <div className="md:hidden space-y-4">
          {filteredRows.map((row) => (
            <div
              key={row.approach}
              className="p-5 rounded-xl bg-slate-900/60 border border-slate-800 space-y-3"
            >
              <div className="flex items-center justify-between">
                <span className="font-display font-bold text-base text-cyan-300">
                  {row.approach}
                </span>
                <span className="text-[11px] font-mono text-slate-400">
                  {row.specificity}
                </span>
              </div>

              <div className="text-xs space-y-1.5 pt-2 border-t border-slate-800">
                <div>
                  <span className="font-mono text-slate-500 uppercase text-[10px] block">Target:</span>
                  <span className="text-slate-200">{row.primaryTarget}</span>
                </div>
                <div>
                  <span className="font-mono text-slate-500 uppercase text-[10px] block">Challenge:</span>
                  <span className="text-slate-400">{row.keyChallenge}</span>
                </div>
                <div className="flex justify-between items-baseline pt-1">
                  <div>
                    <span className="font-mono text-slate-500 uppercase text-[10px] block">Resistance:</span>
                    <span className="font-mono text-amber-300 text-xs">{row.resistanceRisk}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-mono text-slate-500 uppercase text-[10px] block">Status:</span>
                    <span className="text-[11px] text-slate-400">{row.clinicalStatus.split(';')[0]}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scientific Table Footnote */}
        <div className="mt-4 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] font-mono text-slate-500 gap-2">
          <span>Comparative data synthesized from Nature Reviews Microbiology, Lancet Infectious Diseases & WHO reports.</span>
          <span>No arbitrary ratings assigned · Grounded in clinical trial status</span>
        </div>

      </div>
    </section>
  );
};
