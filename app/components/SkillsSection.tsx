'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { Cpu, Layout, Server, Cloud, X, Code, Globe, Terminal } from 'lucide-react';

const skills = [
  { 
    id: 1, 
    name: 'Frontend', 
    tech: ['React', 'Next.js', 'Framer Motion', 'Tailwind CSS', 'TypeScript'], 
    icon: <Layout />, 
    color: 'bg-[#FF3B30]', // Red
    textColor: 'text-white',
    size: 'md:col-span-2' 
  },
  { 
    id: 2, 
    name: 'Backend', 
    tech: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'], 
    icon: <Server />, 
    color: 'bg-[#FF2D55]', // Pink
    textColor: 'text-white',
    size: 'col-span-1' 
  },
  { 
    id: 3, 
    name: 'DevOps', 
    tech: ['AWS (EC2, S3)', 'Docker', 'Vercel', 'CI/CD'], 
    icon: <Cloud />, 
    color: 'bg-[#FFCC00]', // Yellow
    textColor: 'text-black',
    size: 'col-span-1' 
  },
  { 
    id: 4, 
    name: 'Languages', 
    tech: ['C++', 'JavaScript', 'TypeScript', 'Python'], 
    icon: <Code />, 
    color: 'bg-[#34C759]', // Green
    textColor: 'text-white',
    size: 'col-span-1' 
  },
  { 
    id: 5, 
    name: 'Tools', 
    tech: ['Git', 'Postman', 'Figma', 'Linux'], 
    icon: <Terminal />, 
    color: 'bg-[#AF52DE]', // Purple
    textColor: 'text-white',
    size: 'col-span-1' 
  },
  { 
    id: 6, 
    name: 'Web Core', 
    tech: ['HTML5', 'CSS3', 'Responsive Design', 'SEO'], 
    icon: <Globe />, 
    color: 'bg-[#007AFF]', // Blue
    textColor: 'text-white',
    size: 'md:col-span-2' 
  },
];

export default function SkillsSection() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  return (
    <section id="skills" className="py-24 px-6 bg-white dark:bg-black transition-colors duration-500 relative">
  
      <div className="max-w-6xl mx-auto z-10 relative">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-16 dark:text-white text-center uppercase tracking-[0.2em]"
        >
          Technical Arsenal
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {skills.map((skill) => (
            <motion.div
              key={skill.id}
              layoutId={`card-${skill.id}`}
              onClick={() => setSelectedId(skill.id)}
              whileHover={{ scale: 1.02, zIndex: 10 }}
              whileTap={{ scale: 0.98 }}
              className={`${skill.size} cursor-pointer p-8 rounded-[2rem] ${skill.color} flex flex-col justify-between min-h-[200px] shadow-lg`}
            >
              <motion.div layoutId={`icon-${skill.id}`} className={`${skill.textColor} w-fit p-3 bg-black/10 rounded-xl`}>
                {skill.icon}
              </motion.div>
              <div>
                <motion.h3 layoutId={`title-${skill.id}`} className={`text-2xl font-bold ${skill.textColor}`}>
                  {skill.name}
                </motion.h3>
                <motion.p className={`${skill.textColor} opacity-70 text-xs font-bold uppercase mt-1`}>
                  Expand Details +
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedId(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            {skills.filter(s => s.id === selectedId).map(skill => (
              <motion.div
                key="expanded"
                layoutId={`card-${skill.id}`}
                className={`relative w-full max-w-2xl p-10 rounded-[3rem] ${skill.color} z-10 shadow-2xl`}
              >
                <button 
                  onClick={() => setSelectedId(null)}
                  className="absolute top-6 right-6 p-2 rounded-full bg-black/10 hover:bg-black/20 transition-colors"
                >
                  <X className={skill.textColor} size={24} />
                </button>

                <div className="flex items-center gap-5 mb-8">
                  <motion.span layoutId={`icon-${skill.id}`} className={`${skill.textColor} p-4 bg-black/10 rounded-2xl`}>
                    {skill.icon}
                  </motion.span>
                  <motion.h3 layoutId={`title-${skill.id}`} className={`text-4xl font-bold ${skill.textColor}`}>
                    {skill.name}
                  </motion.h3>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {skill.tech.map((t, i) => (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      key={t}
                      className="p-4 bg-black/10 rounded-2xl text-white font-bold backdrop-blur-sm border border-white/10"
                    >
                      {t}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}