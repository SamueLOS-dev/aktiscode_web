import React from 'react';
import { Users, Lightbulb, Settings, Target } from 'lucide-react';

const ProcessSection = () => {
  const processSteps = [
    {
      title: "Cieľ",
      description: "krátky call (20 min).",
      icon: Users
    },
    {
      title: "Demo",
      description: "hotový agent s textami a flows (do 48 h).",
      icon: Lightbulb
    },
    {
      title: "Doladenie & integrácia",
      description: "kalendár, e-mail, web, social.",
      icon: Settings
    },
    {
      title: "Spustenie & sledovanie",
      description: "úpravy pre vyššiu konverziu.",
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

        <div className="grid md:grid-cols-4 gap-8 relative mb-12">
          {processSteps.map((step, index) => (
            <React.Fragment key={index}>
              <div className="relative text-center group">
                {/* Icon with glow */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-[#001742]" />
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-[#38FFCD] rounded-full opacity-0 group-hover:opacity-30 group-hover:scale-150 transition-all duration-500 blur-md" />
                </div>

                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[#10E7FF]/80 group-hover:opacity-100 transition-opacity duration-300">
                  {step.description}
                </p>
              </div>
              
              {/* Arrow between steps */}
              {index < processSteps.length - 1 && (
                <>
                  {/* Desktop arrow (horizontal) */}
                  <div className="hidden md:flex items-center justify-center absolute top-8 z-0" style={{ left: `${(index + 1) * 25 - 2}%` }}>
                    <svg className="w-8 h-8 text-[#38FFCD]/60" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  
                  {/* Mobile arrow (vertical) */}
                  <div className="md:hidden flex justify-center py-4">
                    <svg className="w-6 h-6 text-[#38FFCD]/60 transform rotate-90" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Done-for-you note */}
        <div className="text-center">
          <p className="text-lg text-white/90 font-medium">
            Všetko <em className="text-[#38FFCD] font-semibold">done-for-you</em>. Vy len odsúhlasíte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;