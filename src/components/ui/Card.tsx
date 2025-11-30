import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    <Link href={`/case-studies/${project.id}`} className="block group">
      <div className="flex flex-col h-full">
        {/* Image Container */}
        <div className="relative w-full h-96 mb-4 overflow-hidden rounded-lg">
          <Image
            src={project.thumbnailUrl} // Note: changed from imageUrl to thumbnailUrl based on new type
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
  );
};

export default Card;