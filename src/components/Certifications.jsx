import React from 'react';
import { ShieldCheck, ExternalLink, Award, CheckCircle2 } from 'lucide-react';
import { certifications } from '../data/portfolioData';

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-500 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Verified Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Certifications & Licenses
            </h2>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md font-light">
            Recognized industry credentials in Artificial Intelligence, Machine Learning systems, Operating Systems, and Web Engineering.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
          {certifications.map((cert, index) => {
            const isIBM = cert.issuer.includes('IBM');
            const isNPTEL = cert.issuer.includes('NPTEL');
            
            return (
              <div
                key={index}
                className="group p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 backdrop-blur-md hover:border-emerald-500/50 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md border ${
                      isIBM 
                        ? 'bg-blue-500/10 border-blue-500/20 text-blue-500 dark:text-blue-400' 
                        : isNPTEL
                        ? 'bg-amber-500/10 border-amber-500/20 text-amber-600 dark:text-amber-400'
                        : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-600 dark:text-emerald-400'
                    }`}>
                      {cert.issuer}
                    </span>

                    <ShieldCheck size={16} className="text-zinc-400 group-hover:text-emerald-500 transition-colors" />
                  </div>

                  <h3 className="text-base font-bold text-zinc-900 dark:text-white tracking-tight group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {cert.title}
                  </h3>
                  
                  <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-2 leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span className="flex items-center gap-1.5 text-[11px]">
                    <CheckCircle2 size={12} className="text-emerald-500" />
                    Verified License
                  </span>
                  <span className="text-[11px] text-zinc-500">{cert.type}</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
