import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import AudioPlayer from './components/AudioPlayer';
import BackgroundDecorations from './components/BackgroundDecorations';
import Screen1Envelope from './components/screens/Screen1Envelope';
import Screen2GiftsHub from './components/screens/Screen2GiftsHub';
import Screen3MakeAWish from './components/screens/Screen3MakeAWish';
import Screen4Celebration from './components/screens/Screen4Celebration';
import Screen5Memories from './components/screens/Screen5Memories';
import Screen6Letter from './components/screens/Screen6Letter';
import Screen7EatCake from './components/screens/Screen7EatCake';
import Screen8FinalSurprise from './components/screens/Screen8FinalSurprise';
import { playPop } from './utils/audio';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState(1);
  const [visitedSurprises, setVisitedSurprises] = useState(() => {
    try {
      const saved = localStorage.getItem('visited_surprises');
      return saved ? JSON.parse(saved) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('visited_surprises', JSON.stringify(visitedSurprises));
    } catch (e) {}
  }, [visitedSurprises]);

  // Navigate to screen with tracking
  const navigateToScreen = (screenNumber, cardId = null) => {
    if (cardId) {
      setVisitedSurprises(prev => ({ ...prev, [cardId]: true }));
    }
    setCurrentScreen(screenNumber);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCardSelection = (screenNumber, cardId) => {
    navigateToScreen(screenNumber, cardId);
  };

  return (
    <div className="relative min-h-screen text-[#4A3E3D] selection:bg-[#F8D7DA] selection:text-[#9E4F5A] overflow-x-hidden">
      {/* Background Animated Gradient Blobs & Floating Petals */}
      <BackgroundDecorations />

      {/* Top Floating Music Control */}
      <AudioPlayer />

      {/* Top Navbar & Breadcrumbs */}
      <Navbar
        currentScreen={currentScreen}
        setScreen={(screen) => navigateToScreen(screen)}
      />

      {/* Screen Routing with Smooth Key Transition */}
      <main className="w-full transition-all duration-500 ease-in-out">
        {currentScreen === 1 && (
          <Screen1Envelope onOpen={() => navigateToScreen(2)} />
        )}

        {currentScreen === 2 && (
          <Screen2GiftsHub
            onSelectCard={handleCardSelection}
            visitedSurprises={visitedSurprises}
          />
        )}

        {currentScreen === 3 && (
          <Screen3MakeAWish
            onNextCelebration={() => navigateToScreen(4, 'cake')}
            onBackToGifts={() => navigateToScreen(2)}
          />
        )}

        {currentScreen === 4 && (
          <Screen4Celebration
            onNavigateScreen={(screen) => navigateToScreen(screen)}
            onBackToGifts={() => navigateToScreen(2)}
          />
        )}

        {currentScreen === 5 && (
          <Screen5Memories
            onBackToGifts={() => navigateToScreen(2, 'memories')}
          />
        )}

        {currentScreen === 6 && (
          <Screen6Letter
            onNextSurprise={() => navigateToScreen(7, 'surprise')}
            onBackToGifts={() => navigateToScreen(2, 'letter')}
          />
        )}

        {currentScreen === 7 && (
          <Screen7EatCake
            onNextFinalSurprise={() => navigateToScreen(8, 'surprise')}
            onBackToGifts={() => navigateToScreen(2)}
          />
        )}

        {currentScreen === 8 && (
          <Screen8FinalSurprise
            onRestartSurprise={() => {
              playPop();
              navigateToScreen(1);
            }}
            onBackToGifts={() => navigateToScreen(2)}
          />
        )}
      </main>
    </div>
  );
}

