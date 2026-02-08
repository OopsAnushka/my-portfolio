'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';
import Image from 'next/image';
import PixelImage from './PixelImage'; // Import the new component

const projects = [
  {
    id: 1,
    title: 'Hotel Booking Engine',
    category: 'Full Stack System',
    description: 'A comprehensive solution for luxury chains with 3D room previews, real-time availability, and secure Stripe payments.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/hotel-preview.jpg', // Make sure this image is high quality!
    demoLink: 'https://hotel-room-booking.vercel.app/',
    repoLink: 'https://github.com/anushka8418/hotelRoom-Booking.git',
    color: '#0d1b2a' // Background tint
  },
  {
    id: 2,
    title: 'AI Career Advisor',
    category: 'Artificial Intelligence',
    description: 'NLP-powered platform that analyzes resumes to generate personalized learning roadmaps and mentorship connections.',
    tech: ['Python', 'FastAPI', 'Next.js', 'OpenAI'],
    image: '/hotel-preview.jpg', // Placeholder: Replace with real image
    demoLink: '#',
    repoLink: '#',
    color: '#240046'
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    category: 'Frontend Architecture',
    description: 'The immersive experience you are navigating now. Built as a study in performance, animation, and minimalist design.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'GSAP'],
    image: '/hotel-preview.jpg', // Placeholder: Replace with real image
    demoLink: '#',
    repoLink: '#',
    color: '#0f172a'
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="bg-black min-h-screen relative overflow-hidden py-20 flex flex-col justify-center">
      
      {/* --- BACKGROUND LAYER (Pixel Effect) --- */}
      <div className="hidden md:block absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <div 
            key={projects[activeProject].id} 
            className="absolute inset-0 w-full h-full"
          >
             {/* 1. The Color Tint Overlay */}
             <div 
               className="absolute inset-0 z-10 opacity-70 mix-blend-multiply transition-colors duration-700" 
               style={{ backgroundColor: projects[activeProject].color }} 
             />
             
             {/* 2. The Pixelating Image */}
             <PixelImage
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full grayscale opacity-50"
                pixelFactor={30} // Higher = bigger pixels at start
             />

             {/* 3. Vignette (Dark borders to keep text readable) */}
             <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/80 to-transparent" />
             <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-transparent to-black" />
          </div>
        </AnimatePresence>
      </div>


      {/* --- CONTENT LAYER --- */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-30">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT: Project List */}
          <div className="space-y-8">
            <h2 className="text-zinc-500 text-sm uppercase tracking-widest mb-10 font-mono">
              / Selected Works
            </h2>
            
            <div className="flex flex-col">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group relative border-l-2 border-white/10 pl-8 py-6 cursor-pointer transition-all duration-300 hover:border-white"
                  onMouseEnter={() => setActiveProject(index)}
                  // For mobile touch support:
                  onClick={() => setActiveProject(index)} 
                >
                  <span className={`text-xs font-mono mb-2 block transition-colors duration-300 ${activeProject === index ? 'text-blue-400' : 'text-zinc-500'}`}>
                    0{index + 1} . {project.category}
                  </span>
                  <h3 
                    className={`text-4xl md:text-6xl font-pompiere transition-all duration-300 ${
                      activeProject === index ? 'text-white translate-x-4 scale-105 origin-left' : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Project Details Card */}
          <div className="relative h-[450px] w-full mt-8 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeProject].id}
                initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                transition={{ duration: 0.5 }}
                className="h-full flex flex-col justify-between p-8 md:p-10 border border-white/10 bg-black/40 backdrop-blur-xl rounded-2xl shadow-2xl"
              >
                <div>
                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {projects[activeProject].tech.map((t) => (
                        <span key={t} className="px-3 py-1 text-xs text-white/90 bg-white/5 rounded-full border border-white/10 shadow-[0_0_10px_rgba(255,255,255,0.05)]">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Description */}
                    <h4 className="text-xl text-white font-medium mb-3">About the project</h4>
                    <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed">
                      {projects[activeProject].description}
                    </p>
                </div>

                {/* Buttons */}
                <div className="flex gap-4 pt-6 border-t border-white/5 mt-auto">
                  <a 
                    href={projects[activeProject].demoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 group bg-white text-black py-3 px-6 rounded text-center font-medium hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
                  >
                    View Project 
                    <ArrowUpRight size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform"/>
                  </a>
                  <a 
                    href={projects[activeProject].repoLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-none p-3 border border-white/20 rounded text-white hover:bg-white hover:text-black transition-colors"
                    aria-label="View Github Repo"
                  >
                    <GithubIcon size={20} />
                  </a>
                </div>

                {/* Mobile-only static image (since background is hidden on mobile) */}
                <div className="md:hidden mt-6 relative h-40 w-full rounded-lg overflow-hidden opacity-80">
                   <Image 
                     src={projects[activeProject].image} 
                     fill 
                     alt="preview" 
                     className="object-cover" 
                   />
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}