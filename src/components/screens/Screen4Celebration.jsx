import React, { useEffect } from 'react';
import confetti from 'canvas-confetti';
import { BirthdayCakeSvg, BalloonsSvg } from '../Illustrations';
import { playCelebrationCheer } from '../../utils/audio';
import { Sparkles, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { websiteContent } from '../../content';

export default function Screen4Celebration({ onNavigateScreen, onBackToGifts }) {
  const content = websiteContent.screen4;
  useEffect(() => {
    playCelebrationCheer();

    // Pastel celebratory confetti blast
    const count = 200;
    const defaults = {
      origin: { y: 0.6 },
      colors: ['#F8D7DA', '#FFE5D0', '#E8DFF5', '#C97983', '#FFF7E8', '#DCE8D5']
    };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio)
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative max-w-2xl mx-auto text-center">
      {/* Floating Fairy Lights & Balloons flanking the title */}
      <div className="absolute top-12 left-4 sm:left-12 opacity-80 hidden sm:block">
        <BalloonsSvg size={140} />
      </div>
      <div className="absolute top-12 right-4 sm:right-12 opacity-80 hidden sm:block transform scale-x-[-1]">
        <BalloonsSvg size={140} />
      </div>

      {/* Decorative floral topper */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xl animate-bounce">🌸</span>
        <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#C97983] to-transparent"></div>
        <Sparkles className="w-4 h-4 text-[#C97983]" />
        <div className="h-0.5 w-12 bg-gradient-to-r from-transparent via-[#C97983] to-transparent"></div>
        <span className="text-xl animate-bounce" style={{ animationDelay: '-1s' }}>🌸</span>
      </div>

      {/* Animated Birthday Typography */}
      <h1 className="text-3xl sm:text-5xl font-black text-[#A8525D] tracking-wider uppercase font-serif drop-shadow-sm">
        HAPPY BIRTHDAY
      </h1>
      
      <h2 className="text-3xl sm:text-6xl font-script text-[#B05E68] mt-1 mb-4 flex items-center justify-center gap-2 drop-shadow-sm">
        <span>My Dearest Amma</span>
        <span className="inline-block animate-heartbeat text-3xl sm:text-5xl text-rose-500">❤️</span>
      </h2>

      {/* Centerpiece Birthday Cake */}
      <div className="relative my-2 transform hover:scale-105 transition-transform duration-300">
        <BirthdayCakeSvg candlesLit={true} size={250} showHearts={true} />
      </div>

      {/* Warm Emotional Message Card */}
      <div className="pastel-card rounded-3xl p-6 sm:p-8 max-w-lg mx-auto shadow-card border border-white/80 my-4 relative">
        <p className="text-base sm:text-lg text-stone-700 font-sans leading-relaxed">
          "{content.message}"
        </p>
        <p className="font-cursive text-xl sm:text-2xl text-[#C97983] mt-3 font-semibold">
          {content.signature}
        </p>
      </div>

      {/* Next Exploration Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
        <button
          onClick={() => onNavigateScreen(5)} // Screen 5: Memories
          className="px-6 py-3 rounded-full font-bold text-sm sm:text-base bg-gradient-to-r from-[#F8D7DA] to-[#FFE5D0] text-[#8E444E] shadow-card hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-white/60"
        >
          <span>See Our Memories 📸</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onNavigateScreen(6)} // Screen 6: Letter
          className="px-6 py-3 rounded-full font-bold text-sm sm:text-base bg-white/90 text-[#8A7090] border border-[#E8DFF5] shadow-card hover:bg-white hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <span>Read Your Letter 💌</span>
        </button>
      </div>

      {/* Back to Gifts */}
      <div className="mt-8">
        <button
          onClick={onBackToGifts}
          className="text-xs text-stone-500 hover:text-[#C97983] flex items-center gap-1 font-medium transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Surprise Gifts 🎁</span>
        </button>
      </div>
    </div>
  );
}

