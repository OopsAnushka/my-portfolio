// components/MusicPlayer.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { FaPlay, FaPause } from 'react-icons/fa';

export const MusicPlayer = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.8;
    }
  }, []);

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="relative group">
      {/* Tooltip */}
      <span className="absolute -top-8 right-4 -translate-x-1/2 text-xs px-2 py-1 bg-gray-700 text-white dark:bg-white dark:text-black rounded-md opacity-0 group-hover:opacity-100 transition">
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </span>

      <audio ref={audioRef} src="/background-music.mp3" loop />

      <button
        onClick={togglePlayPause}
        className="w-12 h-12 bg-gray-200 dark:bg-gray-800 text-black dark:text-white rounded-full flex items-center justify-center shadow-md hover:scale-110 transition"
        aria-label="Toggle music"
      >
        {isPlaying ? <FaPause size={16} /> : <FaPlay size={16} />}
      </button>
    </div>
  );
};
