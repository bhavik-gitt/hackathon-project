import React, { useState } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Globe } from 'lucide-react';

export function LanguageToggle() {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const languages = [
    { value: 'en', label: 'English', flag: '🇺🇸' },
    { value: 'hi', label: 'हिन्दी', flag: '🇮🇳' },
    { value: 'te', label: 'తెలుగు', flag: '🇮🇳' },
    { value: 'ta', label: 'தமிழ்', flag: '🇮🇳' },
  ];

  return (
    <Select value={currentLanguage} onValueChange={setCurrentLanguage}>
      <SelectTrigger className="w-24 md:w-32 border-blue-200 text-blue-700">
        <Globe className="w-4 h-4 mr-2" />
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {languages.map((lang) => (
          <SelectItem key={lang.value} value={lang.value} className="text-blue-700">
            <span className="mr-2">{lang.flag}</span>
            {lang.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}