'use client';

import React, { useEffect, useRef, useState } from 'react';
import { animate } from 'framer-motion';

interface PixelImageProps {
  src: string;
  alt: string;
  className?: string;
  pixelFactor?: number; // How "blocky" the start is (default: 10)
}

export default function PixelImage({ src, alt, className, pixelFactor = 12 }: PixelImageProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    // 1. Preload the image so we can draw it
    const img = new Image();
    img.src = src;
    img.crossOrigin = "Anonymous"; // Fix for external images if needed
    img.onload = () => {
      imageRef.current = img;
      setImgLoaded(true);
      triggerTransition();
    };
  }, [src]);

  const triggerTransition = () => {
    if (!canvasRef.current || !imageRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size to match parent or image
    // (We use CSS to scale it visually, but internal res matches image for quality)
    canvas.width = imageRef.current.width;
    canvas.height = imageRef.current.height;

    // Turn off smoothing to keep pixels sharp during the effect
    ctx.imageSmoothingEnabled = false;

    // Animate a "block size" value from 'pixelFactor' down to 1 (full res)
    // We animate an object { val: pixelFactor } -> { val: 1 }
    const animation = { val: pixelFactor };

    animate(pixelFactor, 1, {
      duration: 0.8,
      ease: "circOut", // Fast start, slow end
      onUpdate: (latest) => {
        if (!ctx || !imageRef.current) return;
        
        // 1. Calculate the small dimensions (low res)
        // If latest = 10, we draw the image at 1/10th size
        const w = canvas.width;
        const h = canvas.height;
        
        // Prevent division by zero or extreme lagging
        const blockSize = Math.max(1, latest);
        
        const smallW = Math.ceil(w / blockSize);
        const smallH = Math.ceil(h / blockSize);

        // 2. Draw image small (pixelating it)
        // We use a temporary offscreen logic by drawing it small then scaling up
        // Actually, drawImage allows us to draw it small directly? 
        // No, to get the effect, we draw it small...
        ctx.drawImage(imageRef.current, 0, 0, smallW, smallH);
        
        // 3. ...then draw that small version back to full size
        // Because imageSmoothingEnabled is false, it looks blocky
        ctx.drawImage(canvas, 0, 0, smallW, smallH, 0, 0, w, h);
      }
    });
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* The Canvas does the pixel effect */}
      <canvas 
        ref={canvasRef} 
        className="w-full h-full object-cover" 
      />
      
      {/* Fallback for SEO / Accessibility (hidden visually) */}
      <img 
        src={src} 
        alt={alt} 
        className="absolute inset-0 w-full h-full object-cover opacity-0 pointer-events-none" 
      />
    </div>
  );
}