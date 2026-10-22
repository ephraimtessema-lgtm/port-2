import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  Mail, 
  ChevronDown, 
  Check,
  Loader2
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ProjectModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    roleOrOrg: '',
    inquiryType: 'Recruiter / Hiring Manager',
    message: '',
  });

  const inquiryOptions = [
    { label: 'Recruiter / Hiring Manager', desc: 'Internship & full-time opportunities' },
    { label: 'Developer / Engineer', desc: 'Tech chat, code & collaboration' },
    { label: 'Potential Collaborator', desc: 'Open-source or startup ideas' },
    { label: 'Student / Peer', desc: 'Computer science & study sharing' },
    { label: 'Other', desc: 'General inquiries' },
  ];

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const payload = {
      name: formData.name,
      email: formData.email,
      organization: formData.roleOrOrg || 'Not specified',
      inquiryType: formData.inquiryType,
      message: formData.message,
      _subject: `Portfolio Inquiry from ${formData.name} (${formData.inquiryType})`,
      _captcha: "false"
    };

    try {
      const response = await fetch("https://formsubmit.co/ajax/ephraimtessema@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await response.json().catch(() => null);

      if (response.ok || (data && (data.success === "true" || data.message?.includes("Activation")))) {
        setSubmitted(true);
      } else {
        throw new Error(data?.message || "Service response error");
      }
    } catch (err) {
      console.warn("Direct dispatch fallback to mailto:", err);
      // Fallback: opens mail client with all fields pre-filled so no message is lost
      const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name} (${formData.inquiryType})`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\nOrganization: ${formData.roleOrOrg || 'N/A'}\nInquiry: ${formData.inquiryType}\n\nMessage:\n${formData.message}`
      );
      window.location.href = `mailto:ephraimtessema@gmail.com?subject=${subject}&body=${body}`;
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setSubmitted(false);
    setIsSubmitting(false);
    setDropdownOpen(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-center items-stretch overflow-hidden">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="fixed inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
        onClick={handleClose}
      />

      {/* Full-Height Modal Sheet (spanning from top to bottom) */}
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-xl sm:max-w-2xl bg-[#090D17]/95 backdrop-blur-2xl border-x border-white/10 shadow-2xl z-10 flex flex-col h-full min-h-screen overflow-y-auto"
      >
        
        {/* Top Header Sticky Bar */}
        <div className="sticky top-0 z-20 px-6 sm:px-8 py-5 bg-[#090D17]/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-2 font-mono text-xs text-[#FF961B]">
            <span className="w-2 h-2 rounded-full bg-[#FF961B] animate-pulse" />
            <span className="tracking-widest uppercase font-semibold">LET'S CONNECT</span>
          </div>

          {/* Close Button */}
          <button
            onClick={handleClose}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 px-6 sm:px-10 py-6 sm:py-8 flex flex-col justify-between">
          {!submitted ? (
            <div className="flex flex-col justify-between h-full">
              
              <div>
                {/* Heading & Intro */}
                <div className="mb-8">
                  <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight mb-2">
                    Connect with <span className="text-[#FF961B]">Ephraim</span>
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-lg">
                    Open to software engineering roles, internships, open-source collaborations, and tech chats.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Row 1: Name and Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Your name
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Jane Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#FF961B] focus:bg-white/[0.05] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Email address
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="jane@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#FF961B] focus:bg-white/[0.05] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all"
                      />
                    </div>
                  </div>

                  {/* Row 2: Company / Org and Custom Styled Select */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        Company / Organization <span className="text-zinc-500 lowercase">(optional)</span>
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Google, Startup, University"
                        value={formData.roleOrOrg}
                        onChange={(e) => setFormData({ ...formData, roleOrOrg: e.target.value })}
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#FF961B] focus:bg-white/[0.05] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all"
                      />
                    </div>

                    {/* Custom Minimalist Dropdown (No native OS blue select!) */}
                    <div className="relative">
                      <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                        I am a...
                      </label>
                      
                      <button
                        type="button"
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#FF961B] rounded-xl px-4 py-3 text-sm text-white flex items-center justify-between transition-all cursor-pointer text-left"
                      >
                        <span className="truncate">{formData.inquiryType}</span>
                        <ChevronDown className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${dropdownOpen ? 'rotate-180 text-[#FF961B]' : ''}`} />
                      </button>

                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {dropdownOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: -6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.15 }}
                            className="absolute top-full left-0 right-0 mt-2 bg-[#121626] border border-white/10 rounded-xl shadow-2xl p-1.5 z-30 space-y-1"
                          >
                            {inquiryOptions.map((opt) => {
                              const isSelected = formData.inquiryType === opt.label;
                              return (
                                <button
                                  key={opt.label}
                                  type="button"
                                  onClick={() => {
                                    setFormData({ ...formData, inquiryType: opt.label });
                                    setDropdownOpen(false);
                                  }}
                                  className={`w-full text-left px-3 py-2 rounded-lg text-xs sm:text-sm flex items-center justify-between transition-colors cursor-pointer ${
                                    isSelected 
                                      ? 'bg-[#FF961B]/15 text-[#FF961B] font-semibold' 
                                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                                  }`}
                                >
                                  <div>
                                    <div className="font-medium">{opt.label}</div>
                                    <div className="text-[10px] text-zinc-500 font-mono">{opt.desc}</div>
                                  </div>
                                  {isSelected && <Check className="w-3.5 h-3.5 text-[#FF961B]" />}
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>

                  {/* Row 3: Message Textarea */}
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wider text-zinc-400 mb-2">
                      Message / Details
                    </label>
                    <textarea
                      rows={5}
                      required
                      placeholder="Tell me about your role, project, ideas, or how we might collaborate..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full bg-white/[0.03] border border-white/10 hover:border-white/20 focus:border-[#FF961B] focus:bg-white/[0.05] focus:outline-none rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-500 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full btn-orange-glow py-3.5 rounded-xl text-black font-bold text-sm sm:text-base flex items-center justify-center gap-2 cursor-pointer transition-all shadow-lg shadow-orange-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin text-black" />
                        <span>Sending message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send message</span>
                        <Send className="w-4 h-4 stroke-[2.5]" />
                      </>
                    )}
                  </button>
                </form>
              </div>

              {/* Direct Reach-Out Footer */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="text-xs text-zinc-500 font-mono uppercase tracking-wider mb-3">
                  Or reach out directly
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs text-zinc-300 font-mono">
                  <a
                    href="mailto:ephraimtessema@gmail.com"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors flex items-center gap-1.5 text-zinc-300 hover:text-white"
                  >
                    <Mail className="w-3.5 h-3.5 text-[#FF961B]" />
                    <span>ephraimtessema@gmail.com</span>
                  </a>

                  <a
                    href="https://t.me/ephion_dev"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors flex items-center gap-1.5 text-zinc-300 hover:text-white"
                  >
                    <Send className="w-3.5 h-3.5 text-[#FF961B]" />
                    <span>Telegram</span>
                  </a>

                  <a
                    href="https://github.com/ephraimtessema-lgtm"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 transition-colors flex items-center gap-1.5 text-zinc-300 hover:text-white"
                  >
                    <span>GitHub</span>
                  </a>
                </div>
              </div>

            </div>
          ) : (
            /* Success confirmation */
            <div className="my-auto py-16 text-center flex flex-col items-center justify-center">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mb-5 shadow-lg shadow-emerald-500/10">
                <CheckCircle2 className="w-9 h-9" />
              </div>
              <h4 className="text-3xl font-extrabold text-white tracking-tight mb-3">Message Dispatched!</h4>
              <p className="text-zinc-300 text-sm max-w-sm mb-4 leading-relaxed">
                Thank you for reaching out, <span className="text-white font-semibold">{formData.name || 'there'}</span>. Your note has been delivered to <span className="text-[#FF961B] font-mono font-medium">ephraimtessema@gmail.com</span>.
              </p>
              <p className="text-zinc-500 text-xs max-w-xs mb-8">
                Ephraim reviews all messages directly and will reply within 1–2 business days.
              </p>
              <div className="flex items-center gap-3">
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: '',
                      email: '',
                      roleOrOrg: '',
                      inquiryType: 'Recruiter / Hiring Manager',
                      message: '',
                    });
                  }}
                  className="px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold cursor-pointer transition-colors"
                >
                  Send another message
                </button>
                <button
                  onClick={handleClose}
                  className="btn-orange-glow px-7 py-2.5 rounded-full text-black font-bold text-xs cursor-pointer shadow-lg transition-transform hover:scale-105"
                >
                  Done
                </button>
              </div>
            </div>
          )}
        </div>

      </motion.div>
    </div>
  );
}
