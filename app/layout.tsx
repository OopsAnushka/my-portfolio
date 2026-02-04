'use client';

import { useEffect } from 'react';
import Preloader from "./components/Preloader";
import Providers from './components/theme-provider';
import { ControlDock } from './components/ControlDock';
import SmoothScroll from './components/SmoothScroll';
import CustomCursor from './components/CustomCursor'
import "./globals.css";
import { Pompiere, Inter } from "next/font/google"; 

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: "400",
  variable: '--font-pompiere',
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  useEffect(() => {
    // Optional: Keep your click sound logic if you like it
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
    <html lang="en" suppressHydrationWarning>
      <body className={`${pompiere.variable} ${inter.variable} antialiased bg-black text-white`}>
        <Providers>
          <Preloader>
            {/* The Custom Cursor lives here to float above everything */}
            <CustomCursor />
            
            <SmoothScroll>
              <main className="font-sans text-[18px] md:text-[20px] leading-relaxed selection:bg-white selection:text-black">
                {children}
              </main>
            </SmoothScroll>

            <ControlDock/>
          </Preloader>
        </Providers>
      </body>
    </html>
  );
}