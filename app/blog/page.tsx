'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Calendar, Clock, ArrowRight, Tag, Search, X } from 'lucide-react';

// --- Blog Post Data ---
const blogPosts = [
  {
    id: 1,
    title: 'Building Cinematic Web Experiences with Three.js & Framer Motion',
    excerpt: 'How I combined 3D rendering with buttery-smooth animations to craft my portfolio — from film grain effects to interactive lens reveals.',
    date: 'May 2025',
    readTime: '8 min read',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&auto=format&fit=crop',
    tags: ['Three.js', 'Framer Motion', 'Next.js'],
    featured: true,
  },
  {
    id: 2,
    title: 'My Codeforces Journey: From Newbie to Problem Solver',
    excerpt: 'Reflections on competitive programming — the strategies, patterns, and mindset shifts that helped me tackle increasingly complex algorithmic challenges.',
    date: 'Apr 2025',
    readTime: '6 min read',
    category: 'DSA',
    image: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?w=600&auto=format&fit=crop',
    tags: ['C++', 'Algorithms', 'Competitive Programming'],
    featured: false,
  },
  {
    id: 3,
    title: 'Designing AeroCare: A Medical PWA for Emergency Response',
    excerpt: 'The architecture decisions behind building a full-stack emergency platform — from real-time hospital updates to blood donor matching.',
    date: 'Mar 2025',
    readTime: '10 min read',
    category: 'Projects',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop',
    tags: ['TypeScript', 'Next.js', 'MongoDB'],
    featured: false,
  },
  {
    id: 4,
    title: 'Understanding AI: Exploring Machine Learning Fundamentals',
    excerpt: 'A beginner-friendly deep dive into neural networks, training loops, and why AI is reshaping how we build software — with practical Python examples.',
    date: 'Feb 2025',
    readTime: '12 min read',
    category: 'AI',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&auto=format&fit=crop',
    tags: ['Python', 'Machine Learning', 'AI'],
    featured: true,
  },
  {
    id: 5,
    title: 'Deploying at Scale: Docker, AWS, and the CI/CD Pipeline',
    excerpt: 'How I set up automated deployments with Docker containers on AWS — including lessons learned from production failures.',
    date: 'Jan 2025',
    readTime: '7 min read',
    category: 'DevOps',
    image: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&auto=format&fit=crop',
    tags: ['Docker', 'AWS', 'CI/CD'],
    featured: false,
  },
  {
    id: 6,
    title: 'The Art of Responsive Design: Beyond Media Queries',
    excerpt: 'Modern CSS techniques that make responsive design feel effortless — container queries, fluid typography, and dynamic layouts.',
    date: 'Dec 2024',
    readTime: '5 min read',
    category: 'Web Dev',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&auto=format&fit=crop',
    tags: ['CSS', 'Responsive Design', 'UI/UX'],
    featured: false,
  },
];

const categories = ['All', 'Web Dev', 'DSA', 'Projects', 'AI', 'DevOps'];

