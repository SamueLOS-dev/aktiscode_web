import React from 'react';
import SEOHead from '../components/SEOHead';
import AIHero from '../components/ai/AIHero';
import AutomationTypes from '../components/ai/AutomationTypes';
import ChatbotSection from '../components/ai/ChatbotSection';
import CallAgentSection from '../components/ai/CallAgentSection';
import SocialMediaSection from '../components/ai/SocialMediaSection';
import EmailSection from '../components/ai/EmailSection';
import CustomSolutionsSection from '../components/ai/CustomSolutionsSection';
import WhyNowSection from '../components/ai/WhyNowSection';
import ProcessSection from '../components/ai/ProcessSection';
import PracticalScenarios from '../components/ai/PracticalScenarios';
import SecuritySection from '../components/ai/SecuritySection';
import AIFinalCTA from '../components/ai/AIFinalCTA';

const AIAutomation = () => {
  return (
    <>
      <SEOHead 
        title="AI chatboty a automatizácia pre firmy | AI call agenti a email automatizácie – AktisCode"
        description="AktisCode – AI chatboty, AI call agenti a automatizácia e-mailov a sociálnych sietí. Nonstop zákaznícka podpora, zníženie nákladov a rýchle spracovanie dopytov. Požiadajte o demo zdarma."
        keywords="ai chatbot pre firmy, virtuálny call agent ai, automatizácia zákazníckej podpory, automatické odpovede na e-maily, ai správa sociálnych sietí, automatizácia firemných procesov, nonstop zákaznícka podpora ai, zníženie nákladov automatizáciou"
        ogImage="https://aktiscode.com/og-ai-automatizacie.webp"
        canonical="https://aktiscode.com/ai-automatizacie"
        breadcrumbs={[
          { name: "Domov", item: "https://aktiscode.com/" },
          { name: "AI automatizácie", item: "https://aktiscode.com/ai-automatizacie" }
        ]}
        serviceSchema={{
          "@type": "Service",
          "@id": "https://aktiscode.com/ai-automatizacie#service",
          "serviceType": "AI automatizácie pre firmy",
          "name": "AI chatboty, AI call agenti a automatizácia e-mailov a sociálnych sietí",
          "description": "AI chatboty, virtuálni call agenti a automatizácia firemných procesov. Nonstop zákaznícka podpora, zníženie nákladov a rýchlejšie spracovanie dopytov.",
          "provider": {
            "@type": "Organization",
            "@id": "https://aktiscode.com/#organization"
          },
          "areaServed": "SK",
          "url": "https://aktiscode.com/ai-automatizacie",
          "inLanguage": "sk"
        }}
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

      {/* Breadcrumbs */}
      <div className="relative z-10 pt-24 pb-4">
        <div className="max-w-[1200px] mx-auto px-6">
          <nav className="text-sm text-[#10E7FF]/70">
            <a href="/" className="hover:text-[#38FFCD] transition-colors">Domov</a>
            <span className="mx-2">/</span>
            <span className="text-white">AI automatizácie</span>
          </nav>
        </div>
      </div>

      {/* All Sections */}
      <AIHero />
      <AutomationTypes />
      <ChatbotSection />
      <CallAgentSection />
      <SocialMediaSection />
      <EmailSection />
      <CustomSolutionsSection />
      <WhyNowSection />
      <ProcessSection />
      <PracticalScenarios />
      <SecuritySection />
      <AIFinalCTA />
      </div>
    </>
  );
};

export default AIAutomation;