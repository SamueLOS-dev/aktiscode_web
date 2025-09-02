import React, { useState } from 'react';
import { Calendar, DollarSign, MessageCircle, ShoppingCart, Send, ChevronLeft, ChevronRight } from 'lucide-react';

const PracticalScenarios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const scenarios = [
    {
      icon: Calendar,
      title: "Lead kvalifikácia + booking",
      description: "Chat → booking priamo v kalendári."
    },
    {
      icon: DollarSign,
      title: "Cenové dopyty",
      description: "Okamžitá odpoveď alebo prepojenie na človeka."
    },
    {
      icon: MessageCircle,
      title: "Follow-up na neodpovedané správy",
      description: "AI jemne pripomenie ponuku."
    },
    {
      icon: ShoppingCart,
      title: "Objednávky mimo pracovného času",
      description: "Potvrdí objednávku aj v noci či cez víkend."
    },
    {
      icon: Send,
      title: "Outreach kampane",
      description: "Automatické e-maily alebo správy s personalizáciou."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % scenarios.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + scenarios.length) % scenarios.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <section className="relative z-10 py-20 bg-[rgba(0,23,66,0.3)]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Kde AI pomôže <span className="text-[#38FFCD]">najviac</span>
          </h2>
        </div>

        {/* Desktop: Grid view */}
        <div className="hidden lg:grid lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {scenarios.map((scenario, index) => (
            <div
              key={index}
              className="group bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-6 hover:border-[#38FFCD]/50 hover:shadow-[0_0_24px_rgba(56,255,205,0.15)] transition-all duration-500 text-center"
            >
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <scenario.icon className="w-8 h-8 text-[#001742]" />
              </div>

              <h3 className="text-lg font-bold text-white mb-4 group-hover:text-[#38FFCD] transition-colors duration-300">
                {scenario.title}
              </h3>
              <p className="text-[#10E7FF]/80 text-sm group-hover:opacity-100 transition-opacity duration-300">
                {scenario.description}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile/Tablet: Carousel */}
        <div className="lg:hidden">
          <div className="relative">
            {/* Carousel Container */}
            <div className="overflow-hidden rounded-2xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {scenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] p-8 text-center"
                  >
                    <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mx-auto mb-6">
                      <scenario.icon className="w-10 h-10 text-[#001742]" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-4">
                      {scenario.title}
                    </h3>
                    <p className="text-[#10E7FF]/80 text-lg">
                      {scenario.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-full flex items-center justify-center text-[#38FFCD] hover:bg-[rgba(56,255,205,0.3)] transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-[rgba(56,255,205,0.2)] backdrop-blur-sm border border-[#38FFCD]/40 rounded-full flex items-center justify-center text-[#38FFCD] hover:bg-[rgba(56,255,205,0.3)] transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {scenarios.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide
                      ? 'bg-[#38FFCD] scale-125'
                      : 'bg-[#38FFCD]/30 hover:bg-[#38FFCD]/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PracticalScenarios;