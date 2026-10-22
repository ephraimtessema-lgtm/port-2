import React from 'react';
import { Mail, Send } from 'lucide-react';

export default function Footer({ onOpenModal }) {
  const skills = [
    'HTML5 & CSS3',
    'JavaScript',
    'React',
    'React Native',
    'Expo',
    'Flutter & Dart',
    'Node.js',
    'SQL',
    'Firebase',
    'Supabase',
    'Tailwind CSS',
    'Git & GitHub',
  ];

  const exploreLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills & Stack', href: '#skills' },
    { label: 'Featured Projects', href: '#projects' },
    { label: 'Contact', action: onOpenModal },
  ];

  return (
    <footer className="relative pt-16 pb-12 border-t border-white/5 bg-[#070910]">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Top 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-12 pb-14">
          
          {/* Left Column: Identity & Skills */}
          <div className="md:col-span-6 flex flex-col items-start">
            {/* Logo */}
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#FF961B] flex items-center justify-center font-bold text-black text-base shadow-md">
                E
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                Ephraim Tessema
              </span>
            </div>

            {/* Subtitles */}
            <p className="text-sm font-medium text-zinc-300 mb-1">
              Computer Science & Engineering Student | Aspiring Software Engineer
            </p>
            <p className="text-xs text-zinc-500 italic mb-5">
              "Curious mind. Builder's mindset. Engineer in progress."
            </p>

            {/* Skill Badges */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/10"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Center Column: Explore Links */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4 tracking-wide font-mono">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-zinc-400">
              {exploreLinks.map((item) => (
                <li key={item.label}>
                  {item.action ? (
                    <button
                      onClick={item.action}
                      className="hover:text-white transition-colors cursor-pointer text-left"
                    >
                      {item.label}
                    </button>
                  ) : (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column: Find Me / Socials */}
          <div className="md:col-span-3">
            <h4 className="text-sm font-bold text-white mb-4 tracking-wide font-mono">
              Find me
            </h4>
            <div className="flex items-center gap-2.5">
              {/* GitHub */}
              <a
                href="https://github.com/ephraimtessema-lgtm"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/25 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="GitHub"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                </svg>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/ephion_dev"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/25 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/epha_tess?cplk=MWgyejUwOGtoZW9ycA=="
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/25 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:ephraimtessema@gmail.com"
                className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/10 hover:border-white/25 text-zinc-300 hover:text-white flex items-center justify-center transition-all"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Disclaimer & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col items-center justify-center text-center gap-2">
          <p className="text-xs text-zinc-500 max-w-2xl leading-relaxed">
            Designed & developed with precision. Always learning, building, and pushing boundaries.
          </p>
          <p className="text-xs text-zinc-600 font-medium">
            © 2026 Ephraim Tessema. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
