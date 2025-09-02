import React from 'react';
import { Users, Lightbulb, Zap, Target } from 'lucide-react';

const ProcessTimeline = () => {
  const processSteps = [
    {
      title: "Porozumieme cieľu",
      description: "Vyplníte krátky formulár aby sme porozumeli vaším potrebám a vášmu podnikaniu.",
      icon: Users
    },
    {
      title: "Pripravíme demo",
      description: "Uvidíte hotový koncept, nie len sľuby.",
      icon: Lightbulb
    },
    {
      title: "Doladíme podľa vás",
      description: "Vysvetlíme dôvody zmien a rýchlo ich zapracujeme.",
      icon: Zap
    },
    {
      title: "Spustíme web",
      description: "Hotovo za pár dní. Vy len odsúhlasíte.",
      icon: Target
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Jednoduchý proces, ktorý <span className="text-[#38FFCD]">šetrí váš čas</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[rgba(255,255,255,0.15)] via-[rgba(255,255,255,0.15)] to-[rgba(255,255,255,0.15)]"></div>

          {processSteps.map((step, index) => (
            <div key={index} className="relative text-center group">
              {/* Icon with glow */}
              <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <step.icon className="w-8 h-8 text-[#001742]" />
                {/* Glow effect */}
                <div className="absolute inset-0 bg-[#38FFCD] rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500 blur-md" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                {step.title}
              </h3>
              <p className="text-[#10E7FF]/80 group-hover:opacity-100 transition-opacity duration-300 mb-4">
                {step.description}
              </p>
              
              {/* ETA chip */}
              <div className="inline-block px-3 py-1 bg-transparent border border-[#38FFCD]/40 rounded-full text-xs text-[#38FFCD] font-medium">
                {index === 0 ? '5 min' : index === 1 ? '<48h' : index === 2 ? '1 - 4 dni' : '<24h'}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;