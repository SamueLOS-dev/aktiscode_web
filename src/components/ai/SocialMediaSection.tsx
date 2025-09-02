import React from 'react';
import { Share2, Zap, Target, Clock } from 'lucide-react';

const SocialMediaSection = () => {
  const benefits = [
    {
      icon: Zap,
      text: "Rýchle reakcie na správy a komentáre."
    },
    {
      icon: Target,
      text: "Pomôže informovať aj predať."
    },
    {
      icon: Clock,
      text: "Šetrí hodiny práce pri kampaniach."
    }
  ];

  const socialPlatforms = [
    { name: 'Instagram', color: '#E4405F', icon: '📷' },
    { name: 'WhatsApp', color: '#25D366', icon: '💬' },
    { name: 'Facebook', color: '#1877F2', icon: '👥' },
    { name: 'X', color: '#1DA1F2', icon: '🐦' }
  ];

  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section id="social-media" className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                AI, ktorá odpovedá za vás na sociálnych sieťach
              </h2>
              <p className="text-xl text-[#10E7FF] font-medium">
                Instagram, WhatsApp, Facebook aj X — jeden systém, okamžité odpovede.
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
              Vidieť demo na sociálnych sieťach
            </button>
          </div>

          {/* Right - Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Central AI Hub */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full mx-auto shadow-[0_0_40px_rgba(56,255,205,0.4)] animate-pulse-slow flex items-center justify-center">
                  <Share2 className="w-12 h-12 text-[#001742]" />
                </div>

                {/* Social Platform Icons */}
                {socialPlatforms.map((platform, index) => {
                  const angle = (index * 90) - 45; // Distribute around circle
                  const radius = 120;
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;
                  
                  return (
                    <div
                      key={platform.name}
                      className="absolute w-16 h-16 bg-[rgba(0,23,66,0.6)] backdrop-blur-sm border border-[rgba(16,231,255,0.25)] rounded-2xl flex items-center justify-center animate-float"
                      style={{
                        left: `calc(50% + ${x}px - 32px)`,
                        top: `calc(50% + ${y}px - 32px)`,
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      <div className="text-2xl">{platform.icon}</div>
                    </div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '300px', height: '300px', left: '-50px', top: '-50px' }}>
                  {socialPlatforms.map((_, index) => {
                    const angle = (index * 90) - 45;
                    const radius = 120;
                    const x1 = 150; // Center
                    const y1 = 150; // Center
                    const x2 = x1 + Math.cos(angle * Math.PI / 180) * radius;
                    const y2 = y1 + Math.sin(angle * Math.PI / 180) * radius;
                    
                    return (
                      <line
                        key={index}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="#38FFCD"
                        strokeWidth="2"
                        opacity="0.4"
                        strokeDasharray="4,4"
                      >
                        <animate
                          attributeName="stroke-dashoffset"
                          values="0;8"
                          dur="2s"
                          repeatCount="indefinite"
                          begin={`${index * 0.5}s`}
                        />
                      </line>
                    );
                  })}
                </svg>

                {/* Message Bubbles */}
                <div className="absolute -top-8 -right-8 w-12 h-8 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-2xl rounded-br-sm flex items-center justify-center animate-bounce">
                  <div className="text-xs text-[#38FFCD]">✓</div>
                </div>
                <div className="absolute -bottom-8 -left-8 w-12 h-8 bg-[rgba(16,231,255,0.2)] backdrop-blur-sm border border-[#10E7FF]/40 rounded-2xl rounded-bl-sm flex items-center justify-center animate-bounce" style={{ animationDelay: '1s' }}>
                  <div className="text-xs text-[#10E7FF]">💬</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;