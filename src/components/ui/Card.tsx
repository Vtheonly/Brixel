// src/components/ui/Card.tsx
import { Project } from '@/types';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface CardProps {
  project: Project;
}

const Card: React.FC<CardProps> = ({ project }) => {
  return (
    (<Link href={`/case-studies/${project.id}`} className="block group">

      <div >
        <div className="relative w-full h-96 mb-4 overflow-hidden">
          <Image
            src={project.imageUrl}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-bold">{project.title}</h3>
        <p className="text-gray-500">{project.partnerType}</p>
      </div>

    </Link>)
  );
};

export default Card;
