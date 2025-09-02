import React from 'react';

const WhyUsSection = () => {
  const whyUsPoints = [
    {
      title: "Rozumieme vám",
      description: "Hovoríme vašim jazykom, nie programátorským."
    },
    {
      title: "Najprv výsledok",
      description: "Demo stránky ešte pred prvým stretnutím."
    },
    {
      title: "Všetko za vás",
      description: "Texty, dizajn aj funkčnosť pripravíme my. Vy len odsúhlasíte."
    },
    {
      title: "Rýchlosť a cena",
      description: "AI skracuje čas dodania aj cenu, kvalitu držia skúsenosti."
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Čo nás <span className="text-[#38FFCD]">odlišuje</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {whyUsPoints.map((point, index) => (
            <div
              key={index}
              className={`group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8 hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-500 relative ${
                index === 1 ? 'ring-2 ring-[#38FFCD]/30' : ''
              }`}
            >
              {index === 1 && (
                <div className="absolute inset-0 bg-gradient-to-br from-[#38FFCD]/5 to-[#10E7FF]/5 rounded-2xl"></div>
              )}
              
              <div className="relative z-10">
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                  {point.title}
                </h3>
                <p className="text-[#10E7FF]/80 group-hover:opacity-100 transition-opacity duration-300">
                  {point.description}
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

export default WhyUsSection;