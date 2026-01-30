// app/page.tsx
'use client';

import { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import About from './components/Aboutdark';
import AssignmentSection from './components/AssignmentSection';
import ProjectsSection from './components/ProjectsSection';
import CertificationSection from './components/CertificationSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="bg-black min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <About />
      <AssignmentSection />
      <ProjectsSection />
      <CertificationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}