import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Copy, 
  Check, 
  ArrowUpRight, 
  MessageSquare,
  Loader2,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from './SocialIcons';
import { personalData } from '../data/portfolioData';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  // Status state: 'idle' | 'loading' | 'success' | 'error'
  const [status, setStatus] = useState('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const copyEmail = () => {
    navigator.clipboard.writeText(personalData.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(personalData.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');
    setStatusMessage('');

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personalData.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          _subject: formData.subject || `New Portfolio Message from ${formData.name}`,
          _template: 'table'
        })
      });

      const data = await response.json();

      if (response.ok && (data.success === 'true' || data.success === true)) {
        setStatus('success');
        setStatusMessage('Your message has been sent successfully! Thank you for reaching out; I will get back to you shortly.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else if (data.message && data.message.includes('Activation')) {
        setStatus('success');
        setStatusMessage("Message sent! FormSubmit sent a one-time activation email to your address. Once confirmed, all future messages arrive directly in your inbox.");
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        throw new Error(data.message || 'Submission failed');
      }
    } catch (err) {
      console.error('Contact form submission error:', err);
      setStatus('error');
      setStatusMessage('Unable to send through web API. You can open Gmail or your default mail client with your message prefilled:');
    }
  };

  const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    personalData.email
  )}&su=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    formData.message
      ? `Hi Kashi,\n\n${formData.message}\n\nFrom: ${formData.name} (${formData.email})`
      : `Hi Kashi,\n\nI saw your portfolio and would love to connect!`
  )}`;

  const mailtoUrl = `mailto:${personalData.email}?subject=${encodeURIComponent(
    formData.subject || `Inquiry from ${formData.name || 'Portfolio Visitor'}`
  )}&body=${encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  )}`;

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-zinc-200/80 dark:border-zinc-800/80 bg-zinc-50/50 dark:bg-zinc-950/60 relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4 text-left">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-mono font-medium text-emerald-500 uppercase tracking-widest mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>Get in Touch</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
              Let's Connect
            </h2>
          </div>
          <p className="text-sm text-zinc-500 dark:text-zinc-400 max-w-md font-light">
            Available for software engineering roles, technical architecture consulting, hackathons, and innovative open-source collaborations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 text-left">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Contact Card */}
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 backdrop-blur-md shadow-sm space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
                  Direct Inquiries
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 font-light mt-1">
                  Reach out directly via email, phone, or LinkedIn. I typically reply within 24 hours.
                </p>
              </div>

              <div className="space-y-4">
                
                {/* Email Item */}
                <div className="p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-500 shrink-0">
                      <Mail size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Email Address</div>
                      <a 
                        href={`mailto:${personalData.email}`}
                        className="text-xs font-mono font-medium text-zinc-900 dark:text-zinc-200 hover:text-emerald-500 truncate block transition-colors"
                      >
                        {personalData.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyEmail}
                    className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 text-zinc-500 hover:text-emerald-500 transition-colors shrink-0"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Phone Item */}
                <div className="p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 min-w-0">
                    <div className="p-2 rounded-lg bg-cyan-500/10 text-cyan-500 shrink-0">
                      <Phone size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-[10px] font-mono text-zinc-400 uppercase">Phone / WhatsApp</div>
                      <a 
                        href={`tel:${personalData.phone}`}
                        className="text-xs font-mono font-medium text-zinc-900 dark:text-zinc-200 hover:text-cyan-500 truncate block transition-colors"
                      >
                        {personalData.phoneFormatted}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={copyPhone}
                    className="p-1.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-cyan-500 text-zinc-500 hover:text-cyan-500 transition-colors shrink-0"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check size={14} className="text-cyan-500" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* Location Item */}
                <div className="p-3.5 rounded-xl border border-zinc-100 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-950/40 flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-amber-500/10 text-amber-500 shrink-0">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Location</div>
                    <div className="text-xs font-mono text-zinc-900 dark:text-zinc-200">
                      {personalData.location}
                    </div>
                  </div>
                </div>

              </div>

              {/* Social Channels */}
              <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800">
                <div className="text-xs font-mono text-zinc-400 mb-3">Professional Profiles:</div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <a
                    href={personalData.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 hover:border-emerald-500 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <GithubIcon size={15} />
                      <span>GitHub</span>
                    </span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={personalData.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-emerald-500 hover:border-emerald-500 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LinkedinIcon size={15} />
                      <span>LinkedIn</span>
                    </span>
                    <ArrowUpRight size={13} />
                  </a>

                  <a
                    href={personalData.leetcode}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/40 text-xs font-mono text-zinc-700 dark:text-zinc-300 hover:text-amber-500 hover:border-amber-500 transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <LeetcodeIcon size={15} />
                      <span>LeetCode</span>
                    </span>
                    <div className="flex items-center gap-1">
                      <span className="text-[10px] px-1.5 py-0.5 rounded bg-amber-500/10 text-amber-500 font-mono">190+</span>
                      <ArrowUpRight size={13} />
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 backdrop-blur-md shadow-sm">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-500 mb-2">
                <MessageSquare size={14} />
                <span>Send a Message</span>
              </div>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-white mb-6">
                Start a Conversation
              </h3>

              {/* Status Notifications */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-mono space-y-2 animate-fade-in">
                  <div className="flex items-center gap-2 font-semibold">
                    <Check size={16} className="text-emerald-500" />
                    <span>Message Sent!</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {statusMessage}
                  </p>
                  <button
                    onClick={() => setStatus('idle')}
                    className="text-[11px] underline underline-offset-4 text-emerald-600 dark:text-emerald-400 hover:opacity-80 pt-1"
                  >
                    Send another message
                  </button>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs font-mono space-y-3 animate-fade-in">
                  <div className="flex items-center gap-2 font-semibold">
                    <AlertCircle size={16} className="text-amber-500" />
                    <span>Send Options Available:</span>
                  </div>
                  <p className="text-[11px] leading-relaxed text-zinc-600 dark:text-zinc-300">
                    {statusMessage}
                  </p>
                  <div className="flex flex-wrap gap-2 pt-1">
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-xs font-semibold"
                    >
                      <ExternalLink size={12} />
                      <span>Open in Gmail</span>
                    </a>
                    <a
                      href={mailtoUrl}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs"
                    >
                      <span>Default Mail App</span>
                    </a>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      Your Name <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-xs font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      disabled={status === 'loading'}
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                      Your Email <span className="text-emerald-500">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-xs font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                      disabled={status === 'loading'}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Collaboration"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-xs font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono text-zinc-500 dark:text-zinc-400">
                    Message <span className="text-emerald-500">*</span>
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Hello Kashi, I would like to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950/60 text-xs font-mono text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:border-emerald-500 transition-colors resize-none"
                    disabled={status === 'loading'}
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
                  <button
                    type="submit"
                    disabled={status === 'loading'}
                    className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 disabled:opacity-60 text-zinc-950 font-mono font-semibold text-xs transition-all shadow-md shadow-emerald-500/20 active:scale-95 cursor-pointer"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 size={14} className="animate-spin" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <Send size={14} />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  {/* Instant alternate options */}
                  <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 self-center">
                    <span>Or direct via:</span>
                    <a
                      href={gmailComposeUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500 text-zinc-600 dark:text-zinc-300 hover:text-emerald-500 transition-colors inline-flex items-center gap-1"
                      title="Open draft directly in Gmail Web"
                    >
                      <span>Gmail</span>
                      <ExternalLink size={10} />
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
