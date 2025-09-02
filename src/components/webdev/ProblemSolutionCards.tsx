import React from 'react';
import { X, Check } from 'lucide-react';

const ProblemSolutionCards = () => {
  const problemSolutionPairs = [
    {
      problem: "Programátori mi nerozumejú, nakoniec dostanem niečo, čo som nechcel.",
      solution: "Rozprávame sa s vami ako partner s partnerom. Pochopíme cieľ a preložíme ho do funkčného webu."
    },
    {
      problem: "Nemám čas vymýšľať texty ani riešiť detaily.",
      solution: "Najprv vám ukážeme hotové demo s textami a vysvetlíme, prečo fungujú. Vy už len schválite alebo upravíte."
    },
    {
      problem: "Možno si myslím, že moja stránka je v poriadku, ale zákazníkov mi neprináša.",
      solution: "Ukážeme vám demo novej stránky úplne zdarma — bez záväzkov. Sami uvidíte rozdiel a rozhodnete sa, či sa vám oplatí prerábka."
    },
    {
      problem: "Vytvoriť web trvá celé mesiace.",
      solution: "Vďaka AI a našim skúsenostiam máte výsledok za pár dní."
    },
    {
      problem: "Profesionálne weby sú príliš drahé.",
      solution: "AI šetrí čas, a preto aj cenu. Dostanete kvalitu dostupnejšie."
    },
    {
      problem: "Veď si môžem urobiť web aj sám.",
      solution: "Áno, ale nikdy nebude na úrovni našej kombinácie skúseností a AI. Ušetríme vám čas aj frustráciu."
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Vieme presne, <span className="text-[#38FFCD]">čo vás trápi</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problemSolutionPairs.map((pair, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl overflow-hidden hover:border-[#38FFCD]/50 transition-all duration-500 hover:shadow-[0_0_24px_rgba(56,255,205,0.2)]"
            >
              {/* Problem */}
              <div className="p-6 border-b border-[rgba(16,231,255,0.15)]">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <X className="w-6 h-6 text-red-400" />
                  </div>
                  <p className="text-white text-lg font-bold leading-relaxed">
                    {pair.problem}
                  </p>
                </div>
              </div>

              {/* Arrow */}
              <div className="flex justify-center py-2 bg-[rgba(0,23,66,0.3)]">
                <div className="text-[#10E7FF] text-sm font-medium">
                  Naše riešenie ↓
                </div>
              </div>

              {/* Solution */}
              <div className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="w-6 h-6 text-[#38FFCD]" />
                  </div>
                  <p className="text-[#38FFCD] text-lg font-semibold leading-relaxed">
                    {pair.solution}
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

export default ProblemSolutionCards;