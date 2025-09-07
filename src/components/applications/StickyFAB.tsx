import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Zap } from 'lucide-react';

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
          className="fixed bottom-6 right-6 z-50 w-[56px] h-[56px] bg-[#38FFCD] text-[#001742] rounded-full shadow-[0_14px_40px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_50px_rgba(0,0,0,0.45)] hover:scale-105 transition-all duration-200 lg:hidden animate-pulse-slow flex items-center justify-center"
        >
          <Zap className="w-6 h-6" />
        </Link>
      )}
    </>
  );
};

export default StickyFAB;