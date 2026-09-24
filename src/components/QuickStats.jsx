import React from 'react';
import { Briefcase, Award, Code2, ShieldCheck } from 'lucide-react';

export default function QuickStats() {
  const statItems = [
    {
      icon: Briefcase,
      value: "Tech Lead",
      label: "Leadership & Architecture",
      sub: "VISWAM AI (Mar - Dec 2025)",
      accent: "text-emerald-500",
      border: "border-emerald-500/20"
    },
    {
      icon: Code2,
      value: "2+ Flagship",
      label: "Full-Stack & Web3 DApps",
      sub: "CollabOS & GenAI_Forge",
      accent: "text-cyan-500",
      border: "border-cyan-500/20"
    },
    {
      icon: ShieldCheck,
      value: "6+ Global",
      label: "Accredited Certifications",
      sub: "IBM AI, NPTEL, Cisco",
      accent: "text-indigo-500",
      border: "border-indigo-500/20"
    },
    {
      icon: Award,
      value: "2 Hackathon",
      label: "Podium Finishes",
      sub: "Ideathon & Avensis Winner",
      accent: "text-amber-500",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="py-8 border-y border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div 
                key={index}
                className="p-4 sm:p-5 rounded-xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/60 backdrop-blur-sm hover:border-zinc-400 dark:hover:border-zinc-700 transition-all text-left group shadow-xs"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500">
                    0{index + 1}
                  </span>
                  <div className={`p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 ${item.accent} group-hover:scale-110 transition-transform`}>
                    <Icon size={16} />
                  </div>
                </div>
                <div className="text-xl sm:text-2xl font-bold font-mono tracking-tight text-zinc-900 dark:text-white">
                  {item.value}
                </div>
                <div className="text-xs font-medium text-zinc-700 dark:text-zinc-300 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono">
                  {item.sub}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
