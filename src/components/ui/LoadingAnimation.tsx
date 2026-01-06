'use client';

import { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  // 12 segments to cover a full 360 degrees (30 degrees each)
  const segments = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: i % 2 === 0 ? 'bg-pink-500' : 'bg-pink-400',
    intensity: i % 3 === 0 ? 'brightness-110' : 'brightness-100'
  }));

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative w-[300px] h-[300px] flex items-center justify-center animate-spin-slow">
         {/* Flower Segments */}
         {segments.map((seg, index) => {
          const angle = index * 30; // 0, 30, 60, ... 330

          return (
            <div
              key={seg.id}
              className="absolute origin-left"
              style={{
                rotate: `${angle}deg`,
                width: '150px', // Radius of the disk
                height: '60px',
                left: '50%', // Start from the center
              }}
            >
              <div
                className={`w-full h-full rounded-full shadow-md ${seg.color} ${seg.intensity} opacity-90`}
              />
            </div>
          );
        })}
        
        {/* Center Disk (Circular) */}
        <div className="absolute w-20 h-20 bg-white rounded-full z-10 shadow-[inner_0_2px_4px_rgba(0,0,0,0.1)] border-4 border-gray-50" />
      </div>
    </div>
  );
};

export default LoadingAnimation;
