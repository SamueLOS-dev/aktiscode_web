import React, { useState, useEffect, useRef } from 'react';

const BeforeAfterSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    updateSliderPosition(e);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      updateSliderPosition(e);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const updateSliderPosition = (e: React.MouseEvent) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setSliderPosition(percentage);
    }
  };

  useEffect(() => {
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (isDragging && sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
        setSliderPosition(percentage);
      }
    };

    const handleGlobalMouseUp = () => {
      setIsDragging(false);
    };

    if (isDragging) {
      document.addEventListener('mousemove', handleGlobalMouseMove);
      document.addEventListener('mouseup', handleGlobalMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleGlobalMouseMove);
      document.removeEventListener('mouseup', handleGlobalMouseUp);
    };
  }, [isDragging]);

  return (
    <section className="relative z-10 py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Rozdiel, ktorý <span className="text-[#38FFCD]">pocítite</span>
          </h2>
          <p className="text-xl text-[#10E7FF]/80">
            Porovnajte sami, ako môže váš web vyzerať, keď je navrhnutý pre zákazníkov a výsledky.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Before/After Image Comparison Slider */}
          <div className="relative bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8">
            {/* Labels */}
            <div className="flex justify-between items-center mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <h3 className="text-xl font-bold text-red-400">Pred</h3>
              </div>
              <div className="flex items-center space-x-2">
                <h3 className="text-xl font-bold text-[#38FFCD]">Po</h3>
                <div className="w-3 h-3 bg-[#38FFCD] rounded-full"></div>
              </div>
            </div>
            
            {/* Image Comparison Container */}
            <div 
              ref={sliderRef}
              className="relative w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl cursor-col-resize select-none"
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUp}
              onMouseLeave={handleMouseUp}
            >
              {/* Before Image (Background) */}
              <div className="relative w-full">
                <img 
                  src={new URL('../../assets/web_develompent/aktiscode_web_after.webp', import.meta.url).href}
                  alt="Web po úprave - moderný, konverzný dizajn" 
                  className="w-full h-auto object-cover"
                  draggable={false}
                />
              </div>
              
              {/* After Image (Overlay) */}
              <div 
                className="absolute top-0 left-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img 
                  src={new URL('../../assets/web_develompent/aktiscode_web_before.webp', import.meta.url).href}
                  alt="Web pred úpravou - nudný, neprehľadný dizajn" 
                  className="w-full h-full object-cover"
                  draggable={false}
                />
              </div>
              
              {/* Slider Line */}
              <div 
                className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10 pointer-events-none"
                style={{ left: `${sliderPosition}%` }}
              >
                {/* Slider Handle */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg border-2 border-[#38FFCD] flex items-center justify-center pointer-events-auto cursor-col-resize">
                  <div className="flex space-x-0.5">
                    <div className="w-0.5 h-4 bg-[#38FFCD] rounded-full"></div>
                    <div className="w-0.5 h-4 bg-[#38FFCD] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <p className="text-[#10E7FF]/60 text-sm mt-6 text-center">
              Posuňte slider a porovnajte rozdiel v dizajne
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;