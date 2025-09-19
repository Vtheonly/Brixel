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
  const [showNextImage, setShowNextImage] = useState(false);

  useEffect(() => {
    const imageInterval = setInterval(() => {
      setShowNextImage(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setShowNextImage(false);
      }, 1000); // This duration should match the CSS transition duration
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(imageInterval);
  }, []);

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  return (
    <section className="relative text-white min-h-screen flex items-end px-4 sm:px-6 lg:px-8">
      {/* Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[currentImageIndex]})`,
          opacity: showNextImage ? 0 : 1,
        }}
      />
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000"
        style={{
          backgroundImage: `url(${images[nextImageIndex]})`,
          opacity: showNextImage ? 1 : 0,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="container mx-auto relative pb-20 md:pb-32">
        <div className="max-w-3xl">
          <p className="text-sm md:text-base font-bold uppercase tracking-widest">
            WELCOME TO BRIXEL
          </p>
          <h1 className="text-4xl md:text-6xl font-bold mt-4 leading-tight">
            We Help Founders & Businesses<br />
            Build Brands that Attract Clients, And Earn Trust.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;