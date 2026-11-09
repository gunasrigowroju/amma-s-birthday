import React from 'react';

// Cute 2-Tier Birthday Cake with 3 Candles
export function BirthdayCakeSvg({ candlesLit = true, size = 260, showHearts = true, className = "" }) {
  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      <svg
        width={size}
        height={size * 0.95}
        viewBox="0 0 320 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-md transition-all duration-500"
      >
        <defs>
          <linearGradient id="cakePlateGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#EAD8DE" />
          </linearGradient>
          <linearGradient id="tier1Grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE6EC" />
            <stop offset="60%" stopColor="#F8D7DA" />
            <stop offset="100%" stopColor="#EBB8BE" />
          </linearGradient>
          <linearGradient id="tier2Grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF9EE" />
            <stop offset="60%" stopColor="#FFF2D6" />
            <stop offset="100%" stopColor="#FFE0AA" />
          </linearGradient>
          <linearGradient id="frostingCream" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF0F5" />
          </linearGradient>
          <linearGradient id="candleGrad1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFCCD5" />
            <stop offset="100%" stopColor="#E5989B" />
          </linearGradient>
          <linearGradient id="candleGrad2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#D8E2DC" />
            <stop offset="100%" stopColor="#B7CEB5" />
          </linearGradient>
          <linearGradient id="candleGrad3" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8DFF5" />
            <stop offset="100%" stopColor="#C9B8E4" />
          </linearGradient>
          <radialGradient id="flameGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF59D" stopOpacity="1" />
            <stop offset="40%" stopColor="#FFB74D" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#FF7043" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Cake Stand / Plate */}
        <ellipse cx="160" cy="270" rx="135" ry="16" fill="url(#cakePlateGrad)" />
        <ellipse cx="160" cy="268" rx="125" ry="12" fill="#FFFFFF" />

        {/* BOTTOM TIER (Pink Delight) */}
        {/* Cake body */}
        <path
          d="M 60 190 Q 160 215 260 190 L 260 250 Q 160 275 60 250 Z"
          fill="url(#tier1Grad)"
        />
        {/* Bottom tier top ellipse */}
        <ellipse cx="160" cy="190" rx="100" ry="25" fill="#FFEBF0" />

        {/* Bottom Tier Frosting drips & scallops */}
        <path
          d="M 60 190 
             Q 75 215 90 195 
             Q 110 225 130 195 
             Q 150 228 170 195 
             Q 190 225 210 195 
             Q 230 220 250 192 
             L 260 190 
             Q 160 215 60 190 Z"
          fill="url(#frostingCream)"
        />
        {/* Heart decorations on bottom tier */}
        <g fill="#C97983" opacity="0.85">
          <path d="M 105 225 C 105 220 100 216 95 218 C 90 220 88 226 95 233 L 105 240 L 115 233 C 122 226 120 220 115 218 C 110 216 105 220 105 225 Z" transform="scale(0.8) translate(30, 45)" />
          <path d="M 160 232 C 160 227 155 223 150 225 C 145 227 143 233 150 240 L 160 247 L 170 240 C 177 233 175 227 170 225 C 165 223 160 227 160 232 Z" transform="scale(0.85) translate(28, 38)" />
          <path d="M 215 225 C 215 220 210 216 205 218 C 200 220 198 226 205 233 L 215 240 L 225 233 C 232 226 230 220 225 218 C 220 216 215 220 215 225 Z" transform="scale(0.8) translate(28, 45)" />
        </g>

        {/* TOP TIER (Cream & Peach) */}
        <path
          d="M 95 125 Q 160 145 225 125 L 225 175 Q 160 195 95 175 Z"
          fill="url(#tier2Grad)"
        />
        {/* Top tier top ellipse */}
        <ellipse cx="160" cy="125" rx="65" ry="18" fill="#FFFBF2" />

        {/* Top tier frosting scallops */}
        <path
          d="M 95 125 
             Q 110 145 125 128 
             Q 145 150 160 128 
             Q 178 152 195 128 
             Q 210 145 225 125 
             Q 160 145 95 125 Z"
          fill="url(#frostingCream)"
        />

        {/* Whipped cream dollops & strawberries on top */}
        <ellipse cx="115" cy="124" rx="10" ry="7" fill="#FFFFFF" />
        <ellipse cx="140" cy="128" rx="10" ry="7" fill="#FFFFFF" />
        <ellipse cx="160" cy="130" rx="11" ry="8" fill="#FFFFFF" />
        <ellipse cx="180" cy="128" rx="10" ry="7" fill="#FFFFFF" />
        <ellipse cx="205" cy="124" rx="10" ry="7" fill="#FFFFFF" />

        {/* Little decorative pearls */}
        <circle cx="127" cy="126" r="3" fill="#F8D7DA" />
        <circle cx="170" cy="129" r="3" fill="#DCE8D5" />
        <circle cx="193" cy="126" r="3" fill="#F8D7DA" />

        {/* THREE CANDLES */}
        {/* Candle 1 (Left - Rose Pink) */}
        <rect x="122" y="80" width="8" height="38" rx="4" fill="url(#candleGrad1)" />
        <path d="M 122 88 L 130 92 M 122 98 L 130 102 M 122 108 L 130 112" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        {/* Wick 1 */}
        <path d="M 126 80 L 126 73" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />

        {/* Candle 2 (Center - Sage Green - Tallest) */}
        <rect x="156" y="70" width="8" height="48" rx="4" fill="url(#candleGrad2)" />
        <path d="M 156 80 L 164 84 M 156 90 L 164 94 M 156 100 L 164 104" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        {/* Wick 2 */}
        <path d="M 160 70 L 160 63" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />

        {/* Candle 3 (Right - Lavender) */}
        <rect x="190" y="80" width="8" height="38" rx="4" fill="url(#candleGrad3)" />
        <path d="M 190 88 L 198 92 M 190 98 L 198 102 M 190 108 L 198 112" stroke="#FFFFFF" strokeWidth="1.5" strokeLinecap="round" />
        {/* Wick 3 */}
        <path d="M 194 80 L 194 73" stroke="#4A3E3D" strokeWidth="1.5" strokeLinecap="round" />

        {/* CANDLE FLAMES OR SMOKE */}
        {candlesLit ? (
          <g>
            {/* Candle 1 Flame */}
            <g className="animate-candle-flame">
              <ellipse cx="126" cy="62" rx="14" ry="16" fill="url(#flameGlow)" />
              <path d="M 126 53 C 129 60 131 66 126 72 C 121 66 123 60 126 53 Z" fill="#FF9E1B" />
              <path d="M 126 58 C 127.5 62 128.5 65 126 69 C 123.5 65 124.5 62 126 58 Z" fill="#FFF59D" />
            </g>

            {/* Candle 2 Flame (Center) */}
            <g className="animate-candle-flame" style={{ animationDelay: '-0.3s' }}>
              <ellipse cx="160" cy="52" rx="16" ry="18" fill="url(#flameGlow)" />
              <path d="M 160 42 C 163.5 50 165.5 56 160 62 C 154.5 56 156.5 50 160 42 Z" fill="#FF9E1B" />
              <path d="M 160 47 C 162 52 163 56 160 60 C 157 56 158 52 160 47 Z" fill="#FFF59D" />
            </g>

            {/* Candle 3 Flame */}
            <g className="animate-candle-flame" style={{ animationDelay: '-0.5s' }}>
              <ellipse cx="194" cy="62" rx="14" ry="16" fill="url(#flameGlow)" />
              <path d="M 194 53 C 197 60 199 66 194 72 C 189 66 191 60 194 53 Z" fill="#FF9E1B" />
              <path d="M 194 58 C 195.5 62 196.5 65 194 69 C 191.5 65 192.5 62 194 58 Z" fill="#FFF59D" />
            </g>
          </g>
        ) : (
          /* Extinguished Smoke Wisps */
          <g stroke="#C2B8B8" strokeWidth="2" strokeLinecap="round" opacity="0.6">
            <path d="M 126 70 Q 123 60 128 50 Q 124 40 127 30" fill="none" className="animate-pulse" />
            <path d="M 160 60 Q 164 48 158 38 Q 163 26 159 15" fill="none" className="animate-pulse" />
            <path d="M 194 70 Q 198 58 192 48 Q 196 36 193 25" fill="none" className="animate-pulse" />
          </g>
        )}

        {/* Floating Sparkles & Hearts */}
        {showHearts && (
          <g>
            <text x="35" y="110" fontSize="20" className="animate-bounce" style={{ animationDuration: '3s' }}>🌸</text>
            <text x="265" y="130" fontSize="18" className="animate-bounce" style={{ animationDuration: '2.5s' }}>✨</text>
            <text x="50" y="210" fontSize="16" className="animate-float-gentle">💖</text>
            <text x="270" y="210" fontSize="18" className="animate-float-gentle" style={{ animationDelay: '-1.5s' }}>🌷</text>
          </g>
        )}
      </svg>
    </div>
  );
}

// Romantic Interactive Envelope with Heart Wax Seal
export function EnvelopeSvg({ isOpen = false, size = 260, className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size * 0.78}
        viewBox="0 0 320 250"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-xl transition-all duration-700 overflow-visible"
      >
        <defs>
          <linearGradient id="envBodyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFF0E3" />
            <stop offset="100%" stopColor="#FFE0CB" />
          </linearGradient>
          <linearGradient id="envFlapGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFE5D0" />
            <stop offset="100%" stopColor="#F8D7DA" />
          </linearGradient>
          <linearGradient id="letterGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="100%" stopColor="#FFF9F0" />
          </linearGradient>
          <radialGradient id="sealGrad" cx="40%" cy="40%" r="60%">
            <stop offset="0%" stopColor="#E7929B" />
            <stop offset="60%" stopColor="#C97983" />
            <stop offset="100%" stopColor="#A8525D" />
          </radialGradient>
        </defs>

        {/* Envelope Back Interior */}
        <rect x="20" y="60" width="280" height="170" rx="14" fill="#F2DCD3" />

        {/* Letter Card (slides up when open) */}
        <g
          className="transition-all duration-1000 ease-out"
          style={{
            transform: isOpen ? 'translateY(-65px)' : 'translateY(25px)',
            opacity: isOpen ? 1 : 0.4
          }}
        >
          <rect x="40" y="40" width="240" height="150" rx="10" fill="url(#letterGrad)" stroke="#EBD8CF" strokeWidth="1.5" />
          {/* Letter header decoration */}
          <line x1="60" y1="65" x2="160" y2="65" stroke="#C97983" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="60" y1="80" x2="260" y2="80" stroke="#E2D4CD" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="95" x2="240" y2="95" stroke="#E2D4CD" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="110" x2="250" y2="110" stroke="#E2D4CD" strokeWidth="2" strokeLinecap="round" />
          <line x1="60" y1="125" x2="200" y2="125" stroke="#E2D4CD" strokeWidth="2" strokeLinecap="round" />
          <text x="235" y="150" fontSize="20">💖</text>
          <text x="190" y="158" fontFamily="Caveat, cursive" fontSize="16" fill="#C97983">For Amma...</text>
        </g>

        {/* Envelope Pocket Front (Triangles Left, Right, Bottom) */}
        <path
          d="M 20 60 L 160 165 L 20 230 Z"
          fill="#FFE8D8"
          stroke="#F3D5C5"
          strokeWidth="1"
        />
        <path
          d="M 300 60 L 160 165 L 300 230 Z"
          fill="#FFE2CF"
          stroke="#F3D5C5"
          strokeWidth="1"
        />
        <path
          d="M 20 230 L 160 150 L 300 230 Z"
          fill="url(#envBodyGrad)"
          stroke="#F0CEBD"
          strokeWidth="1.5"
        />

        {/* Envelope Top Flap */}
        <g
          className="transition-transform duration-700 ease-in-out origin-top"
          style={{
            transform: isOpen ? 'rotateX(180deg) translateY(-2px)' : 'rotateX(0deg)',
            transformOrigin: '160px 60px'
          }}
        >
          <path
            d="M 20 60 L 160 160 L 300 60 Z"
            fill="url(#envFlapGrad)"
            stroke="#ECCEC2"
            strokeWidth="1.5"
          />

          {/* Heart Wax Seal (Visible when closed) */}
          {!isOpen && (
            <g transform="translate(160, 155)">
              <circle cx="0" cy="0" r="22" fill="url(#sealGrad)" filter="drop-shadow(0 4px 6px rgba(168, 82, 93, 0.4))" />
              <circle cx="0" cy="0" r="18" fill="none" stroke="#F8D7DA" strokeWidth="1" strokeDasharray="3,2" />
              {/* Cute Heart on Seal */}
              <path
                d="M 0 -3 C 0 -9 -7 -12 -10 -7 C -14 0 -7 6 0 11 C 7 6 14 0 10 -7 C 7 -12 0 -9 0 -3 Z"
                fill="#FFFFFF"
                opacity="0.95"
              />
            </g>
          )}
        </g>
      </svg>
    </div>
  );
}

// Cute Scrapbook Camera Icon for Memories Card
export function CameraMemorySvg({ size = 110 }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="camGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FDECEF" />
          <stop offset="100%" stopColor="#F8D7DA" />
        </linearGradient>
      </defs>
      {/* Camera Body */}
      <rect x="10" y="28" width="100" height="72" rx="18" fill="url(#camGrad)" stroke="#C97983" strokeWidth="2.5" />
      {/* Top Flash bump */}
      <rect x="42" y="16" width="36" height="15" rx="6" fill="#FFE5D0" stroke="#C97983" strokeWidth="2.5" />
      <circle cx="50" cy="23" r="3.5" fill="#C97983" />
      {/* Shutter button */}
      <rect x="22" y="20" width="14" height="8" rx="3" fill="#DCE8D5" stroke="#C97983" strokeWidth="2" />
      {/* Lens outer */}
      <circle cx="60" cy="64" r="26" fill="#FFFFFF" stroke="#C97983" strokeWidth="2.5" />
      <circle cx="60" cy="64" r="20" fill="#E8DFF5" />
      <circle cx="60" cy="64" r="14" fill="#C97983" />
      <circle cx="56" cy="60" r="4" fill="#FFFFFF" />
      {/* Hearts coming out */}
      <text x="82" y="24" fontSize="16">✨</text>
      <text x="94" y="44" fontSize="14">💖</text>
    </svg>
  );
}

// Cute Cartoon Love Letter for Card 3
export function LetterIconSvg({ size = 110 }) {
  return (
    <svg width={size} height={size * 0.9} viewBox="0 0 120 110" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="12" y="22" width="96" height="68" rx="12" fill="#FFF7E8" stroke="#C97983" strokeWidth="2.5" />
      <path d="M 14 24 L 60 62 L 106 24" stroke="#C97983" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      {/* Wax seal heart */}
      <circle cx="60" cy="62" r="13" fill="#C97983" />
      <path
        d="M 60 59 C 60 55 56 53 54 56 C 51 60 55 64 60 67 C 65 64 69 60 66 56 C 64 53 60 55 60 59 Z"
        fill="#FFFFFF"
      />
      {/* Flower branch peeking */}
      <path d="M 80 18 Q 88 12 94 14" stroke="#8EA885" strokeWidth="2" strokeLinecap="round" />
      <circle cx="94" cy="14" r="3" fill="#F8D7DA" />
      <circle cx="88" cy="12" r="2.5" fill="#F8D7DA" />
    </svg>
  );
}

// Cute Cartoon Gift Box for Card 4
export function GiftBoxSvg({ size = 110 }) {
  return (
    <svg width={size} height={size * 0.95} viewBox="0 0 120 115" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="giftBody" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E8DFF5" />
          <stop offset="100%" stopColor="#D5C4EC" />
        </linearGradient>
      </defs>
      {/* Box base */}
      <rect x="20" y="44" width="80" height="60" rx="10" fill="url(#giftBody)" stroke="#9F82C4" strokeWidth="2.5" />
      {/* Box lid */}
      <rect x="14" y="32" width="92" height="16" rx="6" fill="#F8D7DA" stroke="#C97983" strokeWidth="2.5" />
      {/* Ribbon vertical */}
      <rect x="52" y="32" width="16" height="72" fill="#FFE5D0" stroke="#E5989B" strokeWidth="2" />
      {/* Ribbon Bow Left */}
      <path
        d="M 60 32 C 45 14 30 20 40 32 C 48 38 56 34 60 32 Z"
        fill="#FFE5D0"
        stroke="#E5989B"
        strokeWidth="2"
      />
      {/* Ribbon Bow Right */}
      <path
        d="M 60 32 C 75 14 90 20 80 32 C 72 38 64 34 60 32 Z"
        fill="#FFE5D0"
        stroke="#E5989B"
        strokeWidth="2"
      />
      {/* Ribbon knot center */}
      <circle cx="60" cy="32" r="6" fill="#C97983" />
      {/* Floating sparkles */}
      <text x="10" y="24" fontSize="18">✨</text>
      <text x="86" y="22" fontSize="18">⭐</text>
    </svg>
  );
}

// SCREEN SEVEN: Cute Cartoon Characters (Amma and Pandu) sharing cake!
export function AmmaAndPanduEatingCakeSvg({ bites = 0, isFull = false, size = 320 }) {
  return (
    <div className="relative flex flex-col items-center select-none">
      <svg
        width={size}
        height={size * 0.78}
        viewBox="0 0 400 310"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-md overflow-visible"
      >
        <defs>
          <linearGradient id="ammaSari" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F8D7DA" />
            <stop offset="100%" stopColor="#E5989B" />
          </linearGradient>
          <linearGradient id="panduShirt" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#DCE8D5" />
            <stop offset="100%" stopColor="#B5CCA9" />
          </linearGradient>
        </defs>

        {/* Floor shadow */}
        <ellipse cx="200" cy="290" rx="160" ry="12" fill="#EBD9D5" opacity="0.6" />

        {/* TABLE with cake */}
        <rect x="140" y="200" width="120" height="70" rx="8" fill="#FFF7E8" stroke="#E8D2C2" strokeWidth="3" />
        <line x1="145" y1="200" x2="255" y2="200" stroke="#C97983" strokeWidth="4" strokeLinecap="round" />
        {/* Table cloth lace */}
        <path d="M 140 206 Q 148 214 156 206 Q 164 214 172 206 Q 180 214 188 206 Q 196 214 204 206 Q 212 214 220 206 Q 228 214 236 206 Q 244 214 252 206 Q 256 214 260 206" stroke="#F8D7DA" strokeWidth="2.5" fill="none" />

        {/* DELICIOUS CAKE ON TABLE */}
        <ellipse cx="200" cy="195" rx="34" ry="10" fill="#E8D5D5" />
        {/* Cake slice / mini cake */}
        <path d="M 175 165 Q 200 178 225 165 L 225 192 Q 200 204 175 192 Z" fill="#FFE5D0" stroke="#C97983" strokeWidth="2" />
        <ellipse cx="200" cy="165" rx="25" ry="8" fill="#FFF4F0" />
        {/* Frosting drips */}
        <path d="M 175 165 Q 183 175 192 166 Q 200 176 210 166 Q 218 174 225 165" fill="#F8D7DA" />
        {/* Strawberry on top */}
        <circle cx="200" cy="160" r="6" fill="#C97983" />
        <path d="M 198 154 L 202 154" stroke="#8EA885" strokeWidth="2" strokeLinecap="round" />

        {/* AMMA CHARACTER (Left) */}
        <g className="animate-float-gentle">
          {/* Amma Body */}
          <path d="M 60 210 Q 95 180 130 210 L 140 280 L 50 280 Z" fill="url(#ammaSari)" stroke="#C97983" strokeWidth="2.5" />
          {/* Amma Bindi & Pallu */}
          <path d="M 65 220 Q 95 240 120 270" stroke="#FFE5D0" strokeWidth="8" strokeLinecap="round" opacity="0.8" />
          
          {/* Amma Head */}
          <circle cx="95" cy="135" r="38" fill="#FFEAD9" stroke="#5D4037" strokeWidth="2" />
          {/* Amma Hair Bun with Flowers */}
          <circle cx="65" cy="115" r="18" fill="#3E2723" />
          {/* Jasmine flowers in bun */}
          <circle cx="65" cy="100" r="5" fill="#FFFFFF" />
          <circle cx="56" cy="106" r="4.5" fill="#FFFFFF" />
          <circle cx="74" cy="106" r="4.5" fill="#FFFFFF" />
          <circle cx="65" cy="112" r="4" fill="#FFF59D" />

          {/* Amma Front Hair */}
          <path d="M 62 130 C 65 105 125 105 128 130 C 115 115 75 115 62 130 Z" fill="#3E2723" />

          {/* Amma Eyes (Gentle, loving smile eyes) */}
          <path d="M 82 135 Q 89 128 96 135" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          <path d="M 104 135 Q 111 128 118 135" stroke="#3E2723" strokeWidth="2.5" strokeLinecap="round" fill="none" />
          
          {/* Amma Red Bindi */}
          <circle cx="100" cy="124" r="3.2" fill="#C97983" />

          {/* Amma Cheeks Blush */}
          <ellipse cx="80" cy="144" rx="7" ry="4" fill="#F8D7DA" />
          <ellipse cx="120" cy="144" rx="7" ry="4" fill="#F8D7DA" />

          {/* Amma Loving Smile */}
          <path d="M 94 148 Q 100 156 106 148" stroke="#A8525D" strokeWidth="2.5" strokeLinecap="round" fill="none" />

          {/* Amma's Hand holding a little cake fork/spoon toward center */}
          <path d="M 125 215 Q 145 200 165 190" stroke="#FFEAD9" strokeWidth="9" strokeLinecap="round" />
          <path d="M 160 190 L 172 182" stroke="#B0BEC5" strokeWidth="3" strokeLinecap="round" />
          <circle cx="174" cy="180" r="4" fill="#F8D7DA" />
        </g>

        {/* PANDU CHARACTER (Right - The Loving Child) */}
        <g className="animate-float-gentle" style={{ animationDelay: '-2s' }}>
          {/* Pandu Body */}
          <path d="M 270 215 Q 305 185 340 215 L 350 280 L 260 280 Z" fill="url(#panduShirt)" stroke="#8EA885" strokeWidth="2.5" />
          
          {/* Pandu Head */}
          <circle cx="305" cy="140" r="36" fill="#FFEAD9" stroke="#5D4037" strokeWidth="2" />
          {/* Pandu Cute Hair */}
          <path d="M 270 135 C 272 105 338 105 340 135 C 330 115 315 110 305 115 C 295 110 280 115 270 135 Z" fill="#3E2723" />
          {/* Cute tuft of hair */}
          <path d="M 305 106 Q 312 96 320 102" stroke="#3E2723" strokeWidth="3" strokeLinecap="round" fill="none" />

          {/* Pandu Happy Twinkling Eyes */}
          {isFull ? (
            /* Full, content, super happy closed eyes */
            <>
              <path d="M 288 142 Q 295 134 302 142" stroke="#3E2723" strokeWidth="2.8" strokeLinecap="round" fill="none" />
              <path d="M 310 142 Q 317 134 324 142" stroke="#3E2723" strokeWidth="2.8" strokeLinecap="round" fill="none" />
            </>
          ) : (
            /* Big excited anime/cartoon eyes looking at cake */
            <>
              <ellipse cx="295" cy="140" rx="5" ry="6" fill="#3E2723" />
              <circle cx="293" cy="138" r="2" fill="#FFFFFF" />
              <ellipse cx="317" cy="140" rx="5" ry="6" fill="#3E2723" />
              <circle cx="315" cy="138" r="2" fill="#FFFFFF" />
            </>
          )}

          {/* Pandu Rosy Blushing Cheeks */}
          <ellipse cx="286" cy="149" rx="8" ry="4.5" fill="#F8D7DA" />
          <ellipse cx="326" cy="149" rx="8" ry="4.5" fill="#F8D7DA" />

          {/* Pandu Mouth: Open happy "Yummy!" smile */}
          {isFull ? (
            <path d="M 298 152 Q 306 163 314 152" stroke="#A8525D" strokeWidth="2.5" strokeLinecap="round" fill="#F8D7DA" />
          ) : (
            <path d="M 298 150 Q 306 166 314 150 Z" fill="#C97983" stroke="#A8525D" strokeWidth="1.5" />
          )}

          {/* Cake crumbs on cheek */}
          <circle cx="323" cy="154" r="1.5" fill="#E5989B" />
          <circle cx="327" cy="157" r="1.2" fill="#FFE5D0" />

          {/* Pandu Hand reaching happily for cake */}
          <path d="M 275 220 Q 255 205 235 194" stroke="#FFEAD9" strokeWidth="8" strokeLinecap="round" />
        </g>

        {/* Floating Hearts between Amma & Pandu */}
        <g>
          <text x="190" y="115" fontSize="24" className="animate-bounce" style={{ animationDuration: '2s' }}>💖</text>
          <text x="170" y="85" fontSize="16" className="animate-float-gentle">✨</text>
          <text x="215" y="85" fontSize="18" className="animate-float-gentle" style={{ animationDelay: '-1s' }}>🌸</text>
        </g>
      </svg>
    </div>
  );
}

// SCREEN EIGHT: Warm Hug Illustration (Amma & Child warm embrace)
export function WarmHugSvg({ size = 300, className = "" }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg
        width={size}
        height={size * 0.9}
        viewBox="0 0 340 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="filter drop-shadow-xl overflow-visible animate-float-gentle"
      >
        <defs>
          <radialGradient id="hugAura" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.9" />
            <stop offset="60%" stopColor="#F8D7DA" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#E8DFF5" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Warm Golden Glow Aura */}
        <circle cx="170" cy="150" r="130" fill="url(#hugAura)" />

        {/* AMMA EMBRACING PANDU */}
        {/* Amma Back / Sari */}
        <path d="M 90 270 Q 120 160 170 170 Q 220 160 250 270 Z" fill="#F8D7DA" stroke="#C97983" strokeWidth="2.5" />
        
        {/* Child (Pandu) in front */}
        <path d="M 130 270 Q 150 200 170 205 Q 190 200 210 270 Z" fill="#DCE8D5" stroke="#8EA885" strokeWidth="2" />

        {/* Amma's Warm Arms wrapping around Pandu */}
        <path
          d="M 105 210 Q 135 245 170 240 Q 205 245 235 210"
          stroke="#FFEAD9"
          strokeWidth="16"
          strokeLinecap="round"
          fill="none"
        />
        {/* Amma's Sleeves */}
        <path d="M 100 195 Q 112 215 125 220" stroke="#E5989B" strokeWidth="12" strokeLinecap="round" fill="none" />
        <path d="M 240 195 Q 228 215 215 220" stroke="#E5989B" strokeWidth="12" strokeLinecap="round" fill="none" />

        {/* Child's Head leaning lovingly on Amma's shoulder */}
        <circle cx="160" cy="180" r="28" fill="#FFEAD9" stroke="#5D4037" strokeWidth="2" />
        <path d="M 135 175 C 138 152 182 152 185 175 C 175 162 145 162 135 175 Z" fill="#3E2723" />
        {/* Child's blissfully closed peaceful eyes */}
        <path d="M 148 182 Q 153 177 158 182" stroke="#3E2723" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        <ellipse cx="145" cy="188" rx="5" ry="3" fill="#F8D7DA" />
        <path d="M 152 191 Q 156 195 160 191" stroke="#A8525D" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Amma's Head tilted resting on Child */}
        <circle cx="185" cy="130" r="34" fill="#FFEAD9" stroke="#5D4037" strokeWidth="2" />
        <circle cx="215" cy="115" r="16" fill="#3E2723" />
        <circle cx="215" cy="102" r="4.5" fill="#FFFFFF" />
        <circle cx="222" cy="108" r="4.5" fill="#FFFFFF" />
        <path d="M 155 125 C 160 102 215 102 220 125 C 205 112 170 112 155 125 Z" fill="#3E2723" />
        {/* Amma's gentle happy closed eye */}
        <path d="M 174 132 Q 180 126 186 132" stroke="#3E2723" strokeWidth="2.2" strokeLinecap="round" fill="none" />
        {/* Amma's bindi & smile */}
        <circle cx="178" cy="122" r="2.8" fill="#C97983" />
        <ellipse cx="172" cy="138" rx="6" ry="3.5" fill="#F8D7DA" />
        <path d="M 178 141 Q 183 146 188 141" stroke="#A8525D" strokeWidth="2" strokeLinecap="round" fill="none" />

        {/* Floating Heart Ring around the hug */}
        <text x="50" y="100" fontSize="24" className="animate-bounce" style={{ animationDuration: '2.5s' }}>💖</text>
        <text x="260" y="90" fontSize="22" className="animate-bounce" style={{ animationDuration: '3s' }}>💗</text>
        <text x="280" y="180" fontSize="20" className="animate-float-gentle">🌸</text>
        <text x="35" y="190" fontSize="20" className="animate-float-gentle" style={{ animationDelay: '-1.5s' }}>✨</text>
        <text x="155" y="60" fontSize="28" className="animate-heartbeat">❤️</text>
      </svg>
    </div>
  );
}

// Floating Celebration Balloons Bouquet
export function BalloonsSvg({ size = 180 }) {
  return (
    <svg width={size} height={size * 1.2} viewBox="0 0 200 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-float-gentle">
      {/* Balloon Strings */}
      <path d="M 70 110 Q 90 170 100 230" stroke="#C9B8B5" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
      <path d="M 100 95 Q 98 160 100 230" stroke="#C9B8B5" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />
      <path d="M 130 110 Q 110 170 100 230" stroke="#C9B8B5" strokeWidth="1.5" strokeDasharray="3 2" fill="none" />

      {/* Balloon 1: Blush Pink Heart */}
      <g transform="translate(40, 40)">
        <path
          d="M 25 15 C 25 2 10 -4 2 5 C -8 18 2 28 25 45 C 48 28 58 18 48 5 C 40 -4 25 2 25 15 Z"
          fill="#F8D7DA"
          stroke="#E5989B"
          strokeWidth="2"
        />
        <circle cx="16" cy="12" r="3" fill="#FFFFFF" opacity="0.7" />
      </g>

      {/* Balloon 2: Lavender Oval (Center, Higher) */}
      <g transform="translate(75, 15)">
        <ellipse cx="25" cy="35" rx="25" ry="32" fill="#E8DFF5" stroke="#C9B8E4" strokeWidth="2" />
        <ellipse cx="18" cy="22" rx="4" ry="7" fill="#FFFFFF" opacity="0.6" transform="rotate(-20 18 22)" />
        <polygon points="25,67 22,72 28,72" fill="#C9B8E4" />
      </g>

      {/* Balloon 3: Peach Oval (Right) */}
      <g transform="translate(105, 45)">
        <ellipse cx="25" cy="32" rx="23" ry="30" fill="#FFE5D0" stroke="#E5989B" strokeWidth="2" />
        <ellipse cx="18" cy="20" rx="3.5" ry="6" fill="#FFFFFF" opacity="0.6" transform="rotate(-20 18 20)" />
        <polygon points="25,62 22,67 28,67" fill="#E5989B" />
      </g>
    </svg>
  );
}

