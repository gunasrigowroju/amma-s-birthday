import React, { useState, useEffect } from 'react';
import { Sparkles, Heart, ArrowLeft, ArrowRight, Play, Eye } from 'lucide-react';
import { playChime, playPop } from '../../utils/audio';
import { websiteContent } from '../../content';

export default function Screen6Letter({ onNextSurprise, onBackToGifts }) {
  const content = websiteContent.screen6;
  const LETTER_PARAGRAPHS = content.paragraphs;

  // Reveal paragraphs one by one for gentle emotional pacing
  const [revealedCount, setRevealedCount] = useState(1);
  const [isFullyRevealed, setIsFullyRevealed] = useState(false);

  useEffect(() => {
    if (revealedCount < LETTER_PARAGRAPHS.length) {
      const timer = setTimeout(() => {
        setRevealedCount(prev => prev + 1);
        playPop();
      }, 700);
      return () => clearTimeout(timer);
    } else {
      setIsFullyRevealed(true);
    }
  }, [revealedCount]);

  const handleRevealAll = () => {
    setRevealedCount(LETTER_PARAGRAPHS.length);
    setIsFullyRevealed(true);
    playChime();
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-12 relative max-w-3xl mx-auto">
      {/* Decorative top badge */}
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#F8D7DA] text-xs font-semibold text-[#B05E68] shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C97983]" />
          <span>Straight from the Heart</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#9E4F5A] font-serif tracking-tight">
          {content.heading}
        </h2>
        
        <p className="text-stone-600 font-cursive text-xl sm:text-2xl mt-1 text-[#B05E68]">
          {content.subheading}
        </p>
      </div>

      {/* Parchment Handwritten Letter Container */}
      <div className="relative w-full max-w-2xl bg-[#FFFDF7] rounded-3xl p-6 sm:p-12 shadow-2xl border-2 border-[#F3E5D4] overflow-hidden">
        {/* Soft paper ruled lines background */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #E5C9BD 31px, #E5C9BD 32px)',
            backgroundPosition: '0 30px'
          }}
        />

        {/* Delicate floral corners */}
        <div className="absolute top-3 left-4 text-2xl select-none opacity-80">🌸 🍃</div>
        <div className="absolute top-3 right-4 text-2xl select-none opacity-80">🍃 🌸</div>
        <div className="absolute bottom-3 left-4 text-2xl select-none opacity-80">🌷 🌿</div>
        <div className="absolute bottom-3 right-4 text-2xl select-none opacity-80">🌿 🌷</div>

        {/* Letter content */}
        <div className="relative z-10 space-y-6 text-stone-800 font-letter text-xl sm:text-2xl leading-relaxed sm:leading-loose">
          {LETTER_PARAGRAPHS.slice(0, revealedCount).map((para, index) => {
            const isClosing = index === LETTER_PARAGRAPHS.length - 1;
            const isFirst = index === 0;
            const isBigLove = index === LETTER_PARAGRAPHS.length - 2;

            return (
              <p
                key={index}
                className={`transition-all duration-700 transform animate-fade-in ${
                  isFirst
                    ? 'font-bold text-2xl sm:text-3xl text-[#9E4F5A]'
                    : isBigLove
                    ? 'font-bold text-2xl sm:text-3xl text-[#A8525D] py-1'
                    : isClosing
                    ? 'pt-4 text-right font-script text-2xl sm:text-3xl text-[#B05E68] whitespace-pre-line'
                    : 'text-stone-700'
                }`}
              >
                {para}
              </p>
            );
          })}
        </div>

        {/* Delicate Wax Seal at bottom */}
        {isFullyRevealed && (
          <div className="mt-8 flex justify-end items-center pr-2 animate-bounce" style={{ animationDuration: '3s' }}>
            <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#E7929B] to-[#A8525D] flex items-center justify-center text-white shadow-lg border-2 border-white/60">
              <Heart className="w-7 h-7 fill-white" />
            </div>
          </div>
        )}

        {/* Fast-forward button if still revealing */}
        {!isFullyRevealed && (
          <div className="mt-6 flex justify-center">
            <button
              onClick={handleRevealAll}
              className="px-4 py-1.5 rounded-full text-xs font-semibold bg-white/80 text-[#B05E68] border border-[#F8D7DA] hover:bg-white shadow-sm transition-all flex items-center gap-1.5"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Read Full Letter Instantly</span>
            </button>
          </div>
        )}
      </div>

      {/* Navigation Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <button
          onClick={onNextSurprise}
          className="px-7 py-3.5 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-[#C97983] via-[#DE99A2] to-[#B05E68] text-white shadow-card hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <span>Next: Let's Eat Cake! 🍰</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={onBackToGifts}
          className="px-6 py-3.5 rounded-full text-sm font-semibold bg-white/90 text-[#8E444E] hover:bg-white border border-[#F8D7DA] shadow-card hover:scale-105 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Surprise Gifts 🎁</span>
        </button>
      </div>
    </div>
  );
}

