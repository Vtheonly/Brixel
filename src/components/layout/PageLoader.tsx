'use client';

import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import LoadingAnimation from '@/components/ui/LoadingAnimation';

const PageLoader = () => {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    // Show loader on path change (or initial mount)
    setIsLoading(true);
    
    // Hide after 1.1 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1100);

    return () => clearTimeout(timer);
  }, [pathname]);

  if (!isLoading) return null;

  return <LoadingAnimation />;
};

export default PageLoader;
