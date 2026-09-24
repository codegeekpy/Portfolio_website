import React, { useState } from 'react';
import { 
  ExternalLink, 
  Layers, 
  Cpu, 
  CheckCircle2, 
  Clock, 
  Zap, 
  ShieldCheck, 
  Sparkles,
  ArrowUpRight,
  X
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-20 sm:py-28 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-500 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Featured Projects
            </h2>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md font-light">
            Architected full-stack platforms combining high-speed AI inference, distributed blockchain contracts, and modern web frameworks.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => {
            const isCompleted = project.status === 'Completed';
            
            return (
              <div
                key={project.id}
                className="group relative rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 backdrop-blur-md p-6 sm:p-8 flex flex-col justify-between hover:border-zinc-400 dark:hover:border-zinc-700 hover:shadow-xl transition-all duration-300 text-left"
              >
                {/* Top Row: Category & Status */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono font-medium px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                    {project.category}
                  </span>

                  <div className={`inline-flex items-center gap-1.5 text-xs font-mono font-medium px-2.5 py-0.5 rounded-full border ${
                    isCompleted 
                      ? 'border-cyan-500/30 bg-cyan-500/10 text-cyan-600 dark:text-cyan-400' 
                      : 'border-emerald-500/30 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400'
                  }`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-cyan-500' : 'bg-emerald-500 animate-pulse'}`} />
                    <span>{project.status}</span>
                  </div>
                </div>

                {/* Project Header */}
                <div className="space-y-2 mb-4">
                  <h3 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-white group-hover:text-emerald-500 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-medium text-emerald-600 dark:text-emerald-400/90 font-mono">
                    {project.subtitle}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed font-light pt-1">
                    {project.description}
                  </p>
                </div>

                {/* Key Highlights list */}
                <div className="space-y-2 my-4 py-4 border-y border-zinc-100 dark:border-zinc-800/80">
                  <div className="text-xs font-mono font-semibold text-zinc-400 uppercase tracking-wider">
                    Key Architectural Highlights:
                  </div>
                  <ul className="space-y-1.5">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-zinc-600 dark:text-zinc-300">
                        <CheckCircle2 size={13} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Pills */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span 
                        key={idx}
                        className="text-[11px] font-mono px-2 py-0.5 rounded border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50 dark:bg-zinc-950/50 text-zinc-600 dark:text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Actions */}
                <div className="pt-2 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-mono font-semibold text-zinc-900 dark:text-white hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
                  >
                    <GithubIcon size={15} />
                    <span>View Repository</span>
                    <ArrowUpRight size={13} />
                  </a>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors underline underline-offset-4"
                  >
                    Quick Specs
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>

      {/* Project Quick Specs Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-zinc-950/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 p-6 sm:p-8 text-left shadow-2xl space-y-5">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 p-1.5 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={16} />
            </button>

            <div>
              <div className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-widest mb-1">
                <span>{selectedProject.category}</span>
                <span>•</span>
                <span>{selectedProject.status}</span>
              </div>
              <h3 className="text-2xl font-bold text-white tracking-tight">{selectedProject.title}</h3>
              <p className="text-xs text-zinc-400 font-mono mt-1">{selectedProject.subtitle}</p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed font-light">
              {selectedProject.description}
            </p>

            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400">Features & Deliverables:</h4>
              <ul className="space-y-1.5">
                {selectedProject.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">Tech Stack:</h4>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.technologies.map((t, i) => (
                  <span key={i} className="text-xs font-mono px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-zinc-800 flex items-center justify-between">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono font-semibold text-xs transition-colors"
              >
                <GithubIcon size={15} />
                <span>Open on GitHub</span>
                <ArrowUpRight size={13} />
              </a>

              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 text-xs font-mono hover:bg-zinc-800 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
