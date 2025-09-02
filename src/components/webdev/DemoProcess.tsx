import React from 'react';
import { ArrowRight } from 'lucide-react';

const DemoProcess = () => {
  const scrollToDemo = () => {
    // In a real app, this would scroll to demo form or navigate to /demo
    window.location.href = '/demo';
  };

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Illustration */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <img 
                src="/src/assets/web_develompent/aktiscode_web_value.webp" 
                alt="Demo Process - Ukážeme vám hodnotu našich služieb" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* Right - Process */}
          <div className="space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Najprv <span className="text-[#38FFCD]">výsledok</span>, až potom váš čas
            </h2>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#38FFCD] rounded-full flex items-center justify-center text-[#001742] font-bold text-sm">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Povieme si cieľ stránky.</h3>
                  <p className="text-[#10E7FF]/80">Vyplníte krátky formulár, aby sme pochopili vaše podnikanie.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#38FFCD] rounded-full flex items-center justify-center text-[#001742] font-bold text-sm">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Dostanete hotové demo s textami.</h3>
                  <p className="text-[#10E7FF]/80">Ukážeme vám prototyp a vysvetlíme, prečo je navrhnutý takto.</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[#38FFCD] rounded-full flex items-center justify-center text-[#001742] font-bold text-sm">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Vy len schválite alebo upravíte.</h3>
                  <p className="text-[#10E7FF]/80">Ušetríte hodiny času, my spravíme všetko za vás.</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <button
                onClick={scrollToDemo}
                className="group bg-[#38FFCD] text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)] flex items-center gap-3"
              >
                Požiadať o demo zdarma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <p className="text-sm text-white/70 font-medium">
                Minimálny váš čas • Maximálny výsledok
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoProcess;