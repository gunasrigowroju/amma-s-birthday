import React from 'react';
import { Sparkles, Heart, ArrowRight, Check } from 'lucide-react';
import { BirthdayCakeSvg, CameraMemorySvg, LetterIconSvg, GiftBoxSvg } from '../Illustrations';
import { playPop, playChime } from '../../utils/audio';

export default function Screen2GiftsHub({ onSelectCard, visitedSurprises = {} }) {
  const cards = [
    {
      id: 'cake',
      screen: 3,
      title: 'Birthday Cake',
      emoji: '🎂',
      subtitle: 'Blow candles & make a wish!',
      bgGradient: 'from-[#FFF0F3] to-[#F8D7DA]',
      borderColor: 'border-[#F8D7DA]',
      tagBg: 'bg-[#F8D7DA]/60 text-[#B05E68]',
      illustration: (
        <div className="transform scale-75 -my-6">
          <BirthdayCakeSvg candlesLit={true} size={150} showHearts={false} />
        </div>
      ),
    },
    {
      id: 'memories',
      screen: 5,
      title: 'Our Memories',
      emoji: '📸',
      subtitle: 'Scrapbook of our precious moments',
      bgGradient: 'from-[#FFF8F0] to-[#FFE5D0]',
      borderColor: 'border-[#FFE5D0]',
      tagBg: 'bg-[#FFE5D0]/70 text-[#A66138]',
      illustration: (
        <div className="flex items-center justify-center py-2">
          <CameraMemorySvg size={95} />
        </div>
      ),
    },
    {
      id: 'letter',
      screen: 6,
      title: 'A Letter for Amma',
      emoji: '💌',
      subtitle: 'From the bottom of my heart',
      bgGradient: 'from-[#FFFFF6] to-[#FFF7E8]',
      borderColor: 'border-[#FFF0D4]',
      tagBg: 'bg-[#FFF0D4] text-[#8C6D38]',
      illustration: (
        <div className="flex items-center justify-center py-2">
          <LetterIconSvg size={95} />
        </div>
      ),
    },
    {
      id: 'surprise',
      screen: 7,
      title: 'Special Surprise',
      emoji: '🎁',
      subtitle: 'Cake sharing & a big warm hug!',
      bgGradient: 'from-[#FAF6FD] to-[#E8DFF5]',
      borderColor: 'border-[#E8DFF5]',
      tagBg: 'bg-[#E8DFF5]/80 text-[#735A94]',
      illustration: (
        <div className="flex items-center justify-center py-2">
          <GiftBoxSvg size={95} />
        </div>
      ),
    },
  ];

  const handleCardClick = (screenId, cardId) => {
    playChime();
    onSelectCard(screenId, cardId);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative max-w-4xl mx-auto">
      {/* Top Header */}
      <div className="text-center mb-8 sm:mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white/80 backdrop-blur-md border border-[#F8D7DA] text-xs font-semibold text-[#B05E68] shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C97983]" />
          <span>Pick Any Surprise to Open</span>
        </div>
        
        <h2 className="text-2xl sm:text-4xl font-extrabold text-[#9E4F5A] tracking-tight font-serif uppercase">
          THESE ARE ALL FOR YOU, AMMA! <span className="inline-block animate-wiggle">🌷</span>
        </h2>
        
        <p className="text-stone-600 font-cursive text-xl sm:text-2xl mt-1 text-[#B05E68]">
          Four special gifts packed with love, just for today ✨
        </p>
      </div>

      {/* 2 x 2 Interactive Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 w-full max-w-2xl">
        {cards.map((card, index) => {
          const isVisited = visitedSurprises[card.id];
          return (
            <div
              key={card.id}
              onClick={() => handleCardClick(card.screen, card.id)}
              className={`group relative rounded-3xl p-6 cursor-pointer bg-gradient-to-br ${card.bgGradient} border ${card.borderColor} pastel-card-hover select-none flex flex-col justify-between overflow-hidden shadow-card`}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') handleCardClick(card.screen, card.id); }}
            >
              {/* Visited or New Badge */}
              <div className="flex items-center justify-between mb-2">
                <span className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${card.tagBg}`}>
                  Gift #{index + 1}
                </span>

                {isVisited ? (
                  <span className="flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full border border-emerald-200">
                    <Check className="w-3 h-3" /> Seen
                  </span>
                ) : (
                  <span className="flex items-center gap-1 text-[11px] font-medium text-[#C97983] bg-white/80 px-2 py-0.5 rounded-full border border-[#F8D7DA] animate-pulse">
                    <Sparkles className="w-3 h-3" /> Tap to open
                  </span>
                )}
              </div>

              {/* Cartoon Illustration Container */}
              <div className="h-28 flex items-center justify-center my-1 group-hover:scale-110 transition-transform duration-300">
                {card.illustration}
              </div>

              {/* Title & Description */}
              <div className="mt-2 text-center sm:text-left">
                <h3 className="text-xl sm:text-2xl font-bold text-stone-800 flex items-center justify-center sm:justify-start gap-1.5 font-sans">
                  <span>{card.title}</span>
                  <span className="text-xl group-hover:rotate-12 transition-transform">{card.emoji}</span>
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 mt-0.5 font-medium">
                  {card.subtitle}
                </p>
              </div>

              {/* Bottom Action Pill */}
              <div className="mt-4 pt-3 border-t border-white/60 flex items-center justify-between text-xs font-semibold text-[#8E444E]">
                <span>Open Gift</span>
                <div className="w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm group-hover:translate-x-1 group-hover:bg-[#C97983] group-hover:text-white transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Sweet footer note */}
      <div className="mt-10 text-center">
        <p className="text-sm text-stone-500 font-sans flex items-center justify-center gap-1">
          <Heart className="w-4 h-4 text-[#C97983] fill-[#C97983]" />
          <span>Take your time and explore each one, Amma!</span>
        </p>
      </div>
    </div>
  );
}

