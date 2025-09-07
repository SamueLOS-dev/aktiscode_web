import React from 'react';
import SEOHead from '../components/SEOHead';
import WebDevHero from '../components/webdev/WebDevHero';
import ProblemSolutionCards from '../components/webdev/ProblemSolutionCards';
import WebDeliverables from '../components/webdev/WebDeliverables';
import DemoProcess from '../components/webdev/DemoProcess';
import BeforeAfterSlider from '../components/webdev/BeforeAfterSlider';
import PortfolioShowcase from '../components/webdev/PortfolioShowcase';
import ProcessTimeline from '../components/webdev/ProcessTimeline';
import SEOFeatures from '../components/webdev/SEOFeatures';
import WhyUsSection from '../components/webdev/WhyUsSection';
import WebDevFAQ from '../components/webdev/WebDevFAQ';
import WebDevFinalCTA from '../components/webdev/WebDevFinalCTA';
import StickyFAB from '../components/webdev/StickyFAB';

const WebDevelopment = () => {
  return (
    <>
      <SEOHead 
        title="Tvorba web stránok na mieru | Profesionálny web dizajn pre firmy – AktisCode"
        description="AktisCode – tvorba web stránok na mieru. Profesionálny web dizajn pre firmy, moderné webové stránky pre podnikanie a tvorba e-shopu s SEO optimalizáciou. Požiadajte o demo zdarma."
        keywords="tvorba web stránok na mieru, profesionálny web dizajn pre firmy, firemná webová stránka ktorá predáva, moderné webové stránky pre podnikanie, seo optimalizovaný web dizajn, rýchla tvorba webu slovensko, tvorba e-shopu na mieru, web stránka pre malé a stredné firmy"
        ogImage="https://aktiscode.com/og-web-development.webp"
        canonical="https://www.aktiscode.sk/web-development"
        breadcrumbs={[
          { name: "Domov", item: "https://www.aktiscode.sk/" },
          { name: "Web development", item: "https://www.aktiscode.sk/web-development" }
        ]}
        serviceSchema={{
          "@type": "Service",
          "@id": "https://aktiscode.com/web-development#service",
          "serviceType": "Tvorba web stránok na mieru",
          "name": "Web development na mieru",
          "description": "Profesionálny web dizajn pre firmy, moderné webové stránky pre podnikanie, tvorba e-shopu na mieru a SEO optimalizovaný web dizajn.",
          "provider": {
            "@type": "Organization",
            "@id": "https://aktiscode.com/#organization"
          },
          "areaServed": "SK",
          "url": "https://aktiscode.com/web-development",
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
            <span className="text-white">Web development</span>
          </nav>
        </div>
      </div>

      {/* All Sections */}
      <WebDevHero />
      <ProblemSolutionCards />
      <WebDeliverables />
      <DemoProcess />
      <BeforeAfterSlider />
      {/* <PortfolioShowcase /> */}
      <ProcessTimeline />
      <SEOFeatures />
      <WhyUsSection />
      <WebDevFAQ />
      <WebDevFinalCTA />
      <StickyFAB />
      </div>
    </>
  );
};


export default WebDevelopment