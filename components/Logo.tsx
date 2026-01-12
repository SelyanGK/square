
import React from 'react';

export const Logo: React.FC<{ size?: number; className?: string }> = ({ size = 32, className = "" }) => {
  return (
    <div className={`relative flex items-center justify-center ${className}`} style={{ width: size, height: size }}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full drop-shadow-[0_0_8px_rgba(57,255,20,0.3)]"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* The White Ring Segment */}
        <path 
          d="M 50 10 A 40 40 0 1 1 10 50" 
          stroke="white" 
          strokeWidth="12" 
          strokeLinecap="butt"
          className="opacity-90"
        />
        {/* The Real Green Segment from PFP */}
        <path 
          d="M 10 50 A 40 40 0 0 1 50 10" 
          stroke="#39FF14" 
          strokeWidth="12" 
          strokeLinecap="butt"
        />
      </svg>
    </div>
  );
};
