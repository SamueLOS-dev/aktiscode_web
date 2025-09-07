import React from 'react';
import { Link } from 'react-router-dom';
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

            <Link
              to="/demo"
              className="bg-[#38FFCD] text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)]"
            >
              Chcem sa poradiť o vlastnom riešení
            </Link>
          </div>

          {/* Right - Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img 
                src="/src/assets/ai/aktiscode_ai_custom.webp" 
                alt="Custom AI riešenia na mieru – automatizácia interných procesov, integrácia CRM, ERP a ďalších systémov | AktisCode"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutionsSection;