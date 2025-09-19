'use client';
import React, { useState, useEffect } from 'react';

const images = [
  '/images/hero-background/hero-background_1.png.png',
  '/images/hero-background/hero-background_2.png.png',
  '/images/hero-background/hero-background_3.png.png',
  '/images/hero-background/hero-background_4.png.png',
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative text-white py-80 px-4">
      {images.map((image, index) => (
        <div
          key={image}
          className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
          style={{
            backgroundImage: `url(${image})`,
            opacity: index === currentImageIndex ? 1 : 0,
          }}
        />
      ))}
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
