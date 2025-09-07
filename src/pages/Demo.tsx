import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import DemoHeader from '../components/demo/DemoHeader';
import InfoMessage from '../components/demo/InfoMessage';
import BasicInfoSection from '../components/demo/BasicInfoSection';
import ServiceSpecificFields from '../components/demo/ServiceSpecificFields';

interface FormData {
  name: string;
  company: string;
  email: string;
  serviceType: string;
  // Web fields
  products: string[];
  webGoal: string;
  currentWebsite: string;
  websiteName: string;
  websiteDescription: string;
  websiteMustHave: string;
  websiteMustNotHave: string;
  websiteNotes: string;
  // E-shop fields
  eshopFocus: string;
  currentEshop: string;
  eshopName: string;
  eshopDescription: string;
  eshopMustHave: string;
  eshopMustNotHave: string;
  eshopNotes: string;
  // AI fields
  aiType: string;
  aiWebsite: string;
  aiGoal: string;
  aiDescription: string;
  aiMustHave: string;
  aiMustNotHave: string;
  aiNotes: string;
  // App fields
  appGoal: string;
  appWebsite: string;
  appName: string;
  appDescription: string;
  appMustHave: string;
  appMustNotHave: string;
  appNotes: string;
}

interface FormErrors {
  [key: string]: string;
}

const Demo = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    company: '',
    email: '',
    serviceType: '',
    products: [''],
    webGoal: '',
    currentWebsite: '',
    websiteName: '',
    websiteDescription: '',
    websiteMustHave: '',
    websiteMustNotHave: '',
    websiteNotes: '',
    eshopFocus: '',
    currentEshop: '',
    eshopName: '',
    eshopDescription: '',
    eshopMustHave: '',
    eshopMustNotHave: '',
    eshopNotes: '',
    aiType: '',
    aiWebsite: '',
    aiGoal: '',
    aiDescription: '',
    aiMustHave: '',
    aiMustNotHave: '',
    aiNotes: '',
    appGoal: '',
    appWebsite: '',
    appName: '',
    appDescription: '',
    appMustHave: '',
    appMustNotHave: '',
    appNotes: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const handleProductChange = (index: number, value: string) => {
    const newProducts = [...formData.products];
    newProducts[index] = value;
    setFormData(prev => ({ ...prev, products: newProducts }));
  };

  const addProduct = () => {
    if (formData.products.length < 10) {
      setFormData(prev => ({ ...prev, products: [...prev.products, ''] }));
    }
  };

  const removeProduct = (index: number) => {
    if (formData.products.length > 1) {
      const newProducts = formData.products.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, products: newProducts }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    // Basic validation
    if (!formData.email) {
      newErrors.email = 'E-mail je povinný';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Neplatný formát e-mailu';
    }

    if (!formData.serviceType) {
      newErrors.serviceType = 'Vyberte typ služby';
    }

    // Service-specific validation
    switch (formData.serviceType) {
      case 'web':
        if (!formData.webGoal) newErrors.webGoal = 'Cieľ stránky je povinný';
        if (!formData.websiteName) newErrors.websiteName = 'Názov firmy/stránky je povinný';
        if (formData.webGoal.length > 100) newErrors.webGoal = 'Maximálne 100 znakov';
        break;
      case 'eshop':
        if (!formData.eshopFocus) newErrors.eshopFocus = 'Zameranie je povinné';
        if (!formData.eshopName) newErrors.eshopName = 'Názov firmy/e-shopu je povinný';
        if (formData.eshopFocus.length > 100) newErrors.eshopFocus = 'Maximálne 100 znakov';
        break;
      case 'ai':
        if (!formData.aiType) newErrors.aiType = 'Typ AI je povinný';
        if (!formData.aiGoal) newErrors.aiGoal = 'Cieľ je povinný';
        if (formData.aiGoal.length > 100) newErrors.aiGoal = 'Maximálne 100 znakov';
        break;
      case 'app':
        if (!formData.appGoal) newErrors.appGoal = 'Cieľ je povinný';
        if (!formData.appName) newErrors.appName = 'Názov aplikácie je povinný';
        if (formData.appGoal.length > 100) newErrors.appGoal = 'Maximálne 100 znakov';
        if (formData.appName.length > 50) newErrors.appName = 'Maximálne 50 znakov';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      // Handle form submission
      console.log('Form submitted:', formData);
      alert('Formulár bol úspešne odoslaný!');
    }
  };

  return (
    <>
      <SEOHead 
        title="Demo zdarma | Požiadajte o ukážku riešenia – AktisCode"
        description="Požiadajte o bezplatné demo našich služieb. Ukážeme vám prototyp webu, aplikácie alebo AI automatizácie na mieru vašim potrebám."
        keywords="demo zdarma, ukážka web stránky, prototyp aplikácie, ai automatizácia demo"
        canonical="https://aktiscode.com/demo"
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

        {/* Content */}
        <div className="relative z-10 py-24 min-h-screen">
          <div className="max-w-4xl mx-auto px-6">
            <DemoHeader />
            <InfoMessage />

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8 space-y-8">
              <BasicInfoSection
                formData={formData}
                errors={errors}
                onInputChange={handleInputChange}
              />

              <ServiceSpecificFields
                formData={formData}
                errors={errors}
                onInputChange={handleInputChange}
                onProductChange={handleProductChange}
                addProduct={addProduct}
                removeProduct={removeProduct}
              />

              {/* Submit Button */}
              <div className="pt-8">
                <button
                  type="submit"
                  className="w-full bg-[#38FFCD] text-[#001742] font-semibold text-lg px-8 py-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#38FFCD] hover:to-[#10E7FF] hover:scale-[1.02] transition-all duration-300 shadow-[0_0_18px_rgba(56,255,205,0.45)]"
                >
                  Odoslať žiadosť o demo
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Demo;