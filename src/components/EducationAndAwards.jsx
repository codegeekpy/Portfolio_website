import React from 'react';
import { GraduationCap, Award, Calendar, MapPin, Trophy, BookOpen, CheckCircle2 } from 'lucide-react';
import { education, awards } from '../data/portfolioData';

export default function EducationAndAwards() {
  return (
    <section id="education" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
          
          {/* Education Column */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-500 uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                <span>Academic Foundation</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Education & Training
              </h2>
            </div>

            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 backdrop-blur-md shadow-sm space-y-5">
              <div className="flex items-start justify-between gap-4">
                <div className="space-y-1">
                  <div className="p-2.5 w-fit rounded-xl bg-emerald-500/10 text-emerald-500 mb-3">
                    <GraduationCap size={22} />
                  </div>
                  <h3 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-white">
                    {education.degree}
                  </h3>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 font-mono">
                    {education.institution}
                  </p>
                </div>

                <div className="text-right shrink-0">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                    <Calendar size={12} />
                    <span>Graduating 2027</span>
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs font-mono text-zinc-500 dark:text-zinc-400">
                <span className="flex items-center gap-1.5">
                  <MapPin size={13} className="text-zinc-400" />
                  {education.location}
                </span>
                <span>•</span>
                <span>Full-Time Undergraduate</span>
              </div>

              <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider mb-3">
                  Core Computer Science Curriculum:
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                  {education.coursework.map((course, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle2 size={13} className="text-emerald-500 shrink-0" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Awards Column */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-amber-500 uppercase tracking-widest mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                <span>Recognition & Honors</span>
              </div>
              <h2 className="text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                Hackathons & Awards
              </h2>
            </div>

            <div className="space-y-4">
              {awards.map((award, index) => (
                <div
                  key={index}
                  className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 backdrop-blur-md shadow-sm hover:border-amber-500/40 transition-all space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500">
                        <Trophy size={18} />
                      </div>
                      <div>
                        <h4 className="text-base font-bold text-zinc-900 dark:text-white">
                          {award.title}
                        </h4>
                        <span className="text-xs font-mono text-zinc-400">
                          {award.organization}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 font-light leading-relaxed">
                    {award.description}
                  </p>
                </div>
              ))}

              {/* Summary note card */}
              <div className="p-4 rounded-xl border border-dashed border-zinc-200 dark:border-zinc-800 bg-transparent flex items-center gap-3 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                <Award size={18} className="text-emerald-500 shrink-0" />
                <span>Continuously competing in hackathons and building fast functional prototypes.</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
