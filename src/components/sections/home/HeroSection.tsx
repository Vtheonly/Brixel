// src/components/sections/home/HeroSection.tsx
import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative bg-cover bg-center text-white py-80 px-4"
      style={{ backgroundImage: "url('/images/hero-background.png')" }}
    >
      <div className="absolute inset-0 bg-blue-900 opacity-50"></div>
      <div className="container mx-auto text-center relative">
        <p className="text-sm md:text-base font-bold uppercase tracking-widest">
          WELCOME TO BRIXEL
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
          We Help Founders & Businesses<br />
          Build Brands that Attract Clients, And Earn Trust.
        </h1>
      </div>
    </section>
  );
};

export default HeroSection;