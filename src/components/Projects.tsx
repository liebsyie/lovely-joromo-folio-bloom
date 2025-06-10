
import { Sparkles } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import ProjectCard from '@/components/ui/project-card';
import EnhancedBackground from '@/components/ui/enhanced-background';
import FloatingElements from '@/components/ui/floating-elements';

const Projects = () => {
  const projects = [
    {
      title: "Lovely Joromo Music",
      description: "A personal music streaming platform where I showcase my original compositions and musical creations. Experience my journey as a musician through this interactive music hub.",
      url: "https://lovelyjoromomusic.vercel.app/",
      tech: ["React", "Music Streaming", "Audio Player"],
      gradient: "from-pink-500 to-rose-500"
    },
    {
      title: "CTU GWA Calculator",
      description: "A comprehensive GWA (General Weighted Average) calculator specifically designed for CTU students to track their academic performance.",
      url: "https://labli-ctu-gwa-calculator.vercel.app/",
      tech: ["React", "JavaScript", "CSS"],
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      title: "MBTI Personality Test",
      description: "An interactive personality test application that helps users discover their MBTI personality type through engaging questions.",
      url: "https://labli-mbti-personality-test.vercel.app/",
      tech: ["React", "TypeScript", "Tailwind"],
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: "Neon Tac Toe",
      description: "A modern twist on the classic Tic-Tac-Toe game featuring neon-styled graphics and smooth animations.",
      url: "https://labli-tic-tac-toe.vercel.app/",
      tech: ["React", "CSS", "JavaScript"],
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "ShopWise",
      description: "A smart shopping companion app that helps users make informed purchasing decisions with price comparisons and reviews.",
      url: "https://labli-shopwise.vercel.app/",
      tech: ["React", "Next.js", "API Integration"],
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: "BinaryBloom",
      description: "An educational platform that makes learning binary operations and computer science concepts fun and interactive.",
      url: "https://labli-binarybloom.vercel.app/",
      tech: ["React", "TypeScript", "Educational Tools"],
      gradient: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Enhanced Background */}
      <EnhancedBackground variant="section" />
      <FloatingElements />

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="fade" className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-teal-400 animate-pulse" size={24} />
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Featured Projects
            </h2>
            <Sparkles className="text-blue-400 animate-pulse" size={24} style={{ animationDelay: '1s' }} />
          </div>
          <p className="text-slate-400 text-lg">
            A showcase of my latest work and learning journey
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
