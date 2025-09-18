// src/components/sections/home/ImpactSection.tsx
import Image from 'next/image';
import React from 'react';

const impactItems = [
  {
    icon: <Image src="/images/emojies/Layer_1_heart.png" alt="Heart Icon" width={64} height={64} />,
    title: "Connect & win clients",
    description: "through an emotional bond with your team.",
  },
  {
    icon: <Image src="/images/emojies/Layer_1_hand.png" alt="Hand Icon" width={64} height={64} />,
    title: "Gain brand credibility",
    description: "for your vision.",
  },
  {
    icon: <Image src="/images/emojies/Layer_1_person.png" alt="Person Icon" width={64} height={64} />,
    title: "Get noticed by the right people",
    description: "and stay in their minds.",
  },
  {
    icon: <Image src="/images/emojies/Layer_1_key.png" alt="Key Icon" width={64} height={64} />,
    title: "Earn the loyalty",
    description: "that will turn your customers into lifelong fans.",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Build an impact through brand design</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {impactItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center p-6">
              <div className="mb-6">{item.icon}</div>
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
