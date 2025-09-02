import React from 'react';
import { Award, Zap, Clock, Code } from 'lucide-react';

const WhyUs = () => {
  const values = [
    {
      icon: Award,
      title: "Kvalita ako priorita",
      description: "Nie len pekné, ale funkčné riešenia"
    },
    {
      icon: Zap,
      title: "AI ako výhoda",
      description: "Rýchlejšie, lacnejšie, inovatívnejšie"
    },
    {
      icon: Clock,
      title: "Minimálny čas od vás",
      description: "Všetko done-for-you"
    },
    {
      icon: Code,
      title: "Full-stack expertíza",
      description: "Od dizajnu až po vývoj aplikácie"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#000d2e] to-[#001742] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Prečo <span className="text-[#38FFCD]">AktisCode</span>?
          </h2>
          <p className="text-xl text-[#10E7FF] opacity-80">
            Jedinečné výhody, ktoré nás odlišujú od konkurencie
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg border border-[#10E7FF]/20 rounded-2xl p-8 hover:border-[#38FFCD]/50 hover:bg-white/10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#38FFCD]/10"
            >
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#38FFCD]/5 to-[#10E7FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                  <value.icon className="w-8 h-8 text-[#001742]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                  {value.title}
                </h3>

                {/* Description */}
                <p className="text-[#10E7FF] opacity-80 text-lg group-hover:opacity-100 transition-opacity duration-300">
                  {value.description}
                </p>
              </div>

              {/* Decorative corner */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#38FFCD] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-150 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;