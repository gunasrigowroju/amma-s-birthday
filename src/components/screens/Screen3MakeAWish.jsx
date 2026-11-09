import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { BirthdayCakeSvg } from '../Illustrations';
import { playBlowCandle, playCelebrationCheer, playPop } from '../../utils/audio';
import { Sparkles, Heart, ArrowRight, ArrowLeft, RefreshCw } from 'lucide-react';

export default function Screen3MakeAWish({ onNextCelebration, onBackToGifts }) {
  const [candlesLit, setCandlesLit] = useState(true);
  const [hasBlown, setHasBlown] = useState(false);

  const handleBlowCandles = () => {
    if (!candlesLit) return;
    
    // Play blowing sound
    playBlowCandle();

    // Turn candles off
    setCandlesLit(false);
    setHasBlown(true);

    // After 250ms, play joyful celebration cheer & shower confetti
    setTimeout(() => {
      playCelebrationCheer();
      // Left confetti blast
      confetti({
        particleCount: 80,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors: ['#F8D7DA', '#FFE5D0', '#E8DFF5', '#C97983', '#FFF7E8']
      });
      // Right confetti blast
      confetti({
        particleCount: 80,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors: ['#F8D7DA', '#FFE5D0', '#E8DFF5', '#C97983', '#DCE8D5']
      });
    }, 280);
  };

  const handleRelight = () => {
    playPop();
    setCandlesLit(true);
    setHasBlown(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative max-w-xl mx-auto text-center">
      {/* Sparkles pill */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F8D7DA] text-xs font-semibold text-[#B05E68] shadow-sm mb-3">
        <Sparkles className="w-3.5 h-3.5 text-[#C97983]" />
        <span>Close your eyes and make a special wish</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#9E4F5A] font-serif mb-2 tracking-tight">
        MAKE A WISH, AMMA! ✨
      </h2>

      <p className="text-stone-600 font-sans text-sm sm:text-base mb-6 max-w-md">
        Take a deep breath, hold your biggest dream in your heart, and blow out the candles!
      </p>

      {/* Two-tier Pink & Cream Birthday Cake */}
      <div className="relative mb-6 transform hover:scale-102 transition-transform duration-300">
        <BirthdayCakeSvg candlesLit={candlesLit} size={280} showHearts={true} />
        
        {candlesLit && (
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm border border-[#FFE5D0] px-3 py-1 rounded-full text-xs font-medium text-[#C97983] shadow-sm animate-bounce flex items-center gap-1">
            <span>✨ Tap button below to blow!</span>
          </div>
        )}
      </div>

      {/* State A: Candles are still Lit */}
      {candlesLit && (
        <button
          onClick={handleBlowCandles}
          className="px-8 py-3.5 rounded-full font-bold text-base sm:text-lg bg-gradient-to-r from-[#F8D7DA] via-[#FFE5D0] to-[#F8D7DA] text-[#8E444E] shadow-card hover:shadow-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-2 border border-white"
        >
          <span>Blow the Candles 🕯️</span>
          <Sparkles className="w-4 h-4 text-[#C97983]" />
        </button>
      )}

      {/* State B: Candles blown out - Wishes Come True Message */}
      {hasBlown && (
        <div className="flex flex-col items-center animate-fade-in">
          {/* Animated Message */}
          <div className="bg-white/90 backdrop-blur-md border-2 border-[#F8D7DA] rounded-3xl p-6 shadow-glow mb-6 max-w-md animate-bounce" style={{ animationDuration: '2.5s' }}>
            <div className="text-3xl mb-1">🎉 🌸 💖</div>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#A8525D] font-serif mb-1">
              May all your wishes come true, Amma! ❤️
            </h3>
            <p className="text-stone-600 text-sm font-sans">
              You deserve every ounce of joy and peace in the universe today and forever.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 w-full">
            <button
              onClick={onNextCelebration}
              className="px-7 py-3 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-[#C97983] to-[#B05E68] text-white shadow-card hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>Celebrate Amma 🎉</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={handleRelight}
              className="px-4 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white/80 text-stone-600 hover:text-[#C97983] hover:bg-white border border-[#EBD8CE] shadow-sm transition-all flex items-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Blow again 🎂</span>
            </button>
          </div>
        </div>
      )}

      {/* Back button */}
      <div className="mt-8">
        <button
          onClick={onBackToGifts}
          className="text-xs text-stone-500 hover:text-[#C97983] flex items-center gap-1 font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Surprise Gifts</span>
        </button>
      </div>
    </div>
  );
}

