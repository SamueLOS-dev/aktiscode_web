import React, { useState } from 'react';
import SEOHead from '../components/SEOHead';
import { Plus, Minus, AlertCircle } from 'lucide-react';

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

  const renderServiceFields = () => {
    switch (formData.serviceType) {
      case 'web':
        return (
          <>
            {/* Products/Services */}
            <div className="space-y-4">
              <label className="block text-lg font-semibold text-white">
                Produkty/Služby
              </label>
              {formData.products.map((product, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={product}
                    onChange={(e) => handleProductChange(index, e.target.value)}
                    maxLength={50}
                    className="flex-1 bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                    placeholder="Názov produktu/služby"
                  />
                  <button
                    type="button"
                    onClick={() => removeProduct(index)}
                    disabled={formData.products.length === 1}
                    className="w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-xl flex items-center justify-center text-red-400 hover:bg-red-500/30 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Minus className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={addProduct}
                    disabled={formData.products.length >= 10}
                    className="w-12 h-12 bg-[#38FFCD]/20 border border-[#38FFCD]/40 rounded-xl flex items-center justify-center text-[#38FFCD] hover:bg-[#38FFCD]/30 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <Plus className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Web Goal */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Cieľ stránky <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.webGoal}
                onChange={(e) => handleInputChange('webGoal', e.target.value)}
                maxLength={100}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="Zvýšiť predaje..."
              />
              {errors.webGoal && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.webGoal}
                </div>
              )}
            </div>

            {/* Current Website */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Aktuálna web stránka
              </label>
              <input
                type="url"
                value={formData.currentWebsite}
                onChange={(e) => handleInputChange('currentWebsite', e.target.value)}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="https://www.example.com/"
              />
            </div>

            {/* Website Name */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Názov firmy/stránky <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.websiteName}
                onChange={(e) => handleInputChange('websiteName', e.target.value)}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="AktisCode"
              />
              {errors.websiteName && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.websiteName}
                </div>
              )}
            </div>

            {/* Website Description */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Popis stránky
              </label>
              <textarea
                value={formData.websiteDescription}
                onChange={(e) => handleInputChange('websiteDescription', e.target.value)}
                rows={4}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Opíšte vašu stránku..."
              />
            </div>

            {/* Must Have */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Čo stránka musí obsahovať
              </label>
              <textarea
                value={formData.websiteMustHave}
                onChange={(e) => handleInputChange('websiteMustHave', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Napríklad: kontaktný formulár, galéria..."
              />
            </div>

            {/* Must Not Have */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Čo stránka nesmie obsahovať
              </label>
              <textarea
                value={formData.websiteMustNotHave}
                onChange={(e) => handleInputChange('websiteMustNotHave', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Napríklad: pop-up okná, automatické videá..."
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Poznámky
              </label>
              <textarea
                value={formData.websiteNotes}
                onChange={(e) => handleInputChange('websiteNotes', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Ďalšie poznámky alebo požiadavky..."
              />
            </div>
          </>
        );

      case 'eshop':
        return (
          <>
            {/* E-shop Focus */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Zameranie <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.eshopFocus}
                onChange={(e) => handleInputChange('eshopFocus', e.target.value)}
                maxLength={100}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="Kozmetika..."
              />
              {errors.eshopFocus && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.eshopFocus}
                </div>
              )}
            </div>

            {/* Current E-shop */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Aktuálny e-shop
              </label>
              <input
                type="url"
                value={formData.currentEshop}
                onChange={(e) => handleInputChange('currentEshop', e.target.value)}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="https://www.example.com/"
              />
            </div>

            {/* E-shop Name */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Názov firmy/e-shopu <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.eshopName}
                onChange={(e) => handleInputChange('eshopName', e.target.value)}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="AktisCode"
              />
              {errors.eshopName && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.eshopName}
                </div>
              )}
            </div>

            {/* E-shop Description */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Popis e-shopu
              </label>
              <textarea
                value={formData.eshopDescription}
                onChange={(e) => handleInputChange('eshopDescription', e.target.value)}
                rows={4}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Opíšte váš e-shop..."
              />
            </div>

            {/* Must Have */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Čo e-shop musí obsahovať
              </label>
              <textarea
                value={formData.eshopMustHave}
                onChange={(e) => handleInputChange('eshopMustHave', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Napríklad: wishlist, porovnanie produktov..."
              />
            </div>

            {/* Must Not Have */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Čo e-shop nesmie obsahovať
              </label>
              <textarea
                value={formData.eshopMustNotHave}
                onChange={(e) => handleInputChange('eshopMustNotHave', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Napríklad: príliš veľa krokov pri objednávke..."
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Poznámky
              </label>
              <textarea
                value={formData.eshopNotes}
                onChange={(e) => handleInputChange('eshopNotes', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Ďalšie poznámky alebo požiadavky..."
              />
            </div>
          </>
        );

      case 'ai':
        return (
          <>
            {/* AI Type */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Typ <span className="text-red-400">*</span>
              </label>
              <select
                value={formData.aiType}
                onChange={(e) => handleInputChange('aiType', e.target.value)}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
              >
                <option value="">Vyberte typ AI</option>
                <option value="chatbot">Chat bot</option>
                <option value="call-agent">AI Call agent</option>
                <option value="social">Sociálne siete</option>
                <option value="email">E-maily & outreach</option>
                <option value="custom">Custom riešenie</option>
              </select>
              {errors.aiType && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.aiType}
                </div>
              )}
            </div>

            {/* AI Website */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Váš web
              </label>
              <input
                type="url"
                value={formData.aiWebsite}
                onChange={(e) => handleInputChange('aiWebsite', e.target.value)}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="https://www.example.com/"
              />
            </div>

            {/* AI Goal */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Cieľ <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.aiGoal}
                onChange={(e) => handleInputChange('aiGoal', e.target.value)}
                maxLength={100}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="Support, Lead gen..."
              />
              {errors.aiGoal && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.aiGoal}
                </div>
              )}
            </div>

            {/* AI Description */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Popis agenta
              </label>
              <textarea
                value={formData.aiDescription}
                onChange={(e) => handleInputChange('aiDescription', e.target.value)}
                rows={4}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Opíšte ako má agent fungovať..."
              />
            </div>

            {/* Must Have */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Čo agent musí obsahovať
              </label>
              <textarea
                value={formData.aiMustHave}
                onChange={(e) => handleInputChange('aiMustHave', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Napríklad: integrácia s kalendárom..."
              />
            </div>

            {/* Must Not Have */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Čo agent nesmie obsahovať
              </label>
              <textarea
                value={formData.aiMustNotHave}
                onChange={(e) => handleInputChange('aiMustNotHave', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Napríklad: automatické volania..."
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Poznámky
              </label>
              <textarea
                value={formData.aiNotes}
                onChange={(e) => handleInputChange('aiNotes', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Ďalšie poznámky alebo požiadavky..."
              />
            </div>
          </>
        );

      case 'app':
        return (
          <>
            {/* App Goal */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Cieľ <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.appGoal}
                onChange={(e) => handleInputChange('appGoal', e.target.value)}
                maxLength={100}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="Objednávací systém pre autoškoly..."
              />
              {errors.appGoal && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.appGoal}
                </div>
              )}
            </div>

            {/* App Website */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Váš web
              </label>
              <input
                type="url"
                value={formData.appWebsite}
                onChange={(e) => handleInputChange('appWebsite', e.target.value)}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="https://www.example.com/"
              />
            </div>

            {/* App Name */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Názov aplikácie <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={formData.appName}
                onChange={(e) => handleInputChange('appName', e.target.value)}
                maxLength={50}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                placeholder="Názov aplikácie"
              />
              {errors.appName && (
                <div className="flex items-center gap-2 text-red-400 text-sm">
                  <AlertCircle className="w-4 h-4" />
                  {errors.appName}
                </div>
              )}
            </div>

            {/* App Description */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Popis
              </label>
              <textarea
                value={formData.appDescription}
                onChange={(e) => handleInputChange('appDescription', e.target.value)}
                rows={4}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Opíšte vašu aplikáciu..."
              />
            </div>

            {/* Must Have */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Čo musí obsahovať
              </label>
              <textarea
                value={formData.appMustHave}
                onChange={(e) => handleInputChange('appMustHave', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Napríklad: používateľské roly, reporty..."
              />
            </div>

            {/* Must Not Have */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Čo nesmie obsahovať
              </label>
              <textarea
                value={formData.appMustNotHave}
                onChange={(e) => handleInputChange('appMustNotHave', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Napríklad: zložité menu..."
              />
            </div>

            {/* Notes */}
            <div className="space-y-2">
              <label className="block text-lg font-semibold text-white">
                Poznámky
              </label>
              <textarea
                value={formData.appNotes}
                onChange={(e) => handleInputChange('appNotes', e.target.value)}
                rows={3}
                className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200 resize-vertical"
                placeholder="Ďalšie poznámky alebo požiadavky..."
              />
            </div>
          </>
        );

      default:
        return null;
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
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Požiadajte o <span className="bg-gradient-to-r from-[#10E7FF] to-[#38FFCD] bg-clip-text text-transparent">demo zdarma</span>
              </h1>
              <p className="text-xl text-[#10E7FF]/80 max-w-3xl mx-auto">
                Ukážeme vám prototyp riešenia na mieru vašim potrebám
              </p>
            </div>

            {/* Info Message */}
            <div className="mb-8 bg-[rgba(56,255,205,0.1)] backdrop-blur-[16px] border border-[rgba(56,255,205,0.25)] rounded-2xl p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 bg-[#38FFCD] rounded-full flex items-center justify-center mt-1">
                  <span className="text-[#001742] text-sm font-bold">i</span>
                </div>
                <p className="text-[#38FFCD] leading-relaxed">
                  Pre čo najlepší výsledok a čo najmenší čas od vás v budúcnosti vyplňte prosím formulár čo najdôslednejšie. Vyplňte všetky povinné políčka a políčka, ktoré uznáte za vhodné.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-2xl p-8 space-y-8">
              {/* Basic Information */}
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-white border-b border-[rgba(16,231,255,0.25)] pb-4">
                  Základné informácie
                </h2>

                {/* Name */}
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-white">
                    Meno
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange('name', e.target.value)}
                    className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                    placeholder="Vaše meno"
                  />
                </div>

                {/* Company */}
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-white">
                    Firma
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => handleInputChange('company', e.target.value)}
                    className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                    placeholder="Názov firmy"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-white">
                    E-mail <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white placeholder-white/50 focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                    placeholder="vas@email.com"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </div>
                  )}
                </div>

                {/* Service Type */}
                <div className="space-y-2">
                  <label className="block text-lg font-semibold text-white">
                    Typ služby <span className="text-red-400">*</span>
                  </label>
                  <select
                    value={formData.serviceType}
                    onChange={(e) => handleInputChange('serviceType', e.target.value)}
                    className="w-full bg-[rgba(0,23,66,0.45)] backdrop-blur-[16px] border border-[rgba(16,231,255,0.25)] rounded-xl px-4 py-3 text-white focus:border-[#38FFCD] focus:outline-none transition-colors duration-200"
                  >
                    <option value="">Vyberte typ služby</option>
                    <option value="web">Web</option>
                    <option value="eshop">E-shop</option>
                    <option value="ai">AI automatizácia</option>
                    <option value="app">Softvérové riešenie/Aplikácia</option>
                  </select>
                  {errors.serviceType && (
                    <div className="flex items-center gap-2 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.serviceType}
                    </div>
                  )}
                </div>
              </div>

              {/* Service-specific fields */}
              {formData.serviceType && (
                <div className="space-y-6">
                  <h2 className="text-2xl font-bold text-white border-b border-[rgba(16,231,255,0.25)] pb-4">
                    Detaily projektu
                  </h2>
                  {renderServiceFields()}
                </div>
              )}

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