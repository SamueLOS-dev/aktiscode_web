import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const StickyFAB = () => {
  const [showStickyFab, setShowStickyFab] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyFab(window.scrollY > 800);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {showStickyFab && (
        <Link
          to="/demo"
          className="fixed bottom-6 right-6 z-50 bg-[#38FFCD] text-[#001742] font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 lg:hidden animate-pulse-slow"
        >
          Demo zdarma
        </Link>
      )}
    </>
  );
};

export default StickyFAB;