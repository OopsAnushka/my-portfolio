"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, X, Maximize2, ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

// Data Structure
const projects = [
  {
    title: "Ethereal UI",
    desc: "A futuristic user interface design focusing on glassmorphism and neon aesthetics.",
    tags: ["React", "Tailwind", "Framer"],
    image: "https://images.unsplash.com/photo-1743434838736-257a5ce48e8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMDNkJTIwY29sb3JmdWwlMjBhcnR8ZW58MXx8fHwxNzcxNDI4OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    repo: "https://github.com/OopsAnushka",
    demo: "https://github.com/OopsAnushka",
  },
  {
    title: "Fluid Dynamics",
    desc: "Interactive fluid simulation using WebGL and custom shaders for high-performance visuals.",
    tags: ["WebGL", "Three.js", "GLSL"],
    image: "https://images.unsplash.com/photo-1763259373848-9d56552e2146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbHVpZCUyMGNvbG9yZnVsJTIwYWJzdHJhY3QlMjBzaGFwZXN8ZW58MXx8fHwxNzcxNDI4OTMwfDA&ixlib=rb-4.1.0&q=80&w=1080",
    repo: "https://github.com/OopsAnushka",
    demo: "https://github.com/OopsAnushka",
  },
  {
    title: "Surreal Portraits",
    desc: "AI-generated surrealist portraits integrated into a generative art gallery.",
    tags: ["AI", "Generative Art", "Python"],
    // FIXED: Replaced with a reliable surreal portrait URL
    image: "https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka",
    demo: "https://github.com/OopsAnushka",
  },
  {
    title: "Cyberpunk City",
    desc: "A procedurally generated city environment optimized for low-latency browser rendering.",
    tags: ["Next.js", "Canvas", "Algorithms"],
    image: "https://images.unsplash.com/photo-1764336312138-14a5368a6cd3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGlnaXRhbCUyMGFydCUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTQyODkzMXww&ixlib=rb-4.1.0&q=80&w=1080",
    repo: "https://github.com/OopsAnushka",
    demo: "https://github.com/OopsAnushka",
  },
  {
    title: "Minimal Arch",
    desc: "Clean, minimalist architectural visualization platform for modern homes.",
    tags: ["Vue", "Nuxt", "SCSS"],
    image: "https://images.unsplash.com/photo-1610497254766-c6a51afa9b64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYXJjaGl0ZWN0dXJhbCUyMGFic3RyYWN0fGVufDF8fHx8MTc3MTQyODkzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    repo: "https://github.com/OopsAnushka",
    demo: "https://github.com/OopsAnushka",
  },
  {
    title: "Abstract 3D",
    desc: "Experimental 3D shapes and textures exploring depth and lighting in the browser.",
    tags: ["R3F", "Typescript", "Blender"],
    // FIXED: Replaced with a reliable abstract 3D URL
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka",
    demo: "https://github.com/OopsAnushka",
  },
  {
    title: "Neon Nights",
    desc: "Dark mode dashboard with vibrant neon accents and real-time data visualization.",
    tags: ["D3.js", "React", "Node"],
    image: "https://images.unsplash.com/photo-1605727328079-f3115619d3a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZW9uJTIwY3liZXJwdW5rJTIwYWJzdHJhY3R8ZW58MXx8fHwxNzcxNDI4OTMxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    repo: "https://github.com/OopsAnushka",
    demo: "https://github.com/OopsAnushka",
  },
  {
    title: "Cinematic Render",
    desc: "High-fidelity cinematic rendering engine for product showcases.",
    tags: ["Unreal", "C++", "WASM"],
    // FIXED: Replaced with a reliable cinematic render URL
    image: "https://images.unsplash.com/photo-1620641788421-7a1c3724c6ce?q=80&w=1080&auto=format&fit=crop",
    repo: "https://github.com/OopsAnushka",
    demo: "https://github.com/OopsAnushka",
  },
];

export function ProjectsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  
  // Note: Manual sound triggers removed to prevent double-audio with ClientLayout

  const handleNext = () => {
    // Logic for next slide 
  };

  const handlePrev = () => {
    // Logic for prev slide
  };

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

      <div 
        className="relative z-10 flex items-center justify-center gap-0 w-full max-w-[1400px] perspective-[1000px] [transform-style:preserve-3d] h-[500px]"
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