'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from 'next-themes';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';

// Section links (anchor-based, scroll on home page)
const sectionItems = ['About', 'Skills', 'Projects', 'Timeline', 'Blog'];

// Page links (route-based, right side of divider)
const pageItems = [
  { label: 'Resume', href: '/resume' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  // Build section href — if on home page, just #section; otherwise /# section
  const getSectionHref = (item: string) => {
    return isHome ? `#${item.toLowerCase()}` : `/#${item.toLowerCase()}`;
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-md dark:bg-black/70 dark:text-white'
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16 md:h-20"> 

        {/* Logo */}
        <Link href="/">
          <motion.div
            className="flex items-left gap-2 cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={assets.darklogo}
              alt="logo"
              className="w-16 h-14 md:w-20 md:h-18"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 lg:space-x-8 items-center absolute left-1/2 transform -translate-x-1/2">
          {sectionItems.map((item, index) => (
            <motion.a
              key={item}
              href={getSectionHref(item)}
              className="text-black dark:text-white transition-colors duration-300 relative group whitespace-nowrap cursor-pointer text-base lg:text-lg"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}

          {/* Divider */}
          <div className="w-px h-5 bg-white/20" />

          {pageItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionItems.length + index) * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                href={item.href}
                className={`transition-colors duration-300 relative group whitespace-nowrap cursor-pointer text-base lg:text-lg ${
                  pathname === item.href 
                    ? 'text-blue-400' 
                    : 'text-black dark:text-white'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  pathname === item.href 
                    ? 'w-full bg-blue-400' 
                    : 'w-0 bg-black dark:bg-white group-hover:w-full'
                }`}></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <motion.a
            href={isHome ? "#contact" : "/#contact"}
            className="hidden md:block bg-black/70 text-white px-4 py-2 rounded-md shadow-lg hover:bg-black transition-colors duration-300 dark:bg-white dark:text-black text-lg lg:text-xl"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-[60]"> 
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu" 
            className="p-2 relative z-[60]"
          >
            {isOpen ? <X className="text-white" size={28} /> : <Menu className="text-white" size={28} />}
          </button>
        </div>
      </div>
  
      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 h-screen w-full bg-black/95 backdrop-blur-lg z-[55] p-6 flex flex-col justify-center items-center space-y-6"
          >
            {/* Section links */}
            {sectionItems.map((item, index) => (
              <motion.a
                key={item}
                href={getSectionHref(item)}
                className="text-white text-2xl sm:text-3xl font-medium"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}

            {/* Divider line */}
            <motion.div
              className="w-16 h-px bg-white/20"
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.25 }}
            />

            {/* Page links */}
            {pageItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: (sectionItems.length + index) * 0.05 + 0.1 }}
              >
                <Link
                  href={item.href}
                  className={`text-2xl sm:text-3xl font-medium ${
                    pathname === item.href ? 'text-blue-400' : 'text-white'
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}

            {/* Contact */}
            <motion.a
              href={isHome ? "#contact" : "/#contact"}
              className="text-4xl sm:text-6xl text-white font-black"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: (sectionItems.length + pageItems.length) * 0.05 + 0.15 }}
              onClick={() => setIsOpen(false)}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}