import React from 'react';

interface VwLogoProps {
  className?: string;
}

export const VwLogo: React.FC<VwLogoProps> = ({ className = 'w-10 h-10' }) => {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Volkswagen Logosu"
    >
      <circle cx="50" cy="50" r="46" fill="#001e50" stroke="#ffffff" strokeWidth="4.2" />
      <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.85)" strokeWidth="2.2" />
      {/* Upper V */}
      <path
        d="M32 16 L50 53 L68 16"
        stroke="#ffffff"
        strokeWidth="6.2"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* Lower W */}
      <path
        d="M18 33 L36 78 L50 49 L64 78 L82 33"
        stroke="#ffffff"
        strokeWidth="6.2"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      {/* Iconic VW center separation bar */}
      <line x1="41" y1="51.5" x2="59" y2="51.5" stroke="#001e50" strokeWidth="3.2" />
    </svg>
  );
};

export default VwLogo;
