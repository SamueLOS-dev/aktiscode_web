import React from 'react';
import { ArrowRight } from 'lucide-react';

const WebDevHero = () => {
  const scrollToDemo = () => {
    // In a real app, this would scroll to demo form or navigate to /demo
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
                Profesionálny web, ktorý <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent">zaujme a predáva</span>.
              </h1>
              
              <p className="text-xl lg:text-2xl text-[#10E7FF] font-medium leading-relaxed">
                Nie len pekný dizajn, ale stránka, ktorá reprezentuje vaše podnikanie a mení návštevníkov na zákazníkov.
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
                Bez rizika • Prototyp hotový do 48 hodín
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
                    src="/src/assets/web_develompent/aktiscode_hero_web-min.webp" 
                    alt="Tvorba web stránok na mieru a profesionálny web dizajn pre firmy – moderné firemné webové stránky a e-shopy optimalizované pre SEO | AktisCode"
                   className="w-full h-full object-contain drop-shadow-2xl animate-float"
                  />
                </div>
                
                {/* Mobile mockup */}
                <div className="absolute -bottom-4 -right-4 w-24 h-40 rounded-xl animate-float" style={{ animationDelay: '1.5s', animationDuration: '5s' }}>
                  <img 
                    src="/src/assets/web_develompent/aktiscode_hero_web2-min.webp" 
                    alt="Mobile web design mockup"
                    className="w-full h-full object-cover rounded-xl drop-shadow-lg"
                  />
                </div>

                {/* AI Chat bubble */}
              </div>
              {/* Floating decorative elements */}
              <div className="absolute -top-6 -left-6 w-4 h-4 bg-[#38FFCD]/30 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }}></div>
              <div className="absolute top-1/3 -right-8 w-3 h-3 bg-[#10E7FF]/40 rounded-full animate-bounce" style={{ animationDelay: '1.5s', animationDuration: '4s' }}></div>
              <div className="absolute -bottom-8 left-1/4 w-2 h-2 bg-[#38FFCD]/50 rounded-full animate-bounce" style={{ animationDelay: '3s', animationDuration: '5s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebDevHero;