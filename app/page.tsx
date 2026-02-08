'use client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/Aboutdark';
import ProjectsSection from './components/ProjectsSection';
import CertificationSection from './components/CertificationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';

export default function Home() {
  return (
    <div className="bg-black min-h-screen">
      <Header />
      
      {/* The Hero is now fixed inside its own component CSS */}
      <HeroSection />

      {/* THE IMPORTANT PART: Push content down by 100vh and enable scrolling */}
      <div className="relative z-10 bg-black mt-[100vh] shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
        <About />
        <SkillsSection />
        <ProjectsSection />
        <CertificationSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}