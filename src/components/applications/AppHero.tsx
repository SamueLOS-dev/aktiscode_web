import React, { useEffect, useState } from 'react';
import { ArrowRight, Zap, Clock, Target } from 'lucide-react';

const AppHero = () => {
  const [showShine, setShowShine] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowShine(true);
      const interval = setInterval(() => {
        setShowShine(false);
        setTimeout(() => setShowShine(true), 100);
      }, 2500);
      return () => clearInterval(interval);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <section className="relative z-10 py-[120px] lg:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-6">
              <h1 className="text-[36px] lg:text-[56px] font-extrabold text-white leading-[1.15] lg:leading-[1.1]">
                Aplikácie, ktoré <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent">posúvajú váš biznis dopredu</span>.
              </h1>
              
              <p className="text-lg lg:text-xl text-white/80 font-medium leading-relaxed">
                Web, e-shop, mobil či desktop. Od nápadu po nasadenie — s možnosťou AI.
              </p>
            </div>

            <div className="space-y-4">
              <button
                onClick={scrollToDemo}
                className={`group relative bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] font-semibold text-lg px-8 py-4 rounded-[14px] hover:scale-[1.03] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_14px_40px_rgba(0,0,0,0.35)] flex items-center gap-3 mx-auto lg:mx-0 w-fit min-w-[220px] h-[56px] justify-center overflow-hidden ${
                  showShine ? 'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/12 before:to-transparent before:translate-x-[-100%] before:animate-[shine_0.6s_ease-out] before:skew-x-12' : ''
                }`}
              >
                Požiadať o demo zdarma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              
              <p className="text-xs lg:text-sm text-white/70 font-medium">
                Prototyp do 48 hodín • Bez záväzkov
              </p>
            </div>

            {/* Chip Benefits */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Zap className="w-4 h-4 text-[#38FFCD]" />
                <span className="text-sm font-medium text-white">Rýchle dodanie</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Clock className="w-4 h-4 text-[#38FFCD]" />
                <span className="text-sm font-medium text-white">Minimum vášho času</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2">
                <Target className="w-4 h-4 text-[#38FFCD]" />
                <span className="text-sm font-medium text-white">End-to-end riešenie</span>
              </div>
            </div>
          </div>

          {/* Right Column - Device Cluster */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Device Cluster with Parallax */}
              <div className="relative transform hover:translate-y-[-6px] transition-transform duration-500">
                {/* Laptop */}
                <div className="relative z-20 bg-gray-800 rounded-lg p-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                  <div className="bg-white rounded-md aspect-[16/10] flex flex-col">
                    {/* Browser Chrome */}
                    <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                      <div className="flex gap-1">
                        <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                      </div>
                      <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-xs text-gray-500">
                        app.example.com
                      </div>
                    </div>
                    {/* App Content */}
                    <div className="flex-1 p-4 space-y-3">
                      <div className="h-4 bg-[#001742] rounded w-3/4"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded w-full"></div>
                        <div className="h-2 bg-gray-200 rounded w-5/6"></div>
                      </div>
                      <div className="flex gap-2 pt-2">
                        <div className="h-8 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded flex-1"></div>
                        <div className="h-8 bg-gray-200 rounded w-20"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile Phone */}
                <div className="absolute -bottom-4 -right-4 z-30 bg-gray-900 rounded-[20px] p-1 shadow-[0_10px_30px_rgba(0,0,0,0.25)] w-20 h-36">
                  <div className="bg-white rounded-[16px] h-full flex flex-col">
                    {/* Status Bar */}
                    <div className="h-6 flex items-center justify-between px-2 text-[8px] text-gray-600">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-3 h-2 bg-gray-300 rounded-sm"></div>
                        <div className="w-1 h-2 bg-gray-300 rounded-sm"></div>
                      </div>
                    </div>
                    {/* App Content */}
                    <div className="flex-1 p-2 space-y-2">
                      <div className="h-2 bg-[#001742] rounded w-3/4"></div>
                      <div className="space-y-1">
                        <div className="h-1 bg-gray-200 rounded"></div>
                        <div className="h-1 bg-gray-200 rounded w-4/5"></div>
                      </div>
                      <div className="h-4 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded mt-2"></div>
                    </div>
                  </div>
                </div>

                {/* Desktop Panel */}
                <div className="absolute -top-4 -left-4 z-10 bg-gray-700 rounded-lg p-2 shadow-[0_10px_30px_rgba(0,0,0,0.25)] w-24 h-20">
                  <div className="bg-gray-100 rounded h-full flex flex-col">
                    {/* Title Bar */}
                    <div className="h-4 bg-gray-200 rounded-t flex items-center px-1">
                      <div className="flex gap-1">
                        <div className="w-1 h-1 bg-red-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-yellow-400 rounded-full"></div>
                        <div className="w-1 h-1 bg-green-400 rounded-full"></div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex-1 p-1 space-y-1">
                      <div className="h-1 bg-[#001742] rounded w-3/4"></div>
                      <div className="h-1 bg-gray-300 rounded w-full"></div>
                      <div className="h-1 bg-gray-300 rounded w-2/3"></div>
                      <div className="h-2 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded mt-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppHero;