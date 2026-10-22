import React, { useState, useEffect, useRef } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';

export default function Navbar({ onOpenModal }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(() => {
    if (typeof window !== 'undefined') {
      const hash = window.location.hash.replace('#', '');
      const valid = ['home', 'about', 'skills', 'projects', 'contact'];
      if (hash && valid.includes(hash)) return hash;
    }
    return 'home';
  });
  const isClickScrolling = useRef(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  // Scrollspy to detect active section accurately
  useEffect(() => {
    const sectionIds = ['home', 'about', 'skills', 'projects', 'contact'];

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // If user recently clicked a link, let the smooth scroll complete before overriding
      if (isClickScrolling.current) return;

      // Bottom of page check -> activate 'contact'
      const isBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 80;
      if (isBottom) {
        setActiveSection('contact');
        return;
      }

      // Top of page check -> activate 'home'
      if (window.scrollY < 80) {
        setActiveSection('home');
        return;
      }

      // Check section bounding positions
      // An offset of 140 accounts for the fixed floating navbar height and comfortable reading line
      const offset = 140;
      let current = 'home';

      for (let i = 0; i < sectionIds.length; i++) {
        const id = sectionIds[i];
        const element = document.getElementById(id);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= offset) {
            current = id;
          }
        }
      }

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Smooth click navigation
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActiveSection(targetId);
    isClickScrolling.current = true;

    // Update URL hash without causing a page jump
    window.history.pushState(null, '', `#${targetId}`);

    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }

    // Reset lock after scroll completes
    setTimeout(() => {
      isClickScrolling.current = false;
    }, 800);
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 px-4 sm:px-6 pointer-events-none">
      <nav 
        aria-label="Main Navigation"
        className={`max-w-4xl mx-auto rounded-full px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between glass-nav pointer-events-auto transition-all duration-300 ${
          scrolled ? 'shadow-2xl shadow-black/80 bg-[#101422]/90' : 'bg-[#121624]/80'
        }`}
      >
        {/* Logo */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, 'home')}
          className="flex items-center gap-2 group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF961B] rounded-full"
          aria-label="Ephraim home"
        >
          <div className="w-8 h-8 rounded-full bg-[#FF961B] flex items-center justify-center font-bold text-black text-base shadow-md shadow-orange-500/20 group-hover:scale-105 transition-transform">
            E
          </div>
          <span className="font-bold text-white text-base tracking-tight">
            Ephraim<span className="text-[#FF961B]">.</span>
          </span>
        </a>

        {/* Desktop Links with Refined Active State & Subtle Underline */}
        <div className="hidden md:flex items-center gap-7 text-sm font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.id)}
                className={`relative py-1 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF961B] rounded ${
                  isActive 
                    ? 'text-[#FF961B]' 
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{link.label}</span>
                
                {/* Short, subtle orange underline */}
                {isActive && (
                  <span 
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-[2px] bg-[#FF961B] rounded-full transition-all duration-300" 
                    aria-hidden="true"
                  />
                )}
              </a>
            );
          })}
        </div>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center">
          <button
            onClick={onOpenModal}
            className="btn-orange-glow px-4 py-1.5 sm:py-2 rounded-full text-black font-semibold text-xs sm:text-sm flex items-center gap-1.5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={onOpenModal}
            className="btn-orange-glow px-3 py-1.5 rounded-full text-black font-semibold text-xs flex items-center gap-1"
          >
            <span>Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-1.5 text-zinc-400 hover:text-white rounded-lg focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#FF961B]"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden max-w-xs mx-auto mt-2 rounded-2xl glass-nav p-3 flex flex-col gap-1.5 pointer-events-auto shadow-2xl animate-in fade-in slide-in-from-top-2 duration-200 border border-white/10 bg-[#101422]/95 backdrop-blur-xl">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => {
                  setMobileMenuOpen(false);
                  handleNavClick(e, link.id);
                }}
                className={`text-sm font-medium py-2 px-3 rounded-xl flex items-center justify-between transition-colors ${
                  isActive
                    ? 'text-[#FF961B] bg-white/[0.04] font-semibold'
                    : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.02]'
                }`}
                aria-current={isActive ? 'page' : undefined}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF961B]" aria-hidden="true" />
                )}
              </a>
            );
          })}
          
          <div className="border-t border-white/10 pt-2.5 mt-1 px-1">
            <button
              onClick={() => { setMobileMenuOpen(false); onOpenModal(); }}
              className="w-full btn-orange-glow py-2 rounded-xl text-black font-semibold text-xs flex items-center justify-center gap-1 cursor-pointer"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
