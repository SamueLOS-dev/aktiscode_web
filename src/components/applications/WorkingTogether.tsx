import React, { useState } from 'react';
import { Users, Lightbulb, Code, Rocket } from 'lucide-react';

const WorkingTogether = () => {
  const [hoveredStep, setHoveredStep] = useState<number | null>(null);

  const timelineSteps = [
    {
      icon: Users,
      title: 'Cieľ',
      description: 'Krátky call, kde zistíme vaše potreby.',
      tooltip: 'Porozumieme vašim cieľom a potrebám za 20-30 minút.'
    },
    {
      icon: Lightbulb,
      title: 'Demo',
      description: 'Klikateľný prototyp už do 48 hodín.',
      tooltip: 'Uvidíte funkčný prototyp s vašimi dátami a textami.'
    },
    {
      icon: Code,
      title: 'Vývoj',
      description: 'Iteračný prístup so zreteľom na výsledok.',
      tooltip: 'Pravidelné ukážky pokroku a možnosť úprav.'
    },
    {
      icon: Rocket,
      title: 'Spustenie',
      description: 'Nasadenie a dlhodobý rozvoj.',
      tooltip: 'Spustíme aplikáciu a pokračujeme v jej zlepšovaní.'
    }
  ];

  return (
    <section className="relative z-10 py-20 bg-gradient-to-br from-[#00112f] to-[#042a80]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[40px] font-bold text-white mb-6 leading-[1.2]">
            Jednoduchý proces spolupráce
          </h2>
        </div>

        <div className="relative">
          {/* Central Timeline Line */}
          <div className="hidden md:block absolute top-8 left-8 right-8 h-0.5 bg-gradient-to-r from-[#10E7FF] via-[#38FFCD] to-[#10E7FF]"></div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {timelineSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
                onMouseEnter={() => setHoveredStep(index)}
                onMouseLeave={() => setHoveredStep(null)}
              >
                {/* Icon with glow */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-200 shadow-[0_0_20px_rgba(56,255,205,0.4)]">
                  <step.icon className="w-8 h-8 text-[#001742]" strokeWidth={2} />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#38FFCD] rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500 blur-md" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-200">
                  {step.title}
                </h3>
                <p className="text-white/80 group-hover:opacity-100 transition-opacity duration-200 mb-4">
                  {step.description}
                </p>

                {/* Hover Tooltip */}
                {hoveredStep === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 px-4 py-2 bg-[rgba(0,23,66,0.95)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] text-white text-sm rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] whitespace-nowrap z-20">
                    {step.tooltip}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[rgba(0,23,66,0.95)] border-l border-t border-[rgba(16,231,255,0.25)] rotate-45 -mb-1"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-white/90 font-medium">
            My dodáme, vy rozhodujete. Jednoducho.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WorkingTogether;