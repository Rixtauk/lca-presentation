'use client';

import { useState, useEffect, ReactNode } from 'react';
import { SlideNavigation } from './SlideNavigation';

interface PresentationContainerProps {
  children: ReactNode[];
}

export function PresentationContainer({ children }: PresentationContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = children.length;

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
    }
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault();
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        handlePrevious();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide, totalSlides]);

  return (
    <div className="relative w-full">
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {children}
        </div>
      </div>

      <SlideNavigation
        currentSlide={currentSlide}
        totalSlides={totalSlides}
        onNext={handleNext}
        onPrevious={handlePrevious}
      />
    </div>
  );
}
