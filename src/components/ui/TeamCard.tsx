// src/components/ui/TeamCard.tsx
import { TeamMember } from '@/types';
import Image from 'next/image';
import React from 'react';

interface TeamCardProps {
  member: TeamMember;
}

const TeamCard: React.FC<TeamCardProps> = ({ member }) => {
  return (
    <div className="text-center">
      <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
        {member.imageUrl && (
          <Image 
            src={member.imageUrl} 
            alt={member.name} 
            layout="fill" 
            objectFit="cover"
          />
        )}
      </div>
      <h3 className="text-xl font-bold">{member.name}</h3>
      <p className="text-gray-500">{member.role}</p>
    </div>
  );
};

export default TeamCard;
