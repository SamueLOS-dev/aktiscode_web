import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, User, Clock, Users } from 'lucide-react';

const CallAgentSection = () => {
  const benefits = [
    {
      icon: User,
      text: "Rozpráva prirodzene ako človek."
    },
    {
      icon: Clock,
      text: "Je dostupný nonstop — aj večer a cez víkend."
    },
    {
      icon: Users,
      text: "Zníži tlak na recepciu a obchodníkov."
    }
  ];

  return (
    <section id="call-agent" className="relative z-10 py-20 bg-[rgba(0,23,66,0.3)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visualization */}
          <div className="flex justify-center lg:order-1">
            <div className="relative w-full max-w-md">
              {/* Phone Call Visualization */}
              <div className="relative">
                {/* Phone Icon */}
                <div className="w-32 h-32 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-3xl flex items-center justify-center mx-auto shadow-[0_0_40px_rgba(56,255,205,0.4)]">
                  <Phone className="w-16 h-16 text-[#001742]" />
                </div>

                {/* Sound Waves */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="absolute border-2 border-[#10E7FF]/30 rounded-full animate-ping"
                      style={{
                        width: `${120 + i * 40}px`,
                        height: `${120 + i * 40}px`,
                        left: `${-60 - i * 20}px`,
                        top: `${-60 - i * 20}px`,
                        animationDelay: `${i * 0.5}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>

                {/* AI Orb */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-[#10E7FF] to-[#38FFCD] rounded-full flex items-center justify-center animate-pulse-slow">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-[#001742] rounded-full"></div>
                  </div>
                </div>

                {/* Calendar Icon */}
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-xl flex items-center justify-center animate-float">
                  <div className="w-6 h-6 border border-[#38FFCD] rounded-sm relative">
                    <div className="absolute -top-1 left-1 w-1 h-2 bg-[#38FFCD]"></div>
                    <div className="absolute -top-1 right-1 w-1 h-2 bg-[#38FFCD]"></div>
                    <div className="absolute top-1 left-1 w-4 h-0.5 bg-[#38FFCD]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                AI, ktorá volá a prijíma hovory
              </h2>
              <p className="text-xl text-[#10E7FF] font-medium">
                Od prijatia zákazky až po dohodnutie termínu — bez čakania.
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
              Požiadať o demo call agenta
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallAgentSection;