import React from 'react';
import { Settings, Cog, Link, Puzzle } from 'lucide-react';

const CustomSolutionsSection = () => {
  const benefits = [
    {
      icon: Cog,
      text: "Automatizácia interných procesov."
    },
    {
      icon: Link,
      text: "Integrácie s nástrojmi, ktoré už používate."
    },
    {
      icon: Puzzle,
      text: "Špecifické riešenia pre váš biznis model."
    }
  ];

  const integrationIcons = [
    { name: 'CRM', icon: '📊' },
    { name: 'ERP', icon: '⚙️' },
    { name: 'Web', icon: '🌐' },
    { name: 'API', icon: '🔗' }
  ];

  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section id="custom" className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                AI na mieru pre vaše potreby
              </h2>
              <p className="text-xl text-[#10E7FF] font-medium">
                Čokoľvek si vymyslíte, vieme preniesť do reality.
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
              Chcem sa poradiť o vlastnom riešení
            </button>
          </div>

          {/* Right - Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Puzzle/Integration Visualization */}
              <div className="relative">
                {/* Central Puzzle Piece */}
                <div className="w-24 h-24 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-2xl mx-auto shadow-[0_0_40px_rgba(56,255,205,0.4)] flex items-center justify-center relative">
                  <Settings className="w-12 h-12 text-[#001742] animate-spin-slow" />
                  
                  {/* Puzzle connectors */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full"></div>
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full"></div>
                  <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full"></div>
                  <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-4 h-4 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full"></div>
                </div>

                {/* Integration Icons */}
                {integrationIcons.map((integration, index) => {
                  const positions = [
                    { top: '-60px', left: '50%', transform: 'translateX(-50%)' }, // Top
                    { bottom: '-60px', left: '50%', transform: 'translateX(-50%)' }, // Bottom
                    { left: '-60px', top: '50%', transform: 'translateY(-50%)' }, // Left
                    { right: '-60px', top: '50%', transform: 'translateY(-50%)' } // Right
                  ];
                  
                  return (
                    <div
                      key={integration.name}
                      className="absolute w-16 h-16 bg-[rgba(0,23,66,0.6)] backdrop-blur-sm border border-[rgba(16,231,255,0.25)] rounded-2xl flex flex-col items-center justify-center animate-float"
                      style={{
                        ...positions[index],
                        animationDelay: `${index * 0.5}s`
                      }}
                    >
                      <div className="text-2xl mb-1">{integration.icon}</div>
                      <div className="text-xs text-[#10E7FF] font-medium">{integration.name}</div>
                    </div>
                  );
                })}

                {/* Connection Lines */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '200px', height: '200px', left: '-50px', top: '-50px' }}>
                  {/* Top */}
                  <line x1="100" y1="100" x2="100" y2="40" stroke="#38FFCD" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" />
                  </line>
                  {/* Bottom */}
                  <line x1="100" y1="100" x2="100" y2="160" stroke="#10E7FF" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="0.5s" />
                  </line>
                  {/* Left */}
                  <line x1="100" y1="100" x2="40" y2="100" stroke="#38FFCD" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="1s" />
                  </line>
                  {/* Right */}
                  <line x1="100" y1="100" x2="160" y2="100" stroke="#10E7FF" strokeWidth="2" opacity="0.4" strokeDasharray="4,4">
                    <animate attributeName="stroke-dashoffset" values="0;8" dur="2s" repeatCount="indefinite" begin="1.5s" />
                  </line>
                </svg>

                {/* Floating Data Particles */}
                <div className="absolute -top-8 -left-8 w-4 h-4 bg-[#38FFCD]/30 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-8 -right-8 w-3 h-3 bg-[#10E7FF]/30 rounded-full animate-bounce" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;