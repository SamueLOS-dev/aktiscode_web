import React from 'react';
import { Monitor } from 'lucide-react';

const PortfolioShowcase = () => {
  const portfolioItems = [
    {
      title: "E-shop s módou",
      description: "Čistý dizajn, jednoduchý nákupný proces a vyššia konverzia.",
      tags: ["E-commerce", "Fashion", "Mobile-first"]
    },
    {
      title: "Korporátny web",
      description: "Profesionálna prezentácia s dôrazom na dôveryhodnosť.",
      tags: ["Corporate", "B2B", "SEO"]
    },
    {
      title: "Reštaurácia",
      description: "Atmosféra a jedálny lístok, ktoré lákajú zákazníkov.",
      tags: ["Restaurant", "Local SEO", "Booking"]
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Weby, ktoré <span className="text-[#38FFCD]">menia biznisy</span>
          </h2>
          <p className="text-xl text-[#10E7FF]/80">
            Pozrite si ukážky webov, ktoré sme vytvorili tak, aby nielen dobre vyzerali, ale hlavne prinášali výsledky.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl overflow-hidden hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-500"
            >
              {/* Screenshot placeholder */}
              <div className="aspect-video bg-gradient-to-br from-[#38FFCD]/10 to-[#10E7FF]/10 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[rgba(0,23,66,0.3)] group-hover:scale-110 transition-transform duration-500"></div>
                <Monitor className="w-12 h-12 text-[#38FFCD]/60 relative z-10" />
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[rgba(0,23,66,0.8)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-[#38FFCD] font-medium">Pozrieť v portfóliu</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-[#38FFCD] transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-[#10E7FF]/80">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 bg-[#38FFCD]/20 border border-[#38FFCD]/40 rounded-full text-xs text-[#38FFCD] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioShowcase;