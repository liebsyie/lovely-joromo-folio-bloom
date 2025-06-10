
import React from 'react';
import { Sparkles, Code, Zap, Coffee } from 'lucide-react';

interface FloatingElementsProps {
  className?: string;
}

const FloatingElements = ({ className = '' }: FloatingElementsProps) => {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {/* Animated floating icons */}
      <div className="absolute top-20 left-10 floating-animation opacity-30">
        <Sparkles className="text-teal-400" size={20} />
      </div>
      
      <div className="absolute top-32 right-20 floating-animation opacity-20" style={{ animationDelay: '1s' }}>
        <Code className="text-blue-400" size={18} />
      </div>
      
      <div className="absolute bottom-40 left-1/4 floating-animation opacity-25" style={{ animationDelay: '2s' }}>
        <Zap className="text-purple-400" size={16} />
      </div>
      
      <div className="absolute bottom-20 right-1/3 floating-animation opacity-30" style={{ animationDelay: '3s' }}>
        <Coffee className="text-yellow-400" size={22} />
      </div>
      
      <div className="absolute top-1/2 left-20 floating-animation opacity-15" style={{ animationDelay: '4s' }}>
        <Sparkles className="text-cyan-400" size={14} />
      </div>
      
      <div className="absolute top-1/3 right-10 floating-animation opacity-25" style={{ animationDelay: '5s' }}>
        <Code className="text-emerald-400" size={16} />
      </div>
    </div>
  );
};

export default FloatingElements;
