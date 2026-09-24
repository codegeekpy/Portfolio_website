import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-12 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-white dark:bg-zinc-950 text-left">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-8 border-b border-zinc-100 dark:border-zinc-900">
          
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-mono font-bold text-base text-zinc-900 dark:text-white">
                {personalData.name}
              </span>
              <span className="text-xs font-mono text-zinc-400">/</span>
              <span className="text-xs font-mono text-emerald-500">Portfolio</span>
            </div>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light">
              Software Engineer & Tech Lead • Building scalable AI, Web3 & Full-Stack Systems
            </p>
          </div>

          {/* Socials & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href={personalData.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors"
              aria-label="GitHub"
              title="GitHub"
            >
              <GithubIcon size={15} />
            </a>

            <a
              href={personalData.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors"
              aria-label="LinkedIn"
              title="LinkedIn"
            >
              <LinkedinIcon size={15} />
            </a>

            <a
              href={personalData.leetcode}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-amber-500 hover:border-amber-500/50 transition-colors"
              aria-label="LeetCode Profile (190+ Solved)"
              title="LeetCode (190+ Solved)"
            >
              <LeetcodeIcon size={15} />
            </a>

            <a
              href={`mailto:${personalData.email}`}
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-emerald-500 hover:border-emerald-500/50 transition-colors"
              aria-label="Email"
              title="Email"
            >
              <Mail size={15} />
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 text-xs font-mono text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-400 transition-colors"
              title="Back to Top"
            >
              <span>Top</span>
              <ArrowUp size={13} />
            </button>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-zinc-400 dark:text-zinc-500">
          <div>
            © {new Date().getFullYear()} {personalData.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with</span>
            <span className="text-zinc-600 dark:text-zinc-400 font-semibold">❤️ by Kashi Kuldeep </span>

          </div>
        </div>

      </div>
    </footer>
  );
}
