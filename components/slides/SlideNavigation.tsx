'use client';

import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function SlideNavigation({
  currentSlide,
  totalSlides,
  onNext,
  onPrevious,
}: SlideNavigationProps) {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
      <div className="flex items-center gap-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg px-6 py-3 border border-gray-200">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPrevious}
          disabled={currentSlide === 0}
          className="rounded-full hover:bg-primary/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2 items-center">
          {Array.from({ length: totalSlides }, (_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === currentSlide
                  ? 'w-8 bg-primary'
                  : 'w-2 bg-gray-300 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={onNext}
          disabled={currentSlide === totalSlides - 1}
          className="rounded-full hover:bg-primary/10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="text-center mt-3 text-sm text-gray-600 font-medium">
        {currentSlide + 1} / {totalSlides}
      </div>
    </div>
  );
}
