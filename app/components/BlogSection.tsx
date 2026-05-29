'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'Building Cinematic Web Experiences with Three.js & Framer Motion',
    excerpt: 'How I combined 3D rendering with buttery-smooth animations to craft my portfolio.',
    category: 'Web Dev',
    date: 'May 2025',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=900&auto=format&fit=crop',
    color: '#3B82F6',
  },
  {
    id: 2,
    title: 'My Codeforces Journey: From Newbie to Problem Solver',
    excerpt: 'Reflections on competitive programming — strategies, patterns, and mindset shifts.',
    category: 'DSA',
    date: 'Apr 2025',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=900&auto=format&fit=crop',
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Designing AeroCare: A Medical PWA for Emergency Response',
    excerpt: 'Architecture decisions behind building a full-stack emergency platform.',
    category: 'Projects',
    date: 'Mar 2025',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop',
    color: '#06B6D4',
  },
  {
    id: 4,
    title: 'Why I Chose Next.js 14 for Every Side Project in 2025',
    excerpt: 'App Router, Server Actions, and Turbopack — a deep dive into the DX improvements.',
    category: 'Framework',
    date: 'Feb 2025',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&auto=format&fit=crop',
    color: '#F59E0B',
  },
];

const CARD_HEIGHT = 160;

function BlogCard({ post, index }: { post: typeof blogPosts[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const num = String(index + 1).padStart(2, '0');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href="/blog" className="block">
        <div
          className="relative cursor-pointer"
          style={{ height: CARD_HEIGHT, perspective: 1000 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          {/*
            CUBE WRAPPER
            - Both faces live inside this div
            - Rotates as a unit from the BOTTOM edge
            - On hover: rotateX(-90deg) → top swings toward viewer
          */}
          <div
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transformOrigin: `center ${CARD_HEIGHT}px`,
              transform: hovered ? 'rotateX(-45deg)' : 'rotateX(0deg)',
              transition: 'transform 0.65s cubic-bezier(0.4, 0, 0.2, 1)',
            }}
          >
            {/* ───── FRONT FACE (text) ───── */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: 16,
                overflow: 'hidden',
                background: 'linear-gradient(145deg, #161616, #111)',
                borderTop: '1px solid #252525',
                borderBottom: '1px solid #252525',
                borderLeft: '2px solid #252525',
                borderRight: '2px solid #252525',
                // Push face forward by half the card height to form cube
                transform: `translateZ(${CARD_HEIGHT / 2}px)`,
              }}
            >
              <div className="flex items-center h-full px-20 md:px-10">
                <span
                  className="shrink-0 text-3xl md:text-5xl font-bold text-[#2a2a2a] mr-6 md:mr-10"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  {num}
                </span>
                <div className="shrink-0 w-[1px] h-12 md:h-16 bg-[#252525] mr-6 md:mr-10" />
                <div className="flex-1 min-w-0 mr-4 md:mr-8">
                  <h3
                    className="text-base md:text-xl lg:text-2xl font-bold text-neutral-200 leading-snug mb-1 line-clamp-1"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {post.title}
                  </h3>
                  <p className="text-xs md:text-sm text-neutral-600 line-clamp-2 leading-relaxed">
                    {post.excerpt}
                  </p>
                </div>
                <div className="shrink-0 w-11 h-11 md:w-13 md:h-13 rounded-full bg-[#1a1a1a] border border-[#2a2a2a] flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-neutral-600" />
                </div>
              </div>
            </div>

            {/* ───── TOP FACE (image) ───── */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: 16,
                overflow: 'hidden',
                // Rotate 90deg and position as the TOP of the cuboid
                transform: `rotateX(90deg) translateZ(${CARD_HEIGHT / 2}px)`,
              }}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
                draggable={false}
              />
              <div
                className="absolute inset-0"
                style={{
                  background: `linear-gradient(135deg, ${post.color}BB 0%, ${post.color}66 100%)`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/20" />
              <div className="absolute inset-0 flex items-center px-6 md:px-10">
                <div className="flex-1 min-w-0 mr-4">
                  <span
                    className="text-white/60 text-[10px] md:text-xs tracking-[0.2em] uppercase"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {post.category} · {post.date}
                  </span>
                  <h3
                    className="text-white text-base md:text-xl lg:text-2xl font-bold mt-1 line-clamp-2"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {post.title}
                  </h3>
                </div>
                <div className="shrink-0 w-11 h-11 rounded-full bg-white/15 backdrop-blur-sm border border-white/25 flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function BlogSection() {
  return (
    <section id="blog" className="relative bg-black py-20 md:py-42 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-blue-600/5 blur-[180px] rounded-full pointer-events-none" />

      <div className="w-full px-8 md:px-16 lg:px-24 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30, filter: 'blur(5px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="inline-block mb-4"
          >
            <span className="text-neutral-500 text-xs md:text-sm tracking-[0.25em] uppercase">
              Latest Posts
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30, filter: 'blur(8px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            style={{ fontFamily: 'var(--font-inter)' }}
          >
            Stories from my journey <br className="hidden md:block" />
            in code &amp; creativity
          </motion.h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-12  md:gap-16">
          {blogPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {/* View All */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-12 md:mt-16"
        >
          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 border border-neutral-800 hover:border-neutral-500 px-6 py-3 rounded-full"
          >
            View All Posts
            <ArrowUpRight
              size={14}
              className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
            />
          </Link>
        </motion.div> */}
      </div>
    </section>
  );
}
