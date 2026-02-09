'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Volume2, VolumeX } from 'lucide-react'; 
import styles from './HeroSection.module.css';
import image from '../assets/portrait-bright.png'; // Ensure this path matches your folder structure

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // --- Music Player State ---
  const [isPlaying, setIsPlaying] = useState(true);
  const [showPrompt, setShowPrompt] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch((err) => console.log("Play blocked:", err));
      }
      setIsPlaying(!isPlaying);
      setShowPrompt(false); 
    }
  };

  useEffect(() => {
    // Check if audio exists before trying to play
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      
      const playPromise = audioRef.current.play();
      
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Browser blocked autoplay -> Show prompt
          setIsPlaying(false);
          setShowPrompt(true);

          const timer = setTimeout(() => {
            setShowPrompt(false);
          }, 60000);

          return () => clearTimeout(timer);
        });
      }
    }
  }, []);

  const lensRadius = 125;
  const maskPosition = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}px ${y}px, transparent ${lensRadius}px, black ${lensRadius}px)`
  );

  useEffect(() => {
    // Window event listener must be inside useEffect
    const handleMouseMove = (e: MouseEvent) => { 
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop />

      <section className={styles.heroContainer}>
        <div className={styles.bottomLayer}>
          <Image
            src={image}
            alt="Abstract colorful background"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
          <div className={styles.textContainer}>
             <h1 className="text-3xl">
          I BUILD THE QUIET SPACE-</h1>
          <h1 className='text-2xl'>
          WHERE FUNCTION AND BEAUTY MEET.
        </h1>
          </div>
        </div>

        <motion.div
          className={`${styles.topLayer} hidden md:block`}
          style={{
            maskImage: maskPosition,
            WebkitMaskImage: maskPosition,
          }}
        >
         <div className={styles.textContainer}>
             <h1 className="text-3xl">
          I BUILD THE QUIET SPACE-</h1>
          <h1 className='text-2xl'>
          WHERE FUNCTION AND BEAUTY MEET.
        </h1>
          </div>
        </motion.div>

       {/* --- Volume Control Wrapper --- */}
       <div className="absolute bottom-10 right-6 z-50 flex flex-col items-end gap-2">
         
         <AnimatePresence>
           {showPrompt && (
             <motion.div
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, scale: 0.9 }}
               className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-2 rounded-lg relative shadow-lg"
             >
               <span className="whitespace-nowrap">Tap to play sound 🎵</span>
               <div className="absolute -bottom-1 right-3 w-2 h-2 bg-white/10 border-b border-r border-white/20 rotate-45 transform"></div>
             </motion.div>
           )}
         </AnimatePresence>

         <button 
            onClick={togglePlay}
            suppressHydrationWarning
            className="p-3 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 transition-all duration-300 group shadow-lg"
            aria-label="Toggle background music"
          >
            {isPlaying ? (
              <Volume2 className="text-white w-5 h-5 group-hover:scale-110 transition-transform" />
            ) : (
              <VolumeX className="text-white/70 w-5 h-5 group-hover:scale-110 transition-transform" />
            )}
          </button>
       </div>

       <a href="#about" className={styles.scrollButton}>
          <span>Scroll to explore</span>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.scrollIcon}
          >
            <path
              d="M12 5V19M12 19L19 12M12 19L5 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </section>
      
      <div className={styles.filmGrain} />
    </>
  );
};

export default HeroSection;