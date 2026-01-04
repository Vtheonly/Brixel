"use client";

import React, { useEffect, useRef, useState } from 'react';

interface AnimatedSVGProps {
  url: string;
  className?: string;
}

const AnimatedSVG: React.FC<AnimatedSVGProps> = ({ url, className = "" }) => {
  const [svgContent, setSvgContent] = useState<string>('');

  useEffect(() => {
    fetch(url)
      .then(res => res.text())
      .then(data => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(data, 'image/svg+xml');
        const svgElement = doc.querySelector('svg');

        if (!svgElement) {
          console.error('No SVG element found');
          return;
        }

        // 1. Fix dimensions
        const originalWidth = svgElement.getAttribute('width');
        const originalHeight = svgElement.getAttribute('height');

        svgElement.setAttribute('width', '100%');
        svgElement.setAttribute('height', '100%');
        
        if (!svgElement.hasAttribute('viewBox') && originalWidth && originalHeight) {
            if (!isNaN(parseFloat(originalWidth)) && !isNaN(parseFloat(originalHeight))) {
                 svgElement.setAttribute('viewBox', `0 0 ${parseFloat(originalWidth)} ${parseFloat(originalHeight)}`);
            }
        }


        // 2. Uniquify IDs to prevent conflicts
        const uniqueId = Math.random().toString(36).substr(2, 9);
        const elementsWithIds = svgElement.querySelectorAll('[id]');
        elementsWithIds.forEach(el => {
            const oldId = el.getAttribute('id');
            if (oldId) {
                const newId = `${oldId}_${uniqueId}`;
                el.setAttribute('id', newId);
                const usageSelector = `[*|href="#${oldId}"], [fill="url(#${oldId})"], [stroke="url(#${oldId})"], [filter="url(#${oldId})"], [clip-path="url(#${oldId})"], [mask="url(#${oldId})"]`;
                const users = svgElement.querySelectorAll(usageSelector);
                users.forEach(user => {
                    if (user.hasAttribute('href')) user.setAttribute('href', `#${newId}`);
                    if (user.hasAttributeNS('http://www.w3.org/1999/xlink', 'href')) user.setAttributeNS('http://www.w3.org/1999/xlink', 'href', `#${newId}`);
                    ['fill', 'stroke', 'filter', 'clip-path', 'mask'].forEach(attr => {
                        const val = user.getAttribute(attr);
                        if (val && val.includes(`url(#${oldId})`)) {
                            user.setAttribute(attr, `url(#${newId})`);
                        }
                    });
                });
            }
        });

        // 3. Basic cleanup (remove huge backgrounds)
        const allElements = Array.from(svgElement.querySelectorAll('*'));
        allElements.forEach(el => {
            const tagName = el.tagName.toLowerCase();
            if (tagName === 'style') {
                el.remove();
                return;
            }

            if (tagName === 'rect' || tagName === 'polygon' || tagName === 'path') {
                const w = el.getAttribute('width') ? parseFloat(el.getAttribute('width')!) : 0;
                const h = el.getAttribute('height') ? parseFloat(el.getAttribute('height')!) : 0;
                
                // If it's a huge rectangle (likely a background), remove it
                if ((tagName === 'rect' || tagName === 'polygon') && w > 250 && h > 250) {
                    el.remove();
                }
            }
        });
        
        setSvgContent(svgElement.outerHTML);
      })
      .catch(err => console.error(`Error loading SVG from ${url}:`, err));
  }, [url]);

  return (
    <div className={`flex items-center justify-center relative w-full h-full ${className}`}>
      <div 
        className="w-full h-full [&>svg]:w-full [&>svg]:h-full [&>svg]:overflow-visible"
        dangerouslySetInnerHTML={{ __html: svgContent }} 
      />
    </div>
  );
};


export default AnimatedSVG;

