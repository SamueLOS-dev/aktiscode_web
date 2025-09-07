import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone } from 'lucide-react';

const FinalCTA = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-[#001742] to-[#000d2e] relative overflow-hidden">
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#10E7FF]/10 to-[#38FFCD]/5 backdrop-blur-sm" />
      
      {/* Animated wave shapes */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-20" viewBox="0 0 1920 400" preserveAspectRatio="none">
          <path
            d="M0,200 C480,100 960,300 1440,150 C1680,75 1840,225 1920,175 L1920,400 L0,400 Z"
            fill="rgba(16,231,255,0.1)"
          >
            <animate
              attributeName="d"
              values="M0,200 C480,100 960,300 1440,150 C1680,75 1840,225 1920,175 L1920,400 L0,400 Z;
                      M0,250 C480,150 960,50 1440,200 C1680,275 1840,125 1920,225 L1920,400 L0,400 Z;
                      M0,200 C480,100 960,300 1440,150 C1680,75 1840,225 1920,175 L1920,400 L0,400 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>

      {/* Pulsating dots for AI/dynamic feel */}
      <div className="absolute inset-0">
        {Array.from({ length: 12 }, (_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#38FFCD]/60 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Neural network micro-ornament */}
      <div className="absolute inset-0 opacity-15">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          {Array.from({ length: 6 }, (_, i) => (
            <g key={i}>
              <line
                x1={200 + i * 200}
                y1={100 + Math.random() * 200}
                x2={300 + i * 200}
                y2={200 + Math.random() * 200}
                stroke="#10E7FF"
                strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values="0.1;0.5;0.1"
                  dur={`${4 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                />
              </line>
              <circle
                cx={200 + i * 200}
                cy={100 + Math.random() * 200}
                r="3"
                fill="#38FFCD"
              >
                <animate
                  attributeName="r"
                  values="2;4;2"
                  dur={`${3 + Math.random() * 2}s`}
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          ))}
        </svg>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 animate-fade-in-up leading-tight">
          Vyskúšajte, ako môže <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent font-black">vyzerať vaše riešenie</span> — ešte predtým, než sa rozhodnete.
        </h2>
        
        <p className="text-lg md:text-xl text-white/90 mb-12 animate-fade-in-up animation-delay-200 max-w-3xl mx-auto leading-relaxed">
          Požiadajte o bezplatné demo. Ukážeme vám prototyp webu, aplikácie alebo AI automatizácie na mieru vašim potrebám. Ak vás zaujme, dohodneme si konzultáciu a detailný plán.
        </p>

        <div className="flex flex-col items-center gap-6 animate-fade-in-up animation-delay-400">
          {/* Main CTA Button */}
          <Link 
            to="/demo"
            className="group relative bg-[#005DFF] text-white font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#005DFF] hover:to-[#38FFCD] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#38FFCD]/30 hover:shadow-xl hover:shadow-[#38FFCD]/50 flex items-center gap-4"
          >
            <span className="tracking-wide">👉 Požiadať o demo zadarmo</span>
            
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          
          {/* Subtitle */}
          <p className="text-white/90 text-base font-medium">
            <span className="text-[#38FFCD] font-semibold">Bez rizika</span> • <span className="text-[#38FFCD] font-semibold">Bez záväzkov</span> • <span className="text-[#38FFCD] font-semibold">Úvodný prototyp zdarma</span>
          </p>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#38FFCD]/30 rounded-full animate-bounce" style={{ animationDelay: '0s' }} />
        <div className="absolute top-20 right-16 w-3 h-3 bg-[#10E7FF]/20 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-16 left-20 w-5 h-5 bg-[#38FFCD]/25 rounded-full animate-bounce" style={{ animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default FinalCTA;