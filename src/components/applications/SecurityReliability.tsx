import React from 'react';
import { Shield, Database, Zap } from 'lucide-react';

const SecurityReliability = () => {
  const securityFeatures = [
    {
      icon: Shield,
      title: 'Prístupy & roly',
      description: 'Každý vidí len to, čo má.'
    },
    {
      icon: Database,
      title: 'Zálohy & monitoring',
      description: 'Automatické zálohy a nonstop dohľad.'
    },
    {
      icon: Zap,
      title: 'Výkon',
      description: 'Rýchle načítanie a plynulý chod.'
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[40px] font-bold text-white mb-6 leading-[1.2]">
            Bezpečnosť a spoľahlivosť sú základ
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-[20px] p-8 hover:border-[#38FFCD]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-200 text-center max-w-[280px] mx-auto"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full mx-auto mb-6 group-hover:scale-[1.03] transition-transform duration-200">
                <feature.icon className="w-7 h-7 text-[#001742]" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-200">
                {feature.title}
              </h3>
              
              <p className="text-white/80 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-white/70 font-medium">
            Bez výpadkov, bezpečne a spoľahlivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityReliability;