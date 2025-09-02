import React from 'react';
import { Mail, Zap, Users, TrendingUp } from 'lucide-react';

const EmailSection = () => {
  const benefits = [
    {
      icon: Zap,
      text: "Automatické odpovede a follow-upy."
    },
    {
      icon: Users,
      text: "Personalizované správy pre každého zákazníka."
    },
    {
      icon: TrendingUp,
      text: "Vyššia úspešnosť outreach kampaní."
    }
  ];

  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section id="email" className="relative z-10 py-20 bg-[rgba(0,23,66,0.3)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visualization */}
          <div className="flex justify-center lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Email Workflow Visualization */}
              <div className="relative">
                {/* Central Email Icon */}
                <div className="w-32 h-24 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-2xl flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(56,255,205,0.4)]">
                  <Mail className="w-16 h-12 text-[#001742]" />
                </div>

                {/* AI Processing Orb */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#10E7FF] to-[#38FFCD] rounded-full flex items-center justify-center animate-pulse-slow">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#001742] rounded-full"></div>
                  </div>
                </div>

                {/* Email Queue */}
                <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-8 h-6 bg-[rgba(16,231,255,0.2)] backdrop-blur-sm border border-[#10E7FF]/40 rounded-md animate-float"
                      style={{ animationDelay: `${i * 0.3}s` }}
                    />
                  ))}
                </div>

                {/* Contact List */}
                <div className="absolute -right-8 top-1/2 transform -translate-y-1/2 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-2 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-lg px-2 py-1 animate-float"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    >
                      <div className="w-3 h-3 bg-[#38FFCD] rounded-full"></div>
                      <div className="w-8 h-1 bg-[#38FFCD] rounded"></div>
                    </div>
                  ))}
                </div>

                {/* Success Indicators */}
                <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-6 h-6 bg-green-500/20 border border-green-400/40 rounded-full flex items-center justify-center animate-bounce"
                      style={{ animationDelay: `${i * 0.2}s` }}
                    >
                      <div className="text-xs text-green-400">✓</div>
                    </div>
                  ))}
                </div>

                {/* Data Flow Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '400px', height: '300px', left: '-100px', top: '-50px' }}>
                  {/* Left to center */}
                  <line x1="50" y1="150" x2="150" y2="150" stroke="#10E7FF" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                  </line>
                  {/* Center to right */}
                  <line x1="250" y1="150" x2="350" y2="150" stroke="#38FFCD" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </line>
                </svg>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                AI, ktorá odpisuje na e-maily za vás
              </h2>
              <p className="text-xl text-[#10E7FF] font-medium">
                Žiadny dopyt nezostane nepovšimnutý, AI reaguje okamžite.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#001742]" />
                  </div>
                  <p className="text-lg text-white font-medium pt-3">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            <button
              onClick={scrollToDemo}
              className="bg-[#38FFCD] text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)]"
            >
              Požiadať o demo e-mail agenta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;