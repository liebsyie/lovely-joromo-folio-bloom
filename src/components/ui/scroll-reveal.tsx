
import React from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  delay?: number;
}

const ScrollReveal = ({ 
  children, 
  className = '', 
  direction = 'up', 
  delay = 0 
}: ScrollRevealProps) => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const getAnimationClass = () => {
    const baseClass = 'transition-all duration-700 ease-out';
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClass} opacity-0 translate-y-8`;
        case 'down':
          return `${baseClass} opacity-0 -translate-y-8`;
        case 'left':
          return `${baseClass} opacity-0 translate-x-8`;
        case 'right':
          return `${baseClass} opacity-0 -translate-x-8`;
        case 'fade':
          return `${baseClass} opacity-0`;
        default:
          return `${baseClass} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClass} opacity-100 translate-x-0 translate-y-0`;
  };

  return (
    <div
      ref={ref}
      className={cn(getAnimationClass(), className)}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
