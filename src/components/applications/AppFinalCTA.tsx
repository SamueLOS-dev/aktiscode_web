import React from 'react';
import { ArrowRight } from 'lucide-react';

const AppFinalCTA = () => {
  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section className="relative z-10 py-24 bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] overflow-hidden">
      {/* Animated wave */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
          <path
            d="M0,200 C300,100 600,300 900,150 C1050,75 1150,225 1200,175 L1200,400 L0,400 Z"
            fill="rgba(0,23,66,0.08)"
          >
            <animate
              attributeName="d"
              values="M0,200 C300,100 600,300 900,150 C1050,75 1150,225 1200,175 L1200,400 L0,400 Z;
                      M0,250 C300,150 600,50 900,200 C1050,275 1150,125 1200,225 L1200,400 L0,400 Z;
                      M0,200 C300,100 600,300 900,150 C1050,75 1150,225 1200,175 L1200,400 L0,400 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="text-4xl lg:text-5xl font-bold text-[#001742] mb-6 leading-tight">
          Chcete vidieť, ako môže vyzerať vaša aplikácia?
        </h2>
        
        <p className="text-xl text-[#001742]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
          Požiadajte o demo zdarma — uvidíte výsledok skôr, než sa rozhodnete.
        </p>

        <div className="space-y-4">
          <button
            onClick={scrollToDemo}
            className="group bg-white text-[#001742] font-semibold text-lg px-8 py-4 rounded-[14px] hover:bg-gray-100 hover:scale-[1.03] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] flex items-center gap-3 mx-auto min-w-[240px] h-[56px] justify-center"
          >
            Požiadať o demo zdarma
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </button>
          
          <p className="text-[#001742]/70 text-sm font-medium">
            Prototyp do 48 hodín • Bez záväzkov
          </p>
        </div>
      </div>
    </section>
  );
};

export default AppFinalCTA;