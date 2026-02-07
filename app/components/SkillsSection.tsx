'use client';

import { useState, useRef, MouseEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout, Server, Cloud, Code, Terminal, Globe, X } from 'lucide-react';

const skills = [
  { 
    id: 1, 
    name: 'Frontend', 
    tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript', 'Three.js'], 
    icon: <Layout className="w-6 h-6 md:w-8 md:h-8" />, 
    color: '#AA336A', 
    // Changed: Removed 'md:' prefix to enforce col-span-2 on mobile too
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
    // Changed: Removed 'md:' prefix
    size: 'col-span-2' 
  },
];

// --- Spotlight Card Component ---
const SpotlightCard = ({ 
  children, 
  className = "", 
  spotlightColor = "rgba(255, 255, 255, 0.25)",
  onClick,
  layoutId
}: { 
  children: React.ReactNode; 
  className?: string;
  spotlightColor?: string;
  onClick?: () => void;
  layoutId?: string;
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleMouseEnter = () => setOpacity(1);
  const handleMouseLeave = () => setOpacity(0);

  return (
    <motion.div
      layoutId={layoutId}
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      className={`relative overflow-hidden rounded-2xl md:rounded-[2rem] bg-zinc-900/50 border border-zinc-800 ${className}`}
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 40%)`,
        }}
      />
      <div className="relative h-full">{children}</div>
    </motion.div>
  );
};

export default function SkillsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const selectedSkill = skills.find(s => s.id === selectedId);

  return (
    <section id="skills" className="py-12 md:py-24 px-4 md:px-6 relative bg-black overflow-hidden">
      
      {/* Ambient Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-purple-500/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white uppercase tracking-[0.2em]">
            Technical Arsenal
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            A curated list of technologies I use to build digital experiences.
          </p>
        </motion.div>
        
        {/* GRID UPDATE: grid-cols-3 on ALL screens, tight gap on mobile */}
        <div className="grid grid-cols-3 gap-3 md:gap-6">
          {skills.map((skill) => (
            <div key={skill.id} className={`${skill.size} h-full`}>
              <SpotlightCard 
                layoutId={`card-${skill.id}`} 
                onClick={() => setSelectedId(skill.id)}
                className="h-full cursor-pointer group" 
                spotlightColor={skill.color}
              >
                {/* Responsive Padding: p-4 on mobile, p-8 on desktop */}
                <div className="p-4 md:p-8 h-full flex flex-col justify-between relative z-10">
                  <div className="flex justify-between items-start">
                    <motion.div 
                      layoutId={`icon-${skill.id}`} 
                      className="p-2 md:p-3 bg-zinc-800/80 rounded-xl text-blue-500 backdrop-blur-sm border border-white/10"
                    >
                      {skill.icon}
                    </motion.div>
                    
                    {/* Hide arrow on small mobile screens to save space, or make it tiny */}
                    <div className="w-6 h-6 md:w-8 md:h-8 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                       <span className="text-white/50 text-[10px] md:text-xs">↗</span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-8">
                    {/* Responsive Text Sizes */}
                    <motion.h3 
                      layoutId={`title-${skill.id}`} 
                      className="text-sm md:text-2xl font-bold text-white mb-1 md:mb-2 truncate"
                    >
                      {skill.name}
                    </motion.h3>
                    <p className="text-zinc-400 text-[10px] md:text-sm line-clamp-2 leading-tight">
                      {skill.tech.join(' • ')}
                    </p>
                  </div>
                </div>
              </SpotlightCard>
            </div>
          ))}
        </div>
      </div>

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
                className="w-full bg-[#0a0a0a] border border-white/10 p-6 md:p-12 rounded-[2rem] overflow-hidden pointer-events-auto"
              >
                {/* Decorative Glow */}
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