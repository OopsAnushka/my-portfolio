'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import GithubIcon from './GithubIcon';
import Image from 'next/image';
import PixelImage from './PixelImage';

const projects = [
  {
    id: 1,
    title: 'Hotel Booking Engine',
    category: 'Full Stack System',
    description: 'A comprehensive solution for luxury chains with 3D room previews, real-time availability, and secure Stripe payments.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/hotel-preview.jpg', 
    demoLink: 'https://hotel-room-booking.vercel.app/',
    repoLink: 'https://github.com/anushka8418/hotelRoom-Booking.git',
    color: '#0d1b2a'
  },
  {
    id: 2,
    title: 'AI Career Advisor',
    category: 'Artificial Intelligence',
    description: 'NLP-powered platform that analyzes resumes to generate personalized learning roadmaps and mentorship connections.',
    tech: ['Python', 'FastAPI', 'Next.js', 'OpenAI'],
    image: '/hotel-preview.jpg', 
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
    image: '/hotel-preview.jpg', 
    demoLink: '#',
    repoLink: '#',
    color: '#0f172a'
  }
];

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);

  return (
    <section id="projects" className="bg-black min-h-screen relative overflow-hidden py-20 flex flex-col justify-center">
      
      {/* --- MARQUEE SECTION (Moved Up) --- */}
      {/* Changed top-24 to top-4 so it is higher up */}
      <div className="absolute top-4 w-full z-10 overflow-hidden pointer-events-none select-none">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            repeat: Infinity, 
            ease: "linear", 
            duration: 5, 
          }}
        >
          {[...Array(4)].map((_, i) => (
             <span key={i} className="text-5xl md:text-7xl font-pompiere font-bold text-white/5 mx-6">
               MY WORK • SELECTED PROJECTS • MY WORK • SELECTED PROJECTS •
             </span>
          ))}
        </motion.div>
      </div>

      {/* --- BACKGROUND LAYER (Pixel Effect) --- */}
      <div className="hidden md:block absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <div 
            key={projects[activeProject].id} 
            className="absolute inset-0 w-full h-full"
          >
             {/* 1. Color Tint */}
             <div 
               className="absolute inset-0 z-10 opacity-50 mix-blend-multiply transition-colors duration-700" 
               style={{ backgroundColor: projects[activeProject].color }} 
             />
             
             {/* 2. Pixelating Image (Background) */}
             <PixelImage
                src={projects[activeProject].image}
                alt={projects[activeProject].title}
                className="w-full h-full grayscale opacity-20" 
                pixelFactor={40}
             />

             {/* 3. Vignette */}
             <div className="absolute inset-0 z-20 bg-gradient-to-r from-black via-black/90 to-transparent" />
             <div className="absolute inset-0 z-20 bg-gradient-to-b from-black via-transparent to-black" />
          </div>
        </AnimatePresence>
      </div>


      {/* --- CONTENT LAYER --- */}
      <div className="max-w-6xl mx-auto px-6 w-full relative z-30 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          
          {/* LEFT: Project List */}
          <div className="space-y-6">
            <h2 className="text-zinc-500 text-xs uppercase tracking-[0.2em] mb-8 font-mono border-b border-white/10 pb-2 inline-block">
              / Index
            </h2>
            
            <div className="flex flex-col">
              {projects.map((project, index) => (
                <div 
                  key={project.id}
                  className="group relative border-l-2 border-white/10 pl-6 py-4 cursor-pointer transition-all duration-300 hover:border-white"
                  onMouseEnter={() => setActiveProject(index)}
                  onClick={() => setActiveProject(index)} 
                >
                  <span className={`text-xs font-mono mb-1 block transition-colors duration-300 ${activeProject === index ? 'text-blue-400' : 'text-zinc-500'}`}>
                    0{index + 1}
                  </span>
                  <h3 
                    className={`text-3xl md:text-5xl font-pompiere transition-all duration-300 ${
                      activeProject === index ? 'text-white translate-x-2' : 'text-zinc-600 group-hover:text-zinc-400'
                    }`}
                  >
                    {project.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT: Project Details Card */}
          <div className="relative h-auto md:h-[320px] w-full mt-8 md:mt-0">
            <AnimatePresence mode="wait">
              <motion.div
                key={projects[activeProject].id}
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: -10 }}
                transition={{ duration: 0.3 }}
                className="h-full flex flex-col md:flex-row border border-white/10 bg-zinc-900/80 backdrop-blur-xl rounded-xl shadow-2xl overflow-hidden"
              >
                
                {/* 1. THUMBNAIL IMAGE */}
                <div className="relative w-full md:w-2/5 h-48 md:h-full overflow-hidden border-b md:border-b-0 md:border-r border-white/10 bg-black">
                   <Image 
                     src={projects[activeProject].image} 
                     fill 
                     alt="thumbnail" 
                     className="object-cover opacity-80 hover:opacity-100 transition-opacity duration-500 hover:scale-105 transform" 
                   />
                </div>

                {/* 2. TEXT CONTENT */}
                <div className="flex-1 p-6 flex flex-col justify-between">
                    <div>
                        <div className="flex flex-wrap gap-2 mb-3">
                          {projects[activeProject].tech.slice(0, 3).map((t) => (
                            <span key={t} className="px-2 py-1 text-[10px] uppercase tracking-wider text-zinc-400 bg-white/5 rounded border border-white/5">
                              {t}
                            </span>
                          ))}
                        </div>

                        <h4 className="text-xl text-white font-pompiere tracking-wide mb-2">
                           {projects[activeProject].title}
                        </h4>
                        <p className="text-zinc-400 text-xs md:text-sm font-light leading-relaxed line-clamp-3">
                          {projects[activeProject].description}
                        </p>
                    </div>

                    <div className="flex gap-3 pt-4 border-t border-white/5 mt-auto">
                      <a 
                        href={projects[activeProject].demoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-white text-black py-2 px-4 rounded text-center text-xs font-bold uppercase tracking-widest hover:bg-zinc-200 transition-all flex items-center justify-center gap-2"
                      >
                        Live Demo 
                        <ArrowUpRight size={14} />
                      </a>
                      <a 
                        href={projects[activeProject].repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-none p-2 border border-white/20 rounded text-white hover:bg-white hover:text-black transition-colors"
                        aria-label="View Github Repo"
                      >
                        <GithubIcon size={18} />
                      </a>
                    </div>
                </div>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}