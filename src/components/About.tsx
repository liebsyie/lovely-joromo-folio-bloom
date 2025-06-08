
import { Snowflake, Code2, Heart } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 gradient-text">
            About Me
          </h2>
          <p className="text-slate-400 text-lg">
            Getting to know the person behind the code
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 glass-card rounded-lg">
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

              <div className="flex items-start gap-4">
                <div className="p-3 glass-card rounded-lg">
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

              <div className="flex items-start gap-4">
                <div className="p-3 glass-card rounded-lg">
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
            </div>

            <div className="mt-8 p-6 glass-card rounded-xl">
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm always eager to try new technologies and frameworks. 
                Whether it's diving into a new JavaScript library or 
                experimenting with different design patterns, I approach 
                every challenge with enthusiasm and determination.
              </p>
            </div>
          </div>

          <div className="animate-scale-in delay-300">
            <div className="relative">
              <div className="w-80 h-80 mx-auto glass-card rounded-2xl overflow-hidden">
                <img 
                  src="/lovable-uploads/3a073665-2bc0-4a94-8789-f19a18f55f57.png" 
                  alt="Lovely Joromo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
