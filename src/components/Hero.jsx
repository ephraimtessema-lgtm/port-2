import React from 'react';
import { Sparkles, ArrowUpRight, MessageSquare, GraduationCap, Code2, GitBranch } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function Hero({ onOpenModal }) {
  const shouldReduceMotion = useReducedMotion();

  // Gentle, restrained floating keyframes respecting reduced motion
  const floatingAnimation1 = shouldReduceMotion 
    ? { y: 0 } 
    : { y: [0, -4, 0] };

  const floatingAnimation2 = shouldReduceMotion 
    ? { y: 0 } 
    : { y: [0, 4, 0] };

  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden ambient-glow-hero bg-dev-lines scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Pitch with Scroll Entrance */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col items-start z-10"
          >
            {/* Developer System Status Tag */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold tracking-wider text-zinc-300 uppercase backdrop-blur-sm shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-[#FF961B]" />
                <span>CS & ENGINEERING · SOFTWARE ENGINEER · BUILDER</span>
              </div>

              {/* Git Status Pill */}
              <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                <GitBranch className="w-3 h-3" />
                <span>main: ready_to_ship</span>
              </div>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1] mb-5">
              Hi, I'm{' '}
              <span className="text-[#FF961B] block sm:inline">
                Ephraim Tessema.
              </span>
            </h1>

            {/* Hero Headline */}
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-snug mb-4">
              Building Ideas Into <span className="text-[#FF961B]">Reality.</span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-zinc-300 font-medium leading-relaxed max-w-xl mb-3">
              Computer Science and Engineering Student | Aspiring Software Engineer.
            </p>

            {/* Mindset quote with code accent */}
            <div className="flex items-center gap-2 mb-8 bg-white/[0.03] border border-white/5 px-3.5 py-2 rounded-xl">
              <span className="text-[#FF961B] font-mono text-xs">&gt;</span>
              <p className="text-sm sm:text-base text-zinc-300 italic font-mono">
                "Curious mind. Builder's mindset. Engineer in progress."
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="btn-orange-glow px-6 py-3.5 rounded-full text-black font-semibold text-sm sm:text-base flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>View Projects</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </a>

              <button
                onClick={onOpenModal}
                className="px-6 py-3.5 rounded-full bg-[#141824]/90 hover:bg-[#1a2030] text-white border border-white/15 font-medium text-sm sm:text-base flex items-center gap-2.5 transition-all hover:border-white/25 cursor-pointer shadow-lg"
              >
                <MessageSquare className="w-4 h-4 text-zinc-300" />
                <span>Let's Talk</span>
              </button>
            </div>
          </motion.div>

          {/* Right Column: 3D Interactive Hero Portrait & Refined Floating Cards */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 relative flex justify-center items-center mt-6 lg:mt-0"
          >
            
            {/* Ambient Warm Backlight Glow */}
            <div className="absolute w-72 h-72 sm:w-96 sm:h-96 rounded-full bg-orange-500/10 blur-3xl pointer-events-none -z-10" />

            {/* Decorative Stars */}
            <div className="absolute -top-3 left-10 sm:left-14 text-[#FF961B] animate-pulse">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            <div className="absolute bottom-4 right-2 sm:right-6 text-sky-400">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0L14.5 9.5L24 12L14.5 14.5L12 24L9.5 14.5L0 12L9.5 9.5L12 0Z" />
              </svg>
            </div>

            {/* 3D Tilt Wrapper for Avatar & Refined Floating Badges */}
            <TiltCard maxTilt={12} glowColor="rgba(255, 150, 27, 0.18)" className="cursor-pointer">
              
              {/* Main Avatar Container - Preserving Circular Frame & Crop */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-88 md:h-88 rounded-full p-2 bg-[#F6EFE6]/90 shadow-2xl shadow-black/80 ring-8 ring-white/5 preserve-3d">
                <div className="w-full h-full rounded-full overflow-hidden bg-slate-900 relative">
                  <img
                    src="/ephraim_hero.png"
                    alt="Ephraim Tessema"
                    className="w-full h-full object-cover object-top"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/avatar_hq.jpg';
                    }}
                  />
                </div>
              </div>

              {/* Card 1: Top-Right (Slightly overlapping upper-right edge) */}
              <motion.div 
                animate={floatingAnimation1}
                transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 sm:top-2 sm:-right-4 lg:top-4 lg:-right-6 bg-[#121624]/90 backdrop-blur-md border border-white/10 rounded-2xl px-3 sm:px-3.5 py-2 flex items-center gap-2.5 shadow-xl shadow-black/50 translate-z-30 max-w-[210px] sm:max-w-[230px]"
              >
                <div className="w-7 h-7 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <GraduationCap className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs font-bold text-white leading-tight truncate">
                    CSE Student
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 leading-tight truncate mt-0.5">
                    Software Engineering in Progress
                  </div>
                </div>
              </motion.div>

              {/* Card 2: Lower-Left (Near lower-left edge, overlapping frame without obscuring face) */}
              <motion.div 
                animate={floatingAnimation2}
                transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                className="absolute bottom-4 -left-2 sm:bottom-6 sm:-left-5 lg:bottom-8 lg:-left-7 bg-[#121624]/90 backdrop-blur-md border border-white/10 rounded-2xl px-3 sm:px-3.5 py-2 flex items-center gap-2.5 shadow-xl shadow-black/50 translate-z-30 max-w-[210px] sm:max-w-[230px]"
              >
                <div className="w-7 h-7 rounded-xl bg-amber-500/15 border border-amber-500/20 flex items-center justify-center text-amber-400 flex-shrink-0">
                  <Code2 className="w-3.5 h-3.5 stroke-[2.2]" />
                </div>
                <div className="text-left overflow-hidden">
                  <div className="text-xs font-bold text-white leading-tight truncate">
                    Building Web & Mobile
                  </div>
                  <div className="text-[10px] sm:text-[11px] text-zinc-400 leading-tight truncate mt-0.5">
                    Learning by Building
                  </div>
                </div>
              </motion.div>

            </TiltCard>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
