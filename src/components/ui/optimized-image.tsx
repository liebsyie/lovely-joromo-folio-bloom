
import React, { useState } from 'react';
import { useLazyLoad } from '@/hooks/useLazyLoad';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholder?: string;
  quality?: number;
}

const OptimizedImage = ({ 
  src, 
  alt, 
  className = '', 
  placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjMzM0MTU1Ii8+CjxwYXRoIGQ9Ik0yMCAyN0MyMy44NjYgMjcgMjcgMjMuODY2IDI3IDIwQzI3IDE2LjEzNCAyMy44NjYgMTMgMjAgMTNDMTYuMTM0IDEzIDEzIDE2LjEzNCAxMyAyMEMxMyAyMy44NjYgMTYuMTM0IDI3IDIwIDI3WiIgZmlsbD0iIzY0NzQ4QiIvPgo8L3N2Zz4K'
}: OptimizedImageProps) => {
  const { ref, isVisible } = useLazyLoad(0.1);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
  };

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {!isVisible && (
        <img
          src={placeholder}
          alt=""
          className="w-full h-full object-cover filter blur-sm"
          aria-hidden="true"
        />
      )}
      
      {isVisible && !hasError && (
        <img
          src={src}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          loading="lazy"
        />
      )}
      
      {hasError && (
        <div className="w-full h-full flex items-center justify-center bg-slate-700 text-slate-400">
          <span className="text-sm">Image unavailable</span>
        </div>
      )}
    </div>
  );
};

export default OptimizedImage;
