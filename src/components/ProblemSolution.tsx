import React, { useEffect, useState } from 'react';
import { X, Check, ChevronDown } from 'lucide-react';

const ProblemSolution = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [visibleCards, setVisibleCards] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate cards one by one
          const timer = setInterval(() => {
            setVisibleCards(prev => {
              if (prev.length < problems.length) {
                return [...prev, prev.length];
              }
              clearInterval(timer);
              return prev;
            });
          }, 200);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('problem-solution');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const problems = [
    "Stránka vyzerá pekne, ale neprináša zákazníkov.",
    "Projekty sa naťahujú týždne a mesiace.",
    "Komunikácia s programátormi je zdĺhavá a mätúca.",
    "Náklady na support tím neustále rastú.",
    "Potrebujete automatizáciu, ale všetko je zbytočne zložité.",
    "Máte nápad, ale nie stratégiu ani texty."
  ];

  const solutions = [
    "Web s dizajnom, ktorý predáva (UX/UI + SEO optimalizácia).",
    "Dodávka v dňoch, nie mesiacoch – vďaka AI a skúsenostiam.",
    "\"Done-for-you\" prístup – minimum vášho času, maximum našej práce.",
    "Chatboty a AI agenti dostupní 24/7 bez ďalších výdavkov.",
    "Jednoduché AI automatizácie pre web, e-maily, social a hovory.",
    "Kompletná stratégia + obsah vytvorený nami – vy sa sústredíte na biznis."
  ];

  const problemSolutionPairs = problems.map((problem, index) => ({
    problem,
    solution: solutions[index]
  }));

  return (
    <section id="problem-solution" className="py-20 bg-gradient-to-b from-[#001742] to-[#002855]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Vaše <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent">problémy poznáme</span>. Naše riešenia ich odstraňujú.
          </h2>
        </div>

        {/* Desktop: Two columns */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 xl:gap-20">
          {/* Problems Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-white mb-8 text-center">
              Vaše výzvy
            </h3>
            {problems.map((problem, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-red-500/10 to-transparent border border-red-500/20 transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-left' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-red-500/20 rounded-full flex items-center justify-center">
                    <X className="w-5 h-5 text-red-400" />
                  </div>
                </div>
                <p className="text-white text-lg font-medium">{problem}</p>
              </div>
            ))}
          </div>

          {/* Solutions Column */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-[#38FFCD] mb-8 text-center">
              Naše riešenia
            </h3>
            {solutions.map((solution, index) => (
              <div
                key={index}
                className={`flex items-start space-x-4 p-6 rounded-xl bg-gradient-to-r from-[#38FFCD]/10 to-transparent border border-[#38FFCD]/20 transition-all duration-500 ${
                  isVisible ? 'animate-slide-in-right' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 bg-[#38FFCD]/20 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-[#38FFCD]" />
                  </div>
                </div>
                <p className="text-[#38FFCD] text-lg font-semibold">{solution}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile/Tablet: Card layout */}
        <div className="lg:hidden space-y-12">
          {problemSolutionPairs.map((pair, index) => (
            <div
              key={index}
              className={`transition-all duration-700 shadow-2xl shadow-[#001742]/30 rounded-xl ${
                visibleCards.includes(index) ? 'animate-fade-in-up opacity-100' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Problem Card */}
              <div className="bg-[#001742]/80 backdrop-blur-sm rounded-t-xl p-6 border border-red-500/20 border-b-0">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-red-500/20 rounded-full flex items-center justify-center">
                      <X className="w-6 h-6 text-red-400" />
                    </div>
                  </div>
                  <div>
                    <p className="text-white text-lg font-bold leading-relaxed">{pair.problem}</p>
                  </div>
                </div>
              </div>

              {/* Solution Card */}
              <div 
                className="bg-gradient-to-br from-[#002855]/60 to-[#001742]/40 backdrop-blur-sm rounded-b-xl p-6 border border-[#38FFCD]/20 border-t-0 shadow-2xl shadow-[#38FFCD]/10"
                style={{ 
                  animationDelay: `${index * 0.2 + 0.3}s`,
                  animation: visibleCards.includes(index) ? 'fade-in-up 0.6s ease-out forwards' : 'none'
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 bg-[#38FFCD]/20 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-[#38FFCD]" />
                    </div>
                  </div>
                  <div>
                    <p className="text-[#38FFCD] text-lg font-semibold leading-relaxed">{pair.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;