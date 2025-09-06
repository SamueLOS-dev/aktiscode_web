import React, { useState, useEffect } from 'react';
import { Bell, Wifi, Settings } from 'lucide-react';

const MobileApplications = () => {
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setShowNotification(true);
      setTimeout(() => setShowNotification(false), 2000);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const benefits = [
    {
      icon: Bell,
      text: 'Push notifikácie pre okamžitú komunikáciu.'
    },
    {
      icon: Wifi,
      text: 'Offline režim pre spoľahlivý chod.'
    },
    {
      icon: Settings,
      text: 'Jednoduchá administrácia obsahu.'
    }
  ];

  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section id="mobile-applications" className="relative z-10 py-20 bg-[#001742]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-[36px] lg:text-[40px] font-bold text-white leading-[1.2]">
                Aplikácie do vrecka
              </h2>
              <p className="text-lg lg:text-xl text-white/80 font-medium">
                Moderné UX, offline režim a notifikácie vždy po ruke.
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
              className="bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] font-semibold text-lg px-8 py-4 rounded-[14px] hover:scale-[1.03] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)]"
            >
              Zobraziť demo mobilnej appky
            </button>
          </div>

          {/* Right - Mobile Visualization */}
          <div className="flex justify-center">
            <div className="relative flex gap-4">
              {/* Light Theme Phone */}
              <div className="relative bg-gray-900 rounded-[24px] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] w-32 h-64">
                <div className="bg-white rounded-[20px] h-full flex flex-col overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-8 flex items-center justify-between px-4 text-xs text-gray-600 bg-gray-50">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-gray-300 rounded-sm"></div>
                      <div className="w-1 h-2 bg-gray-300 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex-1 p-3 space-y-3">
                    <div className="h-3 bg-[#001742] rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-8 bg-gray-100 rounded border"></div>
                      <div className="h-8 bg-gray-100 rounded border"></div>
                      <div className="h-8 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded flex items-center justify-center">
                        <span className="text-[#001742] text-xs font-bold">Action</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dark Theme Phone */}
              <div className="relative bg-gray-900 rounded-[24px] p-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] w-32 h-64">
                <div className="bg-gray-900 rounded-[20px] h-full flex flex-col overflow-hidden">
                  {/* Status Bar */}
                  <div className="h-8 flex items-center justify-between px-4 text-xs text-white bg-gray-800">
                    <span className="font-medium">9:41</span>
                    <div className="flex items-center gap-1">
                      <div className="w-4 h-2 bg-white/60 rounded-sm"></div>
                      <div className="w-1 h-2 bg-white/60 rounded-sm"></div>
                    </div>
                  </div>
                  
                  {/* App Content */}
                  <div className="flex-1 p-3 space-y-3">
                    <div className="h-3 bg-white rounded w-3/4"></div>
                    <div className="space-y-2">
                      <div className="h-8 bg-gray-800 rounded border border-gray-700"></div>
                      <div className="h-8 bg-gray-800 rounded border border-gray-700"></div>
                      <div className="h-8 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded flex items-center justify-center">
                        <span className="text-[#001742] text-xs font-bold">Action</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Notification Toast */}
              {showNotification && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[rgba(0,23,66,0.95)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] text-white px-4 py-2 rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] animate-fade-in-up text-xs flex items-center gap-2 whitespace-nowrap">
                <Bell className="w-3 h-3 text-[#38FFCD]" />
                Nová správa
              </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileApplications;