'use client';

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Briefcase, GraduationCap, Rocket, Code, Award, Zap } from 'lucide-react';

const timelineEvents = [
  {
    year: '2024',
    title: 'Started Web Development Journey',
    description: 'Began learning HTML, CSS, JavaScript and dove into the world of frontend development. Built first static websites and discovered the passion for creating digital experiences.',
    icon: <Code className="w-5 h-5" />,
    category: 'Learning',
    color: '#3B82F6',
  },
  {
    year: '2024',
    title: 'Mastered React & Next.js',
    description: 'Learned React ecosystem, built interactive UIs with Framer Motion, and started creating full-stack applications using Next.js and MongoDB.',
    icon: <Rocket className="w-5 h-5" />,
    category: 'Skill Up',
    color: '#8B5CF6',
  },
  {
    year: '2024',
    title: 'Postman API Student Expert',
    description: 'Earned the Postman API Fundamentals Student Expert certification, validating skills in API development and testing.',
    icon: <Award className="w-5 h-5" />,
    category: 'Certification',
    color: '#F59E0B',
  },
  {
    year: '2025',
    title: 'Built Real-World Projects',
    description: 'Developed multiple full-stack applications including portfolio websites, hotel booking systems, and interactive web experiences using modern tech stack.',
    icon: <Briefcase className="w-5 h-5" />,
    category: 'Projects',
    color: '#10B981',
  },
  {
    year: '2025',
    title: 'Exploring AI & Cloud Computing',
    description: 'Currently diving into AI/ML integrations, cloud services (AWS), Docker, and building scalable solutions for innovative applications.',
    icon: <Zap className="w-5 h-5" />,
    category: 'Current',
    color: '#EC4899',
  },
];

function TimelineCard({ event, index }: { event: typeof timelineEvents[0]; index: number }) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className={`relative flex w-full items-center mb-8 md:mb-12 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.3 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content Card */}
      <div className={`w-full md:w-[calc(50%-2rem)] ${isLeft ? 'md:pr-0' : 'md:pl-0'} pl-12 md:pl-0`}>
        <motion.div
          className="relative group bg-neutral-900/80 border border-neutral-800 rounded-2xl p-5 md:p-6 hover:border-neutral-600 transition-all duration-500"
          whileHover={{ y: -4 }}
        >
          {/* Glow effect on hover */}
          <div
            className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl"
            style={{ backgroundColor: event.color }}
          />

          <div className="relative z-10">
            {/* Category & Year */}
            <div className="flex items-center justify-between mb-3">
              <span
                className="text-[10px] md:text-xs font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border"
                style={{
                  color: event.color,
                  borderColor: `${event.color}30`,
                  backgroundColor: `${event.color}10`,
                }}
              >
                {event.category}
              </span>
              <span className="text-xs md:text-sm text-neutral-500 font-mono">{event.year}</span>
            </div>

            {/* Title */}
            <h3 className="text-base md:text-xl font-bold text-white mb-2 leading-tight">
              {event.title}
            </h3>

            {/* Description */}
            <p className="text-xs md:text-sm text-neutral-400 leading-relaxed">
              {event.description}
            </p>
          </div>
        </motion.div>
      </div>

      {/* Center Node - visible on all screens */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 z-20 flex items-center justify-center">
        <motion.div
          className="w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center border-2 shadow-lg"
          style={{
            backgroundColor: `${event.color}20`,
            borderColor: event.color,
            boxShadow: `0 0 20px ${event.color}30`,
          }}
          whileInView={{ scale: [0.5, 1.2, 1] }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
        >
          <span style={{ color: event.color }}>{event.icon}</span>
        </motion.div>
      </div>

      {/* Empty space for alternating layout - desktop only */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}

export default function TimelineSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 80%', 'end 20%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section id="timeline" className="py-12 md:py-24 px-4 md:px-6 relative bg-black overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative" ref={containerRef}>
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            My Journey
          </h2>
          <p className="text-gray-400 max-w-lg mx-auto text-sm md:text-base">
            A timeline of milestones, growth, and continuous learning.
          </p>
        </motion.div>

        {/* Timeline Line */}
        <div className="absolute left-[15px] md:left-1/2 md:-translate-x-px top-[140px] md:top-[200px] bottom-0 w-px bg-neutral-800">
          <motion.div
            className="w-full bg-gradient-to-b from-blue-500 via-purple-500 to-pink-500 origin-top"
            style={{ height: lineHeight }}
          />
        </div>

        {/* Timeline Events */}
        <div className="relative">
          {timelineEvents.map((event, index) => (
            <TimelineCard key={index} event={event} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
