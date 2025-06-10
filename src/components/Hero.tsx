
import { ArrowRight, Code, Coffee, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagneticButton from '@/components/ui/magnetic-button';
import TypingAnimation from '@/components/ui/typing-animation';
import EnhancedBackground from '@/components/ui/enhanced-background';
import FloatingElements from '@/components/ui/floating-elements';
import { useState } from 'react';

const Hero = () => {
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background */}
      <EnhancedBackground variant="hero" />
      <FloatingElements />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="p-2 rounded-full bg-teal-500/20 backdrop-blur-sm pulse-glow">
              <Code className="text-teal-400" size={24} />
            </div>
            <div className="p-2 rounded-full bg-blue-500/20 backdrop-blur-sm pulse-glow" style={{ animationDelay: '1s' }}>
              <Coffee className="text-blue-400" size={24} />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="relative">
              <span className="gradient-text">
                <TypingAnimation 
                  text="Lovely Joromo" 
                  speed={150}
                  onComplete={() => setShowSubtitle(true)}
                />
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-lg blur-lg -z-10 animate-pulse"></div>
            </span>
          </h1>
          
          {showSubtitle && (
            <p className="text-xl sm:text-2xl text-slate-300 mb-8 animate-slide-up">
              <TypingAnimation 
                text="Curious and passionate coder eager to learn and build."
                speed={50}
                onComplete={() => setShowDescription(true)}
              />
            </p>
          )}
          
          {showDescription && (
            <div className="animate-slide-up delay-500">
              <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
                I'm an IT student who finds joy in crafting digital experiences through code. 
                Every project is an opportunity to learn something new and push my boundaries 
                in the ever-evolving world of technology.
              </p>
              
              <MagneticButton 
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25 border-0 group"
              >
                <span className="flex items-center gap-2">
                  View My Projects
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </MagneticButton>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
