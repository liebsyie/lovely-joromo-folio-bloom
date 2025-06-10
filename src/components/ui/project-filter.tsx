
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface ProjectFilterProps {
  categories: string[];
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const ProjectFilter = ({ categories, activeCategory, onCategoryChange }: ProjectFilterProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      {/* Desktop Filter */}
      <div className="hidden md:flex flex-wrap gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            size="sm"
            onClick={() => onCategoryChange(category)}
            className={`transition-all duration-300 ${
              activeCategory === category
                ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-slate-900 shadow-lg shadow-teal-500/25'
                : 'border-slate-600 text-slate-300 hover:border-teal-500 hover:text-teal-400 hover:bg-slate-700/50'
            }`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Mobile Filter */}
      <div className="md:hidden relative">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsOpen(!isOpen)}
          className="border-slate-600 text-slate-300 hover:border-teal-500 hover:text-teal-400"
        >
          <Filter size={16} className="mr-2" />
          {activeCategory}
        </Button>

        {isOpen && (
          <div className="absolute top-12 left-0 right-0 glass-card rounded-lg p-2 border border-slate-600/50 z-50">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => {
                  onCategoryChange(category);
                  setIsOpen(false);
                }}
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                  activeCategory === category
                    ? 'bg-teal-500/20 text-teal-400'
                    : 'text-slate-300 hover:bg-slate-700/50 hover:text-teal-400'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectFilter;
