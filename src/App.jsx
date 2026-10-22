import React, { useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import SelectedWork from './components/SelectedWork';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import AIChatWidget from './components/AIChatWidget';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  // Global scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  return (
    <div className="min-h-screen bg-[#080B13] text-zinc-100 flex flex-col selection:bg-orange-500 selection:text-black relative">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF8A00] via-[#FFAE42] to-amber-300 origin-left z-[60] shadow-[0_0_12px_rgba(255,150,27,0.8)]"
        style={{ scaleX }}
      />

      {/* Floating Navbar */}
      <Navbar onOpenModal={handleOpenModal} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenModal={handleOpenModal} />

        {/* About Section with Interactive Terminal */}
        <About onOpenModal={handleOpenModal} />

        {/* Skills & Technologies Section with Current Focus */}
        <Skills onOpenModal={handleOpenModal} />

        {/* Featured Projects Section with Prominent Study-Flow & Custom 3D Cards */}
        <SelectedWork onOpenModal={handleOpenModal} />

        {/* Contact / Connect Section */}
        <CallToAction onOpenModal={handleOpenModal} />
      </main>

      {/* Footer Section */}
      <Footer onOpenModal={handleOpenModal} />

      {/* AI Assistant Chat Widget */}
      <AIChatWidget onOpenContactModal={handleOpenModal} />

      {/* Connect Modal */}
      <ProjectModal isOpen={modalOpen} onClose={handleCloseModal} />
    </div>
  );
}
