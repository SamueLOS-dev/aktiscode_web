import React from 'react';

const DemoHeader = () => {
  return (
    <div className="text-center mb-12">
      <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
        Požiadajte o <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent">demo zdarma</span>
      </h1>
      <p className="text-xl text-[#10E7FF]/80 max-w-3xl mx-auto">
        Ukážeme vám prototyp riešenia na mieru vašim potrebám
      </p>
    </div>
  );
};

export default DemoHeader;