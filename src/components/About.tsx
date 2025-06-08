
import { Snowflake, Code2, Heart, Sparkles } from 'lucide-react';
import GlowingCard from '@/components/ui/glowing-card';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="flex justify-center items-center gap-2 mb-4">
            <Sparkles className="text-purple-400" size={24} />
            <h2 className="text-3xl sm:text-4xl font-bold gradient-text">
              About Me
            </h2>
            <Sparkles className="text-pink-400" size={24} />
          </div>
          <p className="text-slate-400 text-lg">
            Getting to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="space-y-6">
              <GlowingCard className="p-6" glowColor="blue-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-500/20 rounded-lg backdrop-blur-sm">
                    <Snowflake className="text-blue-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">
                      Weather Enthusiast
                    </h3>
                    <p className="text-slate-400">
                      There's something magical about cold weather that energizes me. 
                      I do my best coding during chilly days with a warm cup of coffee.
                    </p>
                  </div>
                </div>
              </GlowingCard>

              <GlowingCard className="p-6" glowColor="teal-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-500/20 rounded-lg backdrop-blur-sm">
                    <Code2 className="text-teal-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">
                      Passionate Coder
                    </h3>
                    <p className="text-slate-400">
                      I'm a student learning IT and building projects for fun. Every line of code 
                      is a step toward mastering my craft and bringing ideas to life.
                    </p>
                  </div>
                </div>
              </GlowingCard>

              <GlowingCard className="p-6" glowColor="red-500">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-red-500/20 rounded-lg backdrop-blur-sm">
                    <Heart className="text-red-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-200">
                      Life's Simple Pleasures
                    </h3>
                    <p className="text-slate-400">
                      When I'm not coding, you'll find me enjoying good fried chicken 
                      and exploring new tech stacks. I believe the best projects come 
                      from combining passion with curiosity.
                    </p>
                  </div>
                </div>
              </GlowingCard>
            </div>

            <GlowingCard className="mt-8 p-6" glowColor="purple-500">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm always eager to try new technologies and frameworks. 
                Whether it's diving into a new JavaScript library or 
                experimenting with different design patterns, I approach 
                every challenge with enthusiasm and determination.
              </p>
            </GlowingCard>
          </div>

          <div className="animate-scale-in delay-300">
            <div className="relative flex justify-center">
              {/* Floating background elements */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-r from-teal-500/10 to-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
              
              {/* Main photo container */}
              <div className="relative group">
                {/* Outer glow ring */}
                <div className="absolute -inset-4 bg-gradient-to-r from-teal-400 via-blue-400 to-purple-400 rounded-full opacity-20 blur-lg group-hover:opacity-40 transition-opacity duration-500"></div>
                
                {/* Inner glow ring */}
                <div className="absolute -inset-2 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full opacity-30 blur-sm group-hover:opacity-50 transition-opacity duration-300"></div>
                
                {/* Photo container */}
                <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-slate-700/50 group-hover:border-teal-400/50 transition-all duration-300 shadow-2xl">
                  <img 
                    src="/lovable-uploads/3a073665-2bc0-4a94-8789-f19a18f55f57.png" 
                    alt="Lovely Joromo" 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Subtle overlay for depth */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-6 h-6 bg-teal-400 rounded-full opacity-80 animate-ping"></div>
                <div className="absolute bottom-8 left-8 w-4 h-4 bg-purple-400 rounded-full opacity-60 animate-pulse delay-500"></div>
                <div className="absolute top-1/2 -right-6 w-8 h-8 bg-blue-400/30 rounded-full animate-float"></div>
              </div>
            </div>

            {/* Name and title below photo */}
            <div className="text-center mt-8 space-y-2">
              <h3 className="text-2xl font-bold gradient-text">Lovely Joromo</h3>
              <p className="text-slate-400 text-lg">IT Student & Aspiring Developer</p>
              <div className="flex justify-center gap-2 mt-4">
                <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
