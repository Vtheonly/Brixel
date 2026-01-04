'use client'

interface AnimatedSVGProps {
  paths: string[];
  viewBox: string;
  width?: number;
  height?: number;
  className?: string;
}

const AnimatedSVG = ({ paths, viewBox, width = 300, height = 300, className = "" }: AnimatedSVGProps) => {
  return (
    <div className={`relative ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
      >
        <g>
          {paths.map((d, index) => (
            <path
              key={index}
              d={d}
              fill="#F377DE"
              stroke="#F377DE"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              fillOpacity={1}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default AnimatedSVG;

