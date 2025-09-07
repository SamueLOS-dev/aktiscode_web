import React from 'react';
import { Link } from 'react-router-dom';
import { MessageCircle, Clock, DollarSign, Calendar } from 'lucide-react';

const ChatbotSection = () => {
  const benefits = [
    {
      icon: Clock,
      text: "Okamžitá odpoveď na každom webe."
    },
    {
      icon: DollarSign,
      text: "Nahradí support tím a šetrí náklady."
    },
    {
      icon: Calendar,
      text: "Dohodne stretnutie alebo získava leady priamo do kalendára."
    }
  ];

  return (
    <section id="chatbot" className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-white">
                Chatbot, ktorý odpovedá namiesto vás
              </h2>
              <p className="text-xl text-[#10E7FF] font-medium">
                Zákazník dostane odpoveď hneď, aj keď vy spíte.
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
              Chcem vidieť demo chatbota
            </Link>
          </div>

          {/* Right - Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {/* Chat Interface Mockup */}
              <div className="bg-[rgba(0,23,66,0.6)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-6 shadow-2xl">
                <div className="space-y-4">
                  {/* User Message */}
                  <div className="flex justify-end">
                    <div className="bg-[#38FFCD] text-[#001742] px-4 py-2 rounded-2xl rounded-br-sm max-w-xs">
                      <p className="text-sm font-medium">Kedy máte voľný termín?</p>
                    </div>
                  </div>
                  
                  {/* AI Response */}
                  <div className="flex justify-start">
                    <div className="bg-[rgba(16,231,255,0.2)] border border-[#10E7FF]/40 text-white px-4 py-2 rounded-2xl rounded-bl-sm max-w-xs">
                      <p className="text-sm">Zajtra o 10:00, mám vás zapísať?</p>
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex justify-start">
                    <div className="bg-[rgba(16,231,255,0.1)] border border-[#10E7FF]/20 px-4 py-2 rounded-2xl rounded-bl-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-[#10E7FF] rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-[#10E7FF] rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                        <div className="w-2 h-2 bg-[#10E7FF] rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#38FFCD]/20 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-[#10E7FF]/20 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChatbotSection;