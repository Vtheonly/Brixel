'use client'

import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedSVGProps {
  paths: string[];
  viewBox: string;
  width?: number;
  height?: number;
  className?: string;
}

const AnimatedSVG = ({ paths, viewBox, width = 300, height = 300, className = "" }: AnimatedSVGProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const pathVariants = {
    hidden: { 
      pathLength: 0, 
      fillOpacity: 0,
      strokeOpacity: 1
    },
    visible: { 
      pathLength: 1, 
      fillOpacity: 1,
      strokeOpacity: 1,
      transition: {
        pathLength: { duration: 2, ease: "easeInOut" },
        fillOpacity: { duration: 0.5, delay: 2, ease: "easeInOut" }
      }
    }
  };

  return (
    <div 
      className={`relative cursor-pointer ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <g>
          {paths.map((d, index) => (
            <motion.path
              key={index}
              d={d}
              fill="#F377DE"
              stroke="#F377DE"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              variants={pathVariants}
              initial="hidden"
              animate={isHovered ? "visible" : "hidden"}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSVG;
