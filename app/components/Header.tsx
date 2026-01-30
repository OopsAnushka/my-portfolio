'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from "next/image";
import { useTheme } from 'next-themes';
import { assets } from '../assets/assets';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  // 2. Add state to handle client-side mounting
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme(); // 3. Get the current theme

  // 4. Set mounted to true only after the component mounts on the client
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

  const menuItems = ['About', 'Assignment', 'Projects','Certificate'];

  // 5. This check prevents theme-related hydration mismatch errors
  if (!mounted) {
    return null;
  }

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
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* Logo on the Left */}
        <motion.div
          className="flex items-left gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
        >
          {/* 6. Conditionally render the logo based on the theme */}
          <Image
            src={assets.darklogo}
            alt="logo"
            className="w-20 h-18"
          />
        </motion.div>

        {/* Center Navigation */}
        <nav className="hidden md:flex space-x-8 items-center absolute left-1/2 transform -translate-x-1/2">
          {menuItems.map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-black dark:text-white transition-colors duration-300 relative group whitespace-nowrap cursor-pointer"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right Section (Contact button) */}
        <div className="flex items-center gap-4">

          <motion.a
            href="#contact"
            className="hidden md:block bg-black/70 text-white px-4 py-2 rounded-md shadow-lg hover:bg-black transition-colors duration-300 dark:bg-white dark:text-black"
            whileHover={{ scale: 1.05 }}
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X  className="color-white" size={28} /> : <Menu size={28} />}
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
            className="fixed top-0 right-0 h-full w-2/3 bg-white dark:bg-black shadow-lg z-50 p-6 flex flex-col space-y-6"
          >
            {[...menuItems, 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black dark:text-white text-lg font-medium"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </motion.a>
            ))}
           
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}