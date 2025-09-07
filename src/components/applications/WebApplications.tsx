import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, BarChart3, Globe } from 'lucide-react';

const WebApplications = () => {
  const benefits = [
    {
      icon: Monitor,
      text: 'Jednoduché a prehľadné rozhranie.'
    },
    {
      icon: Globe,
      text: 'Prístupné z každého zariadenia.'
    },
    {
      icon: BarChart3,
      text: 'Reporty a exporty pripravené na klik.'
    }
  ];

  return (
    <section id="web-applications" className="relative z-10 py-20 bg-[#001742]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[36px] lg:text-[40px] font-bold text-white leading-[1.2]">
                Web aplikácie na mieru
              </h2>
              <p className="text-lg lg:text-xl text-white/80 font-medium">
                Nástroje, ktoré zrýchlia vašu prácu a znížia náklady.
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
              className="bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] font-semibold text-lg px-8 py-4 rounded-[14px] hover:scale-[1.03] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              Zobraziť demo web appky
            </Link>

            <p className="text-xs lg:text-sm text-white/70 font-medium">
              Malé aj modulárne riešenia
            </p>
          </div>

          {/* Right - Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="bg-gray-800 rounded-lg p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="bg-white rounded-md aspect-[16/10] flex flex-col">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-xs text-gray-500">
                      dashboard.example.com
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex-1 p-4">
                    <div className="grid grid-cols-3 gap-4 h-full">
                      {/* Sidebar */}
                      <div className="space-y-2">
                        <div className="h-3 bg-[#001742] rounded"></div>
                        <div className="space-y-1">
                          <div className="h-2 bg-gray-200 rounded"></div>
                          <div className="h-2 bg-gray-200 rounded"></div>
                          <div className="h-2 bg-[#38FFCD] rounded"></div>
                          <div className="h-2 bg-gray-200 rounded"></div>
                        </div>
                      </div>
                      
                      {/* Main Content */}
                      <div className="col-span-2 space-y-3">
                        <div className="h-4 bg-[#001742] rounded w-3/4"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="h-12 bg-gradient-to-br from-[#38FFCD]/20 to-[#10E7FF]/20 rounded border border-[#38FFCD]/30"></div>
                          <div className="h-12 bg-gradient-to-br from-[#10E7FF]/20 to-[#38FFCD]/20 rounded border border-[#10E7FF]/30"></div>
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
              </div>
              
              {/* Floating Report Chip */}
              <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] px-3 py-1 rounded-full text-xs font-semibold shadow-[0_4px_12px_rgba(56,255,205,0.4)]">
                📊 Report
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebApplications;