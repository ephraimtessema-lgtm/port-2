import React from 'react';
import { ArrowRight, Check, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import DeveloperTerminal from './DeveloperTerminal';

export default function About({ onOpenModal }) {
  const points = [
    'Computer Science & Engineering fundamentals',
    'Full-stack web & mobile development',
    'Thoughtful UI/UX design & product thinking',
    'Continuous learner with a builder\'s mindset',
  ];

  return (
    <section id="about" className="relative py-20 md:py-28 overflow-hidden bg-dev-lines scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top 2-Column Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-14">
          
          {/* Left Column: Heading & About Text with scroll reveal */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#FF961B]" />
              <span className="text-[#FF961B] text-xs font-bold tracking-widest uppercase">
                ABOUT ME
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-6">
              More than good-<br className="hidden sm:inline" />
              looking <span className="text-[#FF961B]">screens.</span>
            </h2>

            {/* Exact text provided by user */}
            <div className="space-y-4 text-base sm:text-lg text-zinc-300 font-normal leading-relaxed mb-6 max-w-xl">
              <p>
                I'm Ephraim, a Computer Science and Engineering student at ASTU (Adama Science and Technology University) in Ethiopia, passionate about software development, thoughtful UI/UX, and building products that solve real-world problems.
              </p>
              <p>
                I turn ideas into digital experiences through code, continuous experimentation, and a strong commitment to learning. From web applications to mobile projects, I'm always exploring new ways to build better software.
              </p>
              <p>
                Currently learning, building, and pushing beyond what I already know.
              </p>
            </div>

            {/* Quote block */}
            <div className="border-l-2 border-[#FF961B] pl-4 py-1 mb-8">
              <p className="text-sm sm:text-base text-[#FFAE42] italic font-mono font-medium">
                Curious mind. Builder's mindset. Engineer in progress.
              </p>
            </div>

            <button
              onClick={onOpenModal}
              className="btn-orange-glow px-6 py-3.5 rounded-full text-black font-semibold text-sm sm:text-base flex items-center gap-2 cursor-pointer transition-all"
            >
              <span>Connect With Me</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </motion.div>

          {/* Right Column: Why Work With Me 3D Tilt Card */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <TiltCard maxTilt={10} glowColor="rgba(255, 150, 27, 0.12)">
              <div className="surface-card rounded-3xl p-8 sm:p-10 border border-white/10 shadow-2xl relative overflow-hidden">
                {/* Subtle inner ambient glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/5 rounded-full blur-2xl pointer-events-none" />

                <div className="flex items-center gap-2 mb-6">
                  <span className="w-4 h-[2px] bg-[#FF961B]" />
                  <span className="text-[#FF961B] text-xs font-bold tracking-widest uppercase">
                    WHY WORK WITH ME
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  {points.map((point) => (
                    <div key={point} className="flex items-start gap-3.5 group">
                      <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                      <span className="text-sm sm:text-base font-semibold text-white tracking-tight leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          </motion.div>

        </div>

        {/* Developer Sandbox / Interactive Terminal Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-6"
        >
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <Cpu className="w-3.5 h-3.5 text-[#FF961B]" />
              <span>LIVE DEVELOPER RUNTIME</span>
            </div>
            <span className="text-[11px] font-mono text-emerald-400">
              ● status: compiling ideas
            </span>
          </div>
          <DeveloperTerminal />
        </motion.div>

      </div>
    </section>
  );
}
