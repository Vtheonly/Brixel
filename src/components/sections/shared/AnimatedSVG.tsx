"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSVGProps {
  url: string;
  className?: string;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ url, className = "" }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svgContent, setSvgContent] = useState<string>('');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(data => {
        const cleaned = data
          .replace(/width="[^"]*"/, 'width="100%"')
          .replace(/height="[^"]*"/, 'height="auto"');
        setSvgContent(cleaned);
      })
      .catch(err => console.error(`Error loading SVG from ${url}:`, err));
  }, [url]);

  useEffect(() => {
    if (!containerRef.current || !svgContent) return;

    const allPaths = containerRef.current.querySelectorAll('path');
    allPaths.forEach((path) => {
      const length = path.getTotalLength();
      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();
    });
  }, [svgContent]);

  return (
    <div 
      ref={containerRef} 
      className={`animated-svg-container ${className} ${isHovered ? 'is-animating' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <style>
        {`
          .animated-svg-container svg path {
            stroke: #F377DE !important;
            stroke-width: 1px !important;
            stroke-linecap: round !important;
            stroke-linejoin: round !important;
            fill: #F377DE !important;
            fill-opacity: 0;
            transition: fill-opacity 0.5s ease;
          }

          /* Default state: ensure it is visible once drawn, or hidden initially */
          .animated-svg-container:not(.is-animating) svg path {
             /* stroke-dashoffset is maintained by inline style */
             fill-opacity: 0 !important;
          }

          .animated-svg-container.is-animating svg path {
            animation: 
              draw-stroke 2s ease-in-out forwards, 
              fade-fill 0.5s ease 2s forwards;
          }

          @keyframes draw-stroke {
            to {
              stroke-dashoffset: 0 !important;
            }
          }

          @keyframes fade-fill {
            to {
              fill-opacity: 1 !important;
            }
          }
        `}
      </style>
      <div 
        dangerouslySetInnerHTML={{ __html: svgContent }} 
        className="w-full h-full flex items-center justify-center pointer-events-none"
      />
    </div>
  );
};

export default AnimatedSVG;
