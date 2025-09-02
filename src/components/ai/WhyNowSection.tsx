import React from 'react';
import { Clock, Zap, DollarSign } from 'lucide-react';

const WhyNowSection = () => {
  const reasons = [
    {
      icon: Clock,
      title: "Dostupnosť 24/7",
      description: "Zákazník dostane odpoveď hneď — aj o 2:13 ráno."
    },
    {
      icon: Zap,
      title: "Rýchlosť = viac dopytov",
      description: "Každá minúta rozhoduje. Rýchla reakcia prináša viac bookingov."
    },
    {
      icon: DollarSign,
      title: "Nižšie náklady",
      description: "AI pokryje prácu celého tímu a neunaví sa."
    }
  ];

  return (
    <section className="relative z-10 py-20 bg-[rgba(0,23,66,0.3)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Čím skôr začnete, tým <span className="text-[#38FFCD]">viac získate</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8 hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-500 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <reason.icon className="w-8 h-8 text-[#001742]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                {reason.title}
              </h3>
              <p className="text-[#10E7FF]/80 group-hover:opacity-100 transition-opacity duration-300">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Status Bar */}
        <div className="text-center">
          <div className="inline-block bg-gradient-to-r from-[#10E7FF]/10 to-[#38FFCD]/10 backdrop-blur-sm border border-[#10E7FF]/20 rounded-full px-6 py-3">
            <p className="text-sm text-[#10E7FF]/80 font-medium">
              AI je dnes tam, kde bol internet pred 20 rokmi. Tí, čo začali včas, vyhrali.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNowSection;