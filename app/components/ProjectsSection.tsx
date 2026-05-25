"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Maximize2 } from "lucide-react";

// Data Structure
const projects = [
  {
    title: "AeroCare",
    desc: "A full-stack TypeScript application for aviation care management with a modern UI, deployed on Vercel.",
    tags: ["TypeScript", "Next.js", "Vercel"],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109db05?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka/AeroCare",
    demo: "https://aero-care-gamma.vercel.app",
  },
  {
    title: "StaySpace",
    desc: "A hotel booking platform with search, filtering, and reservation management built with JavaScript.",
    tags: ["JavaScript", "React", "MongoDB"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka/hotel-booking",
    demo: "https://stay-space-woad.vercel.app/",
  },
  {
    title: "J&K Career Advisor",
    desc: "SIH 2025 project — A personalized career and education advisory platform for J&K students.",
    tags: ["SIH 2025", "Full-Stack", "AI"],
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c476?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka/jk-career-advisor",
    demo: "https://github.com/OopsAnushka/jk-career-advisor",
  },
  {
    title: "Game of Life",
    desc: "Conway's Game of Life — a new variant with interactive cellular automaton simulation.",
    tags: ["JavaScript", "Canvas", "Algorithms"],
    image: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka/game_of_life",
    demo: "https://github.com/OopsAnushka/game_of_life",
  },
  {
    title: "Portfolio v1",
    desc: "First iteration of my personal portfolio website with modern animations and interactive design.",
    tags: ["TypeScript", "Next.js", "Framer Motion"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka/portfolio-anushka",
    demo: "https://github.com/OopsAnushka/portfolio-anushka",
  },
  {
    title: "This Portfolio",
    desc: "My current portfolio — cinematic, interactive website with 3D effects and contact form backend.",
    tags: ["Next.js", "Three.js", "MongoDB"],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka/my-portfolio",
    demo: "https://github.com/OopsAnushka/my-portfolio",
  },
];

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);

  return (
    <div id="projects" className="relative flex flex-col items-center justify-center min-h-screen w-full py-10 px-4 overflow-hidden bg-black select-none">
      
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-black rounded-full blur-[120px]" />
         <div className="absolute bottom-[-10%] right-[20%] w-[400px] h-[400px] bg-black rounded-full blur-[100px]" />
      </div>

      <h2 className="relative z-10 text-4xl md:text-6xl font-black text-white mb-12">
        Work Gallery
      </h2>
      <p className="relative z-8 text-gray-500 max-w-lg mx-2 text-sm md:text-base mb-8 text-center">
        showcasing a blend of creativity and technical skill through a curated selection of projects.
      </p>

      {/* Mobile Carousel */}
      <div className="relative z-10 w-full md:hidden">
        <div className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-4 scrollbar-hide">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="snap-center shrink-0 w-[260px] h-[360px] rounded-xl overflow-hidden relative cursor-pointer bg-neutral-900 border border-neutral-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              onClick={() => setSelectedProject(project)}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <h3 className="text-white text-base font-bold mb-1">{project.title}</h3>
                <p className="text-neutral-400 text-xs line-clamp-2 mb-2">{project.desc}</p>
                <div className="flex flex-wrap gap-1">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-2 py-0.5 text-[10px] font-medium text-blue-300 bg-blue-900/30 rounded-full border border-blue-900/40">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop Fan Layout */}
      <div 
        className="relative z-10 hidden md:flex items-center justify-center gap-0 w-full max-w-[1400px] perspective-[1000px] [transform-style:preserve-3d] h-[500px]"
        onMouseLeave={() => setHoveredIndex(null)}
      >
        {projects.map((project, index) => (
          <GalleryItem
            key={index}
            project={project}
            index={index}
            hoveredIndex={hoveredIndex}
            setHoveredIndex={setHoveredIndex}
            onExpand={() => setSelectedProject(project)}
          />
        ))}
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row"
            >
              {/* Modal Image */}
              <div className="md:w-1/2 h-64 md:h-auto relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 to-transparent md:bg-gradient-to-r" />
              </div>

              {/* Modal Content */}
              <div className="md:w-1/2 p-8 flex flex-col justify-center relative">
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full hover:bg-neutral-800 transition-colors"
                >
                  <X size={24} />
                </button>

                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/20 rounded-full border border-blue-900/30">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <p className="text-neutral-400 mb-8 leading-relaxed">
                  {selectedProject.desc}
                </p>

                <div className="flex gap-4">
                  <a 
                    href={selectedProject.demo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-white text-black py-3 px-6 rounded-lg font-bold hover:bg-neutral-200 transition-colors"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a 
                    href={selectedProject.repo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-neutral-800 text-white py-3 px-6 rounded-lg font-bold hover:bg-neutral-700 transition-colors border border-neutral-700"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function GalleryItem({ 
  project, 
  index, 
  hoveredIndex, 
  setHoveredIndex,
  onExpand
}: { 
  project: typeof projects[0]; 
  index: number; 
  hoveredIndex: number | null; 
  setHoveredIndex: (i: number | null) => void;
  onExpand: () => void;
}) {
  const isHovered = hoveredIndex === index;
  const distance = hoveredIndex !== null ? Math.abs(hoveredIndex - index) : null;

  // Visual Properties logic...
  let scale = 1;
  let rotateY = 0;
  let brightness = 0.5;
  let grayscale = 1;
  let zIndex = 1;
  let x = 0;
  let opacity = 0.6;
  
  if (hoveredIndex === null) {
    scale = 0.9;
    grayscale = 1;
    brightness = 0.4;
    zIndex = 1;
    opacity = 0.5;
    x = 0;
  } else {
    if (distance === 0) {
      scale = 1.5;
      rotateY = 0;
      brightness = 1.1;
      grayscale = 0;
      zIndex = 50;
      opacity = 1;
      x = 0;
    } else if (distance === 1) {
      scale = 1.2;
      rotateY = index < hoveredIndex ? 20 : -20;
      brightness = 0.7;
      grayscale = 0.4;
      zIndex = 40;
      opacity = 0.8;
      x = index < hoveredIndex ? -30 : 30;
    } else if (distance === 2) {
      scale = 1.0;
      rotateY = index < hoveredIndex ? 35 : -35;
      brightness = 0.4;
      grayscale = 0.8;
      zIndex = 30;
      opacity = 0.6;
      x = index < hoveredIndex ? -60 : 60;
    } else {
      scale = 0.7;
      rotateY = index < hoveredIndex ? 45 : -45;
      brightness = 0.2;
      grayscale = 1;
      zIndex = Math.max(0, 30 - (distance || 0));
      opacity = 0.3;
      x = index < hoveredIndex ? -90 : 90;
    }
  }

  return (
    <motion.div
      className="relative rounded-xl cursor-pointer shrink-0"
      style={{
        width: 140, 
        height: 220,
        margin: "0 -20px", 
        transformStyle: "preserve-3d",
      }}
      initial={{ scale: 0.9, filter: "grayscale(100%)", opacity: 0.5 }}
      animate={{
        scale,
        rotateY,
        x,
        zIndex,
        filter: `grayscale(${Math.max(0, grayscale * 100)}%) brightness(${Math.max(0, brightness * 100)}%)`,
        opacity
      }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 20,
      }}
      onMouseEnter={() => setHoveredIndex(index)}
    >
      <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900 border border-neutral-800">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
          draggable={false}
        />
        
        {/* Active State Overlay with Button */}
        <div className={`absolute inset-0 flex flex-col items-center justify-end p-4 bg-gradient-to-t from-black/90 via-transparent to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
           <h3 className="text-white text-xs font-bold mb-2 text-center">{project.title}</h3>
           <button 
           suppressHydrationWarning
             onClick={onExpand}
             className="bg-white text-black p-2 rounded-full hover:bg-neutral-200 transition-colors shadow-lg"
             title="View Details"
           >
             <Maximize2 size={16} />
           </button>
        </div>
      </div>
      
      {/* Reflection Effect */}
      <div 
        className="absolute top-full left-0 right-0 h-full scale-y-[-1] opacity-30 pointer-events-none origin-top"
        style={{ 
          background: `linear-gradient(to bottom, rgba(255,255,255,0.1), transparent 70%)`,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1), transparent)'
        }}
      >
        <img 
          src={project.image} 
          className="w-full h-full object-cover rounded-xl blur-[3px]" 
        />
      </div>
    </motion.div>
  );
}