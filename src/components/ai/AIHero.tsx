import React from 'react';
import { ArrowRight } from 'lucide-react';

const AIHero = () => {
  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section className="relative z-10 py-16 lg:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight">
                AI agenti, čo odpovedajú, dohadujú a predávajú <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent">24/7</span>.
              </h1>
              
              <p className="text-xl lg:text-2xl text-[#10E7FF] font-medium leading-relaxed">
                Nahradia rutinný support, vybavia hovory, správy aj e-maily — rýchlejšie, lacnejšie a bez prestávky.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={scrollToDemo}
                className="group bg-[#38FFCD] text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)] hover:shadow-[0_0_24px_rgba(56,255,205,0.6)] flex items-center gap-3 mx-auto lg:mx-0 w-fit"
              >
                Požiadať o demo zdarma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <p className="text-sm text-white/70 font-medium">
                Prototyp do 48 hodín • Bez záväzkov
              </p>
            </div>
          </div>

          {/* Right Column - Visual */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Hero Image */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Main hero image */}
                <div className="absolute inset-0">
                  <img 
                    src="/src/assets/ai/aktiscode_ai_hero-min.webp" 
                    alt="AI chatbot pre firmy, virtuálny call agent a automatizácia e-mailov a sociálnych sietí – nonstop zákaznícka podpora a zníženie nákladov | AktisCode"
                    className="w-full h-full object-contain drop-shadow-2xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Subtle urgency text */}
        <div className="text-center mt-12">
          <p className="text-sm text-white/70 max-w-2xl mx-auto">
            Každý neobslúžený dopyt je premárnená príležitosť. S AI ich chytíte všetky.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIHero;