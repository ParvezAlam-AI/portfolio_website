import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className = '' }: CardProps) => {
  return (
    <div className={`p-6 backdrop-blur-lg bg-white/10 rounded-xl hover:transform hover:scale-105 transition-all ${className}`}>
      {children}
    </div>
  );
};

export default Card;