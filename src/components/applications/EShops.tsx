import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, CreditCard, Package } from 'lucide-react';

const EShops = () => {
  const benefits = [
    {
      icon: ShoppingCart,
      text: 'Optimalizovaný košík pre vyššie konverzie.'
    },
    {
      icon: CreditCard,
      text: 'Bezproblémové platby a doručenie.'
    },
    {
      icon: Package,
      text: 'Jednoduchá správa produktov a akcií.'
    }
  ];

  return (
    <section id="e-shops" className="relative z-10 py-20 bg-gradient-to-br from-[#00112f] to-[#042a80]">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visualization */}
          <div className="flex justify-center lg:order-1">
            <div className="relative w-full max-w-lg">
              <div className="bg-gray-800 rounded-lg p-3 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
                <div className="bg-white rounded-md aspect-[16/10] flex flex-col">
                  {/* Browser Chrome */}
                  <div className="flex items-center gap-2 p-3 border-b border-gray-200">
                    <div className="flex gap-1">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="flex-1 bg-gray-100 rounded px-3 py-1 text-xs text-gray-500">
                      shop.example.com
                    </div>
                  </div>
                  
                  {/* E-shop Content */}
                  <div className="flex-1 p-4">
                    <div className="grid grid-cols-3 gap-4 h-full">
                      {/* Product Grid */}
                      <div className="col-span-2 space-y-3">
                        <div className="h-3 bg-[#001742] rounded w-1/2"></div>
                        <div className="grid grid-cols-2 gap-2">
                          <div className="aspect-square bg-gray-100 rounded border"></div>
                          <div className="aspect-square bg-gray-100 rounded border"></div>
                        </div>
                      </div>
                      
                      {/* Shopping Cart */}
                      <div className="bg-gray-50 rounded p-2 space-y-2">
                        <div className="h-2 bg-[#001742] rounded w-3/4"></div>
                        <div className="space-y-1">
                          <div className="h-1 bg-gray-200 rounded"></div>
                          <div className="h-1 bg-gray-200 rounded w-4/5"></div>
                        </div>
                        <div className="h-6 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded flex items-center justify-center">
                          <span className="text-[#001742] text-[8px] font-bold">CHECKOUT</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Secure Payments Badge */}
              <div className="absolute -bottom-2 -left-2 bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] px-3 py-1 rounded-full text-xs font-semibold shadow-[0_4px_12px_rgba(56,255,205,0.4)] flex items-center gap-1">
                🔒 Secure payments
              </div>
              
              {/* Progress Bar */}
              <div className="absolute -top-4 left-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#38FFCD] rounded-full"></div>
                  <div className="flex-1 h-1 bg-gray-200 rounded-full">
                    <div className="w-1/3 h-full bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] rounded-full"></div>
                  </div>
                  <span className="text-[8px] text-gray-600 font-medium">1/3</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-[36px] lg:text-[40px] font-bold text-white leading-[1.2]">
                E-shop, ktorý predáva
              </h2>
              <p className="text-lg lg:text-xl text-white/80 font-medium">
                Nákup bez bariér a správa, ktorá nezdržuje.
              </p>
            </div>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#38FFCD] to-[#10E7FF] rounded-xl flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 text-[#001742]" />
                  </div>
                  <p className="text-lg text-white font-medium pt-3">
                    {benefit.text}
                  </p>
                </div>
              ))}
            </div>

            <Link
              to="/demo"
              className="inline-block bg-gradient-to-r from-[#38FFCD] to-[#10E7FF] text-[#001742] font-semibold text-lg px-8 py-4 rounded-[14px] hover:scale-[1.03] transition-all duration-200 shadow-[0_10px_30px_rgba(0,0,0,0.25)] mt-2"
            >
              Zobraziť demo e-shopu
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EShops;