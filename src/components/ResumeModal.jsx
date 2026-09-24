import React from 'react';
import { X, Download, ExternalLink, FileText, CheckCircle2 } from 'lucide-react';
import { personalData } from '../data/portfolioData';

export default function ResumeModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-zinc-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl h-[90vh] flex flex-col rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl overflow-hidden text-left">
        
        {/* Header Bar */}
        <div className="p-4 sm:px-6 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-lg bg-emerald-500/10 text-emerald-400">
              <FileText size={18} />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight">
                {personalData.name} — Curriculum Vitae
              </h3>
              <p className="text-[11px] font-mono text-zinc-400">
                Official PDF Document
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={personalData.resumeUrl}
              download="Kashi_Kuldeep_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-zinc-950 font-mono text-xs font-semibold transition-colors"
            >
              <Download size={13} />
              <span className="hidden sm:inline">Download</span>
            </a>

            <a
              href={personalData.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-300 hover:text-white transition-colors"
              title="Open PDF in new tab"
            >
              <ExternalLink size={15} />
            </a>

            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-zinc-700 bg-zinc-800 text-zinc-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X size={15} />
            </button>
          </div>
        </div>

        {/* PDF Viewer Body */}
        <div className="flex-1 bg-zinc-950 relative overflow-hidden flex flex-col items-center justify-center">
          <object
            data={personalData.resumeUrl}
            type="application/pdf"
            className="w-full h-full"
          >
            <div className="p-8 text-center space-y-4 max-w-md">
              <div className="p-3 w-fit mx-auto rounded-full bg-zinc-800 text-emerald-400">
                <FileText size={32} />
              </div>
              <h4 className="text-lg font-bold text-white">Resume Document</h4>
              <p className="text-xs text-zinc-400 font-light">
                Your browser might not support direct inline PDF embedding. You can view or download the resume below:
              </p>
              <div className="flex justify-center gap-3 pt-2">
                <a
                  href={personalData.resumeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 rounded-lg bg-emerald-500 text-zinc-950 font-mono text-xs font-semibold"
                >
                  Open in New Tab
                </a>
                <a
                  href={personalData.resumeUrl}
                  download="Kashi_Kuldeep_Resume.pdf"
                  className="px-4 py-2 rounded-lg border border-zinc-700 text-zinc-300 font-mono text-xs"
                >
                  Download PDF
                </a>
              </div>
            </div>
          </object>
        </div>

        {/* Footer info bar */}
        <div className="px-6 py-2.5 border-t border-zinc-800 bg-zinc-950/90 text-xs font-mono text-zinc-500 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <CheckCircle2 size={13} className="text-emerald-500" />
            <span>Last updated & verified from official resume</span>
          </div>
          <span className="hidden sm:inline">Hyderabad, India</span>
        </div>

      </div>
    </div>
  );
}
