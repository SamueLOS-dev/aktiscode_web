import React from 'react';
import { Monitor, ShoppingCart, Smartphone, Computer, Bot } from 'lucide-react';

const AppTypeSelector = () => {
  const appTypes = [
    {
      icon: Monitor,
      title: 'Web aplikácie',
      description: 'Interné nástroje, portály či CRM na mieru.',
      href: '#web-applications'
    },
    {
      icon: ShoppingCart,
      title: 'E-shopy',
      description: 'E-shop s rýchlym nákupom a jednoduchou správou.',
      href: '#e-shops'
    },
    {
      icon: Smartphone,
      title: 'Mobilné aplikácie',
      description: 'iOS a Android aplikácie pripravené na rast.',
      href: '#mobile-applications'
    },
    {
      icon: Computer,
      title: 'Desktopové aplikácie',
      description: 'Výkonné a stabilné riešenia pre špecifické procesy.',
      href: '#desktop-applications'
    },
    {
      icon: Bot,
      title: 'AI v aplikácii',
      description: 'Chat, odporúčania či automatizácie priamo v appke.',
      href: '#ai-applications'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 72 + 56; // Header + subnav height
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[40px] font-bold text-white mb-6 leading-[1.2]">
            Vyberte si typ aplikácie, ktorý potrebujete
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {appTypes.map((type, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-[20px] p-6 hover:border-[#38FFCD] hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:-translate-y-1 transition-all duration-200 cursor-pointer"
              onClick={() => scrollToSection(type.href)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-[16px] mx-auto mb-6 group-hover:scale-[1.03] transition-transform duration-200">
                <type.icon className="w-8 h-8 text-[#001742]" strokeWidth={2} />
              </div>

              <h3 className="text-lg lg:text-xl font-semibold text-white mb-4 text-center group-hover:text-[#38FFCD] transition-colors duration-200">
                {type.title}
              </h3>
              
              <p className="text-white/80 text-sm lg:text-base text-center mb-6 leading-relaxed">
                {type.description}
              </p>

              <div className="text-center">
                <span className="text-[#38FFCD] text-sm font-medium hover:underline transition-all duration-200">
                  Zobraziť viac →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppTypeSelector;