// src/components/sections/home/ImpactSection.tsx
import Image from 'next/image';
import React from 'react';

const impactItems = [
  {
    icon: <Image src="/images/emojies/Layer_1_heart.png" alt="Heart Icon" fill className="object-contain" />,
    title: "End the struggle of inconsistent messaging",
    description: "that confuses your sales team and stalls growth.",
  },
  {
    icon: <Image src="/images/emojies/Layer_1_hand.png" alt="Hand Icon" fill className="object-contain" />,
    title: "Gain brand credibility",
    description: "for your vision",
  },
  {
    icon: <Image src="/images/emojies/Layer_1_person.png" alt="Person Icon" fill className="object-contain" />,
    title: "Get noticed by the right people,",
    description: "and stay in their minds.",
  },
  {
    icon: <Image src="/images/emojies/Layer_1_key.png" alt="Key Icon" fill className="object-contain" />,
    title: "Earn the loyalty that",
    description: "turns first time buyers into lifelong fans.",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 font-display">Build an impact through brand design</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {impactItems.map((item, index) => (
            <div key={index} className={`flex flex-col items-center p-6 ${index < impactItems.length - 1 ? 'lg:border-r lg:border-gray-300' : ''}`}>
              <p className="text-gray-600 mb-4 text-base">{item.title} {item.description}</p>
              <div className="mt-auto h-40 w-40 flex items-center justify-center relative">{item.icon}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
