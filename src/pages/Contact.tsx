import React from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';
import { Mail, Phone, MapPin, Building, FileText, Instagram, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <SEOHead 
        title="Kontakt | AktisCode s. r. o. – Nitra, Slovensko"
        description="Kontaktujte AktisCode s. r. o. – profesionálnu programátorskú firmu v Nitre. Vývoj softvéru na mieru, weby, aplikácie a AI riešenia."
        keywords="kontakt aktiscode, programátorská firma nitra, vývoj softvéru slovensko, kontakt web development"
        ogImage="https://aktiscode.com/og-kontakt.webp"
        canonical="https://aktiscode.com/kontakt"
      />
      <div className="min-h-screen bg-gradient-to-br from-[#001742] to-[#005DFF] relative overflow-hidden">
        {/* Neural Network Background */}
        <div className="fixed inset-0 opacity-[0.06] pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice">
            {Array.from({ length: 50 }, (_, i) => {
              const x = (i % 10) * 200 + Math.random() * 100;
              const y = Math.floor(i / 10) * 200 + Math.random() * 100;
              return (
                <g key={i}>
                  <circle
                    cx={x}
                    cy={y}
                    r={2}
                    fill="#10E7FF"
                    opacity={0.6}
                  >
                    <animate
                      attributeName="opacity"
                      values="0.3;0.8;0.3"
                      dur={`${3 + Math.random() * 2}s`}
                      repeatCount="indefinite"
                    />
                  </circle>
                  {i < 40 && (
                    <line
                      x1={x}
                      y1={y}
                      x2={(i + 1) % 10 * 200 + Math.random() * 100}
                      y2={Math.floor((i + 1) / 10) * 200 + Math.random() * 100}
                      stroke="#38FFCD"
                      strokeWidth="0.5"
                      opacity={0.3}
                    />
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* Contact Content */}
        <div className="relative z-10 py-24 min-h-screen flex items-center">
          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Kontakt
              </h1>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
              {/* Contact Details */}
              <div className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Kontaktné informácie
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#001742]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
                      <a
                        href="mailto:contact@aktiscode.com"
                        className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300 text-base lg:text-lg break-all"
                      >
                        contact@aktiscode.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                      <Phone className="w-6 h-6 text-[#001742]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Telefón</h3>
                      <a
                        href="tel:+421948480654"
                        className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300 text-base lg:text-lg"
                      >
                        +421 948 480 654
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-[#001742]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Adresa</h3>
                      <div className="text-[#10E7FF] text-base lg:text-lg">
                        <p>Farská 1342/50</p>
                        <p>949 01 Nitra</p>
                        <p>Slovensko</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                      <Instagram className="w-6 h-6 text-[#001742]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">Instagram</h3>
                      <a
                        href="https://instagram.com/aktiscode"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300 text-base lg:text-lg"
                      >
                        @aktiscode
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-6 lg:p-8">
                <h2 className="text-2xl font-bold text-white mb-8">
                  Informácie o firme
                </h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                      <Building className="w-6 h-6 text-[#001742]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-4">AktisCode s. r. o.</h3>
                      <p className="text-[#10E7FF]/80 leading-relaxed mb-6 text-sm lg:text-base">
                        Softvérová spoločnosť špecializujúca sa na vývoj softvéru na mieru. 
                        Kombinujeme najnovšie AI technológie s odbornou expertízou, aby sme vám dodali 
                        riešenia, ktoré sú nielen moderné a funkčné, ale aj vytvorené presne na mieru 
                        vašim potrebám a cieľom.
                      </p>
                    </div>
                  </div>

                  <div className="border-t border-[rgba(16,231,255,0.15)] pt-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                      <div className="flex items-start space-x-3">
                        <FileText className="w-5 h-5 text-[#38FFCD] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white font-medium">IČO</p>
                          <p className="text-[#10E7FF]/80 text-sm lg:text-base">57 080 411</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <FileText className="w-5 h-5 text-[#38FFCD] mt-1 flex-shrink-0" />
                        <div>
                          <p className="text-white font-medium">DIČ</p>
                          <p className="text-[#10E7FF]/80 text-sm lg:text-base">2122559373</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-[rgba(16,231,255,0.15)] pt-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Naše služby</h4>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                        <span className="text-[#10E7FF]/80 text-sm lg:text-base">Tvorba webových stránok na mieru</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                        <span className="text-[#10E7FF]/80 text-sm lg:text-base">AI automatizácie pre firmy</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                        <span className="text-[#10E7FF]/80 text-sm lg:text-base">Vývoj mobilných a webových aplikácií</span>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                        <span className="text-[#10E7FF]/80 text-sm lg:text-base">E-shop riešenia</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Demo Request Link */}
        <div className="text-center mt-8 lg:mt-12 mb-16 px-6">
          <a
            href="/demo"
            className="inline-flex items-center gap-3 bg-[#38FFCD] text-[#001742] font-semibold text-base lg:text-lg px-6 lg:px-8 py-3 lg:py-4 rounded-xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)]"
          >
            Požiadať o demo zdarma
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Contact;