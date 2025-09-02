import React, { useState, useEffect } from 'react';

const StickyFAB = () => {
  const [showStickyFab, setShowStickyFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyFab(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToDemo = () => {
    // In a real app, this would scroll to demo form or navigate to /demo
    window.location.href = '/demo';
  };

  return (
    <>
      {showStickyFab && (
        <button
          onClick={scrollToDemo}
          className="fixed bottom-6 right-6 z-50 bg-[#38FFCD] text-[#001742] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 lg:hidden animate-pulse-slow"
        >
          Demo zdarma
        </button>
      )}
    </>
  );
};

export default StickyFAB;