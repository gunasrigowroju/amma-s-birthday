// Web Audio API engine for zero-dependency, guaranteed, crystal-clear sound & music

let audioCtx = null;
let isMusicPlaying = false;
let musicInterval = null;
let musicStep = 0;

function getAudioContext() {
  if (!audioCtx) {
    const AudioContextClass = window.AudioContext || window.webkitAudioContext;
    if (AudioContextClass) {
      audioCtx = new AudioContextClass();
    }
  }
  if (audioCtx && audioCtx.state === 'suspended') {
    audioCtx.resume();
  }
  return audioCtx;
}

// Gentle music box note player
export function playMusicBoxNote(freq, duration = 1.2, volume = 0.15) {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    // Pleasant sine + gentle triangle harmonic
    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, ctx.currentTime);

    gain.gain.setValueAtTime(0, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(volume, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);

    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    console.warn("Audio playback issue:", e);
  }
}

// Frequencies for soothing melody
const NOTES = {
  C4: 261.63,
  D4: 293.66,
  E4: 329.63,
  F4: 349.23,
  G4: 392.00,
  A4: 440.00,
  B4: 493.88,
  C5: 523.25,
  D5: 587.33,
  E5: 659.25,
  G5: 783.99,
  A5: 880.00,
};

// Birthday + Lullaby Melody
const MELODY = [
  // Happy Birthday Amma phrase 1
  { note: NOTES.G4, dur: 0.4, delay: 400 },
  { note: NOTES.G4, dur: 0.4, delay: 400 },
  { note: NOTES.A4, dur: 0.8, delay: 800 },
  { note: NOTES.G4, dur: 0.8, delay: 800 },
  { note: NOTES.C5, dur: 0.8, delay: 800 },
  { note: NOTES.B4, dur: 1.2, delay: 1200 },
  // phrase 2
  { note: NOTES.G4, dur: 0.4, delay: 400 },
  { note: NOTES.G4, dur: 0.4, delay: 400 },
  { note: NOTES.A4, dur: 0.8, delay: 800 },
  { note: NOTES.G4, dur: 0.8, delay: 800 },
  { note: NOTES.D5, dur: 0.8, delay: 800 },
  { note: NOTES.C5, dur: 1.2, delay: 1200 },
  // phrase 3 (Happy Birthday dear Amma)
  { note: NOTES.G4, dur: 0.4, delay: 400 },
  { note: NOTES.G4, dur: 0.4, delay: 400 },
  { note: NOTES.G5, dur: 0.8, delay: 800 },
  { note: NOTES.E5, dur: 0.8, delay: 800 },
  { note: NOTES.C5, dur: 0.8, delay: 800 },
  { note: NOTES.B4, dur: 0.8, delay: 800 },
  { note: NOTES.A4, dur: 1.0, delay: 1000 },
  // phrase 4 (May God bless you Amma)
  { note: NOTES.F4, dur: 0.4, delay: 400 },
  { note: NOTES.F4, dur: 0.4, delay: 400 },
  { note: NOTES.E5, dur: 0.8, delay: 800 },
  { note: NOTES.C5, dur: 0.8, delay: 800 },
  { note: NOTES.D5, dur: 0.8, delay: 800 },
  { note: NOTES.C5, dur: 1.6, delay: 1800 },
  // Soft dreamy lullaby arpeggios
  { note: NOTES.E4, dur: 0.6, delay: 600 },
  { note: NOTES.G4, dur: 0.6, delay: 600 },
  { note: NOTES.C5, dur: 0.6, delay: 600 },
  { note: NOTES.E5, dur: 1.2, delay: 1400 },
];

export function startBackgroundMusic(onStateChange) {
  const ctx = getAudioContext();
  if (!ctx) return false;

  isMusicPlaying = true;
  if (onStateChange) onStateChange(true);

  function playNext() {
    if (!isMusicPlaying) return;
    const item = MELODY[musicStep];
    if (item && item.note) {
      playMusicBoxNote(item.note, item.dur * 1.5, 0.12);
    }
    musicStep = (musicStep + 1) % MELODY.length;
    musicInterval = setTimeout(playNext, (item ? item.delay : 800));
  }

  playNext();
  return true;
}

export function stopBackgroundMusic(onStateChange) {
  isMusicPlaying = false;
  if (musicInterval) {
    clearTimeout(musicInterval);
    musicInterval = null;
  }
  if (onStateChange) onStateChange(false);
}

export function toggleBackgroundMusic(onStateChange) {
  if (isMusicPlaying) {
    stopBackgroundMusic(onStateChange);
    return false;
  } else {
    return startBackgroundMusic(onStateChange);
  }
}

export function getIsMusicPlaying() {
  return isMusicPlaying;
}

// Sound effects
export function playChime() {
  const ctx = getAudioContext();
  if (!ctx) return;
  const chimeNotes = [NOTES.C5, NOTES.E5, NOTES.G5, NOTES.C5 * 2];
  chimeNotes.forEach((f, idx) => {
    setTimeout(() => {
      playMusicBoxNote(f, 0.8, 0.1);
    }, idx * 100);
  });
}

export function playPop() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(450, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, ctx.currentTime + 0.08);

    gain.gain.setValueAtTime(0.15, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.09);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 0.09);
  } catch (e) {}
}

export function playBlowCandle() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    // Soft noise burst simulating blowing breath
    const bufferSize = ctx.sampleRate * 0.8;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (ctx.sampleRate * 0.3));
    }

    const noise = ctx.createBufferSource();
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(600, ctx.currentTime);
    filter.frequency.linearRampToValueAtTime(200, ctx.currentTime + 0.7);

    const gain = ctx.createGain();
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.75);

    noise.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    noise.start();
    noise.stop(ctx.currentTime + 0.8);
  } catch (e) {}
}

export function playCelebrationCheer() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    const fanfare = [
      NOTES.C5, NOTES.E5, NOTES.G5, NOTES.C5 * 2,
      NOTES.G5, NOTES.C5 * 2
    ];
    fanfare.forEach((n, i) => {
      setTimeout(() => {
        playMusicBoxNote(n, 0.9, 0.16);
      }, i * 140);
    });
  } catch (e) {}
}

export function playHugSound() {
  try {
    const ctx = getAudioContext();
    if (!ctx) return;
    // Warm harmonic chord
    [NOTES.C4, NOTES.G4, NOTES.C5, NOTES.E5].forEach(note => {
      playMusicBoxNote(note, 2.5, 0.12);
    });
  } catch (e) {}
}

