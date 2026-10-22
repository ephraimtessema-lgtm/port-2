import React, { useState, useRef, useEffect } from 'react';
import { 
  Bot, 
  X, 
  Send, 
  Sparkles, 
  Maximize2, 
  Minimize2,
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AIChatWidget({ onOpenContactModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [sessionCount, setSessionCount] = useState(0);
  const [isCooldown, setIsCooldown] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  const messageIdRef = useRef(100);

  const MAX_SESSION_MESSAGES = 20;

  const initialMessages = [
    {
      id: 1,
      sender: 'ai',
      text: "Hi there! I'm Ephraim's AI portfolio guide. Ask me anything about Ephraim Tessema — his technical stack, featured projects, mobile & web development, or collaboration and hiring opportunities.",
      timestamp: 'Just now',
    },
  ];

  const [messages, setMessages] = useState(initialMessages);

  const quickQuestions = [
    "What technologies does Ephraim use?",
    "Tell me about Study-Flow",
    "Is Ephraim available for internships/work?",
    "What mobile applications has he built?",
    "How can I contact Ephraim?",
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
      // Auto-focus input when opened
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [messages, isOpen, isTyping]);

  // Keyboard accessibility: Escape to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // 1. Instant Predefined Intent Matcher (Instant, zero-latency, zero token cost)
  const getPredefinedResponse = (query) => {
    const q = query.toLowerCase().trim();

    // Greetings
    if (q === 'hi' || q === 'hello' || q === 'hey' || q === 'sup' || q === 'greetings' || q === 'good morning' || q === 'good afternoon') {
      return "Hello! Great to meet you. I'm here to answer any questions you have about Ephraim Tessema, his software projects, technical skills, or how you can collaborate together.";
    }

    // Who is Ephraim / Background / Education / ASTU / Ethiopia
    if (q.includes('who is') || q.includes('about ephraim') || q.includes('background') || q.includes('bio') || q.includes('astu') || q.includes('university') || q.includes('ethiopia') || q.includes('education') || q.includes('student') || q.includes('tell me about yourself')) {
      return "Ephraim Tessema is a Computer Science and Engineering (CSE) student at ASTU (Adama Science and Technology University) in Ethiopia, and an aspiring Software Engineer. He builds digital experiences across web and mobile development, grounded in strong CS fundamentals, intuitive UI/UX design, and practical problem-solving. His mindset is: 'Curious mind. Builder's mindset. Engineer in progress.'";
    }

    // Skills & Stack (Strictly verified authentic stack)
    if (q === 'what technologies does ephraim use?' || q.includes('skills') || q.includes('technologies') || q.includes('tech stack') || q.includes('languages') || q.includes('frameworks')) {
      return "Ephraim's core technical stack covers:\n\n• Frontend: HTML5 & CSS3, JavaScript, React, Tailwind CSS\n• Mobile: React Native, Expo, Flutter & Dart\n• Backend & Databases: Node.js, SQL, Firebase, Supabase\n• Development Tools: Git, GitHub, Amharic OCR integration\n\nHe is continuously building end-to-end full-stack and mobile applications.";
    }

    // Study-Flow Project
    if (q === 'tell me about study-flow' || q.includes('study-flow') || q.includes('study flow') || (q.includes('study') && q.includes('planner'))) {
      return "Study-Flow is one of Ephraim's prominent featured projects! It is an academic study planner and productivity application that combines smart task management, milestone tracking, and an integrated AI study assistant designed to answer complex academic queries and generate revision outlines in real time.\n\nGitHub: https://github.com/ephraimtessema-lgtm/study-flow.git";
    }

    // Mama-Care Project
    if (q.includes('mama-care') || q.includes('mama care') || (q.includes('maternal') && q.includes('health'))) {
      return "Mama-Care is a healthcare-focused web application built to provide reliable patient guidance and maternal healthcare support, offering structured symptom tracking and prenatal/postnatal care schedules.\n\nGitHub: https://github.com/ephraimtessema-lgtm/Mama-Care.git";
    }

    // CS-Toolkit Project
    if (q.includes('cs-toolkit') || q.includes('cs toolkit') || q.includes('toolkit')) {
      return "CS-Toolkit is a dedicated utility platform engineered for computer science students and engineers. It consolidates interactive algorithm analysis helpers, data structure visualizers, and computational conversion tools.\n\nGitHub: https://github.com/ephraimtessema-lgtm/cs-toolkit-pro.git";
    }

    // BethVerse & Amharic OCR
    if (q.includes('bethverse') || q.includes('beth verse') || q.includes('poetry') || q.includes('ocr') || q.includes('amharic')) {
      return "BethVerse is a mobile poetry vault designed for verse curation and reading. A standout technical achievement in BethVerse is Ephraim's integration of Amharic OCR (Optical Character Recognition), enabling physical poetry manuscripts to be scanned and digitized into text.\n\nGitHub: https://github.com/ephraimtessema-lgtm/bethverse.git";
    }

    // Yididya Project
    if (q.includes('yididya') || (q.includes('choir') && q.includes('app'))) {
      return "Yididya is a private mobile application designed specifically for a choral team to manage hymn repertoires, track SATB vocal parts, and coordinate rehearsal schedules and internal communications.";
    }

    // Johanan Project
    if (q.includes('johanan') || (q.includes('literature') && q.includes('app'))) {
      return "Johanan is a private mobile application built for a literature and writing team to streamline manuscript draft reviews, author collaboration, and editorial release workflows.";
    }

    // Mobile applications
    if (q === 'what mobile applications has he built?' || q.includes('mobile apps') || q.includes('mobile applications')) {
      return "Ephraim develops cross-platform mobile applications using React Native with Expo as well as Flutter & Dart. His mobile work includes:\n\n• BethVerse: Mobile Poetry Vault with Amharic OCR\n• Yididya: Private Choir Repertoire & Schedule Manager\n• Johanan: Private Literature Team Editorial Platform";
    }

    // Availability / Hiring
    if (q === 'is ephraim available for internships/work?' || q.includes('hire') || q.includes('internship') || q.includes('job') || q.includes('available for work') || q.includes('freelance')) {
      return "Yes! Ephraim is actively open to Software Engineering internships, junior developer roles, and select freelance or collaborative projects. You can reach out directly via email at ephraimtessema@gmail.com, through Telegram (@ephion_dev), or by clicking the 'Let's Talk' button on this site.";
    }

    // Contact
    if (q === 'how can i contact ephraim?' || q.includes('contact') || q.includes('email') || q.includes('social') || q.includes('telegram') || q.includes('reach out')) {
      return "You can get in touch with Ephraim through:\n\n• Email: ephraimtessema@gmail.com\n• Telegram: https://t.me/ephion_dev (@ephion_dev)\n• Instagram: https://www.instagram.com/epha_tess (@epha_tess)\n• GitHub: https://github.com/ephraimtessema-lgtm\n• On-site Contact Form: Click 'Let's Talk' or 'Send a Message'\n\nHe responds to client and recruitment inquiries within 1–2 business days!";
    }

    // Confidentiality
    if (q.includes('private') || q.includes('confidential') || q.includes('nda')) {
      return "Ephraim takes confidentiality seriously. Several of his mobile applications (Yididya, Johanan) are private proprietary systems and their source code and private data are protected.";
    }

    return null;
  };

  // 2. Fallback Knowledge Engine (Used when API is unavailable or unconfigured)
  const getFallbackResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('astu') || q.includes('university') || q.includes('ethiopia') || q.includes('school') || q.includes('education') || q.includes('degree')) {
      return "Ephraim is a Computer Science and Engineering (CSE) student at Adama Science and Technology University (ASTU) in Ethiopia. He combines rigorous CS fundamentals with practical software engineering across full-stack and mobile applications.";
    }

    if (q.includes('react') || q.includes('frontend') || q.includes('web')) {
      return "In frontend engineering, Ephraim specializes in React, JavaScript (ES6+), HTML5/CSS3, and Tailwind CSS. He emphasizes modular component architecture, accessible UI design, and responsive layouts across all devices.";
    }

    if (q.includes('mobile') || q.includes('flutter') || q.includes('react native') || q.includes('expo')) {
      return "Ephraim builds cross-platform mobile apps with both React Native (Expo) and Flutter & Dart, with experience building features like OCR text transcription, offline storage, and state management.";
    }

    if (q.includes('backend') || q.includes('database') || q.includes('sql') || q.includes('node') || q.includes('supabase') || q.includes('firebase')) {
      return "For backend and data systems, Ephraim works with Node.js, relational SQL databases, Supabase, and Firebase, with a focus on clean database schemas, authentication, and reliable data flow.";
    }

    return "I am specialized strictly in answering questions about Ephraim Tessema — his software engineering background, technical stack, featured projects, and client/work opportunities. Feel free to ask about his tech stack, mobile or web apps, or reach out to him directly via the 'Let's Talk' button!";
  };

  // 3. Hybrid Dispatch Handler
  const handleSend = async (textToSend = input) => {
    const text = textToSend.trim();
    if (!text || isTyping || isCooldown) return;

    if (text.length > 500) {
      alert("Message exceeds maximum length of 500 characters.");
      return;
    }

    // Session cost limit protection
    if (sessionCount >= MAX_SESSION_MESSAGES) {
      const limitMessage = {
        id: ++messageIdRef.current,
        sender: 'ai',
        text: "You have reached the conversation limit for this session. To discuss your project, hiring, or collaboration further, please reach out directly to Ephraim via email (ephraimtessema@gmail.com) or Telegram (@ephion_dev)!",
        timestamp: 'Just now'
      };
      setMessages((prev) => [...prev, limitMessage]);
      return;
    }

    const userMessage = {
      id: ++messageIdRef.current,
      sender: 'user',
      text,
      timestamp: 'Just now',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);
    setSessionCount((prev) => prev + 1);

    // Apply 1.2s client cooldown to prevent accidental double-submits
    setIsCooldown(true);
    setTimeout(() => setIsCooldown(false), 1200);

    // Step A: Check Instant Predefined Matcher First
    const instantResponse = getPredefinedResponse(text);
    if (instantResponse) {
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            id: ++messageIdRef.current,
            sender: 'ai',
            text: instantResponse,
            timestamp: 'Just now',
          }
        ]);
        setIsTyping(false);
      }, 350);
      return;
    }

    // Step B: Dispatch to secure backend /api/chat
    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json().catch(() => null);

      if (response.ok && data?.success && data?.reply) {
        setMessages((prev) => [
          ...prev,
          {
            id: ++messageIdRef.current,
            sender: 'ai',
            text: data.reply,
            timestamp: 'Just now',
          }
        ]);
      } else {
        // Fallback to grounded portfolio engine
        const fallbackText = getFallbackResponse(text);
        setMessages((prev) => [
          ...prev,
          {
            id: ++messageIdRef.current,
            sender: 'ai',
            text: fallbackText,
            timestamp: 'Just now',
          }
        ]);
      }
    } catch {
      // Graceful fallback on network constraint
      const fallbackText = getFallbackResponse(text);
      setMessages((prev) => [
        ...prev,
        {
          id: ++messageIdRef.current,
          sender: 'ai',
          text: fallbackText,
          timestamp: 'Just now',
        }
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSend();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 pointer-events-none font-sans">
      <AnimatePresence mode="wait">
        {/* Floating Toggle Button */}
        {!isOpen ? (
          <motion.button
            key="ai-toggle-btn"
            onClick={() => setIsOpen(true)}
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.85, opacity: 0 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="pointer-events-auto relative group p-4 rounded-full bg-[#121624] text-white border border-[#FF961B]/50 shadow-[0_0_25px_rgba(255,150,27,0.35)] flex items-center gap-3 cursor-pointer origin-bottom-right"
            aria-label="Open AI Assistant"
          >
            {/* Subtle pulsing background glow */}
            <span className="absolute -inset-1 rounded-full bg-gradient-to-r from-[#FF8A00] to-amber-500 opacity-30 blur-sm group-hover:opacity-60 transition duration-300" />

            <div className="relative flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#FF961B] text-black flex items-center justify-center font-bold">
                <Bot className="w-5 h-5 stroke-[2.2]" />
              </div>

              <div className="hidden sm:flex flex-col items-start text-left pr-1">
                <span className="text-xs font-bold text-white flex items-center gap-1.5 leading-none mb-1">
                  Chat with AI Assistant
                  <Sparkles className="w-3 h-3 text-[#FF961B]" />
                </span>
                <span className="text-[10px] text-zinc-400 font-mono">
                  Hybrid Guide · Skills & Projects
                </span>
              </div>

              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse sm:ml-1" />
            </div>
          </motion.button>
        ) : (
          /* Chat Window Dialog */
          <motion.div
            key="ai-dialog"
            initial={{ opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.96 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            role="dialog"
            aria-label="Ephraim AI Portfolio Assistant"
            className={`pointer-events-auto origin-bottom-right surface-card rounded-3xl border border-white/15 shadow-2xl flex flex-col overflow-hidden bg-[#0D111D]/95 backdrop-blur-xl transition-all duration-300 ${
              isExpanded
                ? 'w-[94vw] sm:w-[540px] h-[85vh] sm:h-[680px]'
                : 'w-[92vw] sm:w-[410px] h-[520px]'
            }`}
          >
            {/* Header */}
            <div className="p-4 bg-[#141828] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-2xl bg-[#FF961B]/20 border border-[#FF961B]/30 flex items-center justify-center text-[#FF961B]">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white flex items-center gap-1.5">
                    <span>Ephraim's Portfolio Guide</span>
                    <span className="w-2 h-2 rounded-full bg-emerald-400" title="Active & Ready" />
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#FF961B]" />
                    <span>Verified Knowledge & AI</span>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-1">
                {/* Maximize / Minimize size toggle */}
                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  title={isExpanded ? "Collapse" : "Expand"}
                  aria-label={isExpanded ? "Collapse chat" : "Expand chat"}
                >
                  {isExpanded ? <Minimize2 className="w-4 h-4" /> : <Maximize2 className="w-4 h-4" />}
                </button>

                {/* Close button */}
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                  title="Close chat (Esc)"
                  aria-label="Close chat"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Messages Body */}
            <div 
              className="flex-1 p-4 overflow-y-auto space-y-3.5 text-xs sm:text-sm"
              tabIndex={0}
              aria-live="polite"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex flex-col ${
                    msg.sender === 'user' ? 'items-end' : 'items-start'
                  }`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl p-3.5 leading-relaxed whitespace-pre-wrap ${
                      msg.sender === 'user'
                        ? 'btn-orange-glow text-black font-medium rounded-tr-none'
                        : 'bg-[#181D2E] text-zinc-200 border border-white/10 rounded-tl-none shadow-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                  <span className="text-[10px] text-zinc-500 font-mono mt-1 px-1">
                    {msg.timestamp}
                  </span>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-1.5 p-3 rounded-2xl bg-[#181D2E] border border-white/10 w-fit text-zinc-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF961B] animate-bounce" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF961B] animate-bounce [animation-delay:0.2s]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF961B] animate-bounce [animation-delay:0.4s]" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Starter Question Chips */}
            <div className="p-2.5 bg-[#101423] border-t border-white/5 overflow-x-auto flex gap-1.5 no-scrollbar">
              {quickQuestions.map((chip, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(chip)}
                  disabled={isTyping || isCooldown}
                  className="whitespace-nowrap px-2.5 py-1 rounded-full bg-white/[0.04] hover:bg-white/[0.09] text-[11px] text-zinc-300 hover:text-white border border-white/5 transition-colors cursor-pointer flex-shrink-0 disabled:opacity-50"
                >
                  {chip}
                </button>
              ))}
            </div>

            {/* Input Form with validation & character count */}
            <form onSubmit={handleSubmit} className="p-3 bg-[#121624] border-t border-white/10 flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  maxLength={500}
                  placeholder={isCooldown ? "Please wait..." : "Ask about projects, skills, hiring..."}
                  value={input}
                  disabled={isCooldown}
                  onChange={(e) => setInput(e.target.value)}
                  className="flex-1 bg-[#1A2032] border border-white/10 rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-[#FF961B] transition-colors disabled:opacity-60"
                />

                <button
                  type="submit"
                  disabled={!input.trim() || isTyping || isCooldown}
                  className="btn-orange-glow p-2.5 rounded-xl text-black font-bold disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer transition-all flex items-center justify-center flex-shrink-0"
                  aria-label="Send query"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>

              {input.length > 400 && (
                <div className="text-[10px] text-zinc-500 font-mono text-right pr-1">
                  {input.length}/500
                </div>
              )}
            </form>

            {/* Footer quick contact prompt */}
            <div className="px-4 py-2 bg-[#0D101A] border-t border-white/5 flex items-center justify-between text-[11px] text-zinc-400">
              <span>Looking to start a project?</span>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenContactModal();
                }}
                className="text-[#FF961B] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
              >
                <span>Let's Talk</span>
                <ArrowRight className="w-3 h-3" />
              </button>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
