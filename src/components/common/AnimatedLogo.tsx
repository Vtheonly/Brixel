'use client'

import Image from 'next/image';

interface AnimatedLogoProps {
  variant: 'blue' | 'white';
  className?: string;
}

const AnimatedLogo = ({ variant, className }: AnimatedLogoProps) => {
  const logoSrc = variant === 'blue' ? '/images/brixel/blue.png' : '/images/brixel/white.png';

  return (
    <div className={`relative ${className}`}>
      <Image
        src={logoSrc}
        alt="Brixel Logo"
        width={1000}
        height={300}
        className="w-full h-auto object-contain"
        priority
      />
    </div>
  );
};

export default AnimatedLogo;