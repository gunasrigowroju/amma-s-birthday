import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { BirthdayCakeSvg, BalloonsSvg, WarmHugSvg } from '../Illustrations';
import { playHugSound, playCelebrationCheer, playPop } from '../../utils/audio';
import { Sparkles, Heart, RefreshCw, Award, ArrowLeft, X } from 'lucide-react';
import { websiteContent } from '../../content';

export default function Screen8FinalSurprise({ onRestartSurprise, onBackToGifts }) {
  const content = websiteContent.screen8;
  const [showHugModal, setShowHugModal] = useState(false);
  const [hugCount, setHugCount] = useState(0);

  const handleSendHug = () => {
    setHugCount(prev => prev + 1);
    setShowHugModal(true);
    playHugSound();

    // Heartfelt confetti burst
    confetti({
      particleCount: 120,
      spread: 90,
      origin: { y: 0.5 },
      colors: ['#F8D7DA', '#FFE5D0', '#E8DFF5', '#C97983', '#FFF7E8']
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative max-w-3xl mx-auto text-center">
      {/* Floating balloons on sides */}
      <div className="absolute top-8 left-4 hidden md:block opacity-75">
        <BalloonsSvg size={140} />
      </div>
      <div className="absolute top-8 right-4 hidden md:block opacity-75 transform scale-x-[-1]">
        <BalloonsSvg size={140} />
      </div>

      {/* Decorative sparkle banner */}
      <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-[#F8D7DA] text-xs font-semibold text-[#B05E68] shadow-sm mb-3">
        <Sparkles className="w-3.5 h-3.5 text-[#C97983]" />
        <span>With Endless Gratitude & Love</span>
      </div>

      {/* Exact Headings */}
      <h1 className="text-3xl sm:text-6xl font-extrabold text-[#9E4F5A] font-serif tracking-tight drop-shadow-sm mb-3">
        {content.heading}
      </h1>

      <p className="text-xl sm:text-2xl font-serif text-[#A8525D] italic mb-1 max-w-lg">
        "{content.line1}"
      </p>

      <p className="text-base sm:text-lg font-cursive text-stone-600 text-2xl mb-6">
        {content.line2} ✨
      </p>

      {/* Cake & Flower centerpiece */}
      <div className="relative mb-6 transform hover:scale-105 transition-transform duration-300">
        <BirthdayCakeSvg candlesLit={true} size={250} showHearts={true} />
      </div>

      {/* "Best Amma in the World" Gold Seal Card */}
      <div className="pastel-card rounded-3xl p-5 sm:p-6 mb-8 max-w-md w-full border border-white/80 shadow-card flex items-center gap-4 text-left">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#FFE5D0] to-[#F8D7DA] border border-[#F8D7DA] flex items-center justify-center text-3xl shadow-sm shrink-0">
          🏆
        </div>
        <div>
          <h4 className="font-bold text-stone-800 text-base font-serif">
            World's Best Mother Award
          </h4>
          <p className="text-xs text-stone-500 font-sans mt-0.5">
            Presented to Amma for infinite love, quiet sacrifices, and the warmest smiles.
          </p>
        </div>
      </div>

      {/* Main Interactive Button: "Send Amma a Hug 🤗" */}
      <button
        onClick={handleSendHug}
        className="px-10 py-4 rounded-full font-bold text-lg sm:text-xl bg-gradient-to-r from-[#C97983] via-[#DE99A2] to-[#B05E68] text-white shadow-glow hover:scale-108 active:scale-95 transition-all duration-300 flex items-center gap-3 border-2 border-white animate-heartbeat"
      >
        <span>Send Amma a Hug 🤗</span>
        {hugCount > 0 && (
          <span className="bg-white/30 px-2 py-0.5 rounded-full text-xs font-semibold">
            {hugCount} Sent!
          </span>
        )}
      </button>

      {/* Navigation & Replay Options */}
      <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
        <button
          onClick={onBackToGifts}
          className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/90 text-[#8E444E] hover:bg-white border border-[#F8D7DA] shadow-sm transition-all flex items-center gap-1.5"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Surprise Gifts 🎁</span>
        </button>

        <button
          onClick={onRestartSurprise}
          className="px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold bg-white/90 text-stone-600 hover:text-[#C97983] hover:bg-white border border-[#FFE5D0] shadow-sm transition-all flex items-center gap-1.5"
        >
          <RefreshCw className="w-3.5 h-3.5" />
          <span>Experience From Start 💌</span>
        </button>
      </div>

      {/* FULL-SCREEN ANIMATED HUG MODAL */}
      {showHugModal && (
        <div
          onClick={() => setShowHugModal(false)}
          className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FFF5F7] to-[#F8EDF2] rounded-3xl p-6 sm:p-10 max-w-lg w-full text-center shadow-2xl border-4 border-[#F8D7DA] overflow-hidden"
          >
            {/* Close button */}
            <button
              onClick={() => setShowHugModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/80 text-stone-500 hover:bg-[#F8D7DA] hover:text-[#B05E68] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Floating flower decorations inside modal */}
            <div className="absolute top-3 left-4 text-2xl select-none">🌸</div>
            <div className="absolute bottom-3 right-4 text-2xl select-none">✨</div>

            {/* Warm Hug Illustration */}
            <div className="my-2">
              <WarmHugSvg size={280} />
            </div>

            {/* Exact Required Full-Screen Animated Message */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#A8525D] font-serif tracking-tight mt-2 mb-2 animate-bounce" style={{ animationDuration: '2s' }}>
              {content.hugModalTitle}
            </h2>

            <p className="text-xl sm:text-2xl font-cursive text-[#B05E68] font-bold">
              {content.hugModalSubtext}
            </p>

            <p className="text-xs text-stone-500 font-sans mt-4 max-w-xs mx-auto">
              You are the greatest blessing of my life. May your smile never fade!
            </p>

            {/* Hug again button */}
            <div className="mt-6 flex justify-center gap-3">
              <button
                onClick={handleSendHug}
                className="px-6 py-2.5 rounded-full font-bold text-sm bg-gradient-to-r from-[#C97983] to-[#B05E68] text-white shadow-md hover:scale-105 transition-transform flex items-center gap-2"
              >
                <span>Hug Again 🤗</span>
                <Heart className="w-3.5 h-3.5 fill-white" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