// Category color map
const categoryColors: Record<string, string> = {
  'Web Dev': '#3B82F6',
  'DSA': '#8B5CF6',
  'Projects': '#06B6D4',
  'AI': '#10B981',
  'DevOps': '#F59E0B',
};

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPost, setSelectedPost] = useState<typeof blogPosts[0] | null>(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="relative bg-black min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="relative pt-28 md:pt-36 pb-16 md:pb-24 px-4 overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-blue-600/8 blur-[150px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[300px] bg-purple-600/8 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-blue-400 text-sm tracking-[0.2em] uppercase mb-4"
          >
            Thoughts & Experiments
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-black text-white mb-6 leading-tight"
          >
            My{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Blog
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10"
          >
            Writing about web development, algorithms, AI explorations, and the creative process behind building digital experiences.
          </motion.p>

          {/* Search bar */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="max-w-md mx-auto relative"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-500 w-4 h-4" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 bg-neutral-900/80 border border-neutral-800 rounded-xl text-white text-sm placeholder-neutral-500 focus:border-blue-500/50 focus:outline-none transition-colors backdrop-blur-sm"
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
              >
                <X size={16} />
              </button>
            )}
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="px-4 pb-8 md:pb-12">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-2 md:gap-3"
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs md:text-sm font-medium transition-all duration-300 border cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-white text-black border-white shadow-lg shadow-white/10'
                    : 'bg-transparent text-neutral-400 border-neutral-800 hover:border-neutral-600 hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="px-4 pb-20 md:pb-32">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  onClick={() => setSelectedPost(post)}
                  className="group cursor-pointer relative bg-neutral-900/50 border border-neutral-800 rounded-2xl overflow-hidden hover:border-neutral-700 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/5"
                >
                  {/* Featured badge */}
                  {post.featured && (
                    <div className="absolute top-4 right-4 z-10 px-2.5 py-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-[10px] font-bold text-white uppercase tracking-wider">
                      Featured
                    </div>
                  )}

                  {/* Image */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      draggable={false}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent" />
                    
                    {/* Category pill on image */}
                    <div 
                      className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md border"
                      style={{ 
                        color: categoryColors[post.category] || '#fff',
                        borderColor: (categoryColors[post.category] || '#fff') + '40',
                        backgroundColor: (categoryColors[post.category] || '#fff') + '15',
                      }}
                    >
                      {post.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5 md:p-6">
                    <div className="flex items-center gap-3 text-neutral-500 text-[11px] md:text-xs mb-3">
                      <span className="flex items-center gap-1">
                        <Calendar size={12} />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                    </div>

                    <h3 className="text-white text-base md:text-lg font-bold mb-2 leading-snug line-clamp-2 group-hover:text-blue-300 transition-colors duration-300">
                      {post.title}
                    </h3>

                    <p className="text-neutral-500 text-xs md:text-sm leading-relaxed line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {post.tags.map(tag => (
                        <span 
                          key={tag} 
                          className="px-2 py-0.5 text-[10px] font-medium text-neutral-400 bg-neutral-800/80 rounded-md border border-neutral-700/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Read more */}
                    <div className="flex items-center gap-1.5 text-blue-400 text-xs font-medium group-hover:gap-3 transition-all duration-300">
                      Read Article
                      <ArrowRight size={14} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Empty state */}
          {filteredPosts.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-neutral-500 text-lg mb-2">No articles found</p>
              <p className="text-neutral-600 text-sm">Try a different search term or category</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Post Detail Modal */}
      <AnimatePresence>
        {selectedPost && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setSelectedPost(null)}
          >
            <motion.div 
              initial={{ scale: 0.92, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.92, y: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl overflow-hidden max-w-2xl w-full shadow-2xl max-h-[85vh] overflow-y-auto"
            >
              {/* Modal Image */}
              <div className="relative h-48 sm:h-64">
                <img 
                  src={selectedPost.image} 
                  alt={selectedPost.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/30 to-transparent" />
                <button 
                  onClick={() => setSelectedPost(null)}
                  className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-white rounded-full bg-black/50 hover:bg-black/70 backdrop-blur-sm transition-colors"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 md:p-8 -mt-8 relative">
                <div 
                  className="inline-block px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider mb-4 border"
                  style={{ 
                    color: categoryColors[selectedPost.category] || '#fff',
                    borderColor: (categoryColors[selectedPost.category] || '#fff') + '40',
                    backgroundColor: (categoryColors[selectedPost.category] || '#fff') + '15',
                  }}
                >
                  {selectedPost.category}
                </div>

                <h2 className="text-2xl md:text-3xl font-bold text-white mb-3 leading-tight">
                  {selectedPost.title}
                </h2>

                <div className="flex items-center gap-4 text-neutral-500 text-xs mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar size={14} />
                    {selectedPost.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Clock size={14} />
                    {selectedPost.readTime}
                  </span>
                </div>

                <p className="text-neutral-300 text-sm md:text-base leading-relaxed mb-6">
                  {selectedPost.excerpt}
                </p>

                <p className="text-neutral-500 text-sm leading-relaxed mb-6">
                  This is a preview of the full article. The complete blog system with full article content, markdown rendering, and comments is coming soon. Stay tuned for in-depth technical write-ups!
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedPost.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="px-3 py-1 text-xs font-medium text-blue-300 bg-blue-900/20 rounded-full border border-blue-900/30"
                    >
                      <Tag size={10} className="inline mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-neutral-600 text-xs text-center italic">
                    Full article coming soon — check back for the complete write-up ✨
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer */}
      <div className="relative z-10 bg-black">
        <Footer />
      </div>
    </div>
  );
}
