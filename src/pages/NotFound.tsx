import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { ArrowLeft, Home, Monitor, Bot, Code, ArrowRight } from 'lucide-react';

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const quickLinks = [
    {
      title: 'Web Development',
      href: '/web-development',
      icon: Monitor,
      description: 'Profesionálne weby na mieru'
    },
    {
      title: 'AI Automatizácie',
      href: '/ai-automatizacie',
      icon: Bot,
      description: 'Chatboty a AI riešenia'
    },
    {
      title: 'Aplikácie',
      href: '/aplikacie',
      icon: Code,
      description: 'Mobilné a web aplikácie'
    }
  ];

  return (
    <>
      <SEOHead 
        title="Stránka nenájdená (404) | AktisCode"
        description="Stránka, ktorú hľadáte, nebola nájdená. Vráťte sa na hlavnú stránku alebo si pozrite naše služby."
        canonical="https://aktiscode.com/404"
      />
      <div className="min-h-screen bg-gradient-to-br from-[#001742] to-[#005DFF] relative overflow-hidden">
        {/* Neural Network Background */}
        <div className="fixed inset-0 opacity-[0.06] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            {Array.from({ length: 50 }, (_, i) => {
              const x = (i % 10) * 200 + Math.random() * 100;
              const y = Math.floor(i / 10) * 200 + Math.random() * 100;
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r={2}
                    fill="#10E7FF"
                    opacity={0.6}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur={`${3 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {i < 40 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={(i + 1) % 10 * 200 + Math.random() * 100}
                      y2={Math.floor((i + 1) / 10) * 200 + Math.random() * 100}
                      stroke="#38FFCD"
                      strokeWidth="0.5"
                      opacity={0.3}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }, (_, i) => (
            <div
              key={i}
              className="absolute w-3 h-3 bg-[#38FFCD]/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: `${4 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 min-h-screen flex items-center justify-center px-6 py-24">
          <div className="max-w-4xl mx-auto text-center">
            {/* 404 Number */}
            <div className="mb-8">
              <h1 className="text-8xl lg:text-9xl font-extrabold bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent leading-none animate-pulse-slow">
                404
              </h1>
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="text-8xl lg:text-9xl font-extrabold text-[#38FFCD]/10 blur-sm">
                  404
                </div>
              </div>
            </div>

            {/* Error Message */}
            <div className="mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Stránka nenájdená
              </h2>
              <p className="text-xl text-[#10E7FF]/80 max-w-2xl mx-auto leading-relaxed">
                Stránka, ktorú hľadáte, neexistuje alebo bola presunutá. Možno sa stratila v digitálnom priestore.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/"
                className="group bg-[#38FFCD] text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)] inline-flex items-center gap-3 justify-center"
              >
                <Home className="w-5 h-5" />
                Späť na hlavnú stránku
              </Link>
              
              <button
                onClick={handleGoBack}
                className="group bg-transparent border-2 border-[#38FFCD] text-[#38FFCD] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-[#38FFCD]/10 hover:scale-[1.02] transition-all duration-300 inline-flex items-center gap-3 justify-center"
              >
                <ArrowLeft className="w-5 h-5" />
                Späť
              </button>
            </div>

            {/* Quick Links */}
            <div className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-8">
                Možno hľadáte niečo z týchto služieb?
              </h3>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                {quickLinks.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl p-6 hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-300"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                      <link.icon className="w-6 h-6 text-[#001742]" />
                    </div>
                    <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-[#38FFCD] transition-colors duration-300">
                      {link.title}
                    </h4>
                    <p className="text-[#10E7FF]/80 text-sm">
                      {link.description}
                    </p>
                  </Link>
                ))}
              </div>

              {/* Demo CTA */}
              <div className="border-t border-[rgba(16,231,255,0.15)] pt-8">
                <p className="text-[#10E7FF]/80 mb-4">
                  Alebo si pozrite, čo dokážeme urobiť pre vás
                </p>
                <Link
                  to="/demo"
                  className="group inline-flex items-center gap-3 bg-transparent border border-[#38FFCD] text-[#38FFCD] font-semibold px-6 py-3 rounded-xl hover:bg-[#38FFCD]/10 transition-all duration-300"
                >
                  Požiadať o demo zdarma
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;