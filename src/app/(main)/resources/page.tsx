'use client';
import { useEffect } from 'react';

const ResourcesPage = () => {
  useEffect(() => {
    // Redirect to external link
    window.location.href = 'https://example.com/resources';
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-primary mx-auto"></div>
        <p className="mt-4 text-gray-600">Redirecting to resources...</p>
      </div>
    </div>
  );
};

export default ResourcesPage;
