import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { AmmaAndPanduEatingCakeSvg } from '../Illustrations';
import { playPop, playChime } from '../../utils/audio';
import { Sparkles, Heart, ArrowRight, ArrowLeft } from 'lucide-react';
import { websiteContent } from '../../content';

export default function Screen7EatCake({ onNextFinalSurprise, onBackToGifts }) {
  const content = websiteContent.screen7;
  const [bites, setBites] = useState(0);
  const [isFull, setIsFull] = useState(false);

  const handleFeedCake = () => {
    if (isFull) return;
    setBites(prev => prev + 1);
    playPop();

    // Small sparkle confetti
    confetti({
      particleCount: 20,
      spread: 40,
      origin: { y: 0.7 },
      colors: ['#FFE5D0', '#F8D7DA', '#FFF7E8']
    });
  };

  const handleIAmFull = () => {
    setIsFull(true);
    playChime();

    // Sweet celebration confetti burst
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#F8D7DA', '#FFE5D0', '#E8DFF5', '#C97983', '#FFF7E8']
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative max-w-2xl mx-auto text-center">
      {/* Decorative Pill */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F8D7DA] text-xs font-semibold text-[#B05E68] shadow-sm mb-3">
        <Sparkles className="w-3.5 h-3.5 text-[#C97983]" />
        <span>Time for some sweetness</span>
      </div>

      <h2 className="text-3xl sm:text-5xl font-extrabold text-[#9E4F5A] font-serif tracking-tight mb-1">
        LET'S EAT CAKE! 🍰
      </h2>

      <p className="text-stone-600 font-sans text-sm sm:text-base mb-6">
        Every bite is sweeter when shared with you, Amma!
      </p>

      {/* Two cute cartoon characters (Amma & Pandu) sharing cake */}
      <div
        onClick={handleFeedCake}
        className="cursor-pointer transform hover:scale-102 transition-transform duration-300 relative my-2"
        role="button"
        tabIndex={0}
        title="Tap to feed another delicious slice!"
      >
        <AmmaAndPanduEatingCakeSvg bites={bites} isFull={isFull} size={340} />

        {!isFull && (
          <div className="absolute top-2 right-4 bg-white/90 px-3 py-1 rounded-full text-xs font-semibold text-[#C97983] shadow-sm border border-[#F8D7DA] animate-bounce">
            🍰 Tap to feed {bites > 0 ? `(${bites} slices eaten!)` : 'cake!'}
          </div>
        )}
      </div>

      {/* Interaction Button or Revealed Punchline */}
      {!isFull ? (
        <div className="flex flex-col items-center gap-3 mt-4">
          <button
            onClick={handleIAmFull}
            className="px-8 py-3.5 rounded-full font-bold text-base sm:text-lg bg-gradient-to-r from-[#FFE5D0] via-[#F8D7DA] to-[#FFE5D0] text-[#8E444E] shadow-card hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2 border border-white"
          >
            <span>I Am Full! 😋</span>
          </button>
          
          <button
            onClick={handleFeedCake}
            className="text-xs text-stone-500 hover:text-[#C97983] underline"
          >
            Take another bite first 🍰
          </button>
        </div>
      ) : (
        /* The emotional twist reveal */
        <div className="flex flex-col items-center animate-fade-in mt-4">
          <div className="bg-white/95 backdrop-blur-md border-2 border-[#F8D7DA] rounded-3xl p-6 sm:p-8 shadow-glow max-w-md animate-bounce" style={{ animationDuration: '2.8s' }}>
            <div className="text-4xl mb-2">💗 🌸 🍰</div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#A8525D] font-serif mb-2 leading-tight">
              {content.punchline}
            </h3>
            <p className="text-stone-600 font-sans text-sm">
              {content.punchlineSubtext}
            </p>
          </div>

          {/* Action button to Final Surprise */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-6">
            <button
              onClick={onNextFinalSurprise}
              className="px-8 py-3.5 rounded-full font-bold text-base sm:text-lg bg-gradient-to-r from-[#C97983] to-[#B05E68] text-white shadow-card hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <span>The Grand Finale 🎁</span>
              <ArrowRight className="w-5 h-5" />
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

