
import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/ui/scroll-reveal';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  avatar?: string;
  rating: number;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Project Manager",
      company: "TechStart Inc.",
      content: "Lovely's work on our web application was exceptional. Their attention to detail and ability to deliver on time made our collaboration seamless.",
      rating: 5
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Lead Developer",
      company: "Digital Solutions",
      content: "The code quality and innovative solutions provided exceeded our expectations. A true professional who understands modern web development.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Creative Agency",
      content: "Working with Lovely was a pleasure. They brought our designs to life with pixel-perfect implementation and smooth animations.",
      rating: 5
    },
    {
      id: 4,
      name: "David Kim",
      role: "Startup Founder",
      company: "InnovateTech",
      content: "Lovely helped us build our MVP from the ground up. Their technical expertise and collaborative approach were invaluable to our success.",
      rating: 5
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <ScrollReveal direction="fade" className="text-center mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold gradient-text mb-4">
            What People Say
          </h3>
          <p className="text-slate-400 text-lg">
            Testimonials from clients and collaborators
          </p>
        </ScrollReveal>

        <ScrollReveal direction="up" delay={200}>
          <div className="relative">
            <Card className="glass-card border-slate-700/50 overflow-hidden">
              <CardContent className="p-8 text-center relative">
                {/* Quote Icon */}
                <div className="absolute top-4 left-4 text-teal-400/20">
                  <Quote size={48} />
                </div>

                {/* Stars Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(currentTestimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-xl">★</span>
                  ))}
                </div>

                {/* Testimonial Content */}
                <blockquote className="text-slate-300 text-lg leading-relaxed mb-8 max-w-2xl mx-auto relative z-10">
                  "{currentTestimonial.content}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="text-slate-200 font-semibold text-lg">
                    {currentTestimonial.name}
                  </div>
                  <div className="text-slate-400">
                    {currentTestimonial.role} at {currentTestimonial.company}
                  </div>
                </div>

                {/* Navigation Buttons */}
                <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={prevTestimonial}
                    className="pointer-events-auto border-slate-600 hover:border-teal-500 text-slate-300 hover:text-teal-400 bg-slate-800/80 backdrop-blur-sm"
                  >
                    <ChevronLeft size={20} />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    onClick={nextTestimonial}
                    className="pointer-events-auto border-slate-600 hover:border-teal-500 text-slate-300 hover:text-teal-400 bg-slate-800/80 backdrop-blur-sm"
                  >
                    <ChevronRight size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Testimonial Indicators */}
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setCurrentIndex(index);
                    setIsAutoPlaying(false);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-teal-400 scale-125'
                      : 'bg-slate-600 hover:bg-slate-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default Testimonials;
