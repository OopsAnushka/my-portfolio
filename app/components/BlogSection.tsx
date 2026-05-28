'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, ArrowUpRight } from 'lucide-react';

// --- Blog Post Data (same as full blog page) ---
const blogPosts = [
  {
    id: 1,
    title: 'Building Cinematic Web Experiences with Three.js & Framer Motion',
    excerpt: 'How I combined 3D rendering with buttery-smooth animations to craft my portfolio — from film grain effects to interactive lens reveals.',
    date: 'May 2025',
    readTime: '8 min read',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop',
    color: '#3B82F6',
  },
  {
    id: 2,
    title: 'My Codeforces Journey: From Newbie to Problem Solver',
    excerpt: 'Reflections on competitive programming — the strategies, patterns, and mindset shifts that helped me tackle complex algorithmic challenges.',
    date: 'Apr 2025',
    readTime: '6 min read',
    category: 'DSA',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&auto=format&fit=crop',
    color: '#8B5CF6',
  },
  {
    id: 3,
    title: 'Designing AeroCare: A Medical PWA for Emergency Response',
    excerpt: 'The architecture decisions behind building a full-stack emergency platform — from real-time hospital updates to blood donor matching.',
    date: 'Mar 2025',
    readTime: '10 min read',
    category: 'Projects',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop',
    color: '#06B6D4',
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="relative bg-black py-16 md:py-28 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-6 relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 md:mb-16">
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-3"
            >
              Latest Posts
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-5xl font-black text-white"
            >
              From My{' '}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Blog
              </span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors duration-300 border border-neutral-800 hover:border-neutral-600 px-4 py-2 rounded-full"
            >
              View All Posts
              <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="group cursor-pointer"
            >
              <Link href="/blog" className="block">
                {/* Image */}
                <div className="relative h-48 sm:h-44 md:h-52 rounded-2xl overflow-hidden mb-4">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    draggable={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                  {/* Category badge */}
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border"
                    style={{
                      color: post.color,
                      borderColor: post.color + '40',
                      backgroundColor: post.color + '15',
                    }}
                  >
                    {post.category}
                  </div>
                </div>

                {/* Meta */}
                <div className="flex items-center gap-3 text-neutral-500 text-[11px] md:text-xs mb-2">
                  <span className="flex items-center gap-1">
                    <Calendar size={11} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={11} />
                    {post.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-white text-base md:text-lg font-bold mb-2 leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="text-neutral-500 text-xs md:text-sm leading-relaxed line-clamp-2 mb-3">
                  {post.excerpt}
                </p>

                {/* Read more */}
                <div className="flex items-center gap-1.5 text-blue-400 text-xs font-medium group-hover:gap-3 transition-all duration-300">
                  Read Article
                  <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
