import React, { useEffect } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image from 'next/image';
import styles from './HeroSection.module.css';
import image from '../assets/portrait-bright.png';

const ImageReveal = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const lensRadius = 125;

  const maskPosition = useTransform(
    [mouseX, mouseY],
    ([x, y]) =>
      `radial-gradient(circle at ${x}px ${y}px, transparent ${lensRadius}px, black ${lensRadius}px)`
  );

  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number; }) => { 
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // CHANGED: The component now returns a React Fragment
  return (
    <>
      <section className={styles.heroContainer}>
        {/* Bottom Layer (revealed) */}
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

        {/* Top Layer (masked by mouse) */}
        <motion.div
          className={styles.topLayer}
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

export default ImageReveal;