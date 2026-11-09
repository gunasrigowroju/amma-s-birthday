import React, { useState } from 'react';
import { Sparkles, Heart, X, ZoomIn, ArrowLeft } from 'lucide-react';
import { playPop, playChime } from '../../utils/audio';
import { websiteContent } from '../../content';

// SVG fallbacks in case an image isn't available
const SVG_FALLBACKS = {
  1: (
    <svg viewBox="0 0 200 160" className="w-full h-full bg-[#FFF0F2]">
      <circle cx="100" cy="80" r="60" fill="#F8D7DA" opacity="0.6" />
      <text x="100" y="85" fontSize="48" textAnchor="middle">🤱</text>
      <text x="100" y="125" fontSize="13" textAnchor="middle" fill="#B05E68" fontFamily="Caveat, cursive">Pure Unconditional Love</text>
    </svg>
  ),
  2: (
    <svg viewBox="0 0 200 160" className="w-full h-full bg-[#FFF8EE]">
      <circle cx="100" cy="80" r="60" fill="#FFE5D0" opacity="0.6" />
      <text x="100" y="85" fontSize="48" textAnchor="middle">🙏</text>
      <text x="100" y="125" fontSize="13" textAnchor="middle" fill="#A8623D" fontFamily="Caveat, cursive">Amma's Daily Blessings</text>
    </svg>
  ),
  3: (
    <svg viewBox="0 0 200 160" className="w-full h-full bg-[#F7F2FD]">
      <circle cx="100" cy="80" r="60" fill="#E8DFF5" opacity="0.6" />
      <text x="100" y="85" fontSize="48" textAnchor="middle">✨</text>
      <text x="100" y="70" fontSize="36" textAnchor="middle">👩‍👧</text>
      <text x="100" y="125" fontSize="13" textAnchor="middle" fill="#7D5F9B" fontFamily="Caveat, cursive">The Glow That Lights Our Home</text>
    </svg>
  ),
  4: (
    <svg viewBox="0 0 200 160" className="w-full h-full bg-[#F5F9F3]">
      <circle cx="100" cy="80" r="60" fill="#DCE8D5" opacity="0.6" />
      <text x="100" y="85" fontSize="48" textAnchor="middle">🌱</text>
      <text x="100" y="125" fontSize="13" textAnchor="middle" fill="#5F7D57" fontFamily="Caveat, cursive">You Sacrificed So I Could Bloom</text>
    </svg>
  ),
  5: (
    <svg viewBox="0 0 200 160" className="w-full h-full bg-[#FFF0F4]">
      <circle cx="100" cy="80" r="60" fill="#F8D7DA" opacity="0.6" />
      <text x="100" y="85" fontSize="48" textAnchor="middle">🏡</text>
      <text x="100" y="125" fontSize="13" textAnchor="middle" fill="#B05E68" fontFamily="Caveat, cursive">Home is Wherever Amma Is</text>
    </svg>
  ),
  6: (
    <svg viewBox="0 0 200 160" className="w-full h-full bg-[#FFFBF2]">
      <circle cx="100" cy="80" r="60" fill="#FFE5D0" opacity="0.6" />
      <text x="100" y="85" fontSize="48" textAnchor="middle">🤲</text>
      <text x="100" y="125" fontSize="13" textAnchor="middle" fill="#A8623D" fontFamily="Caveat, cursive">Holding Your Warm Hands</text>
    </svg>
  )
};

