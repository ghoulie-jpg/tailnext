import React, { ReactNode } from 'react';

interface SquareDivProps {
  children: ReactNode;
  padding?: string | number;
  className?: string;
  size?: string | number; // Add size prop for flexibility
}

const SquareDiv = ({ children, padding = '1rem', className = "", size = "64" }: SquareDivProps) => {
  const paddingValue = typeof padding === 'number' ? `${padding}px` : padding;
  const sizeValue = typeof size === 'number' ? `${size}px` : size;

  return (
    <div
      className={`bg-white-500/50 flex items-center justify-center overflow-hidden ${className}`}
      style={{
        padding: paddingValue,
        width: sizeValue,
        height: sizeValue,
      }}
    >
      {children}
    </div>
  );
};

export default SquareDiv;