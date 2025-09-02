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
              {/* AI Hub Visualization */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Central AI Orb */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full shadow-[0_0_40px_rgba(56,255,205,0.6)] animate-pulse-slow">
                  <div className="absolute inset-2 bg-gradient-to-br from-[#10E7FF] to-[#38FFCD] rounded-full animate-spin-slow"></div>
                  <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#001742] rounded-full"></div>
                  </div>
                </div>

                {/* Chat Bubble */}
                <div className="absolute top-8 left-8 w-16 h-12 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-2xl rounded-bl-sm flex items-center justify-center animate-float">
                  <div className="w-2 h-2 bg-[#38FFCD] rounded-full mr-1"></div>
                  <div className="w-1 h-1 bg-[#38FFCD] rounded-full mr-1"></div>
                  <div className="w-1 h-1 bg-[#38FFCD] rounded-full"></div>
                </div>

                {/* Phone Icon */}
                <div className="absolute top-12 right-8 w-12 h-12 bg-[rgba(16,231,255,0.2)] backdrop-blur-sm border border-[#10E7FF]/40 rounded-xl flex items-center justify-center animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-6 h-8 border-2 border-[#10E7FF] rounded-sm">
                    <div className="w-full h-1 bg-[#10E7FF] mt-1"></div>
                  </div>
                </div>

                {/* Email Icon */}
                <div className="absolute bottom-12 left-12 w-14 h-10 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-lg flex items-center justify-center animate-float" style={{ animationDelay: '2s' }}>
                  <div className="w-8 h-6 border border-[#38FFCD] rounded-sm relative">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-0 border-t border-[#38FFCD] transform rotate-45 origin-left"></div>
                      <div className="w-4 h-0 border-t border-[#38FFCD] transform -rotate-45 origin-right"></div>
                    </div>
                  </div>
                </div>

                {/* Social Media Icons */}
                <div className="absolute bottom-8 right-12 flex space-x-2">
                  <div className="w-8 h-8 bg-[rgba(16,231,255,0.2)] backdrop-blur-sm border border-[#10E7FF]/40 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '0.5s' }}>
                    <div className="w-4 h-4 bg-[#10E7FF] rounded-sm"></div>
                  </div>
                  <div className="w-8 h-8 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-full flex items-center justify-center animate-float" style={{ animationDelay: '1.5s' }}>
                    <div className="w-4 h-4 bg-[#38FFCD] rounded-full"></div>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="#38FFCD" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                  </line>
                  <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="#10E7FF" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </line>
                  <line x1="50%" y1="50%" x2="30%" y2="75%" stroke="#38FFCD" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="1s" />
                  </line>
                  <line x1="50%" y1="50%" x2="70%" y2="75%" stroke="#10E7FF" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="1.5s" />
                  </line>
                </svg>
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