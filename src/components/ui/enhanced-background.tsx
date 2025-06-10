
import React from 'react';

interface EnhancedBackgroundProps {
  variant?: 'hero' | 'section' | 'subtle';
  className?: string;
}

const EnhancedBackground = ({ variant = 'section', className = '' }: EnhancedBackgroundProps) => {
  const getBackgroundElements = () => {
    switch (variant) {
      case 'hero':
        return (
          <>
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-teal-900/30"></div>
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </>
        );
      case 'section':
        return (
          <>
            <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
          </>
        );
      case 'subtle':
        return (
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 to-slate-800/30"></div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {getBackgroundElements()}
    </div>
  );
};

export default EnhancedBackground;
