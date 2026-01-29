'use client';

const LoadingAnimation = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="relative w-16 h-16">
        {/* Spinning ring */}
        <div className="absolute inset-0 rounded-full border-4 border-gray-200"></div>
        <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-pink-500 animate-spin"></div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
