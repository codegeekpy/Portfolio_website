import React from 'react';
import { Briefcase, Award, Code2, ShieldCheck, ArrowUpRight } from 'lucide-react';
import { LeetcodeIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

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
      icon: LeetcodeIcon,
      value: "190+",
      label: "LeetCode Solved",
      sub: "Data Structures & Algorithms",
      accent: "text-amber-500",
      border: "border-amber-500/20",
      link: personalData.leetcode,
      badge: "Profile"
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
      accent: "text-rose-500",
      border: "border-rose-500/20"
    }
  ];

  return (
    <section className="py-8 border-y border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-900/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
          {statItems.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono font-semibold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-1">
                    0{index + 1}
                    {item.link && <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-100 transition-opacity text-amber-500" />}
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
                <div className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-0.5 font-mono truncate">
                  {item.sub}
                </div>
              </>
            );

            if (item.link) {
              return (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  title="View LeetCode Profile (190+ Solved)"
                  className="p-4 sm:p-5 rounded-xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/60 backdrop-blur-sm hover:border-amber-500/60 dark:hover:border-amber-500/60 hover:-translate-y-0.5 transition-all text-left group shadow-xs cursor-pointer block"
                >
                  {content}
                </a>
              );
            }

            return (
              <div 
                key={index}
                className="p-4 sm:p-5 rounded-xl border border-zinc-200/70 dark:border-zinc-800/80 bg-white dark:bg-zinc-950/60 backdrop-blur-sm hover:border-zinc-400 dark:hover:border-zinc-700 transition-all text-left group shadow-xs"
              >
                {content}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

