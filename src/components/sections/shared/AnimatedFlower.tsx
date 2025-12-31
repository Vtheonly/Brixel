'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedFlower = () => {
  const [rotation, setRotation] = useState(0);
  const [activeSegment, setActiveSegment] = useState(0);

  // 12 segments to cover a full 360 degrees (30 degrees each)
  const segments = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: i % 2 === 0 ? 'bg-pink-500' : 'bg-pink-400',
    intensity: i % 3 === 0 ? 'brightness-110' : 'brightness-100'
  }));

  const handleHover = () => {
    // Rotate 30 degrees on each hover
    setRotation(prev => prev - 30);
    // Cycle the active segment for a subtle highlight effect
    setActiveSegment(prev => (prev + 1) % segments.length);
  };

  return (
    <div 
      className="relative w-full h-[500px] flex items-center cursor-pointer overflow-hidden"
      onMouseEnter={handleHover}
    >
      <motion.div
        className="absolute left-0 w-[500px] h-[500px] flex items-center justify-center"
        initial={{ x: "-50%" }}
        animate={{ rotate: rotation, x: "-50%" }}
        transition={{ type: 'spring', stiffness: 60, damping: 12 }}
      >
        {segments.map((seg, index) => {
          const angle = index * 30; // 0, 30, 60, ... 330
          const isActive = index === activeSegment;

          return (
            <motion.div
              key={seg.id}
              className="absolute origin-left"
              style={{
                rotate: `${angle}deg`,
                width: '250px', // Radius of the disk
                height: '90px',
                left: '50%', // Start from the center
              }}
            >
              <motion.div
                className={`w-full h-full rounded-full shadow-md ${seg.color} ${seg.intensity}`}
                animate={{ 
                  scaleX: isActive ? 1.05 : 1,
                  opacity: isActive ? 1 : 0.8,
                  x: isActive ? 10 : 0
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          );
        })}
        
        {/* Center Disk (Circular) */}
        <div className="absolute w-32 h-32 bg-white rounded-full z-10 shadow-[inner_0_2px_4px_rgba(0,0,0,0.1)] border-4 border-gray-50" />
      </motion.div>
    </div>
  );
};

export default AnimatedFlower;
