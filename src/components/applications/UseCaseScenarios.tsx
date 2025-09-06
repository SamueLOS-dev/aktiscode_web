import React, { useState } from 'react';
import { Heart, Briefcase, Truck, GraduationCap, Factory, MoreHorizontal, ChevronLeft, ChevronRight } from 'lucide-react';

const UseCaseScenarios = () => {
  const [activeFilter, setActiveFilter] = useState('Zdravotníctvo');
  const [currentSlide, setCurrentSlide] = useState(0);

  const filters = [
    { name: 'Zdravotníctvo', icon: Heart },
    { name: 'Služby', icon: Briefcase },
    { name: 'Logistika', icon: Truck },
    { name: 'Vzdelávanie', icon: GraduationCap },
    { name: 'Výroba', icon: Factory },
    { name: 'Iné', icon: MoreHorizontal }
  ];

  const scenarios = {
    'Zdravotníctvo': [
      {
        title: 'Objednávací systém pre ambulanciu',
        points: [
          'Rezervácie a pripomienky pacientom.',
          'Prehľad termínov pre celý tím.',
          'Bezpečné a GDPR-friendly riešenie.'
        ]
      },
      {
        title: 'Pacientsky portál',
        points: [
          'Online prístup k výsledkom vyšetrení.',
          'História návštev a liekov.',
          'Komunikácia s lekárom cez chat.'
        ]
      },
      {
        title: 'Správa zdravotných záznamov',
        points: [
          'Digitalizácia papierových záznamov.',
          'Rýchle vyhľadávanie v histórii.',
          'Automatické zálohovanie dát.'
        ]
      }
    ],
    'Služby': [
      {
        title: 'Rezervačný systém pre salón',
        points: [
          'Online booking s kalendárom.',
          'SMS pripomienky klientom.',
          'Správa služieb a cien.'
        ]
      },
      {
        title: 'CRM pre poradcov',
        points: [
          'Sledovanie klientov a projektov.',
          'Automatické faktúry a ponuky.',
          'Reporty výkonnosti tímu.'
        ]
      }
    ],
    'Logistika': [
      {
        title: 'Sledovanie zásielok',
        points: [
          'Real-time tracking pre klientov.',
          'Optimalizácia trás pre vodičov.',
          'Automatické notifikácie o doručení.'
        ]
      }
    ],
    'Vzdelávanie': [
      {
        title: 'E-learning platforma',
        points: [
          'Online kurzy s videami a testami.',
          'Sledovanie pokroku študentov.',
          'Certifikáty po dokončení.'
        ]
      }
    ],
    'Výroba': [
      {
        title: 'Správa výrobných procesov',
        points: [
          'Sledovanie stavu objednávok.',
          'Plánovanie výroby a materiálov.',
          'Kvalitné reporty pre management.'
        ]
      }
    ],
    'Iné': [
      {
        title: 'Custom riešenie pre váš biznis',
        points: [
          'Analýza špecifických potrieb.',
          'Návrh na mieru vašich procesov.',
          'Flexibilné rozšírenia do budúcna.'
        ]
      }
    ]
  };

  const currentScenarios = scenarios[activeFilter] || [];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % currentScenarios.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + currentScenarios.length) % currentScenarios.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative z-10 py-20 bg-[rgba(0,23,66,0.3)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-[36px] lg:text-[40px] font-bold text-white mb-6 leading-[1.2]">
            Riešenia, ktoré sa prispôsobia vášmu biznisu
          </h2>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 overflow-x-auto pb-2">
          {filters.map((filter) => (
            <button
              key={filter.name}
              onClick={() => {
                setActiveFilter(filter.name);
                setCurrentSlide(0);
              }}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                activeFilter === filter.name
                  ? 'bg-[rgba(56,255,205,0.12)] text-[#38FFCD] border-b-2 border-[#38FFCD]'
                  : 'text-white/70 hover:text-white hover:bg-white/5'
              }`}
            >
              <filter.icon className="w-4 h-4" />
              {filter.name}
            </button>
          ))}
        </div>

        {/* Desktop: Cards Grid */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8">
          {currentScenarios.map((scenario, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-[20px] p-6 hover:border-[#38FFCD]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-all duration-200"
            >
              <h3 className="text-lg font-semibold text-white mb-6 group-hover:text-[#38FFCD] transition-colors duration-200">
                {scenario.title}
              </h3>
              
              <div className="space-y-4 mb-6">
                {scenario.points.map((point, pointIndex) => (
                  <div key={pointIndex} className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-[#38FFCD] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-white/80 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <button className="text-[#38FFCD] text-sm font-medium hover:underline transition-all duration-200">
                Pozrieť podobné demo
              </button>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-[20px]">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {currentScenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] p-6"
                  >
                    <h3 className="text-xl font-semibold text-white mb-6">
                      {scenario.title}
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      {scenario.points.map((point, pointIndex) => (
                        <div key={pointIndex} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-[#38FFCD] rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-white/80 leading-relaxed">{point}</p>
                        </div>
                      ))}
                    </div>

                    <button className="text-[#38FFCD] font-medium hover:underline transition-all duration-200">
                      Pozrieť podobné demo
                    </button>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            {currentScenarios.length > 1 && (
              <div className="flex justify-center items-center mt-6 space-x-4">
                {/* Left Arrow */}
                <button
                  onClick={prevSlide}
                  className="w-8 h-8 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-full flex items-center justify-center text-[#38FFCD] hover:bg-[rgba(56,255,205,0.3)] transition-all duration-200"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>

                {/* Dots */}
                <div className="flex space-x-2">
                  {currentScenarios.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => goToSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-200 ${
                        index === currentSlide
                          ? 'bg-[#38FFCD] scale-125'
                          : 'bg-[#38FFCD]/30 hover:bg-[#38FFCD]/50'
                      }`}
                    />
                  ))}
                </div>

                {/* Right Arrow */}
                <button
                  onClick={nextSlide}
                  className="w-8 h-8 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-full flex items-center justify-center text-[#38FFCD] hover:bg-[rgba(56,255,205,0.3)] transition-all duration-200"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseScenarios;