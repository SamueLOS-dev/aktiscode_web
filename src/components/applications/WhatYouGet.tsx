import React from 'react';
import { Search, Palette, Zap, Code, Cloud, HeadphonesIcon } from 'lucide-react';

const WhatYouGet = () => {
  const deliverables = [
    {
      icon: Search,
      title: 'Analýza cieľa & UX',
      description: 'Navrhneme správne riešenie podľa vašich potrieb.'
    },
    {
      icon: Palette,
      title: 'UI dizajn',
      description: 'Moderné a funkčné rozhranie pripravené zaujať.'
    },
    {
      icon: Zap,
      title: 'Prototyp do 48 h',
      description: 'Ukážeme funkčný koncept ešte pred vývojom.'
    },
    {
      icon: Code,
      title: 'Vývoj & napojenia',
      description: 'Kalendáre, platby, fakturácia a ďalšie v jednom riešení.'
    },
    {
      icon: Cloud,
      title: 'Nasadenie & prevádzka',
      description: 'Hosting, monitoring a škálovanie bez starostí.'
    },
    {
      icon: HeadphonesIcon,
      title: 'Podpora & iterácie',
      description: 'Dlhodobá starostlivosť a zlepšovanie aplikácie.'
    }
  ];

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[40px] font-bold text-white mb-6 leading-[1.2]">
            Kompletný vývoj od nápadu po spustenie
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {deliverables.map((item, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-[20px] p-6 hover:border-[#38FFCD]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-200 relative"
            >
              {/* Status Dot */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#10E7FF] rounded-full"></div>

              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-[16px] mx-auto mb-6 group-hover:scale-[1.03] transition-transform duration-200">
                <item.icon className="w-8 h-8 text-[#001742]" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-semibold text-white mb-4 text-center group-hover:text-[#38FFCD] transition-colors duration-200">
                {item.title}
              </h3>
              
              <p className="text-white/80 text-sm text-center leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-xs lg:text-sm text-white/70 font-medium">
            Všetko <em className="text-[#38FFCD] font-semibold">done-for-you</em>. Vy len odsúhlasíte.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatYouGet;