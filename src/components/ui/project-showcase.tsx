
import React from 'react';
import { ExternalLink, Github, Clock, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import ScrollReveal from '@/components/ui/scroll-reveal';
import GlowingCard from '@/components/ui/glowing-card';

interface ProjectShowcaseProps {
  title: string;
  description: string;
  longDescription?: string;
  url?: string;
  githubUrl?: string;
  tech: string[];
  gradient: string;
  category: string;
  featured: boolean;
  screenshots?: string[];
  features?: string[];
  challenges?: string[];
  learnings?: string[];
}

const ProjectShowcase = ({
  title,
  description,
  longDescription,
  url,
  githubUrl,
  tech,
  gradient,
  category,
  featured,
  screenshots = [],
  features = [],
  challenges = [],
  learnings = []
}: ProjectShowcaseProps) => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-8">
      {/* Header Section */}
      <ScrollReveal direction="fade">
        <div className="text-center space-y-4">
          <div className="flex justify-center items-center gap-2 mb-2">
            {featured && <Star className="text-yellow-400" size={20} />}
            <Badge variant="outline" className="border-slate-600 text-slate-300">
              {category}
            </Badge>
          </div>
          <h1 className={`text-4xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
            {title}
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            {description}
          </p>
        </div>
      </ScrollReveal>

      {/* Action Buttons */}
      <ScrollReveal direction="up" delay={100}>
        <div className="flex justify-center gap-4">
          {url && (
            <Button asChild className={`bg-gradient-to-r ${gradient} text-slate-900 hover:scale-105 transition-transform`}>
              <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink size={18} />
                Live Demo
              </a>
            </Button>
          )}
          {githubUrl && (
            <Button asChild variant="outline" className="border-slate-600 hover:border-teal-500 hover:scale-105 transition-all">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <Github size={18} />
                View Code
              </a>
            </Button>
          )}
        </div>
      </ScrollReveal>

      {/* Tech Stack */}
      <ScrollReveal direction="up" delay={200}>
        <Card className="glass-card border-slate-700/50">
          <CardHeader>
            <CardTitle className="text-slate-200 flex items-center gap-2">
              <Clock size={20} />
              Tech Stack
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {tech.map((techItem, index) => (
                <Badge 
                  key={techItem}
                  variant="secondary"
                  className="bg-slate-700/50 text-slate-300 hover:bg-teal-500/20 hover:text-teal-400 transition-colors"
                >
                  {techItem}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </ScrollReveal>

      {/* Detailed Description */}
      {longDescription && (
        <ScrollReveal direction="up" delay={300}>
          <GlowingCard>
            <CardHeader>
              <CardTitle className="text-slate-200">About This Project</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-slate-400 leading-relaxed">
                {longDescription}
              </p>
            </CardContent>
          </GlowingCard>
        </ScrollReveal>
      )}

      {/* Features Grid */}
      {features.length > 0 && (
        <ScrollReveal direction="up" delay={400}>
          <Card className="glass-card border-slate-700/50">
            <CardHeader>
              <CardTitle className="text-slate-200">Key Features</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-slate-700/30 hover:bg-slate-700/50 transition-colors">
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient} mt-2 flex-shrink-0`}></div>
                    <span className="text-slate-300">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      )}

      {/* Challenges & Learnings */}
      {(challenges.length > 0 || learnings.length > 0) && (
        <div className="grid md:grid-cols-2 gap-6">
          {challenges.length > 0 && (
            <ScrollReveal direction="left" delay={500}>
              <Card className="glass-card border-slate-700/50 h-full">
                <CardHeader>
                  <CardTitle className="text-slate-200">Challenges</CardTitle>
                  <CardDescription className="text-slate-400">
                    Technical hurdles overcome during development
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-400 text-sm">{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          )}

          {learnings.length > 0 && (
            <ScrollReveal direction="right" delay={500}>
              <Card className="glass-card border-slate-700/50 h-full">
                <CardHeader>
                  <CardTitle className="text-slate-200">Key Learnings</CardTitle>
                  <CardDescription className="text-slate-400">
                    Skills and insights gained from this project
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {learnings.map((learning, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-2 flex-shrink-0"></div>
                        <span className="text-slate-400 text-sm">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectShowcase;
