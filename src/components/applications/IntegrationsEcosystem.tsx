import React, { useState } from 'react';
import { CreditCard, Calendar, Mail, FileText, Bell, Users, Shield } from 'lucide-react';

const IntegrationsEcosystem = () => {
  const [hoveredIntegration, setHoveredIntegration] = useState<string | null>(null);

  const integrations = [
    {
      icon: CreditCard,
      name: 'Platby',
      tooltip: 'Jedným klikom prijímate platby.'
    },
    {
      icon: Calendar,
      name: 'Kalendár',
      tooltip: 'Rezervácie a udalosti vždy synchronizované.'
    },
    {
      icon: Mail,
      name: 'E-mail',
      tooltip: 'Automatické správy zákazníkom.'
    },
    {
      icon: FileText,
      name: 'Fakturácia',
      tooltip: 'Rýchle vystavovanie faktúr.'
    },
    {
      icon: Bell,
      name: 'Notifikácie',
      tooltip: 'Okamžité informovanie používateľov.'
    },
    {
      icon: Users,
      name: 'CRM/ERP',
      tooltip: 'Prepojenie so systémami, ktoré už používate.'
    },
    {
      icon: Shield,
      name: 'SSO',
      tooltip: 'Bezpečný prístup pre celý tím.'
    }
  ];

  return (
    <section className="relative z-10 py-20 bg-[#001742]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[40px] font-bold text-white mb-6 leading-[1.2]">
            Napojíme sa na všetko, čo už používate
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-8 max-w-4xl mx-auto">
          {integrations.map((integration, index) => (
            <div
              key={index}
              className="relative group text-center"
              onMouseEnter={() => setHoveredIntegration(integration.name)}
              onMouseLeave={() => setHoveredIntegration(null)}
            >
              <div className="flex items-center justify-center w-16 h-16 bg-white/80 rounded-[16px] mx-auto mb-4 group-hover:bg-white group-hover:scale-[1.03] transition-all duration-200 shadow-[0_4px_12px_rgba(0,0,0,0.1)]">
                <integration.icon className="w-8 h-8 text-[#001742]" strokeWidth={2} />
              </div>
              
              <h3 className="text-sm font-medium text-white/80 group-hover:text-white transition-colors duration-200">
                {integration.name}
              </h3>

              {/* Tooltip */}
              {hoveredIntegration === integration.name && (
                <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-[#001742] text-white text-xs rounded-lg shadow-[0_4px_12px_rgba(0,0,0,0.25)] whitespace-nowrap z-10 border border-[rgba(16,231,255,0.25)]">
                  {integration.tooltip}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#001742] border-r border-b border-[rgba(16,231,255,0.25)] rotate-45 -mt-1"></div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IntegrationsEcosystem;