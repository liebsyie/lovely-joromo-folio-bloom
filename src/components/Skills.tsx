
import { Code, Palette, Zap, BookOpen } from 'lucide-react';

const Skills = () => {
  const techSkills = [
    { name: 'JavaScript', level: 85 },
    { name: 'React', level: 80 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'TypeScript', level: 70 },
    { name: 'Git/GitHub', level: 75 }
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
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            Skills & Expertise
          </h2>
          <p className="text-slate-400 text-lg">
            Technologies I work with and design principles I follow
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div className="animate-slide-up">
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-500/20 rounded-lg">
                  <Code className="text-teal-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-200">
                  Technical Skills
                </h3>
              </div>

              <div className="space-y-6">
                {techSkills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-slate-300 font-medium">{skill.name}</span>
                      <span className="text-teal-400 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-teal-500 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
                <div className="flex items-center gap-2 mb-2">
                  <BookOpen className="text-blue-400" size={20} />
                  <span className="text-slate-300 font-medium">Always Learning</span>
                </div>
                <p className="text-slate-400 text-sm">
                  Currently exploring: Node.js, Python, and modern web frameworks. 
                  I'm passionate about staying updated with the latest tech trends!
                </p>
              </div>
            </div>
          </div>

          {/* Design Skills */}
          <div className="animate-slide-up delay-300">
            <div className="glass-card rounded-xl p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-lg">
                  <Palette className="text-blue-400" size={24} />
                </div>
                <h3 className="text-2xl font-semibold text-slate-200">
                  Design Skills
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-6">
                {designSkills.map((skill) => (
                  <div 
                    key={skill}
                    className="p-3 bg-slate-800/50 rounded-lg text-center hover:bg-slate-700/50 transition-colors"
                  >
                    <span className="text-slate-300 text-sm font-medium">{skill}</span>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-slate-800/50 rounded-lg">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