export default function Screen5Memories({ onBackToGifts }) {
  const content = websiteContent.screen5;
  const memories = content.memoriesList;
  const [activePhoto, setActivePhoto] = useState(null);

  const rotations = ['-rotate-2', 'rotate-1', '-rotate-1', 'rotate-2', '-rotate-2', 'rotate-1'];

  const handleOpenPhoto = (item) => {
    playPop();
    setActivePhoto(item);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start px-4 py-12 relative max-w-5xl mx-auto">
      {/* Decorative floral floating background elements */}
      <div className="absolute top-10 left-[8%] text-3xl opacity-60 animate-float-gentle pointer-events-none select-none">
        🌸
      </div>
      <div className="absolute top-24 right-[10%] text-2xl opacity-60 animate-float-gentle pointer-events-none select-none" style={{ animationDelay: '-1.5s' }}>
        ✨
      </div>
      <div className="absolute bottom-20 left-[12%] text-2xl opacity-50 animate-float-gentle pointer-events-none select-none" style={{ animationDelay: '-3s' }}>
        🌷
      </div>

      {/* Top Header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-md border border-[#F8D7DA] text-xs font-semibold text-[#B05E68] shadow-sm mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#C97983]" />
          <span>Our Little World of Memories</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#9E4F5A] font-serif tracking-tight">
          {content.heading}
        </h2>
        
        <p className="text-stone-600 font-cursive text-xl sm:text-2xl mt-1 text-[#B05E68]">
          {content.subheading}
        </p>

        <p className="text-xs text-stone-400 font-sans mt-2 flex items-center justify-center gap-1">
          <Heart className="w-3.5 h-3.5 text-[#C97983] fill-[#C97983]" />
          <span>Tap on any photo to view in full size with love</span>
        </p>
      </div>

      {/* Scrapbook Grid of Polaroids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 w-full max-w-5xl">
        {memories.map((item, index) => {
          const rotationClass = rotations[index % rotations.length];
          return (
            <div
              key={item.id}
              onClick={() => handleOpenPhoto(item)}
              className={`group relative bg-white p-4 pt-6 pb-6 rounded-2xl shadow-polaroid cursor-pointer transform hover:scale-105 hover:rotate-0 transition-all duration-300 ${rotationClass} border-2 border-white hover:border-[#F8D7DA] hover:shadow-glow flex flex-col justify-between`}
            >
              {/* Washi Tape Strip on Top with realistic texture */}
              <div className={`washi-tape ${item.tapeColor || 'washi-tape'}`} />

              {/* Little cute corner pin or flower accent */}
              <div className="absolute top-2 right-2 text-xs opacity-75 group-hover:scale-125 transition-transform">
                💖
              </div>

              {/* Photo Frame Container */}
              <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-[#FAF5F2] flex items-center justify-center border border-stone-200/80 shadow-inner group-hover:shadow-md transition-shadow">
                {item.imageUrl ? (
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                    onError={(e) => {
                      // Fallback if image fails to load
                      e.target.style.display = 'none';
                      if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                ) : null}

                {/* Fallback illustration if no image or error */}
                <div
                  className="w-full h-full flex items-center justify-center"
                  style={{ display: item.imageUrl ? 'none' : 'flex' }}
                >
                  {SVG_FALLBACKS[item.id] || SVG_FALLBACKS[1]}
                </div>

                {/* Subtle zoom icon hint on hover */}
                <div className="absolute inset-0 bg-stone-900/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[1px]">
                  <div className="px-3 py-1.5 rounded-full bg-white/90 text-xs font-semibold text-stone-700 flex items-center gap-1 shadow-md transform scale-90 group-hover:scale-100 transition-transform">
                    <ZoomIn className="w-3.5 h-3.5 text-[#C97983]" />
                    <span>View Memory</span>
                  </div>
                </div>
              </div>

              {/* Polaroid Handwritten Caption */}
              <div className="mt-4 text-center px-1">
                <span className="text-[11px] uppercase tracking-wider text-[#C97983] font-bold font-sans">
                  {item.date}
                </span>

                <h4 className="font-bold text-base sm:text-lg text-stone-800 font-serif mt-0.5 leading-snug">
                  {item.title}
                </h4>

                <p className="font-cursive text-stone-600 text-lg sm:text-xl mt-1 leading-snug">
                  "{item.caption}"
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Lightbox / Full-Screen Zoom Modal */}
      {activePhoto && (
        <div
          onClick={() => setActivePhoto(null)}
          className="fixed inset-0 z-50 bg-stone-900/65 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in select-none"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl p-6 sm:p-8 max-w-xl w-full shadow-2xl relative border-4 border-[#F8D7DA] animate-scale-up"
          >
            {/* Close button */}
            <button
              onClick={() => setActivePhoto(null)}
              className="absolute top-3.5 right-3.5 p-2 rounded-full bg-stone-100 text-stone-600 hover:bg-[#F8D7DA] hover:text-[#B05E68] transition-colors shadow-sm"
              aria-label="Close photo"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo in Full Resolution */}
            <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-stone-100 mb-4 border border-stone-200 shadow-inner">
              {activePhoto.imageUrl ? (
                <img
                  src={activePhoto.imageUrl}
                  alt={activePhoto.title}
                  className="w-full h-full object-contain bg-stone-50"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    if (e.target.nextSibling) e.target.nextSibling.style.display = 'flex';
                  }}
                />
              ) : null}

              <div
                className="w-full h-full flex items-center justify-center"
                style={{ display: activePhoto.imageUrl ? 'none' : 'flex' }}
              >
                {SVG_FALLBACKS[activePhoto.id] || SVG_FALLBACKS[1]}
              </div>
            </div>

            {/* Details */}
            <div className="text-center">
              <span className="text-xs uppercase tracking-wider text-[#C97983] font-bold">
                {activePhoto.date}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-stone-800 font-serif mt-1">
                {activePhoto.title}
              </h3>
              <p className="font-cursive text-xl sm:text-2xl text-[#8E444E] mt-2 font-medium">
                "{activePhoto.caption}"
              </p>
              <p className="text-xs text-stone-400 mt-3 font-sans">
                Forever cherished in Amma's birthday collection ❤️
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Back to Gifts Navigation */}
      <div className="mt-12">
        <button
          onClick={onBackToGifts}
          className="px-7 py-3.5 rounded-full text-sm sm:text-base font-bold bg-white/95 text-[#8E444E] hover:bg-white border-2 border-[#F8D7DA] shadow-card hover:shadow-glow hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Surprise Gifts 🎁</span>
        </button>
      </div>
    </div>
  );
}
