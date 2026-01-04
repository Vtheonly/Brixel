'use client';

import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import VideoModal from './VideoModal';

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const isVideo = !!project.videoUrl;
  const href = project.videoUrl || `/case-studies/${project.id}`;

  const handleClick = (e: React.MouseEvent) => {
    if (isVideo) {
      e.preventDefault();
      setIsVideoModalOpen(true);
    }
  };

  return (
    <>
      <Link 
        href={href} 
        className="block group"
        target={isVideo ? undefined : undefined} // No longer opening in new tab
        rel={isVideo ? undefined : undefined}
        onClick={handleClick}
      >
        <div className="flex flex-col h-full">
          {/* Image Container */}
          <div className="relative w-full h-96 mb-4 overflow-hidden rounded-lg">
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              className="transition-transform duration-500 group-hover:scale-105 object-cover"
            />
          </div>
          
          {/* Text Content */}
          <div className="mt-2">
              <p className="text-sm text-gray-500 mb-1">{project.partnerType}</p>
              <h3 className="text-2xl font-bold text-brand-dark group-hover:text-brand-primary transition-colors font-display">
                  {project.title}
              </h3>
          </div>
        </div>
      </Link>

      {isVideo && project.videoUrl && (
        <VideoModal 
          isOpen={isVideoModalOpen} 
          onClose={() => setIsVideoModalOpen(false)} 
          videoUrl={project.videoUrl} 
        />
      )}
    </>
  );
};

export default Card;