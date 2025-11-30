'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const images = [
  '/images/hero-background/hero-background_1.png.png',
  '/images/hero-background/hero-background_2.png.png',
  '/images/hero-background/hero-background_3.png.png',
  '/images/hero-background/hero-background_4.png.png',
];

const HeroSection: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, []);

  return (
    <section className="relative text-white min-h-screen flex items-end px-4 sm:px-6 lg:px-8">
      {/* Background Images */}
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

      {/* Preload images */}
      <div className="hidden">
        {images.map((image) => (
          <Image key={`preload-${image}`} src={image} alt="Preload" width={1} height={1} priority />
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto relative pb-20 md:pb-32">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest">
            WELCOME TO BRIXEL
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight font-display">
            We Help Founders & Businesses<br />
            Build Brands that Attract Clients, And Earn Trust.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
