
import { ArrowRight, Code, Coffee, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import MagneticButton from '@/components/ui/magnetic-button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-teal-900/30"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-900/20 via-transparent to-transparent"></div>
      </div>
      
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-2000"></div>
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <Sparkles className="absolute top-20 left-20 text-teal-400/30 animate-pulse" size={20} />
        <Sparkles className="absolute top-40 right-32 text-blue-400/30 animate-pulse delay-1000" size={16} />
        <Sparkles className="absolute bottom-32 left-1/3 text-purple-400/30 animate-pulse delay-2000" size={18} />
        <Sparkles className="absolute bottom-20 right-20 text-teal-400/30 animate-pulse delay-3000" size={14} />
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-4">
            <div className="p-2 rounded-full bg-teal-500/20 backdrop-blur-sm">
              <Code className="text-teal-400" size={24} />
            </div>
            <div className="p-2 rounded-full bg-blue-500/20 backdrop-blur-sm">
              <Coffee className="text-blue-400" size={24} />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="relative">
              <span className="gradient-text">
                Lovely Joromo
              </span>
              <div className="absolute -inset-2 bg-gradient-to-r from-teal-400/20 to-blue-500/20 rounded-lg blur-lg -z-10"></div>
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 animate-slide-up delay-300">
            Curious and passionate coder eager to learn and build.
          </p>
          
          <div className="animate-slide-up delay-500">
            <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              I'm an IT student who finds joy in crafting digital experiences through code. 
              Every project is an opportunity to learn something new and push my boundaries 
              in the ever-evolving world of technology.
            </p>
            
            <MagneticButton 
              onClick={scrollToProjects}
              size="lg"
              className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-teal-500/25 border-0"
            >
              <span className="flex items-center gap-2">
                View My Projects
                <ArrowRight size={20} />
              </span>
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
