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
    <div className="bg-black min-h-screen overflow-x-hidden relative">
      <Header />
      <HeroSection />
      <div className="relative z-10 bg-black">
        <About />
        <SkillsSection/>
        <ProjectsSection />
        <CertificationSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}