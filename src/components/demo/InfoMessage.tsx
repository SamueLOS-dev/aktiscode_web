import React from 'react';

const InfoMessage = () => {
  return (
    <div className="mb-8 bg-[rgba(56,255,205,0.1)] backdrop-blur-[16px] border border-[rgba(56,255,205,0.25)] rounded-2xl p-6">
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-6 h-6 bg-[#38FFCD] rounded-full flex items-center justify-center mt-1">
          <span className="text-[#001742] text-sm font-bold">i</span>
        </div>
        <p className="text-[#38FFCD] leading-relaxed">
          Pre čo najlepší výsledok a čo najmenší čas od vás v budúcnosti vyplňte prosím formulár čo najdôslednejšie. Vyplňte všetky povinné políčka a políčka, ktoré uznáte za vhodné.
        </p>
      </div>
    </div>
  );
};

export default InfoMessage;