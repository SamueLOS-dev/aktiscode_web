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
            <div className="relative w-full max-w-lg">
              <img 
                src="/src/assets/ai/aktiscode_ai_social-min.webp" 
                alt="AI automatizácia sociálnych sietí - Instagram, WhatsApp, Facebook, X" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialMediaSection;