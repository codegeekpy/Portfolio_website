import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle, Award, Users, GitPullRequest, Layers } from 'lucide-react';
import { experience } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/40 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-500 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Career Journey</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Work Experience
            </h2>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md font-light">
            Demonstrated engineering leadership, system design, and hands-on developer mentorship in high-growth AI software environments.
          </p>
        </div>

        {/* Experience Cards / Timeline */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 hover:border-zinc-400 dark:hover:border-zinc-700 transition-all text-left shadow-sm"
            >
              {/* Top Bar: Role & Meta */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-zinc-100 dark:border-zinc-800">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-mono font-medium mb-1">
                    <Briefcase size={12} />
                    <span>{exp.type}</span>
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {exp.role} <span className="text-emerald-500">@ {exp.company}</span>
                  </h3>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400 pt-1">
                    <span className="flex items-center gap-1">
                      <MapPin size={13} className="text-zinc-400" />
                      {exp.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={13} className="text-zinc-400" />
                      {exp.period}
                    </span>
                  </div>
                </div>

                {/* Stat pills */}
                <div className="flex items-center gap-2 self-start md:self-center">
                  <div className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-right">
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase">Tenure</span>
                    <span className="text-xs font-mono font-bold text-zinc-800 dark:text-zinc-200">10 Months</span>
                  </div>
                  <div className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-right">
                    <span className="block text-[10px] font-mono text-zinc-400 uppercase">Impact</span>
                    <span className="text-xs font-mono font-bold text-emerald-500">Tech Leadership</span>
                  </div>
                </div>
              </div>

              {/* Description & Impact Bullets */}
              <div className="py-6 space-y-4">
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
                  {exp.description}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-950/40 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-emerald-500">
                      <Layers size={14} />
                      <span>Architecture & Scalability</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.highlights[0]}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-950/40 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-cyan-500">
                      <GitPullRequest size={14} />
                      <span>Code Review & Standards</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.highlights[1]}
                    </p>
                  </div>

                  <div className="p-4 rounded-xl border border-zinc-100 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-950/40 space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-semibold text-amber-500">
                      <Users size={14} />
                      <span>Mentorship & Culture</span>
                    </div>
                    <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {exp.highlights[2]}
                    </p>
                  </div>
                </div>
              </div>

              {/* Skills Footer */}
              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80 flex flex-wrap items-center gap-2">
                <span className="text-xs font-mono text-zinc-400 mr-2">Competencies:</span>
                {exp.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-mono px-2.5 py-0.5 rounded-full border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
