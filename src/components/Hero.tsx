
import { ArrowRight, Code, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/20 to-teal-900/30"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-teal-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Code className="text-teal-400" size={24} />
            <Coffee className="text-blue-400" size={24} />
          </div>
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6">
            Hi, I'm{' '}
            <span className="gradient-text">
              Lovely Joromo
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
            
            <Button 
              onClick={scrollToProjects}
              size="lg"
              className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25"
            >
              View My Projects
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
