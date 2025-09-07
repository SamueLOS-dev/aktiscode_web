import React from 'react';
import SEOHead from '../components/SEOHead';
import AppHero from '../components/applications/AppHero';
import StickySubNav from '../components/applications/StickySubNav';
import AppTypeSelector from '../components/applications/AppTypeSelector';
import SmallVsLarge from '../components/applications/SmallVsLarge';
import WebApplications from '../components/applications/WebApplications';
import EShops from '../components/applications/EShops';
import MobileApplications from '../components/applications/MobileApplications';
import DesktopApplications from '../components/applications/DesktopApplications';
import AIInApplications from '../components/applications/AIInApplications';
import WhatYouGet from '../components/applications/WhatYouGet';
import UseCaseScenarios from '../components/applications/UseCaseScenarios';
import IntegrationsEcosystem from '../components/applications/IntegrationsEcosystem';
import SecurityReliability from '../components/applications/SecurityReliability';
import WorkingTogether from '../components/applications/WorkingTogether';
import AppFinalCTA from '../components/applications/AppFinalCTA';
import StickyFAB from '../components/applications/StickyFAB';

const Applications = () => {
  return (
    <>
      <SEOHead 
        title="Vývoj aplikácií na mieru | Webové, mobilné a desktopové aplikácie – AktisCode"
        description="AktisCode – vývoj aplikácií na mieru. Webové aplikácie pre firmy, mobilné aplikácie iOS a Android, desktopové riešenia a SaaS systémy. Požiadajte o demo zdarma."
        keywords="vývoj aplikácií na mieru, tvorba mobilných aplikácií ios android, webové aplikácie pre firmy, desktopové aplikácie vývoj, objednávací systém na mieru, crm aplikácia pre firmu, skladová aplikácia na mieru, vývoj saas riešenia slovensko"
        ogImage="https://aktiscode.com/og-aplikacie.webp"
        canonical="https://aktiscode.com/aplikacie"
        breadcrumbs={[
          { name: "Domov", item: "https://aktiscode.com/" },
          { name: "Aplikácie", item: "https://aktiscode.com/aplikacie" }
        ]}
        serviceSchema={{
          "@type": "Service",
          "@id": "https://aktiscode.com/aplikacie#service",
          "serviceType": "Vývoj aplikácií na mieru",
          "name": "Webové, mobilné a desktopové aplikácie a SaaS systémy",
          "description": "Vývoj aplikácií na mieru pre firmy: webové aplikácie, mobilné aplikácie pre iOS a Android, desktopové riešenia a SaaS systémy.",
          "provider": {
            "@type": "Organization",
            "@id": "https://aktiscode.com/#organization"
          },
          "areaServed": "SK",
          "url": "https://aktiscode.com/aplikacie",
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
            <span className="text-white">Aplikácie</span>
          </nav>
        </div>
      </div>

      {/* All Sections */}
      <AppHero />
      <StickySubNav />
      <AppTypeSelector />
      <SmallVsLarge />
      <WebApplications />
      <EShops />
      <MobileApplications />
      <DesktopApplications />
      <AIInApplications />
      <WhatYouGet />
      <UseCaseScenarios />
      <IntegrationsEcosystem />
      <SecurityReliability />
      <WorkingTogether />
      <AppFinalCTA />
      <StickyFAB />
      </div>
    </>
  );
};

export default Applications;