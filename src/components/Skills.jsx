import React from 'react';
import { 
  Code2, 
  Smartphone, 
  Database, 
  GitBranch, 
  Check, 
  ArrowRight
} from 'lucide-react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

export default function Skills({ onOpenModal }) {
  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: Code2,
      accent: '#FF961B',
      glow: 'rgba(255, 150, 27, 0.2)',
      iconBg: 'bg-amber-500/10 text-amber-400 border border-amber-500/20',
      skills: [
        { name: 'HTML5 & CSS3', desc: 'Web structure and styling' },
        { name: 'JavaScript', desc: 'Application logic and interactivity' },
        { name: 'React', desc: 'Component-based user interfaces' },
        { name: 'Tailwind CSS', desc: 'Responsive, utility-first styling' },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile Development',
      icon: Smartphone,
      accent: '#8B5CF6',
      glow: 'rgba(139, 92, 246, 0.2)',
      iconBg: 'bg-purple-500/10 text-purple-400 border border-purple-500/20',
      skills: [
        { name: 'React Native', desc: 'Cross-platform mobile applications' },
        { name: 'Expo', desc: 'Mobile development and application tooling' },
        { name: 'Flutter & Dart', desc: 'Cross-platform application development' },
      ],
    },
    {
      id: 'backend',
      title: 'Backend & Databases',
      icon: Database,
      accent: '#10B981',
      glow: 'rgba(16, 185, 129, 0.2)',
      iconBg: 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20',
      skills: [
        { name: 'Node.js', desc: 'Server-side JavaScript development' },
        { name: 'SQL', desc: 'Relational database fundamentals' },
        { name: 'Firebase', desc: 'Backend services and application integration' },
        { name: 'Supabase', desc: 'Database-backed applications and backend services' },
      ],
    },
    {
      id: 'tools',
      title: 'Development Tools',
      icon: GitBranch,
      accent: '#3B82F6',
      glow: 'rgba(59, 130, 246, 0.2)',
      iconBg: 'bg-blue-500/10 text-blue-400 border border-blue-500/20',
      skills: [
        { name: 'Git', desc: 'Version control' },
        { name: 'GitHub', desc: 'Source code management and collaboration' },
      ],
    },
  ];

  const focusPoints = [
    'Building complete applications from frontend to backend',
    'Improving application architecture and code quality',
    'Developing reliable database integrations',
    'Creating intuitive, responsive user experiences',
  ];

  return (
    <section id="skills" className="relative py-20 md:py-28 ambient-glow-section bg-dev-lines scroll-mt-28">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 max-w-3xl"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="w-5 h-[2px] bg-[#FF961B]" />
            <span className="text-[#FF961B] text-xs font-bold tracking-widest uppercase font-mono">
              SKILLS & TECHNOLOGIES
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight mb-5">
            Skills & <span className="text-[#FF961B]">Technologies.</span>
          </h2>

          <p className="text-base sm:text-lg text-zinc-300 font-normal leading-relaxed">
            I work across web and mobile development, building functional applications with modern technologies. I'm continuously strengthening my skills in software engineering, backend development, and database integration through hands-on projects.
          </p>
        </motion.div>

        {/* 4 Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-full"
              >
                <TiltCard maxTilt={8} glowColor={category.glow} className="h-full">
                  <div className="surface-card rounded-3xl p-7 sm:p-8 flex flex-col justify-between h-full border border-white/10 group transition-all duration-300 relative overflow-hidden">
                    {/* Top Accent bar */}
                    <div 
                      className="absolute top-0 left-0 right-0 h-1 transition-opacity duration-300" 
                      style={{ background: `linear-gradient(90deg, transparent, ${category.accent}, transparent)` }}
                    />

                    <div>
                      {/* Category Header */}
                      <div className="flex items-center gap-3.5 mb-6">
                        <div className={`w-11 h-11 rounded-2xl flex items-center justify-center ${category.iconBg}`}>
                          <Icon className="w-5 h-5 stroke-[2.2]" />
                        </div>
                        <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#FF961B] transition-colors">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="space-y-4">
                        {category.skills.map((skill) => (
                          <div 
                            key={skill.name}
                            className="p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/5 transition-colors"
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: category.accent }} />
                              <span className="text-sm font-bold text-white tracking-tight">
                                {skill.name}
                              </span>
                            </div>
                            <p className="text-xs text-zinc-400 pl-3.5 leading-relaxed">
                              {skill.desc}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
                      <span className="text-[11px] font-mono text-zinc-500 uppercase">
                        {category.skills.length} core technologies
                      </span>
                      <button
                        onClick={onOpenModal}
                        className="text-xs font-semibold text-[#FF961B] hover:text-[#FFAE42] flex items-center gap-1 cursor-pointer transition-colors"
                      >
                        <span>Discuss Stack</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>

        {/* Current Focus Highlight Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard maxTilt={6} glowColor="rgba(255, 150, 27, 0.15)">
            <div className="surface-card rounded-3xl p-8 sm:p-10 border border-white/10 relative overflow-hidden shadow-2xl">
              {/* Subtle top right ambient glow */}
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF961B]/10 rounded-full blur-3xl pointer-events-none" />

              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                <div className="max-w-xl">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="w-4 h-[2px] bg-[#FF961B]" />
                    <span className="text-[#FF961B] text-xs font-bold tracking-widest uppercase font-mono">
                      CURRENT FOCUS
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-4">
                    Pushing engineering breadth & depth.
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-6">
                    {focusPoints.map((point) => (
                      <div key={point} className="flex items-start gap-2.5">
                        <div className="w-5 h-5 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 flex-shrink-0 mt-0.5">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span className="text-xs sm:text-sm text-zinc-300 font-medium leading-snug">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Motto quote */}
                  <div className="border-l-2 border-[#FF961B] pl-3.5 py-1">
                    <p className="text-xs sm:text-sm text-[#FFAE42] italic font-mono">
                      "Learning by building. Improving through iteration. Engineering with purpose."
                    </p>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
                  <button
                    onClick={onOpenModal}
                    className="btn-orange-glow px-6 py-3.5 rounded-full text-black font-semibold text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                  >
                    <span>Connect with Ephraim</span>
                    <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                  </button>

                  <a
                    href="#projects"
                    className="px-6 py-3.5 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 text-sm font-medium flex items-center justify-center gap-2 transition-colors"
                  >
                    <span>View Projects</span>
                  </a>
                </div>
              </div>

            </div>
          </TiltCard>
        </motion.div>

      </div>
    </section>
  );
}
