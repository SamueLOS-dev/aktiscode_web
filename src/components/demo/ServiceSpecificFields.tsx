import React from 'react';
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

interface ServiceSpecificFieldsProps {
  formData: FormData;
  errors: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
  onProductChange: (index: number, value: string) => void;
  addProduct: () => void;
  removeProduct: (index: number) => void;
}

const ServiceSpecificFields: React.FC<ServiceSpecificFieldsProps> = ({
  formData,
  errors,
  onInputChange,
  onProductChange,
  addProduct,
  removeProduct
}) => {
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
                    onChange={(e) => onProductChange(index, e.target.value)}
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
                onChange={(e) => onInputChange('webGoal', e.target.value)}
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
                onChange={(e) => onInputChange('currentWebsite', e.target.value)}
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
                onChange={(e) => onInputChange('websiteName', e.target.value)}
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
                onChange={(e) => onInputChange('websiteDescription', e.target.value)}
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
                onChange={(e) => onInputChange('websiteMustHave', e.target.value)}
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
                onChange={(e) => onInputChange('websiteMustNotHave', e.target.value)}
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
                onChange={(e) => onInputChange('websiteNotes', e.target.value)}
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
                onChange={(e) => onInputChange('eshopFocus', e.target.value)}
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
                onChange={(e) => onInputChange('currentEshop', e.target.value)}
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
                onChange={(e) => onInputChange('eshopName', e.target.value)}
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
                onChange={(e) => onInputChange('eshopDescription', e.target.value)}
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
                onChange={(e) => onInputChange('eshopMustHave', e.target.value)}
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
                onChange={(e) => onInputChange('eshopMustNotHave', e.target.value)}
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
                onChange={(e) => onInputChange('eshopNotes', e.target.value)}
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
                onChange={(e) => onInputChange('aiType', e.target.value)}
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
                onChange={(e) => onInputChange('aiWebsite', e.target.value)}
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
                onChange={(e) => onInputChange('aiGoal', e.target.value)}
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
                onChange={(e) => onInputChange('aiDescription', e.target.value)}
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
                onChange={(e) => onInputChange('aiMustHave', e.target.value)}
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
                onChange={(e) => onInputChange('aiMustNotHave', e.target.value)}
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
                onChange={(e) => onInputChange('aiNotes', e.target.value)}
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
                onChange={(e) => onInputChange('appGoal', e.target.value)}
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
                onChange={(e) => onInputChange('appWebsite', e.target.value)}
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
                onChange={(e) => onInputChange('appName', e.target.value)}
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
                onChange={(e) => onInputChange('appDescription', e.target.value)}
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
                onChange={(e) => onInputChange('appMustHave', e.target.value)}
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
                onChange={(e) => onInputChange('appMustNotHave', e.target.value)}
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
                onChange={(e) => onInputChange('appNotes', e.target.value)}
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

  if (!formData.serviceType) return null;

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white border-b border-[rgba(16,231,255,0.25)] pb-4">
        Detaily projektu
      </h2>
      {renderServiceFields()}
    </div>
  );
};

export default ServiceSpecificFields;