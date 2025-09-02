import React from 'react';
import { Shield, Users, BarChart3 } from 'lucide-react';

const SecuritySection = () => {
  const securityFeatures = [
    {
      icon: Shield,
      text: "Scenáre schválite vy — nič sa neposiela bez vášho súhlasu."
    },
    {
      icon: Users,
      text: "Kedykoľvek odovzdá konverzáciu človeku bez straty kontextu."
    },
    {
      icon: BarChart3,
      text: "Reporty vám ukážu otázky, bookingy aj konverzie."
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Máte vždy <span className="text-[#38FFCD]">posledné slovo</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8 hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-500 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-[#001742]" />
              </div>

              <p className="text-lg text-white font-medium group-hover:text-[#38FFCD] transition-colors duration-300">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SecuritySection;