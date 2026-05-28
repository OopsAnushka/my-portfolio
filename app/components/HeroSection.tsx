'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import styles from './HeroSection.module.css';
import portraitImg from '../assets/portrait-bright.png';

function clamp01(v: number): number {
  return Math.min(1, Math.max(0, v));
}

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

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
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          setIsPlaying(false);
          setShowPrompt(true);
          const timer = setTimeout(() => setShowPrompt(false), 60000);
          return () => clearTimeout(timer);
        });
      }
    }
  }, []);

  // --- Responsive ---
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  // --- Scroll-driven animation ---
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // Image dimensions — start small, grow to full viewport
  const startW = isMobile ? 160 : 280;
  const startH = isMobile ? 70 : 110;

  const imageWidth = useTransform(scrollYProgress, (v) => {
    const p = clamp01((v - 0.02) / 0.48);
    return `calc(${startW * (1 - p)}px + ${p * 100}vw)`;
  });

  const imageHeight = useTransform(scrollYProgress, (v) => {
    const p = clamp01((v - 0.02) / 0.48);
    return `calc(${startH * (1 - p)}px + ${p * 100}vh)`;
  });

  const imageBorderRadius = useTransform(scrollYProgress, (v) => {
    const p = clamp01((v - 0.02) / 0.48);
    return `${16 * (1 - p)}px`;
  });

  // Text moves outward and fades
  const leftTextX = useTransform(scrollYProgress, [0.02, 0.38], ['0%', '-150%']);
  const rightTextX = useTransform(scrollYProgress, [0.02, 0.38], ['0%', '150%']);
  const topTextY = useTransform(scrollYProgress, [0.02, 0.38], ['0%', '-250%']);
  const bottomTextY = useTransform(scrollYProgress, [0.02, 0.38], ['0%', '250%']);
  const textOpacity = useTransform(scrollYProgress, [0.02, 0.32], [1, 0]);

  // Subtitle fades first
  const subtitleOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  // Scroll indicator fades
  const scrollIndicatorOpacity = useTransform(scrollYProgress, [0, 0.08], [0.7, 0]);

  return (
    <>
      <audio ref={audioRef} src="/background-music.mp3" loop />

      {/* Scroll container — tall to give room for the animation */}
      <div ref={containerRef} className="relative" style={{ height: '250vh', position: 'relative' }}>

        {/* Sticky viewport — stays pinned while user scrolls */}
        <motion.div
          className="sticky top-0 h-screen w-full overflow-hidden bg-black"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >

          {/* === IMAGE — centered, expands from inline to full viewport === */}
          <motion.div
            className="absolute overflow-hidden z-10"
            style={{
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
              width: imageWidth,
              height: imageHeight,
              borderRadius: imageBorderRadius,
            }}
          >
            <img
              src={portraitImg.src}
              alt="Anushka Sharma"
              className="w-full h-full object-cover"
              draggable={false}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40 z-[1]" />
          </motion.div>

          {/* === TEXT ROW — "ANUSHKA [image] . SHARMA" — always one line === */}
          <div className="absolute inset-0 flex items-center justify-center z-20 pointer-events-none px-4">
            <div className="relative flex flex-row items-center justify-center gap-2 sm:gap-3 md:gap-5">

              {/* Left text: Hii, I'm + ANUSHKA */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  x: leftTextX,
                  opacity: textOpacity,
                }}
                className="relative"
              >
                {/* "Hii, I'm" floats above ANUSHKA without affecting layout */}
                <span
                  className="absolute bottom-full left-0 mb-1 text-white text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7rem] font-black tracking-tighter leading-none select-none whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  Hii, I&apos;m
                </span>
                <h1
                  className="text-white text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7rem] font-black tracking-tighter leading-none select-none whitespace-nowrap"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  AN<span className="text-blue-500">US</span>HKA
                </h1>
              </motion.div>

              {/* Spacer — same size as the initial image, acts as anchor for subtitle */}
              <div className="relative shrink-0">
                <div style={{ width: `${startW}px`, height: `${startH}px` }} />

                {/* Subtitle — left-aligned just below the image */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                  style={{ opacity: subtitleOpacity }}
                  className="absolute left-0 top-full mt-2 sm:mt-3"
                >
                  <p
                    className="text-neutral-500 text-[5px] sm:text-[7px] md:text-[8px] lg:text-xs tracking-[0.12em] sm:tracking-[0.23em] uppercase whitespace-nowrap"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    The Showcase — Creative Development
                  </p>
                  <p
                    className="text-blue-300 text-[5px] sm:text-[7px] md:text-[8px] lg:text-xs tracking-[0.12em] sm:tracking-[0.23em] uppercase"
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    (2024–Now)
                  </p>
                </motion.div>
              </div>

              {/* Right text: . SHARMA */}
              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  x: rightTextX,
                  opacity: textOpacity,
                  fontFamily: 'var(--font-inter)',
                }}
                className="text-white text-[1.6rem] sm:text-4xl md:text-5xl lg:text-6xl xl:text-[7rem] font-black tracking-tighter leading-none select-none whitespace-nowrap"
              >
                .SH<span className="text-blue-500">ARM</span>A
              </motion.h1>
            </div>
          </div>

          {/* === SCROLL INDICATOR === */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.7 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{ opacity: scrollIndicatorOpacity }}
          >
            <span className="text-neutral-600 text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: 'var(--font-inter)' }}>
              Scroll
            </span>
            <motion.div
              className="w-px h-8 bg-gradient-to-b from-neutral-600 to-transparent"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>

          {/* === VOLUME CONTROL === */}
          <div className="absolute bottom-6 right-6 z-50 flex flex-col items-end gap-2">
            <AnimatePresence>
              {showPrompt && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs px-3 py-2 rounded-lg relative shadow-lg"
                >
                  <span className="whitespace-nowrap">Tap to play sound 🎵</span>
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

        </motion.div>
      </div>

      {/* Film grain overlay */}
      <div className={styles.filmGrain} />
    </>
  );
};

export default HeroSection;