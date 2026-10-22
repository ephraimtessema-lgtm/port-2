import React from 'react';
import { ArrowUpRight, Mail, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function CallToAction({ onOpenModal }) {
  return (
    <section id="contact" className="relative py-16 md:py-24 bg-dev-lines scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Main CTA Card with 3D Tilt and scroll reveal */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard maxTilt={6} glowColor="rgba(255, 150, 27, 0.2)">
            <div className="surface-card rounded-3xl p-10 sm:p-14 lg:p-20 text-center relative overflow-hidden border border-white/10 shadow-2xl">
              
              {/* Top Amber Atmospheric Glow */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 bg-[#FF961B]/15 rounded-full blur-3xl pointer-events-none" />

              {/* Section Tag */}
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="w-5 h-[2px] bg-[#FF961B]" />
                <span className="text-[#FF961B] text-xs font-bold tracking-widest uppercase font-mono">
                  LET'S CONNECT
                </span>
              </div>

              {/* Headline */}
              <h2 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15] mb-5">
                Open for opportunities &<br />
                ideas worth <span className="text-[#FF961B]">building.</span>
              </h2>

              {/* Subtitle inviting recruiters, developers, collaborators */}
              <p className="text-base sm:text-lg text-zinc-300 font-normal max-w-2xl mx-auto mb-9 leading-relaxed">
                Whether you are a recruiter looking for an aspiring software engineer, a fellow developer eager to collaborate on a project, or a founder building something new — let's connect!
              </p>

              {/* Button */}
              <button
                onClick={onOpenModal}
                className="btn-orange-glow px-8 py-4 rounded-full text-black font-bold text-base sm:text-lg inline-flex items-center gap-2.5 cursor-pointer shadow-xl mb-12 hover:scale-105 transition-transform"
              >
                <span>Send a Message</span>
                <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
              </button>

              {/* Contact Details & Social Links Row */}
              <div className="pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-xs sm:text-sm text-zinc-300 font-medium">
                {/* Email */}
                <a
                  href="mailto:ephraimtessema@gmail.com"
                  className="flex items-center gap-2 hover:text-[#FF961B] transition-colors"
                >
                  <Mail className="w-4 h-4 text-[#FF961B]" />
                  <span className="font-mono">ephraimtessema@gmail.com</span>
                </a>

                {/* Telegram */}
                <a
                  href="https://t.me/ephion_dev"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF961B] transition-colors"
                >
                  <Send className="w-4 h-4 text-[#FF961B]" />
                  <span>Telegram (@ephion_dev)</span>
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/epha_tess?cplk=MWgyejUwOGtoZW9ycA=="
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF961B] transition-colors"
                >
                  <svg className="w-4 h-4 fill-[#FF961B]" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                  <span>Instagram (@epha_tess)</span>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/ephraimtessema-lgtm"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 hover:text-[#FF961B] transition-colors"
                >
                  <svg className="w-4 h-4 fill-[#FF961B]" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                  </svg>
                  <span>GitHub</span>
                </a>

                <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs">
                  <MapPin className="w-4 h-4 text-[#FF961B]" />
                  <span>Remote & Onsite</span>
                </div>
              </div>

            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
