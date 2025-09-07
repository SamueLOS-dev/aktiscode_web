import React from 'react';
import { AlertCircle } from 'lucide-react';

interface BasicInfoSectionProps {
  formData: {
    name: string;
    company: string;
    email: string;
    serviceType: string;
  };
  errors: { [key: string]: string };
  onInputChange: (field: string, value: string) => void;
}

const BasicInfoSection: React.FC<BasicInfoSectionProps> = ({
  formData,
  errors,
  onInputChange
}) => {
  return (
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
          onChange={(e) => onInputChange('name', e.target.value)}
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
          onChange={(e) => onInputChange('company', e.target.value)}
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
          onChange={(e) => onInputChange('email', e.target.value)}
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
          onChange={(e) => onInputChange('serviceType', e.target.value)}
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
  );
};

export default BasicInfoSection;