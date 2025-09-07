import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  const [particles, setParticles] = useState<Array<{id: number, x: number, y: number, size: number, opacity: number}>>([]);

  useEffect(() => {
    // Generate particle data for neural network nodes
    const particleArray = Array.from({ length: 30 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.8 + 0.2,
    }));
    setParticles(particleArray);
  }, []);

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#001742] to-[#005DFF]" />
      
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent backdrop-blur-sm" />

      {/* Mobile Background Image */}

      {/* Neural Network Background */}
      <div className="absolute inset-0 opacity-40 min-h-screen">
        <svg className="w-full h-full min-h-screen" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
          {/* Neural network nodes */}
          {(() => {
            // Generate fixed node positions first
            const nodes = Array.from({ length: 40 }, (_, i) => {
              // Grid-based positioning with increased randomness
              const cols = 8;
              const rows = 5;
              const col = i % cols;
              const row = Math.floor(i / cols);
              
              // Base grid positions
              const baseX = 50 + col * 240; // 240px spacing
              const baseY = 50 + row * 216; // 216px spacing
              
              // Increased random offset for more natural look
              const randomX = baseX + (Math.random() - 0.5) * 160; // ±80px variation
              const randomY = baseY + (Math.random() - 0.5) * 120; // ±60px variation
              
              return {
                id: i,
                x: Math.max(50, Math.min(1870, randomX)), // Keep within bounds
                y: Math.max(50, Math.min(1030, randomY)), // Keep within bounds
                size: 4 + Math.random() * 6,
                color: Math.random() > 0.6 ? '#10E7FF' : '#38FFCD'
              };
            });

            // Generate connections between nodes
            const connections = [];
            for (let i = 0; i < nodes.length; i++) {
              for (let j = i + 1; j < nodes.length; j++) {
                const distance = Math.sqrt(
                  Math.pow(nodes[j].x - nodes[i].x, 2) + 
                  Math.pow(nodes[j].y - nodes[i].y, 2)
                );
                
                // Only connect nodes within reasonable distance
                if (distance > 30 && distance < 250 && Math.random() > 0.7) {
                  connections.push({
                    startX: nodes[i].x,
                    startY: nodes[i].y,
                    endX: nodes[j].x,
                    endY: nodes[j].y,
                    id: `${i}-${j}`
                  });
                }
                
                // Add second chance for more connections (doubling effect)
                if (distance > 30 && distance < 250 && Math.random() > 0.6) {
                  connections.push({
                    startX: nodes[i].x,
                    startY: nodes[i].y,
                    endX: nodes[j].x,
                    endY: nodes[j].y,
                    id: `${i}-${j}-2`
                  });
                }
              }
            }

            return (
              <>
                {/* Render connections first (behind nodes) */}
                {connections.map((connection, i) => (
                  <line
                    key={`connection-${connection.id}`}
                    x1={connection.startX}
                    y1={connection.startY}
                    x2={connection.endX}
                    y2={connection.endY}
                    stroke={i % 2 === 0 ? '#10E7FF' : '#38FFCD'}
                    strokeWidth={0.5 + Math.random() * 1.5}
                    opacity={0.2 + Math.random() * 0.4}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.1;0.6;0.1"
                      dur={`${6 + Math.random() * 4}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.1}s`}
                    />
                    <animate
                      attributeName="stroke-width"
                      values={`${0.3 + Math.random() * 0.5};${1 + Math.random() * 2};${0.3 + Math.random() * 0.5}`}
                      dur={`${8 + Math.random() * 3}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.15}s`}
                    />
                  </line>
                ))}

                {/* Render nodes on top */}
                {nodes.map((node, i) => (
                  <g key={`node-${node.id}`}>
                    {/* Node glow */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={8 + Math.random() * 8}
                      fill={node.color}
                      opacity="0.1"
                    >
                      <animate
                        attributeName="r"
                        values={`${6 + Math.random() * 6};${12 + Math.random() * 12};${6 + Math.random() * 6}`}
                        dur={`${5 + Math.random() * 2}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.4}s`}
                      />
                    </circle>
                    
                    {/* Node circle */}
                    <circle
                      cx={node.x}
                      cy={node.y}
                      r={node.size}
                      fill={node.color}
                      opacity="0.8"
                    >
                      <animate
                        attributeName="r"
                        values={`${node.size * 0.8};${node.size * 1.2};${node.size * 0.8}`}
                        dur={`${4 + Math.random() * 3}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.2}s`}
                      />
                      <animate
                        attributeName="opacity"
                        values="0.4;1;0.4"
                        dur={`${3 + Math.random() * 2}s`}
                        repeatCount="indefinite"
                        begin={`${i * 0.3}s`}
                      />
                    </circle>
                  </g>
                ))}

                {/* Data flow particles along connections */}
                {connections.slice(0, 50).map((connection, i) => (
                  <circle
                    key={`particle-${i}`}
                    r={1 + Math.random() * 2}
                    fill={i % 3 === 0 ? '#38FFCD' : '#10E7FF'}
                    opacity="0.8"
                  >
                    <animateMotion
                      dur={`${8 + Math.random() * 4}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.5}s`}
                    >
                      <path d={`M${connection.startX},${connection.startY} L${connection.endX},${connection.endY}`} />
                    </animateMotion>
                    <animate
                      attributeName="opacity"
                      values="0;1;0"
                      dur={`${6 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                      begin={`${i * 0.3}s`}
                    />
                  </circle>
                ))}
              </>
            );
          })()}
        </svg>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 py-8 sm:py-12 lg:py-16">
        <div className="lg:grid lg:grid-cols-[3fr_2fr] lg:gap-8 lg:gap-12 xl:gap-16 2xl:gap-20 lg:items-center lg:min-h-[calc(100vh-8rem)]">
        {/* Content - Mobile: Column, Desktop: Left */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-fade-in-up text-center lg:text-left pt-8 sm:pt-12 lg:pt-20">
          {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight" itemProp="headline">
            <span itemProp="headline">Premeníme váš nápad na moderný softvér,<br />
              ktorý <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent">prináša výsledky</span>
            </span>
          </h1>

          {/* Subheading */}
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-[#10E7FF] max-w-none lg:max-w-2xl leading-relaxed">
            Využívame najnovšie AI technológie a špičkové programátorské skúsenosti, aby sme vám dodali riešenia, ktoré sú nielen rýchle a dostupné, ale aj vytvorené presne na mieru vašim potrebám a cieľom
          </h2>

          {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center lg:justify-start">
            {/* Primary CTA */}
              <Link
                to="/demo"
                className="group relative bg-[#38FFCD] text-[#001742] font-semibold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-105 transition-all duration-300 shadow-lg shadow-[#38FFCD]/30 hover:shadow-xl hover:shadow-[#38FFCD]/50"
                aria-label="Požiadajte o demo softvérového riešenia zdarma"
              >
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                Demo zdarma
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              </Link>

            {/* Secondary CTA */}
            <button 
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                className="group relative bg-transparent border-2 border-[#38FFCD] text-[#38FFCD] font-semibold text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-3 sm:py-4 rounded-xl hover:bg-[#38FFCD]/10 hover:scale-105 transition-all duration-300"
                aria-label="Zistiť viac o našich programátorských službách"
            >
                <span className="flex items-center gap-2 sm:gap-3 justify-center">
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                Zistiť viac o našich službách
              </span>
            </button>
          </div>
          </div>

          {/* Mobile Image - Below text */}
          <div className="lg:hidden mt-8 flex justify-center">
            <img 
              src={new URL('../assets/hero_aktiscode2.webp', import.meta.url).href}
              alt="Vývoj softvéru na mieru pre firmy – moderné weby, aplikácie a AI riešenia | AktisCode" 
              className="w-full max-w-sm h-auto object-contain"
              width="384"
              height="384"
              loading="eager"
              fetchPriority="high"
            />
          </div>

          {/* Desktop Image - Right side */}
          <div className="hidden lg:flex relative animate-fade-in-up animation-delay-400 justify-center">
            <img 
              src={new URL('../assets/hero_aktiscode2.webp', import.meta.url).href}
              alt="Vývoj softvéru na mieru pre firmy – moderné weby, aplikácie a AI riešenia | AktisCode" 
              className="w-full max-w-sm xl:max-w-lg h-auto object-contain"
              width="512"
              height="512"
              loading="eager"
              fetchPriority="high"
            />
          </div>
        </div>
      </div>

      {/* Wave transition to next section */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg className="relative block w-full h-20" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path
            d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
            fill="#001742"
          >
            <animate
              attributeName="d"
              values="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z;
                      M0,80 C300,40 600,120 900,80 C1050,50 1150,110 1200,80 L1200,120 L0,120 Z;
                      M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 L1200,120 L0,120 Z"
              dur="8s"
              repeatCount="indefinite"
            />
          </path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;