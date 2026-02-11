'use client';

import { ReactLenis } from 'lenis/react';

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis 
      root 
      options={{ 
        lerp: 0.05, // Lower values = smoother/heavier feel (default is 0.1)
        duration: 1.5, 
        smoothWheel: true 
        // wheelMultiplier: 1, // Adjust if you want to speed up/slow down the scroll speed
      }}
    >
      {children}
    </ReactLenis>
  );
}