import React from 'react';
import { Link } from 'react-router-dom';
import { Workflow, HardDrive, Shield } from 'lucide-react';

const DesktopApplications = () => {
  const benefits = [
    {
      icon: Workflow,
      text: 'Plne prispôsobené vašim workflowom.'
    },
    {
      icon: HardDrive,
      text: 'Bezproblémová práca s perifériami.'
    },
    {
      icon: Shield,
      text: 'Lokálne dáta a vysoká bezpečnosť.'
    }
  ];

  return (
    <section id="desktop-applications" className="relative z-10 py-20 bg-gradient-to-br from-[#00112f] to-[#042a80]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visualization */}
          <div className="flex justify-center lg:order-1">
            <div className="relative w-full max-w-lg">
              <div className="bg-gray-700 rounded-lg p-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="bg-gray-100 rounded h-80 flex flex-col overflow-hidden">
                  {/* Window Chrome */}
                  <div className="h-8 bg-gray-200 flex items-center px-3 gap-2">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 text-center">
                      <span className="text-xs text-gray-600 font-medium">Business App</span>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex-1 flex">
                    {/* Sidebar */}
                    <div className="w-20 bg-gray-800 p-2 space-y-2">
                      <div className="h-3 bg-white/20 rounded"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-white/10 rounded"></div>
                        <div className="h-2 bg-[#38FFCD] rounded"></div>
                        <div className="h-2 bg-white/10 rounded"></div>
                        <div className="h-2 bg-white/10 rounded"></div>
                      </div>
                    </div>
                    
                    {/* Main Content */}
                    <div className="flex-1 p-4 space-y-3">
                      <div className="h-4 bg-[#001742] rounded w-1/2"></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-16 bg-gradient-to-br from-[#38FFCD]/20 to-[#10E7FF]/20 rounded border border-[#38FFCD]/30 p-2">
                          <div className="h-2 bg-[#38FFCD] rounded w-3/4 mb-1"></div>
                          <div className="h-1 bg-gray-300 rounded"></div>
                        </div>
                        <div className="h-16 bg-gradient-to-br from-[#10E7FF]/20 to-[#38FFCD]/20 rounded border border-[#10E7FF]/30 p-2">
                          <div className="h-2 bg-[#10E7FF] rounded w-3/4 mb-1"></div>
                          <div className="h-1 bg-gray-300 rounded"></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Peripheral Icon */}
              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] px-3 py-1 rounded-full text-xs font-semibold shadow-[0_4px_12px_rgba(56,255,205,0.4)] flex items-center gap-1">
                🖨️ Printer
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-[36px] lg:text-[40px] font-bold text-white leading-[1.2]">
                Stabilné desktopové riešenia
              </h2>
              <p className="text-lg lg:text-xl text-white/80 font-medium">
                Pre špecifické pracovné procesy, kde záleží na výkone.
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
              Zobraziť demo desktop appky
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesktopApplications;