import React from 'react';
import { Link } from 'react-router-dom';
import { Monitor, Bot, Code } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Monitor,
      title: "Web & Design Excellence",
      href: "/web-development",
      features: [
        "Profesionálne weby a aplikácie",
        "UX/UI + SEO optimalizácia",
        "Reprezentatívny brand web",
        "\"Done-for-you\" obsah"
      ]
    },
    {
      icon: Bot,
      title: "AI Automation & Agents",
      href: "/ai-automatizacie",
      features: [
        "Chatboty (24/7 support)",
        "AI call agenty",
        "Automatizácia sociálnych sietí",
        "AI email outreach"
      ]
    },
    {
      icon: Code,
      title: "Custom Development",
      href: "/aplikacie",
      features: [
        "Web aplikácie & e-shopy",
        "Mobilné & desktop aplikácie",
        "Integrácia AI modelov",
        "Full-stack riešenia na mieru"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-[#001742] to-[#000d2e] relative">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Naše <span className="text-[#38FFCD]">služby</span>
          </h2>
          <p className="text-xl text-[#10E7FF] opacity-80 max-w-3xl mx-auto">
            Kompletné riešenia pre váš digitálny úspech - od dizajnu po nasadenie
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link
              to={service.href}
              key={index}
              className="group relative bg-white/5 backdrop-blur-lg border border-[#38FFCD]/20 rounded-2xl p-8 hover:border-[#38FFCD]/40 hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-[#38FFCD]/20"
            >
              {/* Glassmorphism overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#38FFCD]/10 to-[#10E7FF]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-8 h-8 text-[#001742]" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-6 group-hover:text-[#38FFCD] transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Features */}
                <ul className="space-y-4">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3 text-[#10E7FF] hover:text-[#38FFCD] transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-[#38FFCD] rounded-full mt-2 flex-shrink-0" />
                      <span className="text-lg">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;