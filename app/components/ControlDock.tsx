// components/ControlDock.tsx
'use client';

import { MusicPlayer } from './MusicPlayer';


export const ControlDock = () => {
  return (
    <div className="fixed bottom-3 right-3 z-50 flex gap-3">
      <MusicPlayer />
    </div>
  );
};
