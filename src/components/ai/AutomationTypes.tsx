import React from 'react';
import { MessageCircle, Phone, Share2, Mail, Settings } from 'lucide-react';

const AutomationTypes = () => {
  const automationTypes = [
    {
      icon: MessageCircle,
      title: "Chatboty (web)",
      description: "Okamžité odpovede, booking a leady priamo z webu.",
      anchor: "#chatbot"
    },
    {
      icon: Phone,
      title: "AI Call agenti",
      description: "Prijímajú aj volajú, ako váš vlastný support tím.",
      anchor: "#call-agent"
    },
    {
      icon: Share2,
      title: "Sociálne siete",
      description: "Instagram, WhatsApp, Facebook aj X pod jednou AI strechou.",
      anchor: "#social-media"
    },
    {
      icon: Mail,
      title: "E-maily & outreach",
      description: "Odpisovanie, follow-upy a kampane na autopilot.",
      anchor: "#email"
    },
    {
      icon: Settings,
      title: "Custom riešenia",
      description: "Čokoľvek špecifické pre váš biznis zvládneme na mieru.",
      anchor: "#custom"
    }
  ];

  const scrollToSection = (anchor: string) => {
    const element = document.querySelector(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Automatizujeme, čo vás stojí <span className="text-[#38FFCD]">najviac času</span>
          </h2>
          <p className="text-xl text-[#10E7FF]/80 max-w-3xl mx-auto">
            Od chatbotov až po e-maily. Vyberte si, čo vás trápi, a uvidíte, ako to AI vyrieši.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {automationTypes.map((type, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-6 hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-500 text-center cursor-pointer"
              onClick={() => scrollToSection(type.anchor)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <type.icon className="w-8 h-8 text-[#001742]" />
              </div>

              <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                {type.title}
              </h3>
              
              <p className="text-[#10E7FF]/80 text-sm mb-4 group-hover:opacity-100 transition-opacity duration-300">
                {type.description}
              </p>

              <button className="text-[#38FFCD] text-sm font-medium hover:underline transition-all duration-300">
                Viac →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutomationTypes;