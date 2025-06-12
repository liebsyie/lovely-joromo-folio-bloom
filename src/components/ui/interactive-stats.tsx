
import React, { useState, useEffect } from 'react';
import { Code, Coffee, Star, Users } from 'lucide-react';
import ScrollReveal from '@/components/ui/scroll-reveal';
import { Card, CardContent } from '@/components/ui/card';

interface StatItemProps {
  icon: React.ReactNode;
  value: number;
  label: string;
  gradient: string;
  delay: number;
}

const StatItem = ({ icon, value, label, gradient, delay }: StatItemProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isVisible && currentValue < value) {
      const timer = setTimeout(() => {
        setCurrentValue(prev => {
          const increment = Math.ceil((value - prev) / 10);
          return Math.min(prev + increment, value);
        });
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [currentValue, value, isVisible]);

  return (
    <ScrollReveal 
      direction="up" 
      delay={delay}
      className="h-full"
    >
      <Card 
        className="glass-card border-slate-700/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 h-full group cursor-pointer"
        onMouseEnter={() => setIsVisible(true)}
      >
        <CardContent className="p-6 text-center space-y-4">
          <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${gradient} flex items-center justify-center text-slate-900 group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <div>
            <div className={`text-3xl font-bold bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
              {currentValue.toLocaleString()}
              {value > 1000 && currentValue === value ? '+' : ''}
            </div>
            <p className="text-slate-400 text-sm font-medium">{label}</p>
          </div>
        </CardContent>
      </Card>
    </ScrollReveal>
  );
};

const InteractiveStats = () => {
  const stats = [
    {
      icon: <Code size={24} />,
      value: 50,
      label: "Projects Completed",
      gradient: "from-teal-400 to-blue-500"
    },
    {
      icon: <Coffee size={24} />,
      value: 1200,
      label: "Cups of Coffee",
      gradient: "from-amber-400 to-orange-500"
    },
    {
      icon: <Star size={24} />,
      value: 15,
      label: "Technologies Mastered",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: <Users size={24} />,
      value: 25,
      label: "Happy Clients",
      gradient: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal direction="fade" className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
            Portfolio in Numbers
          </h3>
          <p className="text-slate-400 text-lg">
            Some stats that showcase my journey as a developer
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <StatItem
              key={stat.label}
              {...stat}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveStats;
