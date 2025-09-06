import React, { useState, useEffect } from 'react';

const StickySubNav = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  const navItems = [
    { id: 'web-applications', label: 'Web aplikácie' },
    { id: 'e-shops', label: 'E-shopy' },
    { id: 'mobile-applications', label: 'Mobilné aplikácie' },
    { id: 'desktop-applications', label: 'Desktopové aplikácie' },
    { id: 'ai-applications', label: 'AI v aplikácii' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 120);
      
      // Find active section
      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 150; // Offset for header height
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 72 + 56; // Header height + subnav height
      const elementPosition = element.offsetTop - headerOffset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  if (!isVisible) return null;

  return (
    <nav className="fixed top-[72px] left-0 right-0 z-40 bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border-b border-[rgba(16,231,255,0.25)] h-[56px]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center h-full overflow-x-auto scrollbar-hide">
          <div className="flex space-x-8 min-w-max">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative text-sm font-medium transition-colors duration-200 whitespace-nowrap py-2 ${
                  activeSection === item.id
                    ? 'text-white'
                    : 'text-white/70 hover:text-white'
                }`}
              >
                {item.label}
                {activeSection === item.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] rounded-full" />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default StickySubNav;