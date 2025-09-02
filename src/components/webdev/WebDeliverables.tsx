import React from 'react';
import { Monitor, Target, Award, Search } from 'lucide-react';

const WebDeliverables = () => {
  const deliverables = [
    {
      title: "Dizajn, ktorý zaujme",
      description: "Moderný a prémiový vzhľad, ktorý budí dôveru.",
      icon: Monitor
    },
    {
      title: "Dizajn, ktorý predáva",
      description: "Premyslené CTA, logická štruktúra a texty, ktoré menia návštevníkov na zákazníkov.",
      icon: Target
    },
    {
      title: "Dizajn, ktorý reprezentuje",
      description: "Stránka, ktorá vystihuje vaše podnikanie a posilňuje značku.",
      icon: Award
    },
    {
      title: "Dizajn, ktorý sa nájde (SEO)",
      description: "Texty a štruktúra optimalizované tak, aby prinášali návštevnosť.",
      icon: Search
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Web, ktorý má <span className="text-[#38FFCD]">všetko, čo potrebujete</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8 hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-500 relative"
            >
              {/* Badge */}
              <div className="absolute top-2 right-4 bg-[#38FFCD]/20 border border-[#38FFCD]/40 rounded-full px-3 py-1 text-xs text-[#38FFCD] font-medium">
                Demo do 24–48 h
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="w-6 h-6 text-[#001742]" />
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-[#38FFCD] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-[#10E7FF]/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDeliverables;