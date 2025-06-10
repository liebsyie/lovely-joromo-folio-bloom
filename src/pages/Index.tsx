
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import LoadingAnimation from '@/components/ui/loading-animation';
import InteractiveParticles from '@/components/ui/interactive-particles';

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-slate-900 relative">
      {isLoading && <LoadingAnimation onComplete={handleLoadingComplete} />}
      
      {!isLoading && (
        <>
          <InteractiveParticles />
          <div className="relative z-10">
            <Navigation />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
          </div>
        </>
      )}
    </div>
  );
};

export default Index;
