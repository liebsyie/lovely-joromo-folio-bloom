
import React, { useState, useEffect } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface AnimatedSkillBarProps {
  name: string;
  level: number;
  color: string;
  delay?: number;
}

const AnimatedSkillBar = ({ name, level, color, delay = 0 }: AnimatedSkillBarProps) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);
  const { ref, isVisible } = useScrollAnimation(0.3);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(level);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, level, delay]);

  return (
    <div ref={ref} className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-slate-300 font-medium group-hover:text-teal-400 transition-colors duration-300">
          {name}
        </span>
        <span className="text-teal-400 text-sm font-semibold">
          {animatedLevel}%
        </span>
      </div>
      <div className="relative">
        <div className="w-full bg-slate-700 rounded-full h-2 overflow-hidden">
          <div 
            className={`h-2 rounded-full transition-all duration-1000 ease-out ${color} relative`}
            style={{ width: `${animatedLevel}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
          </div>
        </div>
        <div 
          className="absolute top-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded-full shadow-lg transition-all duration-1000 ease-out"
          style={{ left: `calc(${animatedLevel}% - 4px)` }}
        />
      </div>
    </div>
  );
};

export default AnimatedSkillBar;
