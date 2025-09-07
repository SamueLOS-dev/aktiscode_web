import React from 'react';
import SEOHead from '../components/SEOHead';
import { ArrowRight, Mail, Phone, MapPin, Building, FileText, Instagram } from 'lucide-react';

const Contact = () => {
  const scrollToDemo = () => {
    window.location.href = '/demo';
  };

  return (
    <>
      <SEOHead 
        title="Kontakt | Programátorská firma AktisCode – Nitra, Slovensko"
        description="Kontaktujte AktisCode – profesionálnu programátorskú firmu v Nitre. Vývoj softvéru na mieru, weby, aplikácie a AI riešenia. Požiadajte o demo zdarma."
        keywords="kontakt aktiscode, programátorská firma nitra, vývoj softvéru slovensko, kontakt web development"
        ogImage="https://aktiscode.com/og-kontakt.webp"
        canonical="https://aktiscode.com/kontakt"
        breadcrumbs={[
          { name: "Domov", item: "https://aktiscode.com/" },
          { name: "Kontakt", item: "https://aktiscode.com/kontakt" }
        ]}
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

        {/* Breadcrumbs */}
        <div className="relative z-10 pt-24 pb-4">
          <div className="max-w-[1200px] mx-auto px-6">
            <nav className="text-sm text-[#10E7FF]/70">
              <a href="/" className="hover:text-[#38FFCD] transition-colors">Domov</a>
              <span className="mx-2">/</span>
              <span className="text-white">Kontakt</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative z-10 py-16 lg:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
                Porozprávajme sa o vašom <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent">projekte</span>
              </h1>
              <p className="text-xl lg:text-2xl text-[#10E7FF] font-medium leading-relaxed max-w-3xl mx-auto">
                Sme tu, aby sme vám pomohli premeniť vaše nápady na moderný softvér, ktorý prináša výsledky.
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center mb-20">
              <button
                onClick={scrollToDemo}
                className="group bg-[#38FFCD] text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)] hover:shadow-[0_0_24px_rgba(56,255,205,0.6)] flex items-center gap-3 mx-auto w-fit"
              >
                Požiadať o demo zdarma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              <p className="text-sm text-white/70 font-medium mt-4">
                Prototyp do 48 hodín • Bez záväzkov
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="relative z-10 py-20">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Details */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                    Kontaktné informácie
                  </h2>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                      <Mail className="w-6 h-6 text-[#001742]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">E-mail</h3>
                      <a
                        href="mailto:contact@aktiscode.com"
                        className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300 text-lg"
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
                        className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300 text-lg"
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
                      <div className="text-[#10E7FF] text-lg">
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
                        className="text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300 text-lg"
                      >
                        @aktiscode
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Company Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-8">
                    O firme
                  </h2>
                </div>

                <div className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                        <Building className="w-6 h-6 text-[#001742]" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-4">AktisCode</h3>
                        <p className="text-[#10E7FF]/80 leading-relaxed mb-4">
                          Profesionálna programátorská firma špecializujúca sa na vývoj softvéru na mieru. 
                          Kombinujeme najnovšie AI technológie s odbornou expertízou, aby sme vám dodali 
                          riešenia, ktoré sú nielen moderné a funkčné, ale aj vytvorené presne na mieru 
                          vašim potrebám a cieľom.
                        </p>
                      </div>
                    </div>

                    <div className="border-t border-[rgba(16,231,255,0.15)] pt-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="flex items-start space-x-3">
                          <FileText className="w-5 h-5 text-[#38FFCD] mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-white font-medium">IČO</p>
                            <p className="text-[#10E7FF]/80">57 080 411</p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <FileText className="w-5 h-5 text-[#38FFCD] mt-1 flex-shrink-0" />
                          <div>
                            <p className="text-white font-medium">DIČ</p>
                            <p className="text-[#10E7FF]/80">2122559373</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Services Overview */}
                <div className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8">
                  <h3 className="text-xl font-semibold text-white mb-6">Naše služby</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                      <span className="text-[#10E7FF]/80">Tvorba webových stránok na mieru</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                      <span className="text-[#10E7FF]/80">AI automatizácie pre firmy</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                      <span className="text-[#10E7FF]/80">Vývoj mobilných a webových aplikácií</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                      <span className="text-[#10E7FF]/80">E-shop riešenia</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="relative z-10 py-24 bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] overflow-hidden">
          {/* Animated wave */}
          <div className="absolute inset-0">
            <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
              <path
                d="M0,200 C300,100 600,300 900,150 C1050,75 1150,225 1200,175 L1200,400 L0,400 Z"
                fill="rgba(0,23,66,0.1)"
              >
                <animate
                  attributeName="d"
                  values="M0,200 C300,100 600,300 900,150 C1050,75 1150,225 1200,175 L1200,400 L0,400 Z;
                          M0,250 C300,150 600,50 900,200 C1050,275 1150,125 1200,225 L1200,400 L0,400 Z;
                          M0,200 C300,100 600,300 900,150 C1050,75 1150,225 1200,175 L1200,400 L0,400 Z"
                  dur="8s"
                  repeatCount="indefinite"
                />
              </path>
            </svg>
          </div>

          <div className="relative z-10 max-w-[1200px] mx-auto px-6 text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-[#001742] mb-6 leading-tight">
              Pripravení začať váš projekt?
            </h2>
            
            <p className="text-xl text-[#001742]/80 mb-12 max-w-3xl mx-auto leading-relaxed">
              Kontaktujte nás ešte dnes a získajte bezplatné demo vašeho budúceho riešenia.
            </p>

            <div className="space-y-4">
              <button
                onClick={scrollToDemo}
                className="group bg-white text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gray-100 hover:scale-[1.02] transition-all duration-300 shadow-lg hover:shadow-xl flex items-center gap-3 mx-auto"
              >
                Požiadať o demo zdarma
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <p className="text-[#001742]/70 text-sm font-medium">
                Odpovieme do 24 hodín
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;