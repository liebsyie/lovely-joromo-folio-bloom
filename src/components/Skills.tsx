
import { Code, Palette, Zap, BookOpen } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import AnimatedSkillBar from '@/components/ui/animated-skill-bar';

const Skills = () => {
  const techSkills = [
    { name: 'JavaScript', level: 85, color: 'bg-gradient-to-r from-yellow-500 to-orange-500' },
    { name: 'React', level: 80, color: 'bg-gradient-to-r from-blue-500 to-cyan-500' },
    { name: 'HTML/CSS', level: 90, color: 'bg-gradient-to-r from-orange-500 to-red-500' },
    { name: 'Tailwind CSS', level: 85, color: 'bg-gradient-to-r from-teal-500 to-blue-500' },
    { name: 'TypeScript', level: 70, color: 'bg-gradient-to-r from-blue-600 to-blue-800' },
    { name: 'Git/GitHub', level: 75, color: 'bg-gradient-to-r from-gray-700 to-gray-900' }
  ];

  const designSkills = [
    'UI/UX Design Principles',
    'Figma',
    'Canva',
    'Responsive Design',
    'Color Theory',
    'Typography'
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="fade" className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-lg">
            Technologies I work with and design principles I follow
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <ScrollReveal direction="left">
            <div className="glass-card rounded-xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-500/20 rounded-lg pulse-glow">
                  <Code className="text-teal-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-200">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-6">
                {techSkills.map((skill, index) => (
                  <AnimatedSkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    color={skill.color}
                    delay={index * 200}
                  />
                ))}
              </div>

              <ScrollReveal direction="left" delay={600}>
                <div className="mt-6 p-4 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-teal-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <BookOpen className="text-blue-400" size={20} />
                    <span className="text-slate-300 font-medium">Always Learning</span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    Currently exploring: Node.js, Python, and modern web frameworks. 
                    I'm passionate about staying updated with the latest tech trends!
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>

          {/* Design Skills */}
          <ScrollReveal direction="right" delay={300}>
            <div className="glass-card rounded-xl p-8 hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg pulse-glow">
                  <Palette className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-200">
                  Design Skills
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {designSkills.map((skill, index) => (
                  <ScrollReveal key={skill} direction="right" delay={index * 50}>
                    <div className="p-3 bg-slate-800/50 rounded-lg text-center hover:bg-slate-700/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 border border-slate-700/30 hover:border-blue-500/30">
                      <span className="text-slate-300 text-sm font-medium">{skill}</span>
                    </div>
                  </ScrollReveal>
                ))}
              </div>

              <ScrollReveal direction="right" delay={600}>
                <div className="p-4 bg-slate-800/50 rounded-lg border border-slate-700/30 hover:border-blue-500/30 transition-all duration-300">
                  <div className="flex items-center gap-2 mb-2">
                    <Zap className="text-yellow-400" size={20} />
                    <span className="text-slate-300 font-medium">Design Philosophy</span>
                  </div>
                  <p className="text-slate-400 text-sm">
                    I believe in creating user-friendly interfaces that are both 
                    aesthetically pleasing and functionally efficient. Good design 
                    should make technology accessible to everyone.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Skills;
