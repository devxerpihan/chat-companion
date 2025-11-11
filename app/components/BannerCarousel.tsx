'use client';

import { useState, useRef, useEffect } from 'react';

const mockMessages = [
  'New voice chat feature is now available! Try it out today.',
  'Weekly community event starting this Friday at 8 PM.',
  'Special offer: Get 50 bonus coins when you invite a friend.',
  'System maintenance scheduled for tonight at 2 AM.',
  'Thank you for 1 million users! Celebrate with us.',
];

export default function BannerCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const bannerRef = useRef<HTMLDivElement>(null);

  const minSwipeDistance = 50;

  useEffect(() => {
    const banner = bannerRef.current;
    if (!banner) return;

    let startX = 0;
    let endX = 0;

    const handleEnd = () => {
      if (!startX || !endX) {
        startX = 0;
        endX = 0;
        setTouchStart(0);
        setTouchEnd(0);
        return;
      }
      
      const distance = startX - endX;
      const isLeftSwipe = distance > minSwipeDistance;
      const isRightSwipe = distance < -minSwipeDistance;

      setCurrentIndex((prevIndex) => {
        if (isLeftSwipe && prevIndex < mockMessages.length - 1) {
          return prevIndex + 1;
        }
        if (isRightSwipe && prevIndex > 0) {
          return prevIndex - 1;
        }
        return prevIndex;
      });
      
      startX = 0;
      endX = 0;
      setTouchStart(0);
      setTouchEnd(0);
    };

    const onTouchStart = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.touches[0]) {
        startX = e.touches[0].clientX;
        endX = 0;
        setTouchStart(startX);
        setTouchEnd(0);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      if (e.touches[0]) {
        endX = e.touches[0].clientX;
        setTouchEnd(endX);
      }
    };

    const onTouchEnd = (e: TouchEvent) => {
      e.preventDefault();
      e.stopPropagation();
      handleEnd();
    };

    const onMouseDown = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      startX = e.clientX;
      endX = 0;
      setTouchStart(startX);
      setTouchEnd(0);
    };

    const onMouseMove = (e: MouseEvent) => {
      if (startX !== 0) {
        e.preventDefault();
        e.stopPropagation();
        endX = e.clientX;
        setTouchEnd(endX);
      }
    };

    const onMouseUp = (e: MouseEvent) => {
      e.preventDefault();
      e.stopPropagation();
      handleEnd();
    };

    banner.addEventListener('touchstart', onTouchStart, { passive: false });
    banner.addEventListener('touchmove', onTouchMove, { passive: false });
    banner.addEventListener('touchend', onTouchEnd, { passive: false });
    banner.addEventListener('mousedown', onMouseDown);
    banner.addEventListener('mousemove', onMouseMove);
    banner.addEventListener('mouseup', onMouseUp);
    banner.addEventListener('mouseleave', onMouseUp);

    return () => {
      banner.removeEventListener('touchstart', onTouchStart);
      banner.removeEventListener('touchmove', onTouchMove);
      banner.removeEventListener('touchend', onTouchEnd);
      banner.removeEventListener('mousedown', onMouseDown);
      banner.removeEventListener('mousemove', onMouseMove);
      banner.removeEventListener('mouseup', onMouseUp);
      banner.removeEventListener('mouseleave', onMouseUp);
    };
  }, []);


  return (
    <div 
      ref={bannerRef}
      className="bg-white border-2 border-dashed border-pink-300 rounded-lg py-8 px-6 relative overflow-hidden select-none"
      style={{ 
        userSelect: 'none',
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        touchAction: 'pan-x',
        WebkitTouchCallout: 'none'
      }}
    >
      {/* Decorative elements */}
      <div className="absolute left-0 top-0 w-16 h-16 opacity-30">
        <div className="w-full h-full bg-pink-200 rounded-full blur-xl"></div>
      </div>
      <div className="absolute right-0 top-0 w-16 h-16 opacity-30">
        <div className="w-full h-full bg-pink-200 rounded-full blur-xl"></div>
      </div>
      
      {/* Swipable Messages Carousel */}
      <div className="relative z-10 overflow-hidden min-h-[60px]">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {mockMessages.map((msg, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 flex items-center justify-center px-2"
            >
              <div className="text-base font-medium text-black text-center w-full">
                {msg}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

