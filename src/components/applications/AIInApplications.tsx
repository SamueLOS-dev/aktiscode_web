import React from 'react';
import { MessageCircle, User, Zap } from 'lucide-react';

const AIInApplications = () => {
  const benefits = [
    {
      icon: MessageCircle,
      text: 'Inteligentné odpovede priamo v appke.'
    },
    {
      icon: User,
      text: 'Personalizovaný obsah pre používateľov.'
    },
    {
      icon: Zap,
      text: 'Automatické procesy pre vyššiu efektivitu.'
    }
  ];

  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section id="ai-applications" className="relative z-10 py-20 bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[36px] lg:text-[40px] font-bold text-white leading-[1.2]">
                AI priamo vo vašej aplikácii
              </h2>
              <p className="text-lg lg:text-xl text-white/80 font-medium">
                Chat, odporúčania či automatizácie — všetko na mieru.
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
              className="bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] font-semibold text-lg px-8 py-4 rounded-[14px] hover:scale-[1.03] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              Zobraziť demo AI funkcií
            </button>
          </div>

          {/* Right - AI Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              {/* Central AI Orb */}
              <div className="relative flex items-center justify-center">
                <div className="w-24 h-24 bg-gradient-to-br from-[#10E7FF] to-[#38FFCD] rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(16,231,255,0.4)] animate-pulse-slow">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                    <div className="w-4 h-4 bg-[#001742] rounded-full"></div>
                  </div>
                </div>

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  {/* Line to Chat Panel */}
                  <line
                    x1="200"
                    y1="200"
                    x2="100"
                    y2="120"
                    stroke="#10E7FF"
                    strokeWidth="2"
                    opacity="0.6"
                    strokeDasharray="4,4"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;8"
                      dur="2s"
                      repeatCount="indefinite"
                    />
                  </line>
                  
                  {/* Line to Recommendations */}
                  <line
                    x1="200"
                    y1="200"
                    x2="300"
                    y2="120"
                    stroke="#38FFCD"
                    strokeWidth="2"
                    opacity="0.6"
                    strokeDasharray="4,4"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;8"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="0.5s"
                    />
                  </line>
                  
                  {/* Line to Automation */}
                  <line
                    x1="200"
                    y1="200"
                    x2="200"
                    y2="320"
                    stroke="#10E7FF"
                    strokeWidth="2"
                    opacity="0.6"
                    strokeDasharray="4,4"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="0;8"
                      dur="2s"
                      repeatCount="indefinite"
                      begin="1s"
                    />
                  </line>
                </svg>

                {/* Chat Panel */}
                <div className="absolute -top-16 -left-16 bg-[rgba(0,23,66,0.8)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl p-3 w-24 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                  <div className="space-y-1">
                    <div className="h-1 bg-white/60 rounded w-3/4"></div>
                    <div className="h-1 bg-[#38FFCD] rounded w-1/2"></div>
                    <div className="h-1 bg-white/60 rounded w-2/3"></div>
                  </div>
                </div>

                {/* Recommendations Carousel */}
                <div className="absolute -top-16 -right-16 bg-[rgba(0,23,66,0.8)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl p-3 w-24 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                  <div className="grid grid-cols-2 gap-1">
                    <div className="aspect-square bg-gradient-to-br from-[#38FFCD]/30 to-[#10E7FF]/30 rounded"></div>
                    <div className="aspect-square bg-gradient-to-br from-[#10E7FF]/30 to-[#38FFCD]/30 rounded"></div>
                  </div>
                  <div className="h-1 bg-white/60 rounded mt-1"></div>
                </div>

                {/* Automation Task */}
                <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 bg-[rgba(0,23,66,0.8)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl p-3 w-28 shadow-[0_4px_12px_rgba(0,0,0,0.25)]">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-[#38FFCD] rounded-full animate-pulse"></div>
                    <div className="h-1 bg-white/60 rounded flex-1"></div>
                  </div>
                  <div className="h-1 bg-white/40 rounded mt-1 w-2/3"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInApplications;