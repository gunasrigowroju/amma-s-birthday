import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Sparkles } from 'lucide-react';
import { toggleBackgroundMusic, getIsMusicPlaying, playChime } from '../utils/audio';

export default function AudioPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);

  const handleToggle = () => {
    const newState = toggleBackgroundMusic((active) => {
      setIsPlaying(active);
    });
    setIsPlaying(newState);
    setShowPrompt(false);
    playChime();
  };

  useEffect(() => {
    // Hide the prompt after 10 seconds if not touched
    const timer = setTimeout(() => setShowPrompt(false), 10000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-2 select-none">
      {/* Friendly prompt balloon */}
      {showPrompt && !isPlaying && (
        <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#F8D7DA] text-xs font-medium text-[#B05E68] shadow-soft animate-bounce">
          <Sparkles className="w-3.5 h-3.5 text-[#C97983]" />
          <span>Play Amma's Music Box 🎵</span>
        </div>
      )}

      {/* Floating Music Button */}
      <button
        onClick={handleToggle}
        title={isPlaying ? "Pause Music" : "Play Gentle Birthday Music"}
        className={`group relative flex items-center justify-center p-3 rounded-full transition-all duration-300 shadow-md ${
          isPlaying
            ? 'bg-gradient-to-r from-[#F8D7DA] to-[#FFE5D0] text-[#B05E68] ring-2 ring-[#C97983]/30 shadow-glow'
            : 'bg-white/80 backdrop-blur-md text-stone-500 hover:text-[#C97983] hover:bg-white hover:scale-105'
        }`}
        aria-label="Toggle Background Music"
      >
        {isPlaying ? (
          <div className="relative flex items-center justify-center">
            <Volume2 className="w-5 h-5 animate-pulse" />
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C97983] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C97983]"></span>
            </span>
          </div>
        ) : (
          <VolumeX className="w-5 h-5" />
        )}
      </button>
    </div>
  );
}

