'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

const projects = [
  {
    id: 1,
    title: 'Hotel Booking Engine',
    description: 'A comprehensive full-stack solution for luxury hotel chains. Features include real-time room availability, 3D room previews, secure Stripe payments, and an admin dashboard for reservation management.',
    tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    image: '/hotel-preview.jpg', // Ensure this exists in /public
    color: '#1a1a1a', // Dark card background
    demoLink: 'https://hotel-room-booking.vercel.app/',
    repoLink: 'https://github.com/anushka8418/hotelRoom-Booking.git',
  },
  {
    id: 2,
    title: 'AI Career Advisor',
    description: 'An intelligent platform helping students navigate their career paths. Uses NLP to analyze resumes and suggest tailored learning roadmaps, integrated with a mentorship connection system.',
    tech: ['Python', 'FastAPI', 'Next.js', 'OpenAI API'],
    image: '/hotel-preview.jpg', // Placeholder
    color: '#0f172a', // Slate card background
    demoLink: '#',
    repoLink: '#',
  },
  {
    id: 3,
    title: 'Creative Portfolio',
    description: 'The website you are looking at right now. Built with a focus on performance, smooth animations, and accessibility. Features custom spotlight effects and sticky scroll interactions.',
    tech: ['Next.js', 'Framer Motion', 'Tailwind', 'TypeScript'],
    image: '/hotel-preview.jpg', // Placeholder
    color: '#171717', // Neutral card background
    demoLink: '#',
    repoLink: '#',
  }
];

// Individual Card Component
const Card = ({ 
  i, 
  project, 
  progress, 
  range, 
  targetScale 
}: { 
  i: number; 
  project: typeof projects[0]; 
  progress: MotionValue<number>; 
  range: number[]; 
  targetScale: number; 
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1.2, 1]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div 
      ref={container} 
      className="h-screen flex items-center justify-center sticky top-0"
    >
      <motion.div 
        style={{ 
          scale, 
          backgroundColor: project.color, 
          top: `calc(-5vh + ${i * 25}px)` 
        }} 
        className="flex flex-col relative h-[500px] w-full max-w-5xl rounded-3xl p-10 origin-top border border-white/10 overflow-hidden shadow-2xl"
      >
        <div className="flex flex-col md:flex-row h-full gap-12">
          
          {/* Left Content */}
          <div className="w-full md:w-[40%] flex flex-col justify-between relative z-10">
            <div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{project.title}</h2>
               <p className="text-zinc-400 leading-relaxed text-sm md:text-base">
                 {project.description}
               </p>
            </div>

            <div className="mt-8">
               <div className="flex flex-wrap gap-2 mb-8">
                 {project.tech.map((t) => (
                   <span key={t} className="px-3 py-1 rounded-full border border-white/10 text-xs text-zinc-300 bg-white/5">
                     {t}
                   </span>
                 ))}
               </div>

               <div className="flex items-center gap-4">
                 <a 
                   href={project.demoLink} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-medium text-sm hover:bg-zinc-200 transition-colors"
                 >
                   Live Demo <ArrowUpRight size={16} />
                 </a>
                 <a 
                   href={project.repoLink} 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white font-medium text-sm hover:bg-white/10 transition-colors"
                 >
                   Github
                 </a>
               </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-[60%] relative h-full rounded-2xl overflow-hidden bg-black/20 border border-white/5">
             <motion.div style={{ scale: imageScale }} className="w-full h-full relative">
                <Image
                  fill
                  src={project.image}
                  alt={project.title}
                  className="object-cover"
                />
             </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default function ProjectsSection() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} id="projects" className="relative bg-black py-20">
       <div className="max-w-7xl mx-auto px-6 mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 uppercase tracking-tighter">
             Selected Works
          </h2>
          <p className="text-zinc-500 max-w-md">
             Real-world applications built with modern technologies.
          </p>
       </div>

       <div className="px-4">
         {projects.map((project, i) => {
           // Calculate dynamic scaling for the stack effect
           const targetScale = 1 - ( (projects.length - i) * 0.05 );
           return (
             <Card 
               key={project.id} 
               i={i} 
               project={project}
               progress={scrollYProgress}
               range={[i * 0.25, 1]}
               targetScale={targetScale}
             />
           );
         })}
       </div>
       
       {/* Spacer at the bottom to ensure smooth exit */}
       <div className="h-[20vh]" />
    </section>
  );
}