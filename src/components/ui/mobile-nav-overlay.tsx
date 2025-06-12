
import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface MobileNavOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: Array<{ name: string; href: string; }>;
  activeSection: string;
  onItemClick: (href: string) => void;
}

const MobileNavOverlay = ({ 
  isOpen, 
  onClose, 
  menuItems, 
  activeSection, 
  onItemClick 
}: MobileNavOverlayProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/95 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Navigation Panel */}
      <div className="relative h-full w-full max-w-sm bg-slate-800/95 backdrop-blur-md border-r border-slate-700/50">
        <div className="flex items-center justify-end p-6 border-b border-slate-700/50">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-slate-300 hover:text-teal-400"
          >
            <X size={24} />
          </Button>
        </div>
        
        <nav className="p-6">
          <ul className="space-y-4">
            {menuItems.map((item, index) => (
              <li key={item.name}>
                <button
                  onClick={() => onItemClick(item.href)}
                  className={`w-full text-left py-3 px-4 rounded-lg text-lg font-medium transition-all duration-300 ${
                    activeSection === item.href.slice(1)
                      ? 'bg-gradient-to-r from-teal-500/20 to-blue-500/20 text-teal-400 border border-teal-500/30'
                      : 'text-slate-300 hover:text-teal-400 hover:bg-slate-700/50'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item.name}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileNavOverlay;
