// components/NoisyBackground.tsx
import { motion } from 'framer-motion';
import React from 'react';

export const NoisyBackground = () => {
  return (
    // The wrapper div will be positioned absolutely to cover its parent.
    <div className="absolute inset-0 w-full h-full pointer-events-none opacity-50">
      {/* The SVG filter. It's hidden and only used by the CSS filter property.
        'aria-hidden' is for accessibility.
      */}
      <svg className="hidden" aria-hidden="true">
        <filter id="noiseFilter">
          {/* feTurbulence generates the noise. 
            baseFrequency controls the "zoom" of the noise.
            numOctaves adds detail.
            stitchTiles avoids seams when the noise is tiled.
          */}
          <motion.feTurbulence
            type="fractalNoise"
            baseFrequency="0.6"
            numOctaves="1"
            stitchTiles="stitch"
            // Animate the baseFrequency to make the noise "move".
            animate={{
              baseFrequency: [0.6, 0.65, 0.6],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror', // 'mirror' makes the animation smooth back and forth
              ease: 'easeInOut',
            }}
          />
        </filter>
      </svg>
      {/* This div has the filter applied via a CSS class. */}
      <div className="w-full h-full noise-overlay"></div>
    </div>
  );
};