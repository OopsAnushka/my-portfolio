'use client';

import React, { useState } from "react";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "./DraggableCard"; 
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Github } from "lucide-react";
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: "Hotel Booking",
    description: "Luxury booking system with 3D room previews and Stripe payments.",
    fullDescription: "A comprehensive solution for luxury chains with 3D room previews, real-time availability, and secure Stripe payments. Includes an admin dashboard for reservation management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/hotel-preview.jpg", 
    demoLink: "https://hotel-room-booking.vercel.app/",
    repoLink: "https://github.com/anushka8418/hotelRoom-Booking.git",
    // CHAOS STACK: Centered but rotated
    className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[6deg] z-30",
    color: "from-blue-900/50 to-black"
  },
  {
    id: 2,
    title: "Neon Shop",
    description: "Futuristic ecommerce with smooth transitions.",
    fullDescription: "A futuristic shopping experience featuring neon aesthetics, smooth cart transitions, and lightning-fast checkout powered by Next.js 14.",
    tech: ["Next.js", "Stripe", "Tailwind"],
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2670&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[5deg] z-20",
    color: "from-purple-900/50 to-black"
  },
  {
    id: 3,
    title: "AI Dashboard",
    description: "Real-time analytics powered by OpenAI.",
    fullDescription: "Real-time analytics dashboard powered by OpenAI, visualizing complex data streams for enterprise decision making.",
    tech: ["React", "Tremor", "OpenAI"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[3deg] z-10",
    color: "from-emerald-900/50 to-black"
  },
  {
    id: 4,
    title: "Web3 Exchange",
    description: "Decentralized platform for token swapping.",
    fullDescription: "Decentralized Web3 platform for swapping tokens with wallet connection and real-time market charts.",
    tech: ["Solidity", "Web3.js", "Framer"],
    image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?q=80&w=2574&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[8deg] z-20",
    color: "from-orange-900/50 to-black"
  },
  {
    id: 5,
    title: "Social App",
    description: "Photography network for creatives.",
    fullDescription: "A minimal photography network focused on high-quality visuals and meaningful connections.",
    tech: ["Vue", "Firebase", "Sass"],
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop",
    demoLink: "#",
    repoLink: "#",
    className: "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[5deg] z-10",
    color: "from-pink-900/50 to-black"
  },
];

export default function ProjectsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedProject = projects.find((p) => p.id === selectedId);

  return (
    <section className="relative min-h-screen w-full bg-black overflow-hidden font-sans">
      
      {/* MARQUEE BACKGROUND */}
      <div className={`absolute inset-0 flex items-center justify-center z-0 pointer-events-none select-none transition-opacity duration-500 ${selectedId ? 'opacity-5' : 'opacity-20'}`}>
        <motion.div
            className="flex whitespace-nowrap"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
        >
            {[...Array(6)].map((_, i) => (
                <span key={i} className="text-[80px] md:text-[180px] font-bold text-white/5 mx-4 md:mx-10 leading-none font-pompiere">
                    SELECTED WORK • PROJECTS •
                </span>
            ))}
        </motion.div>
      </div>

      <DraggableCardContainer className="relative h-screen w-full flex items-center justify-center">
        <AnimatePresence>
          
          {/* --- STACK VIEW --- */}
          {!selectedId && (
            <div className="relative w-full h-full">
               {projects.map((project, index) => (
                <DraggableCardBody 
                  key={project.id} 
                  onClick={() => setSelectedId(project.id)}
                  // Smaller Card Size: w-60 (240px) x h-80 (320px)
                  className={`absolute ${project.className} w-60 h-80 bg-zinc-900 border border-white/10 shadow-2xl p-4 flex flex-col gap-3 group hover:border-white/40 transition-colors`}
                >
                  <div className="relative w-full h-40 overflow-hidden rounded-md bg-black">
                     <Image src={project.image} fill alt={project.title} className="object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold font-pompiere text-white">{project.title}</h3>
                    <p className="text-[10px] text-zinc-400 leading-tight mt-2 line-clamp-2">{project.description}</p>
                  </div>

                  <div className="mt-auto pt-3 border-t border-white/5 flex items-center justify-between text-zinc-500 text-[10px] uppercase tracking-widest">
                     <span>0{project.id}</span>
                     <span className="group-hover:text-blue-400 transition-colors">Tap to View</span>
                  </div>
                </DraggableCardBody>
              ))}
              
              <div className="absolute bottom-10 left-0 right-0 text-center pointer-events-none">
                 <p className="text-zinc-500 text-[10px] uppercase tracking-[0.3em] animate-pulse">
                   Drag to shuffle • Click to expand
                 </p>
              </div>
            </div>
          )}

          {/* --- EXPANDED MODAL VIEW --- */}
          {selectedId && selectedProject && (
            <motion.div
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               exit={{ opacity: 0, scale: 0.9 }}
               transition={{ duration: 0.3 }}
               className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
               onClick={() => setSelectedId(null)} // Click outside to close
            >
               <div 
                 className="w-full max-w-4xl bg-zinc-950 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-[80vh] md:h-[500px]"
                 onClick={(e) => e.stopPropagation()} // Prevent closing when clicking content
               >
                 
                 {/* Image Side */}
                 <div className="w-full md:w-1/2 h-48 md:h-full relative bg-black">
                    <Image src={selectedProject.image} fill alt={selectedProject.title} className="object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-t ${selectedProject.color} mix-blend-multiply opacity-60`} />
                    
                    <button 
                      onClick={() => setSelectedId(null)}
                      className="absolute top-4 left-4 z-20 flex items-center gap-2 text-white bg-black/50 hover:bg-black/80 backdrop-blur-md px-3 py-1.5 rounded-full text-[10px] uppercase tracking-widest border border-white/10 transition-all"
                    >
                      <ArrowLeft size={12} /> Back
                    </button>
                 </div>

                 {/* Content Side */}
                 <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col overflow-y-auto">
                    <h2 className="text-3xl md:text-5xl font-pompiere text-white mb-4">
                      {selectedProject.title}
                    </h2>
                    
                    <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                      {selectedProject.fullDescription}
                    </p>

                    <div className="mb-6">
                       <h4 className="text-[10px] text-zinc-500 uppercase tracking-widest mb-2">Built With</h4>
                       <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map(t => (
                            <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] text-zinc-300">
                              {t}
                            </span>
                          ))}
                       </div>
                    </div>

                    <div className="flex gap-3 mt-auto pt-4 border-t border-white/5">
                       <a 
                         href={selectedProject.demoLink} 
                         target="_blank" 
                         className="flex-1 py-2.5 bg-white text-black text-[10px] font-bold uppercase tracking-widest rounded hover:bg-zinc-200 transition-colors flex items-center justify-center gap-2"
                       >
                         Live Demo <ArrowUpRight size={14} />
                       </a>
                       <a 
                         href={selectedProject.repoLink} 
                         target="_blank" 
                         className="px-4 py-2.5 border border-white/20 text-white rounded hover:bg-white hover:text-black transition-colors flex items-center justify-center"
                       >
                         <Github size={16} />
                       </a>
                    </div>
                 </div>

               </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DraggableCardContainer>
    </section>
  );
}