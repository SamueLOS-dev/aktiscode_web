import React from 'react';
import { Link } from 'react-router-dom';
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

            <Link
              to="/demo"
              className="inline-block bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] font-semibold text-lg px-8 py-4 rounded-[14px] hover:scale-[1.03] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] mt-2"
            >
              Zobraziť demo AI funkcií
            </Link>
          </div>

          {/* Right - AI Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <img 
                src={new URL('../../assets/app/aktiscode_app_ai-min.webp', import.meta.url).href}
                alt="AI funkcie v aplikácii – inteligentné odpovede, personalizovaný obsah a automatické procesy | AktisCode"
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIInApplications;