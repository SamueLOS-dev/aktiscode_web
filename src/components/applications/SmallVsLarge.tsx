import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Users, BarChart3 } from 'lucide-react';
import SegmentedToggle from '../ui/SegmentedToggle';

const SmallVsLarge = () => {
  const [activeTab, setActiveTab] = useState<'quick' | 'complex'>('quick');

  const toggleOptions = [
    { id: 'quick' as const, label: 'Rýchle interné appky' },
    { id: 'complex' as const, label: 'Komplexné riešenia & SaaS' }
  ];

  return (
    <section className="relative z-10 py-20 bg-[rgba(0,23,66,0.3)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[40px] font-bold text-white mb-6 leading-[1.2]">
            Od malej appky po komplexné riešenie
          </h2>
        </div>

        {/* Segmented Toggle */}
        <div className="flex justify-center mb-12">
          <SegmentedToggle
            options={toggleOptions}
            value={activeTab}
            onChange={setActiveTab}
            ariaLabel="Výber typu riešenia"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <div className="space-y-8">
            {activeTab === 'quick' ? (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#001742]" />
                  </div>
                  <p className="text-lg text-white font-medium pt-3">
                    Hotový prototyp do 48 hodín.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#001742]" />
                  </div>
                  <p className="text-lg text-white font-medium pt-3">
                    Stačí nám povedať cieľ, ostatné spravíme my.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-[#001742]" />
                  </div>
                  <p className="text-lg text-white font-medium pt-3">
                    Jednoduché nasadenie bez starostí.
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6 text-[#001742]" />
                  </div>
                  <p className="text-lg text-white font-medium pt-3">
                    Vývoj tímom špecialistov na váš biznis plán.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                    <BarChart3 className="w-6 h-6 text-[#001742]" />
                  </div>
                  <p className="text-lg text-white font-medium pt-3">
                    Modulárne riešenia pripravené na rast.
                  </p>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#001742]" />
                  </div>
                  <p className="text-lg text-white font-medium pt-3">
                    Roadmapa a dlhodobá podpora.
                  </p>
                </div>
              </div>
            )}

            <Link
              to="/demo"
              className="inline-flex items-center gap-3 bg-transparent border border-[#38FFCD] text-[#38FFCD] font-semibold text-lg px-8 py-4 rounded-[14px] hover:bg-[#38FFCD]/10 hover:scale-[1.03] transition-all duration-200 mt-2"
            >
              Požiadať o demo zdarma
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Right - Visualization */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              {activeTab === 'quick' ? (
                // Wireframe to UI Animation
                <div className="relative">
                  <div className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    {/* Wireframe State */}
                    <div className="space-y-4 opacity-30">
                      <div className="h-4 border-2 border-dashed border-white/40 rounded"></div>
                      <div className="space-y-2">
                        <div className="h-2 border border-dashed border-white/40 rounded w-full"></div>
                        <div className="h-2 border border-dashed border-white/40 rounded w-3/4"></div>
                      </div>
                      <div className="h-8 border-2 border-dashed border-white/40 rounded"></div>
                    </div>
                    
                    {/* UI State (animated in) */}
                    <div className="absolute inset-6 space-y-4 animate-fade-in-delayed">
                      <div className="h-4 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded"></div>
                      <div className="space-y-2">
                        <div className="h-2 bg-white/60 rounded w-full"></div>
                        <div className="h-2 bg-white/60 rounded w-3/4"></div>
                      </div>
                      <div className="h-8 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded flex items-center justify-center">
                        <span className="text-[#001742] text-sm font-semibold">CTA</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                // Timeline Visualization
                <div className="relative">
                  <div className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-[20px] p-6 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                    <div className="flex items-center justify-between">
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full flex items-center justify-center mb-2">
                          <span className="text-[#001742] text-sm font-bold">MVP</span>
                        </div>
                        <span className="text-xs text-white/70">Týždeň 1-4</span>
                      </div>
                      
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] mx-4"></div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#10E7FF] to-[#38FFCD] rounded-full flex items-center justify-center mb-2">
                          <span className="text-[#001742] text-sm font-bold">V1</span>
                        </div>
                        <span className="text-xs text-white/70">Týždeň 5-8</span>
                      </div>
                      
                      <div className="flex-1 h-0.5 bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] mx-4"></div>
                      
                      <div className="text-center">
                        <div className="w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-full flex items-center justify-center mb-2">
                          <span className="text-[#001742] text-sm font-bold">V2</span>
                        </div>
                        <span className="text-xs text-white/70">Týždeň 9+</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmallVsLarge;