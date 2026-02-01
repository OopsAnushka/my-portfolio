'use client';

import { useEffect } from 'react';
import Preloader from "./components/Preloader";
import Providers from './components/theme-provider';
import { ControlDock } from './components/ControlDock';
import "./globals.css";
import { Pompiere } from "next/font/google"; 

const pompiere = Pompiere({
  subsets: ["latin"],
  weight: "400",
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  
  useEffect(() => {
    // Initialize the audio object
    const clickSound = new Audio('/click.mp3'); 
    clickSound.volume = 0.4;

    const handleButtonClick = (event: MouseEvent) => {
      // Find the closest parent that is a button or a link
      const target = event.target as HTMLElement;
      const isClickable = target.closest('button') || target.closest('a');

      // Only play if the click was on a button or link
      if (isClickable) {
        clickSound.currentTime = 0; // Reset to allow rapid clicks
        clickSound.play().catch(() => {
          // Playback may be blocked by browser until first interaction
        });
      }
    };

    // Attach the listener to the window
    window.addEventListener('click', handleButtonClick);

    // Clean up the listener when the component unmounts
    return () => window.removeEventListener('click', handleButtonClick);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${pompiere.className} antialiased`}>
        <Providers>
          <Preloader>
            {/* Wrapping content in a larger base font size for the handwriting font */}
            <main className="text-[22px] md:text-[24px] leading-relaxed">
              {children}
            </main>
          </Preloader>
          <ControlDock/>
        </Providers>
      </body>
    </html>
  );
}