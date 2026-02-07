'use client';

import React, { useEffect } from 'react';
import Preloader from "./Preloader";
import Providers from './theme-provider';
import { ControlDock } from './ControlDock';
import SmoothScroll from './SmoothScroll';
import CustomCursor from './CustomCursor';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  useEffect(() => {
    // Click sound logic
    const clickSound = new Audio('/click.mp3'); 
    clickSound.volume = 0.4;

    const handleButtonClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isClickable = target.closest('button') || target.closest('a');
      if (isClickable) {
        clickSound.currentTime = 0; 
        clickSound.play().catch(() => {});
      }
    };
    window.addEventListener('click', handleButtonClick);
    return () => window.removeEventListener('click', handleButtonClick);
  }, []);

  return (
    <Providers>
      <Preloader>
        <CustomCursor />
        <SmoothScroll>
          <main className="font-sans text-[18px] md:text-[20px] leading-relaxed selection:bg-white selection:text-black">
            {children}
          </main>
        </SmoothScroll>
        <ControlDock/>
      </Preloader>
    </Providers>
  );
}