
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlowingCard from '@/components/ui/glowing-card';
import ScrollReveal from '@/components/ui/scroll-reveal';

interface ProjectCardProps {
  title: string;
  description: string;
  url?: string;
  githubUrl?: string;
  tech: string[];
  gradient: string;
  index: number;
}

const ProjectCard = ({
  title,
  description,
  url,
  githubUrl,
  tech,
  gradient,
  index
}: ProjectCardProps) => {
  return (
    <ScrollReveal direction="up" delay={index * 100}>
      <GlowingCard className="group relative overflow-hidden h-full">
        {/* Gradient overlay on hover */}
        <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
        
        <div className="relative p-6 h-full flex flex-col">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${gradient} shadow-lg`}></div>
              <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-400 transition-colors duration-300">
                {title}
              </h3>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
              {description}
            </p>
          </div>

          {/* Tech stack */}
          <div className="mb-6 flex-grow">
            <div className="flex flex-wrap gap-2">
              {tech.map((techItem, techIndex) => (
                <span 
                  key={techItem}
                  className="px-3 py-1 text-xs bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-slate-300 rounded-full border border-slate-600/30 backdrop-blur-sm group-hover:border-teal-500/30 transition-all duration-300"
                  style={{ animationDelay: `${techIndex * 50}ms` }}
                >
                  {techItem}
                </span>
              ))}
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex gap-3 mt-auto">
            {url && (
              <Button
                asChild
                size="sm"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-slate-900 font-medium flex-1 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
              >
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <ExternalLink size={16} />
                  Live Demo
                </a>
              </Button>
            )}
            
            {githubUrl && (
              <Button
                asChild
                size="sm"
                variant="outline"
                className="border-slate-600 hover:border-teal-500 text-slate-300 hover:text-teal-400 transition-all duration-300 hover:scale-105"
              >
                <a 
                  href={githubUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github size={16} />
                  Code
                </a>
              </Button>
            )}
          </div>
        </div>
      </GlowingCard>
    </ScrollReveal>
  );
};

export default ProjectCard;
