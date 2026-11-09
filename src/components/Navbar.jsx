import React from 'react';
import { Heart, Home, Gift, ArrowLeft } from 'lucide-react';
import { playPop } from '../utils/audio';

export default function Navbar({ currentScreen, setScreen }) {
  if (currentScreen === 1) return null; // Don't show top nav on opening envelope screen to keep it pure magic

  return (
    <header className="fixed top-3 left-4 z-40 flex items-center gap-2 select-none">
      {/* Return to Gifts Hub Button */}
      {currentScreen > 2 && (
        <button
          onClick={() => {
            playPop();
            setScreen(2);
          }}
          className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#F8D7DA] text-xs sm:text-sm font-semibold text-[#B05E68] shadow-sm hover:shadow-md hover:bg-white hover:scale-105 transition-all"
        >
          <ArrowLeft className="w-4 h-4 text-[#C97983]" />
          <span>Surprise Gifts 🎁</span>
        </button>
      )}

      {/* Return to Envelope (Home) */}
      {currentScreen === 2 && (
        <button
          onClick={() => {
            playPop();
            setScreen(1);
          }}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#FFE5D0] text-xs font-medium text-stone-600 hover:text-[#C97983] hover:bg-white transition-all shadow-sm"
        >
          <Home className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Start Over</span>
        </button>
      )}

      {/* Cute Warm Title Badge */}
      <div className="hidden md:flex items-center gap-1 px-3 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-[#E8DFF5] text-xs text-[#8A7090] font-medium">
        <Heart className="w-3 h-3 text-[#C97983] fill-[#C97983]" />
        <span>For Amma With Love ❤️</span>
      </div>
    </header>
  );
}

