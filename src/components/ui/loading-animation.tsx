
import React, { useState, useEffect } from 'react';

interface LoadingAnimationProps {
  onComplete: () => void;
}

const LoadingAnimation = ({ onComplete }: LoadingAnimationProps) => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsVisible(false);
            setTimeout(onComplete, 300);
          }, 500);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 50);

    return () => clearInterval(timer);
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900">
      <div className="text-center">
        <div className="mb-8">
          <div className="text-4xl font-bold gradient-text mb-4">
            Lovely Joromo
          </div>
          <div className="text-slate-400 text-lg">
            Loading Portfolio...
          </div>
        </div>
        
        <div className="w-64 mx-auto">
          <div className="w-full bg-slate-700 rounded-full h-1 mb-4">
            <div 
              className="bg-gradient-to-r from-teal-500 to-blue-500 h-1 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
          <div className="text-teal-400 text-sm font-medium">
            {Math.round(Math.min(progress, 100))}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;
