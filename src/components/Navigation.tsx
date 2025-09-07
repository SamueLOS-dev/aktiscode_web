import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, X, Menu, Monitor, Bot, Code } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isServicesAccordionOpen, setIsServicesAccordionOpen] = useState(false);
  const megaMenuRef = useRef<HTMLDivElement>(null);
  const servicesLinkRef = useRef<HTMLButtonElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside megamenu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node) &&
        servicesLinkRef.current &&
        !servicesLinkRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMegaMenuOpen(false);
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const services = [
    {
      title: 'Web development',
      href: '/web-development',
      description: 'Konverzný web/eshop: UX/UI, SEO, rýchlosť, škálovanie.',
      icon: Monitor
    },
    {
      title: 'AI automatizácie',
      href: '/ai-automatizacie',
      description: 'Chatboty, call agenti, email/social automations, integrácie.',
      icon: Bot
    },
    {
      title: 'Aplikácie',
      href: '/aplikacie', 
      description: 'Web, mobil & desktop na mieru, od prototypu po produkciu.',
      icon: Code
    }
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#001742] shadow-[0_8px_24px_rgba(0,0,0,0.25)]'
            : 'bg-transparent backdrop-blur-[12px] border-b border-[rgba(16,231,255,0.15)]'
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-14 md:h-16 lg:h-18">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="flex items-center">
                <img
                  src="/src/assets/aktiscode_logo-min.png"
                  alt="AktisCode"
                  className="h-8 md:h-10 w-auto"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {/* Services with Megamenu */}
              <div className="relative">
                <button
                  ref={servicesLinkRef}
                  onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  className="flex items-center space-x-1 text-white font-medium text-lg hover:text-[#10E7FF] transition-colors duration-200 group"
                  aria-expanded={isMegaMenuOpen}
                  aria-haspopup="true"
                >
                  <span className="relative">
                    Služby
                    <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isMegaMenuOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>

                {/* Megamenu */}
                {isMegaMenuOpen && (
                  <div
                    ref={megaMenuRef}
                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[600px] bg-[rgba(0,23,66,0.8)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl shadow-[0_24px_48px_rgba(0,0,0,0.35)] p-6"
                    role="menu"
                    aria-labelledby="services-menu"
                    onMouseLeave={() => setIsMegaMenuOpen(false)}
                  >
                    {/* Arrow */}
                    <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[rgba(0,23,66,0.8)] border-l border-t border-[rgba(16,231,255,0.25)] rotate-45"></div>
                    
                    <div className="grid gap-4">
                      {services.map((service, index) => (
                        <Link
                          key={index}
                          to={service.href}
                          className="flex items-start space-x-4 p-4 rounded-xl hover:bg-[rgba(56,255,205,0.1)] hover:border-[#38FFCD] border border-transparent transition-all duration-200 group"
                          role="menuitem"
                        >
                          <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                            <service.icon className="w-6 h-6 text-[#001742]" />
                          </div>
                          <div>
                            <h3 className="text-white font-semibold text-lg mb-1 group-hover:text-[#38FFCD] transition-colors duration-200">
                              {service.title}
                            </h3>
                            <p className="text-[#10E7FF] text-sm opacity-80">
                              {service.description}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Other nav items */}
              {/* Portfolio link - temporarily hidden */}
              {/* <Link
                to="/portfolio"
                className="text-white font-medium text-lg hover:text-[#10E7FF] transition-colors duration-200 relative group"
              >
                Portfólio
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link> */}
              <Link
                to="/kontakt"
                className="text-white font-medium text-lg hover:text-[#10E7FF] transition-colors duration-200 relative group"
              >
                Kontakt
                <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] transition-all duration-200 group-hover:w-full group-hover:left-0"></span>
              </Link>
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <a
                to="/demo"
                className="bg-[#38FFCD] text-[#001742] font-semibold px-6 py-3 rounded-xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(56,255,205,0.45)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#10E7FF] focus:ring-offset-2 focus:ring-offset-[#001742]"
                aria-label="Požiadajte o demo softvérového riešenia zdarma"
              >
                Demo zdarma
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-white p-2 hover:text-[#10E7FF] transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div
            className="absolute right-0 top-0 h-full w-[90%] bg-[rgba(0,23,66,0.96)] backdrop-blur-[16px] transform transition-transform duration-220 ease-out"
            role="dialog"
            aria-modal="true"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-[rgba(16,231,255,0.15)]">
              <img
                src="/src/assets/aktiscode_logo-min.png"
                alt="AktisCode"
                className="h-8 w-auto"
              />
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white hover:text-[#10E7FF] transition-colors duration-200 p-2"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Menu Content */}
            <div className="p-6 space-y-6">
              {/* CTA Button */}
              <Link
                to="/demo"
                className="block w-full bg-[#38FFCD] text-[#001742] font-semibold text-center py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] transition-all duration-300 text-lg"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Demo zdarma
              </Link>

              {/* Services Accordion */}
              <div>
                <button
                  onClick={() => setIsServicesAccordionOpen(!isServicesAccordionOpen)}
                  className="flex items-center justify-between w-full text-white font-medium text-xl py-3 hover:text-[#10E7FF] transition-colors duration-200"
                  aria-expanded={isServicesAccordionOpen}
                >
                  <span>Služby</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-200 ${
                      isServicesAccordionOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                
                {isServicesAccordionOpen && (
                  <div className="mt-2 space-y-2 pl-4">
                    {services.map((service, index) => (
                      <Link
                        key={index}
                        to={service.href}
                        className="block text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-200 py-2 text-lg"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {service.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other menu items */}
              {/* Portfolio link - temporarily hidden */}
              {/* <Link
                to="/portfolio"
                className="block text-white font-medium text-xl py-3 hover:text-[#10E7FF] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Portfólio
              </Link> */}
              <Link
                to="/kontakt"
                className="block text-white font-medium text-xl py-3 hover:text-[#10E7FF] transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navigation;