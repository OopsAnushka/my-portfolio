// components/AboutSection.tsx

import React from 'react';
import { motion } from 'framer-motion';

// Data for the stats section
const stats = [
  { number: '0', label: 'Years Experience' },
  { number: '2+', label: 'Projects Completed' },
  { number: 'MILLIONS', label: 'of Lines of Code' },
  { number: 'HUNDREDS', label: 'of Screens Designed' },
  { number: '∞', label: 'Coffee Consumed' },
];

// Framer Motion variants for the stats items
const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="bg-black text-gray-300 py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            // CHANGE: Removed 'once: true' to allow animation on every visit
            viewport={{ amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-400 mb-4"
          >
            (About.)
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            // CHANGE: Removed 'once: true'
            viewport={{ amount: 0.3 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="text-sm md:text-lg lg:text-xl text-white leading-tight max-w-4xl mx-auto"
          >
            I'M ANUSHKA SHARMA,  a learning developer from India.I love building interactive, visually engaging websites that merge creativity with functionality.I’m working on real-world projects while honing my skills, passionate about exploring AI and cloud computing to build innovative and scalable solutions.Beyond coding, I’m always exploring new technologies, pushing creative boundaries, and experimenting 
          with design to bring fresh ideas to life.
         
          </motion.h1>
        </div>
        
        <div className="border-t border-gray-700 pt-12">
          <motion.div
            className="flex flex-wrap justify-center gap-x-8 gap-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            // CHANGE: Removed 'once: true'
            viewport={{ amount: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center min-w-[160px]"
                variants={itemVariants}
              >
                <p className="text-2xl md:text-3xl  text-blue-500 mb-2">
                  {stat.number}
                </p>
                <span className="text-sm uppercase tracking-wider text-gray-400">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;