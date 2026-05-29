'use client';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/Aboutdark';
import {ProjectsSection} from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import SkillsSection from './components/SkillsSection';
import BlogSection from './components/BlogSection';

export default function Home() {
  return (
    <div className="relative bg-black min-h-screen">
      <Header />
      
      {/* Hero with scroll-driven image expansion */}
      <HeroSection />

      {/* Main content — follows after hero scroll space */}
      <div className="relative z-10 bg-black shadow-[0_-20px_60px_rgba(0,0,0,0.8)]">
        <About />
        <SkillsSection />
        <ProjectsSection />
        <BlogSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}