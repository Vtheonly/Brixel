'use client'

import { motion } from 'framer-motion';
import Image from 'next/image';

interface AnimatedLogoProps {
  variant: 'blue' | 'white';
  className?: string;
}

const AnimatedLogo = ({ variant, className }: AnimatedLogoProps) => {
  const logoSrc = variant === 'blue' ? '/images/layers_/image 7.png' : '/images/brixel/white.svg';

  return (
    <motion.div
      className={`relative cursor-pointer ${className}`}
      initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
      animate={{ opacity: 1, scale: 1, rotate: 0 }}
      whileHover={{ 
        scale: 1.02, 
        rotate: [0, -1, 1, -1, 0],
        transition: { duration: 0.5 }
      }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src={logoSrc}
        alt="Brixel Logo"
        width={1000}
        height={300}
        className="w-full h-auto object-contain"
        priority
      />
    </motion.div>
  );
};

export default AnimatedLogo;