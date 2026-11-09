import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { EnvelopeSvg } from '../Illustrations';
import { playChime, playPop } from '../../utils/audio';
import { Sparkles, Heart } from 'lucide-react';
import { websiteContent } from '../../content';

export default function Screen1Envelope({ onOpen }) {
  const content = websiteContent.screen1;
  const [isOpen, setIsOpen] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpenEnvelope = () => {
    if (isOpening || isOpen) return;
    setIsOpening(true);
    setIsOpen(true);
    playChime();

    // Trigger sweet pastel confetti burst
    confetti({
      particleCount: 50,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#F8D7DA', '#FFE5D0', '#E8DFF5', '#C97983', '#FFF7E8']
    });

    // Smooth transition to Screen 2
    setTimeout(() => {
      onOpen();
    }, 1800);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-8 relative">
      {/* Sparkles / heart floating decorations around envelope */}
      <div className="absolute top-1/4 left-1/4 animate-bounce text-2xl" style={{ animationDuration: '3s' }}>
        🌸
      </div>
      <div className="absolute top-1/3 right-1/4 animate-float-gentle text-2xl" style={{ animationDelay: '-1s' }}>
        ✨
      </div>
      <div className="absolute bottom-1/4 left-1/3 animate-float-gentle text-xl" style={{ animationDelay: '-2s' }}>
        💖
      </div>

      <div className="max-w-md w-full text-center flex flex-col items-center">
        {/* Soft emotional greeting */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-[#F8D7DA] text-xs uppercase tracking-wider text-[#C97983] font-semibold mb-3 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C97983]" />
          <span>{content.badge}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-[#B05E68] font-serif mb-2 tracking-tight">
          {content.greeting}
        </h1>

        <p className="text-base sm:text-lg text-stone-600 font-sans mb-8 leading-relaxed max-w-sm">
          {content.subtext}
        </p>

        {/* Interactive Envelope with hover bounce and click */}
        <div
          onClick={handleOpenEnvelope}
          className="cursor-pointer transform hover:scale-105 active:scale-95 transition-all duration-300 mb-8 relative group"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => { if (e.key === 'Enter') handleOpenEnvelope(); }}
          aria-label="Click to open envelope"
        >
          <EnvelopeSvg isOpen={isOpen} size={280} />
          
          {!isOpen && (
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white/95 px-3 py-1 rounded-full text-xs font-medium text-[#C97983] shadow-sm border border-[#F8D7DA] group-hover:scale-105 transition-transform flex items-center gap-1">
              <Heart className="w-3 h-3 fill-[#C97983]" />
              <span>Tap to Open</span>
            </div>
          )}
        </div>

        {/* Main CTA Button */}
        <button
          onClick={handleOpenEnvelope}
          disabled={isOpening}
          className={`px-8 py-3.5 rounded-full font-semibold text-base sm:text-lg shadow-card transition-all duration-300 flex items-center gap-2 group ${
            isOpening
              ? 'bg-[#E8DFF5] text-[#8A7090] cursor-wait'
              : 'bg-gradient-to-r from-[#F8D7DA] via-[#FFE5D0] to-[#F8D7DA] text-[#8E444E] hover:shadow-glow hover:scale-105 active:scale-98 border border-white/60'
          }`}
        >
          <span>{isOpening ? "Opening Amma's Surprise..." : content.openButton}</span>
          {!isOpening && (
            <span className="group-hover:translate-x-1 transition-transform">✨</span>
          )}
        </button>

        <p className="text-xs text-stone-400 mt-4 font-cursive text-sm">
          {content.footerText}
        </p>
      </div>
    </div>
  );
}

