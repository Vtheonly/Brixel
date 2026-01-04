'use client'

const AnimatedFlower = () => {
  // 12 segments to cover a full 360 degrees (30 degrees each)
  const segments = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    color: i % 2 === 0 ? 'bg-pink-500' : 'bg-pink-400',
    intensity: i % 3 === 0 ? 'brightness-110' : 'brightness-100'
  }));

  return (
    <div className="relative w-full h-[500px] flex items-center overflow-hidden">
      <div
        className="absolute left-0 w-[500px] h-[500px] flex items-center justify-center -translate-x-1/2"
      >
        {segments.map((seg, index) => {
          const angle = index * 30; // 0, 30, 60, ... 330

          return (
            <div
              key={seg.id}
              className="absolute origin-left"
              style={{
                rotate: `${angle}deg`,
                width: '250px', // Radius of the disk
                height: '90px',
                left: '50%', // Start from the center
              }}
            >
              <div
                className={`w-full h-full rounded-full shadow-md ${seg.color} ${seg.intensity} opacity-80`}
              />
            </div>
          );
        })}
        
        {/* Center Disk (Circular) */}
        <div className="absolute w-32 h-32 bg-white rounded-full z-10 shadow-[inner_0_2px_4px_rgba(0,0,0,0.1)] border-4 border-gray-50" />
      </div>
    </div>
  );
};

export default AnimatedFlower;

