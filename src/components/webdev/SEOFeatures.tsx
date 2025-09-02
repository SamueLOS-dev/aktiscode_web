import React from 'react';
import { Search, Zap, Monitor } from 'lucide-react';

const SEOFeatures = () => {
  const seoFeatures = [
    {
      title: "Obsah, ktorý sa dá nájsť",
      description: "Texty písané tak, aby pomáhali vo vyhľadávaní aj zákazníkom.",
      icon: Search
    },
    {
      title: "Rýchle načítanie",
      description: "Stránka sa otvorí rýchlo, takže návštevníci neodchádzajú.",
      icon: Zap
    },
    {
      title: "Jasná štruktúra",
      description: "Web, ktorý má logiku pre ľudí aj Google.",
      icon: Monitor
    }
  ];

  return (
    <section className="relative z-10 py-20 bg-[rgba(0,23,66,0.3)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Aby vás ľudia <span className="text-[#38FFCD]">aj našli</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {seoFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8 hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-500 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-8 h-8 text-[#001742]" />
              </div>

              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-[#10E7FF]/80 group-hover:opacity-100 transition-opacity duration-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SEOFeatures;