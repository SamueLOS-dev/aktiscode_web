import React from 'react';
import { Mail, Phone, MapPin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#001742] pt-16 pb-6" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img
                src="/src/assets/aktiscode_logo-min.png"
                alt="AktisCode"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-[#10E7FF] opacity-80 leading-relaxed">
              Premeníme váš nápad na moderný softvér, ktorý prináša výsledky
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#38FFCD] mb-4">Navigácia</h3>
            <ul className="space-y-3">
              {[
                { name: 'Domov', href: '/' },
                { name: 'Tvorba webových stránok', href: '/web-development' },
                { name: 'AI automatizácie pre firmy', href: '/ai-automatizacie' },
                { name: 'Vývoj mobilných aplikácií', href: '/aplikacie' },
                // { name: 'Portfólio', href: '/portfolio' },
                { name: 'Kontakt', href: '/kontakt' }
              ].map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300 text-lg"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-[#38FFCD] mb-4">Kontakt</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#10E7FF]" />
                <a
                  href="mailto:contact@aktiscode.com"
                  className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300"
                >
                  contact@aktiscode.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#10E7FF]" />
                <a
                  href="tel:+421948480654"
                  className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300"
                >
                  +421 948 480 654
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#10E7FF] mt-1" />
                <div className="text-[#10E7FF]">
                  <p>Farská 1342/50</p>
                  <p>949 01 Nitra</p>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Instagram className="w-5 h-5 text-[#10E7FF]" />
              <a
                href="https://instagram.com/aktiscode"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300"
              >
                @aktiscode
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#10E7FF]/20 pt-4 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[#10E7FF] opacity-60 text-sm">
              © 2025 AktisCode. Všetky práva vyhradené.
            </p>
            <div className="mt-2 md:mt-0">
              <p className="text-[#10E7FF] opacity-60 text-sm">
                Profesionálna <span className="text-[#38FFCD]">tvorba softvéru a aplikácií</span> | Slovensko
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;