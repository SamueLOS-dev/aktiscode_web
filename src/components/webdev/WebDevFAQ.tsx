import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const WebDevFAQ = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqItems = [
    {
      question: "Ako dlho trvá vytvorenie webu?",
      answer: "Demo máte do 24-48 hodín. Finálny web je hotový za 3-7 dní, v závislosti od rozsahu."
    },
    {
      question: "Čo ak sa mi demo nepáči?",
      answer: "Demo je úplne zadarmo a bez záväzkov. Ak sa vám nepáči, neplatíte nič."
    },
    {
      question: "Kto píše texty na web?",
      answer: "My. V demo už budú hotové texty vysvetlené prečo fungujú. Vy len schválite alebo upravíte."
    },
    {
      question: "Budem vlastniť kód webu?",
      answer: "Áno, po dokončení dostanete všetky súbory a prístupy. Web je 100% váš."
    },
    {
      question: "Zabezpečíte aj hosting a doménu?",
      answer: "Áno, môžeme zariadiť hosting aj doménu, alebo web nasadíme na váš existujúci hosting."
    },
    {
      question: "Čo ak budem potrebovať zmeny po spustení?",
      answer: "Prvé 2 týždne sú drobné úpravy zadarmo. Potom ponúkame údržbu za transparentné ceny."
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Často kladené <span className="text-[#38FFCD]">otázky</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[rgba(56,255,205,0.05)] transition-colors duration-300"
              >
                <span className="text-lg font-semibold text-white">{item.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-[#38FFCD] transition-transform duration-300 ${
                    openFaq === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openFaq === index && (
                <div className="px-6 pb-4 border-t border-[rgba(56,255,205,0.2)]">
                  <p className="text-[#10E7FF]/80 pt-4 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebDevFAQ;