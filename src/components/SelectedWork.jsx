import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  ExternalLink, 
  Lock, 
  Sparkles, 
  Bot, 
  CheckSquare, 
  HeartPulse, 
  Wrench, 
  BookOpen, 
  Music, 
  ScanText,
  Clock
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import TiltCard from './TiltCard';

export default function SelectedWork({ onOpenModal }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Web', 'Mobile', 'AI', 'Tools'];

  const projects = [
    {
      id: 'study-flow',
      title: 'Study-Flow',
      badge: 'PROMINENT FEATURE',
      status: 'Featured Project · Active',
      headline: 'Study Planner & Productivity OS with AI Chat Assistant',
      description: 'An integrated academic study planner combining robust task management, session workflows, and an intelligent AI study assistant capable of generating revision outlines and answering complex conceptual queries.',
      categories: ['Web', 'AI'],
      techStack: ['React', 'AI Chat Integration', 'Tailwind CSS', 'Task Architecture', 'LocalStorage / Cloud'],
      isFeatured: true,
      accentColor: '#FF961B',
      glowColor: 'rgba(255, 150, 27, 0.3)',
      borderColor: 'border-[#FF961B]',
      isPrivate: false,
      demoAction: true,
      githubUrl: 'https://github.com/ephraimtessema-lgtm/study-flow.git',
    },
    {
      id: 'mama-care',
      title: 'Mama-Care',
      badge: 'HEALTHCARE',
      status: 'Healthcare Web Application',
      headline: 'Patient Guidance & Maternal Healthcare Platform',
      description: 'A healthcare-centered digital platform engineered to provide reliable prenatal and postnatal guidance, symptom checklists, and structured maternal health tracking.',
      categories: ['Web'],
      techStack: ['React', 'JavaScript', 'Tailwind CSS', 'Healthcare UX', 'Responsive Web'],
      isFeatured: false,
      accentColor: '#14B8A6',
      glowColor: 'rgba(20, 184, 166, 0.25)',
      borderColor: 'border-[#14B8A6]',
      isPrivate: false,
      demoAction: true,
      githubUrl: 'https://github.com/ephraimtessema-lgtm/Mama-Care.git',
    },
    {
      id: 'cs-toolkit',
      title: 'CS-Toolkit',
      badge: 'DEVELOPER TOOLKIT',
      status: 'Computer Science Utility Suite',
      headline: 'Algorithmic Helpers & Computational CS Utilities',
      description: 'A practical utility suite for computer science students and engineers featuring data structure visualizations, algorithm analysis helpers, and core computational converters.',
      categories: ['Tools', 'Web'],
      techStack: ['JavaScript', 'React', 'Algorithms', 'Data Structures', 'CS Utilities'],
      isFeatured: false,
      accentColor: '#3B82F6',
      glowColor: 'rgba(59, 130, 246, 0.25)',
      borderColor: 'border-[#3B82F6]',
      isPrivate: false,
      demoAction: true,
      githubUrl: 'https://github.com/ephraimtessema-lgtm/cs-toolkit-pro.git',
    },
    {
      id: 'bethverse',
      title: 'BethVerse',
      badge: 'POETRY VAULT & OCR',
      status: 'Mobile Poetry Vault · Amharic OCR',
      headline: 'Mobile Poetry Vault with Amharic OCR Digitization',
      description: 'A mobile sanctuary for poetry preservation and curation. Features native optical character recognition (Amharic OCR) integration allowing physical verses to be scanned, transcribed, and archived.',
      categories: ['Mobile', 'AI'],
      techStack: ['Flutter / React Native', 'Amharic OCR', 'Mobile Architecture', 'Local Encryption'],
      isFeatured: false,
      accentColor: '#8B5CF6',
      glowColor: 'rgba(139, 92, 246, 0.25)',
      borderColor: 'border-[#8B5CF6]',
      isPrivate: false,
      demoAction: true,
      githubUrl: 'https://github.com/ephraimtessema-lgtm/bethverse.git',
    },
    {
      id: 'yididya',
      title: 'Yididya',
      badge: 'PRIVATE MOBILE APP',
      status: 'Private Mobile Platform · Choir Management',
      headline: 'Repertoire Registry & Rehearsal Coordinator for Choir',
      description: 'A private mobile application tailored for a choral team, centralizing musical scores, part arrangements (SATB), rehearsal schedules, and internal member updates.',
      categories: ['Mobile'],
      techStack: ['React Native / Expo', 'Mobile UI/UX', 'Hymn Catalog', 'Offline-First Sync'],
      isFeatured: false,
      accentColor: '#EC4899',
      glowColor: 'rgba(236, 72, 153, 0.25)',
      borderColor: 'border-[#EC4899]',
      isPrivate: true,
      githubUrl: '#',
      privateNote: 'Private Mobile Repository · Dedicated Choir Application',
    },
    {
      id: 'johanan',
      title: 'Johanan',
      badge: 'PRIVATE MOBILE APP',
      status: 'Private Mobile Platform · Literature Team',
      headline: 'Manuscript Curation & Editorial Workflow App',
      description: 'A private mobile workspace engineered for a literature production team to organize manuscript drafts, manage peer reviews, and streamline collaborative publication cycles.',
      categories: ['Mobile'],
      techStack: ['Flutter / React Native', 'Editorial Workflows', 'Document Storage', 'Mobile UX'],
      isFeatured: false,
      accentColor: '#6366F1',
      glowColor: 'rgba(99, 102, 241, 0.25)',
      borderColor: 'border-[#6366F1]',
      isPrivate: true,
      githubUrl: '#',
      privateNote: 'Private Mobile Repository · Internal Literature Team',
    },
  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.categories.includes(activeFilter));

  return (
    <section id="projects" className="relative py-20 md:py-28 overflow-hidden bg-dev-lines scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF961B]" />
            <span className="text-[#FF961B] text-xs font-bold tracking-widest uppercase font-mono">
              FEATURED PROJECTS
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-4">
            Curated engineering <span className="text-[#FF961B]">projects.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            A showcase of real-world software applications demonstrating technical range, user-centered product design, and practical problem-solving across web, mobile, and AI integrations.
          </p>
        </motion.div>

        {/* Category Filters */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-12"
        >
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all cursor-pointer font-mono ${
                  isActive
                    ? 'btn-orange-glow text-black'
                    : 'bg-[#121624]/80 text-zinc-300 hover:text-white border border-white/10 hover:border-white/20'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </motion.div>

        {/* Projects Layout */}
        <motion.div layout className="space-y-8">
          <AnimatePresence>
            {/* If Study-Flow matches current filter, render prominent hero banner */}
            {filteredProjects.find(p => p.id === 'study-flow') && (
              <motion.div
                key="featured-study-flow"
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5 }}
              >
                <TiltCard maxTilt={6} glowColor="rgba(255, 150, 27, 0.25)">
                  <div className="surface-card rounded-3xl p-6 sm:p-10 border-2 border-[#FF961B]/60 shadow-[0_0_40px_rgba(255,150,27,0.15)] relative overflow-hidden">
                    {/* Top ambient highlight */}
                    <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF961B]/10 rounded-full blur-3xl pointer-events-none" />

                    {/* Featured Ribbon / Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF961B]/15 border border-[#FF961B]/30 text-xs font-bold text-[#FF961B] tracking-wider uppercase font-mono">
                        <Sparkles className="w-3.5 h-3.5" />
                        <span>FEATURED HIGHLIGHT · PRODUCTIVITY & AI</span>
                      </div>

                      <span className="text-xs font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 rounded-full flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                        Full Application
                      </span>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                      
                      {/* Left Side: Details & Tech */}
                      <div className="lg:col-span-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-2">
                            Study-Flow
                          </h3>
                          <p className="text-sm sm:text-base font-semibold text-[#FFAE42] mb-4">
                            Study Planner & Productivity Application with AI Chat
                          </p>

                          <p className="text-sm sm:text-base text-zinc-300 leading-relaxed mb-6 font-normal">
                            Engineered to supercharge academic focus. Combines an intelligent task management scheduler, milestone tracking, and a built-in AI study assistant that breaks down difficult subjects and generates revision outlines in real time.
                          </p>

                          {/* Tech stack pills */}
                          <div className="flex flex-wrap gap-2 mb-8 font-mono">
                            {['React', 'AI Chat Integration', 'Tailwind CSS', 'Task Architecture', 'LocalStorage / Cloud'].map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-medium px-2.5 py-1 rounded-lg bg-white/[0.05] text-zinc-200 border border-white/10"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
                          <a
                            href="https://github.com/ephraimtessema-lgtm/study-flow.git"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-orange-glow px-5 py-2.5 rounded-xl text-black font-bold text-xs sm:text-sm inline-flex items-center gap-2 cursor-pointer transition-all hover:scale-105"
                          >
                            <svg className="w-4 h-4 fill-black" viewBox="0 0 24 24">
                              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                            <span>View Code</span>
                            <ExternalLink className="w-3.5 h-3.5 text-black" />
                          </a>

                          <button
                            onClick={onOpenModal}
                            className="px-4 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs sm:text-sm font-semibold flex items-center gap-2 transition-colors cursor-pointer"
                          >
                            <span>Live Demo</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </button>
                        </div>
                      </div>

                      {/* Right Side: Visual Mockup representing Planner + AI Chat */}
                      <div className="lg:col-span-6">
                        <div className="w-full rounded-2xl bg-[#0B0F19] border border-white/10 p-4 shadow-2xl relative overflow-hidden">
                          {/* Browser bar */}
                          <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#EF4444]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#EAB308]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#22C55E]" />
                              <span className="ml-2 text-[11px] font-mono text-zinc-400">studyflow.app/workspace</span>
                            </div>
                            <span className="text-[10px] font-mono text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded">
                              AI Connected
                            </span>
                          </div>

                          {/* Split layout inside mockup: Planner vs AI Chat */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                            
                            {/* Panel 1: Task Management */}
                            <div className="rounded-xl bg-[#141824] p-3.5 border border-white/5 flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="font-bold text-white flex items-center gap-1.5">
                                    <CheckSquare className="w-3.5 h-3.5 text-[#FF961B]" />
                                    Study Tasks
                                  </span>
                                  <span className="text-[10px] text-zinc-400 font-mono">3 / 4 completed</span>
                                </div>

                                <div className="space-y-2">
                                  <div className="flex items-center gap-2 p-1.5 rounded bg-white/[0.03] text-zinc-300">
                                    <div className="w-3.5 h-3.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">✓</div>
                                    <span className="line-through text-zinc-500">CS Algorithms Review</span>
                                  </div>
                                  <div className="flex items-center gap-2 p-1.5 rounded bg-white/[0.03] text-zinc-300">
                                    <div className="w-3.5 h-3.5 rounded bg-emerald-500/20 text-emerald-400 flex items-center justify-center text-[10px]">✓</div>
                                    <span className="line-through text-zinc-500">Database Schema Design</span>
                                  </div>
                                  <div className="flex items-center gap-2 p-1.5 rounded bg-[#FF961B]/10 border border-[#FF961B]/20 text-white font-medium">
                                    <div className="w-3.5 h-3.5 rounded border border-orange-400 flex items-center justify-center" />
                                    <span>Distributed Systems Prep</span>
                                  </div>
                                </div>
                              </div>

                              <div className="mt-4 pt-2 border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
                                <span className="flex items-center gap-1">
                                  <Clock className="w-3 h-3 text-[#FF961B]" /> 45m Pomodoro
                                </span>
                                <span className="text-emerald-400 font-mono">Active</span>
                              </div>
                            </div>

                            {/* Panel 2: AI Study Chat */}
                            <div className="rounded-xl bg-[#141824] p-3.5 border border-white/5 flex flex-col justify-between">
                              <div>
                                <div className="flex items-center justify-between mb-3">
                                  <span className="font-bold text-white flex items-center gap-1.5">
                                    <Bot className="w-3.5 h-3.5 text-sky-400" />
                                    AI Study Assistant
                                  </span>
                                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                </div>

                                <div className="space-y-2 text-[11px]">
                                  <div className="bg-white/[0.04] p-2 rounded-lg text-zinc-300">
                                    <span className="text-zinc-500 block text-[9px] font-mono">YOU</span>
                                    "Help me summarize CAP theorem in simple terms."
                                  </div>
                                  <div className="bg-sky-500/10 border border-sky-500/20 p-2 rounded-lg text-sky-200">
                                    <span className="text-sky-400 block text-[9px] font-mono">STUDY-FLOW AI</span>
                                    Consistency, Availability, and Partition Tolerance — you can only guarantee 2 of 3!
                                  </div>
                                </div>
                              </div>

                              <div className="mt-3 p-1.5 rounded bg-white/5 border border-white/5 flex items-center justify-between text-[10px] text-zinc-400">
                                <span>Ask another question...</span>
                                <span className="text-[#FF961B]">Send ↵</span>
                              </div>
                            </div>

                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )}

            {/* Remaining Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-4">
              {filteredProjects
                .filter(p => p.id !== 'study-flow')
                .map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="h-full"
                  >
                    <TiltCard maxTilt={10} glowColor={project.glowColor} className="h-full">
                      <div className="surface-card rounded-3xl p-6 flex flex-col justify-between h-full border border-white/10 group transition-all duration-300 relative overflow-hidden">
                        
                        <div>
                          {/* Visual Placeholder Tailored to Project */}
                          <div className={`w-full aspect-[16/10] rounded-2xl bg-[#0B0F19] border ${project.borderColor} p-3.5 relative overflow-hidden mb-5 flex flex-col justify-between`}>
                            {/* Window / App header */}
                            <div className="flex items-center justify-between pb-2 border-b border-white/5">
                              <div className="flex items-center gap-1.5">
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                                <div className="w-2 h-2 rounded-full bg-white/20" />
                              </div>
                              <span className="text-[10px] font-mono uppercase text-zinc-400 tracking-wider">
                                {project.badge}
                              </span>
                            </div>

                            {/* Center Visual Mockup based on project identity */}
                            {project.id === 'mama-care' && (
                              <div className="p-2 space-y-2">
                                <div className="flex items-center justify-between bg-teal-500/10 border border-teal-500/20 p-2 rounded-lg">
                                  <div className="flex items-center gap-2">
                                    <HeartPulse className="w-4 h-4 text-teal-400" />
                                    <span className="text-xs font-bold text-white">Maternal Care Registry</span>
                                  </div>
                                  <span className="text-[10px] text-teal-300 font-mono">Active Monitoring</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-[10px]">
                                  <div className="bg-white/5 p-2 rounded text-zinc-300">
                                    <span className="text-zinc-500 block text-[8px]">SCHEDULE</span>
                                    Trimester 2 Check
                                  </div>
                                  <div className="bg-white/5 p-2 rounded text-zinc-300">
                                    <span className="text-zinc-500 block text-[8px]">VITALS STATUS</span>
                                    Normal Range ✓
                                  </div>
                                </div>
                              </div>
                            )}

                            {project.id === 'cs-toolkit' && (
                              <div className="p-2 space-y-2 font-mono text-[11px]">
                                <div className="flex items-center justify-between bg-blue-500/10 border border-blue-500/20 p-2 rounded-lg">
                                  <div className="flex items-center gap-1.5 text-blue-300">
                                    <Wrench className="w-3.5 h-3.5" />
                                    <span>algorithm_analyzer.ts</span>
                                  </div>
                                  <span className="text-[9px] text-blue-400">O(n log n)</span>
                                </div>
                                <div className="bg-black/40 p-2 rounded border border-white/5 text-zinc-400 text-[10px] space-y-1">
                                  <div>&gt; binarySearch(target: 42)</div>
                                  <div className="text-emerald-400">✓ Target found at index [6]</div>
                                </div>
                              </div>
                            )}

                            {project.id === 'bethverse' && (
                              <div className="p-2 space-y-2">
                                <div className="flex items-center justify-between bg-purple-500/10 border border-purple-500/20 p-2 rounded-lg">
                                  <div className="flex items-center gap-1.5 text-purple-300">
                                    <ScanText className="w-3.5 h-3.5" />
                                    <span className="text-xs font-bold text-white">የግጥም ማህደር · Amharic OCR</span>
                                  </div>
                                  <span className="text-[9px] font-mono text-purple-400">Digitized</span>
                                </div>
                                <div className="bg-white/[0.03] p-2 rounded border border-white/5 text-zinc-300 text-xs italic">
                                  "በቃላት ሰንሰለት የተቋጠረ ሀሳብ..."
                                  <span className="block text-[9px] not-italic text-zinc-500 mt-1 font-mono">OCR Accuracy: High · Private Vault</span>
                                </div>
                              </div>
                            )}

                            {project.id === 'yididya' && (
                              <div className="p-2 space-y-2">
                                <div className="flex items-center justify-between bg-pink-500/10 border border-pink-500/20 p-2 rounded-lg">
                                  <div className="flex items-center gap-1.5 text-pink-300">
                                    <Music className="w-3.5 h-3.5" />
                                    <span className="text-xs font-bold text-white">Choir Repertoire Manager</span>
                                  </div>
                                  <span className="text-[9px] font-mono text-pink-400">SATB</span>
                                </div>
                                <div className="grid grid-cols-2 gap-2 text-[10px]">
                                  <div className="bg-white/5 p-2 rounded text-zinc-300">
                                    <span className="text-zinc-500 block text-[8px]">REHEARSAL</span>
                                    Vocal Harmony Prep
                                  </div>
                                  <div className="bg-white/5 p-2 rounded text-zinc-300">
                                    <span className="text-zinc-500 block text-[8px]">HYMNS ARCHIVED</span>
                                    Curated Library
                                  </div>
                                </div>
                              </div>
                            )}

                            {project.id === 'johanan' && (
                              <div className="p-2 space-y-2">
                                <div className="flex items-center justify-between bg-indigo-500/10 border border-indigo-500/20 p-2 rounded-lg">
                                  <div className="flex items-center gap-1.5 text-indigo-300">
                                    <BookOpen className="w-3.5 h-3.5" />
                                    <span className="text-xs font-bold text-white">Literature Editorial Hub</span>
                                  </div>
                                  <span className="text-[9px] font-mono text-indigo-400">Review</span>
                                </div>
                                <div className="bg-white/5 p-2 rounded text-[10px] text-zinc-300 space-y-1">
                                  <div className="flex items-center justify-between">
                                    <span>Manuscript Draft #4</span>
                                    <span className="text-emerald-400">Approved</span>
                                  </div>
                                  <div className="text-zinc-500 text-[9px]">Editorial comments compiled</div>
                                </div>
                              </div>
                            )}

                            {/* Bottom status line */}
                            <div className="pt-1.5 border-t border-white/5 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                              <span>{project.categories.join(' · ')}</span>
                              {project.isPrivate ? (
                                <span className="text-amber-400 flex items-center gap-1">
                                  <Lock className="w-2.5 h-2.5" /> Private
                                </span>
                              ) : (
                                <span className="text-emerald-400">
                                  {project.categories.includes('Mobile') ? 'Mobile App' : 'Web App'}
                                </span>
                              )}
                            </div>
                          </div>

                          {/* Category and Title */}
                          <div className="text-xs font-semibold text-[#FFAE42] uppercase tracking-wide mb-1 font-mono">
                            {project.status}
                          </div>

                          <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#FF961B] transition-colors tracking-tight">
                            {project.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed mb-4">
                            {project.description}
                          </p>

                          {/* Tech stack tags */}
                          <div className="flex flex-wrap gap-1.5 mb-6 font-mono">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="text-[11px] font-medium px-2 py-0.5 rounded-md bg-white/[0.05] text-zinc-300 border border-white/5"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Card Actions: View Code & Live Demo */}
                        <div className="pt-4 border-t border-white/5">
                          <div className="flex items-center justify-between">
                            {project.githubUrl && project.githubUrl !== '#' ? (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-300 hover:text-white transition-colors py-1.5 px-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 font-mono cursor-pointer"
                              >
                                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                                </svg>
                                <span>View Code</span>
                                <ExternalLink className="w-3 h-3 text-zinc-500" />
                              </a>
                            ) : (
                              <button
                                onClick={onOpenModal}
                                title="Private repository · Placeholder link"
                                className="inline-flex items-center gap-1.5 text-xs font-semibold text-zinc-500 hover:text-zinc-300 transition-colors py-1.5 px-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 font-mono cursor-pointer"
                              >
                                <Lock className="w-3 h-3 text-amber-500/80" />
                                <span>View Code</span>
                              </button>
                            )}

                            <button
                              onClick={onOpenModal}
                              className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#FF961B] hover:text-[#FFAE42] transition-colors py-1.5 px-3 rounded-lg bg-[#FF961B]/10 hover:bg-[#FF961B]/20 border border-[#FF961B]/20 cursor-pointer"
                            >
                              <span>Live Demo</span>
                              <ArrowUpRight className="w-3.5 h-3.5" />
                            </button>
                          </div>
                        </div>

                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
            </div>

          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
