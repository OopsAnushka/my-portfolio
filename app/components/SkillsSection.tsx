'use client';

import { useState, MouseEvent } from 'react';
import { motion, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Layout, Server, Cloud, Code, Terminal, Globe, X } from 'lucide-react';
import { CanvasRevealEffect } from '@/app/components/ui/canvas-reveal-effect';
import { cn } from "@/lib/utils";

// --- Data ---
const skills = [
  { 
    id: 1, 
    name: 'Frontend', 
    tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Three.js'], 
    icon: <Layout className="w-6 h-6 md:w-8 md:h-8" />, 
    // We keep these for the expanded view accents, but the grid will be uniform
    color: '#3B82F6', 
    size: 'col-span-2' 
  },
  { 
    id: 2, 
    name: 'Backend', 
    tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Supabase'], 
    icon: <Server className="w-6 h-6 md:w-8 md:h-8" />, 
    color: '#FF2D55', 
    size: 'col-span-1' 
  },
  { 
    id: 3, 
    name: 'DevOps', 
    tech: ['AWS (EC2, S3)', 'Docker', 'Vercel', 'CI/CD Pipelines'], 
    icon: <Cloud className="w-6 h-6 md:w-8 md:h-8" />, 
    color: '#FFCC00', 
    size: 'col-span-1' 
  },
  { 
    id: 4, 
    name: 'Languages', 
    tech: ['C++', 'JavaScript', 'TypeScript', 'Python', 'Java'], 
    icon: <Code className="w-6 h-6 md:w-8 md:h-8" />, 
    color: '#34C759', 
    size: 'col-span-1' 
  },
  { 
    id: 5, 
    name: 'Tools', 
    tech: ['Git', 'Postman', 'Figma', 'Linux', 'VS Code'], 
    icon: <Terminal className="w-6 h-6 md:w-8 md:h-8" />, 
    color: '#AF52DE', 
    size: 'col-span-1' 
  },
  { 
    id: 6, 
    name: 'Web Core', 
    tech: ['HTML5', 'CSS3', 'Responsive Design', 'SEO', 'Accessibility'], 
    icon: <Globe className="w-6 h-6 md:w-8 md:h-8" />, 
    color: '#007AFF', 
    size: 'col-span-2' 
  },
];

// --- Custom "Motion" CardSpotlight Component ---
// This combines the CanvasReveal logic with Framer Motion layoutId for the expand animation
const SkillCard = ({ 
  children, 
  className = "", 
  onClick,
  layoutId
}: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
  layoutId?: string;
}) => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      layoutId={layoutId}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      className={cn(
        "group/spotlight relative border border-neutral-800 bg-black dark:border-neutral-800 overflow-hidden rounded-2xl md:rounded-[2rem] cursor-pointer",
        className
      )}
    >
      {/* The Reveal Effect Layer */}
      <motion.div
        className="pointer-events-none absolute z-0 -inset-px opacity-0 transition duration-300 group-hover/spotlight:opacity-100"
        style={{
          backgroundColor: "transparent",
          maskImage: useMotionTemplate`
            radial-gradient(
              350px circle at ${mouseX}px ${mouseY}px,
              white,
              transparent 80%
            )
          `,
        }}
      >
        <CanvasRevealEffect
          animationSpeed={3}
          containerClassName="bg-transparent absolute inset-0 pointer-events-none"
          colors={[
            [59, 130, 246], // Blue
            [139, 92, 246], // Purple
          ]}
          dotSize={2.6}
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedSkill = skills.find(s => s.id === selectedId);

  return (
    <section id="skills" className="py-12 md:py-24 px-4 md:px-6 relative bg-black overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-black blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            A curated list of technologies I use to build digital experiences.
          </p>
        </motion.div>
        
        {/* Bento Grid */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.id} 
              className={`${skill.size} h-full`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <SkillCard 
                layoutId={`card-${skill.id}`} 
                onClick={() => setSelectedId(skill.id)}
                className="h-full"
              >
                <div className="p-4 md:p-8 h-full flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <motion.div 
                      layoutId={`icon-${skill.id}`} 
                      className="p-2 md:p-3 bg-zinc-900/50 rounded-xl text-white backdrop-blur-sm border border-white/10"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center group-hover/spotlight:bg-white/10 transition-colors">
                       <span className="text-white/50 text-[10px] md:text-xs">↗</span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-8">
                    <motion.h3 
                      layoutId={`title-${skill.id}`} 
                      className="text-sm md:text-2xl font-bold text-blue-500 mb-1 md:mb-2 truncate"
                    >
                      {skill.name}
                    </motion.h3>
                    <p className="text-zinc-400 text-[10px] md:text-sm line-clamp-2 leading-tight">
                      {skill.tech.join(' • ')}
                    </p>
                  </div>
                </div>
              </SkillCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedId && selectedSkill && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md cursor-pointer"
            />

            {/* Expanded Card */}
            <div className="relative z-10 pointer-events-none w-full max-w-2xl">
              <motion.div
                key="expanded-card"
                layoutId={`card-${selectedSkill.id}`}
                className="w-full bg-neutral-900 border border-white/10 p-6 md:p-12 rounded-[2rem] overflow-hidden pointer-events-auto shadow-2xl"
              >
                {/* Decorative Glow for Expanded State */}
                <div 
                  className="absolute -top-32 -right-32 w-64 h-64 blur-[100px] rounded-full pointer-events-none opacity-40"
                  style={{ backgroundColor: selectedSkill.color }}
                />

                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors z-20 cursor-pointer"
                >
                  <X className="text-white" size={24} />
                </button>

                <div className="flex items-center gap-4 md:gap-6 mb-8 md:mb-10 relative z-10">
                  <motion.span 
                    layoutId={`icon-${selectedSkill.id}`} 
                    className="p-3 md:p-5 bg-zinc-800 rounded-2xl text-white border border-white/10"
                  >
                    <div className="scale-125 md:scale-150">{selectedSkill.icon}</div>
                  </motion.span>
                  <div>
                    <motion.h3 
                      layoutId={`title-${selectedSkill.id}`} 
                      className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2"
                    >
                      {selectedSkill.name}
                    </motion.h3>
                    <span className="text-zinc-400 text-sm md:text-base">Core Technologies & Tools</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3 relative z-10">
                  {selectedSkill.tech.map((t, i) => (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 + 0.2 }}
                      key={t}
                      className="p-2 md:p-3 bg-white/5 hover:bg-white/10 rounded-xl text-zinc-300 text-xs md:text-sm font-medium border border-white/5 transition-colors text-center cursor-default"
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}