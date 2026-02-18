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
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

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

  const menuItems = ['About', 'Skills', 'Projects','Certificates'];

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
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-20"> 

        {/* Logo */}
        <motion.div
          className="flex items-left gap-2 cursor-pointer"
          whileHover={{ scale: 1.05 }}
          // Note: If you want the logo to navigate, wrap it in a Link or add an onClick handler.
          // If it's just a div, it won't trigger the global sound. 
          // If you want sound here, add: onClick={() => new Audio('/click.mp3').play()}
        >
          <Image
            src={assets.darklogo}
            alt="logo"
            className="w-20 h-18"
          />
        </motion.div>

        {/* Desktop Navigation */}
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
              // REMOVED manual onClick={playClickSound} here to prevent double sound
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-black dark:bg-white group-hover:w-full transition-all duration-300"></span>
            </motion.a>
          ))}
        </nav>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <motion.a
            href="#contact"
            className="hidden md:block bg-black/70 text-white px-4 py-2 rounded-md shadow-lg hover:bg-black transition-colors duration-300 dark:bg-white dark:text-black"
            whileHover={{ scale: 1.05 }}
             // REMOVED manual onClick here
          >
            Contact
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50"> 
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            aria-label="Toggle menu" 
            className="p-2"
            // REMOVED manual onClick here
          >
            {isOpen ? <X className="text-black dark:text-white" size={28} /> : <Menu className="text-black dark:text-white" size={28} />}
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
            className="fixed top-0 right-0 h-screen w-full bg-white dark:bg-black shadow-lg z-40 p-6 flex flex-col justify-center items-center space-y-8"
          >
            {[...menuItems, 'Contact'].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-black dark:text-white text-3xl font-medium"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => setIsOpen(false)}
                 // REMOVED manual onClick here
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