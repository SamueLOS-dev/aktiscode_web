import React from 'react';
import { Link } from 'react-router-dom';
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

  return (
    <section id="email" className="relative z-10 py-20 bg-[rgba(0,23,66,0.3)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visualization */}
          <div className="flex justify-center lg:order-1">
            <div className="relative w-full max-w-md">
              <img 
                src={new URL('../../assets/ai/aktiscode_ai_email-min.webp', import.meta.url).href}
                alt="AI automatizácia e-mailov – okamžité odpovede, personalizované follow-upy a vyššia úspešnosť kampaní | AktisCode"
                className="w-full h-auto object-contain rounded-2xl"
              />
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

            <Link
              to="/demo"
              className="inline-block bg-[#38FFCD] text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)] mt-2"
            >
              Požiadať o demo e-mail agenta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;