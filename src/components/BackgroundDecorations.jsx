import React from 'react';

export default function BackgroundDecorations() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10 select-none">
      {/* Soft pastel ambient glow orbs */}
      <div className="absolute -top-24 -left-24 w-96 h-96 rounded-full bg-[#F8D7DA]/40 blur-3xl animate-float-slow" />
      <div className="absolute top-1/4 -right-20 w-80 h-80 rounded-full bg-[#FFE5D0]/40 blur-3xl animate-float-slow" style={{ animationDelay: '-2s' }} />
      <div className="absolute -bottom-20 left-1/3 w-96 h-96 rounded-full bg-[#E8DFF5]/45 blur-3xl animate-float-slow" style={{ animationDelay: '-4s' }} />
      <div className="absolute top-2/3 -left-20 w-72 h-72 rounded-full bg-[#DCE8D5]/35 blur-3xl animate-float-slow" style={{ animationDelay: '-1s' }} />

      {/* Falling romantic flower petals */}
      <div className="petal-particle text-xl opacity-60" style={{ left: '8%', animationDuration: '14s', animationDelay: '0s' }}>🌸</div>
      <div className="petal-particle text-lg opacity-50" style={{ left: '25%', animationDuration: '18s', animationDelay: '4s' }}>🌸</div>
      <div className="petal-particle text-xl opacity-55" style={{ left: '48%', animationDuration: '15s', animationDelay: '8s' }}>🌸</div>
      <div className="petal-particle text-sm opacity-60" style={{ left: '68%', animationDuration: '16s', animationDelay: '2s' }}>🌸</div>
      <div className="petal-particle text-lg opacity-50" style={{ left: '85%', animationDuration: '19s', animationDelay: '6s' }}>🌸</div>
      <div className="petal-particle text-xs opacity-70" style={{ left: '92%', animationDuration: '13s', animationDelay: '10s' }}>✨</div>
    </div>
  );
}

