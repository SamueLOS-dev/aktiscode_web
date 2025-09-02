import React, { useEffect, useState } from 'react';
import { Search, Lightbulb, Zap, Target } from 'lucide-react';

const Process = () => {
  const [visibleSteps, setVisibleSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Animate steps one by one
          const timer = setInterval(() => {
            setVisibleSteps(prev => {
              if (prev.length < 4) {
                return [...prev, prev.length];
              }
              clearInterval(timer);
              return prev;
            });
          }, 300);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('process');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      icon: Search,
      title: "Porozumieme cieľu",
      description: "Krátka konzultácia, pochopíme váš problém"
    },
    {
      icon: Lightbulb,
      title: "Navrhneme riešenie",
      description: "AI + skúsenosti → presný plán"
    },
    {
      icon: Zap,
      title: "Dodáme rýchlo",
      description: "Namiesto týždňov, dni"
    },
    {
      icon: Target,
      title: "Optimalizujeme & podporujeme",
      description: "Dlhodobá hodnota"
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-to-r from-[#001742] to-[#003875]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ako <span className="text-[#38FFCD]">pracujeme</span>
          </h2>
          <p className="text-xl text-[#10E7FF] opacity-80">
            Jednoduchý proces, profesionálne výsledky
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`relative text-center group transition-all duration-700 ${
                visibleSteps.includes(index) ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
            >
              {/* Icon with overlapping number */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-[#001742]" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#38FFCD] rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500 blur-md" />
                {/* Step number overlapping the icon */}
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#005DFF] text-white rounded-full flex items-center justify-center text-sm font-bold z-20 border-2 border-white shadow-lg">
                  {index + 1}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[#10E7FF] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;