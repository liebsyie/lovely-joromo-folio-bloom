
import { ExternalLink, Github, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GlowingCard from '@/components/ui/glowing-card';
import ScrollReveal from '@/components/ui/scroll-reveal';

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
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-r from-teal-500/5 to-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <ScrollReveal direction="fade" className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-teal-400" size={24} />
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              Featured Projects
            </h2>
            <Sparkles className="text-blue-400" size={24} />
          </div>
          <p className="text-slate-400 text-lg">
            A showcase of my latest work and learning journey
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ScrollReveal
              key={project.title}
              direction="up"
              delay={index * 100}
            >
              <GlowingCard
                className="p-6 hover:shadow-xl hover:shadow-teal-500/10 transition-all duration-300 hover:scale-105 group h-full"
              >
                <div className="mb-4">
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${project.gradient}`}></div>
                    <h3 className="text-xl font-semibold text-slate-200 group-hover:text-teal-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech}
                        className="px-3 py-1 text-xs bg-gradient-to-r from-slate-700/50 to-slate-600/50 text-slate-300 rounded-full border border-slate-600/30 backdrop-blur-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 mt-auto">
                  <Button
                    asChild
                    size="sm"
                    className="bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-slate-900 flex-1 transition-all duration-300 hover:scale-105"
                  >
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </a>
                  </Button>
                </div>
              </GlowingCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
