import React, { useState } from 'react';
import { Globe, Check, ChevronDown } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
  content: {
    header: {
      logo: string;
      nav: {
        home: string;
        services: string;
        process: string;
        portfolio: string;
        testimonials: string;
        contact: string;
      };
      cta: string;
    };
    hero: {
      title: string;
      subtitle: string;
      cta: {
        primary: string;
        secondary: string;
      };
    };
    services: {
      title: string;
      subtitle: string;
      items: Array<{
        title: string;
        description: string;
        features: string[];
      }>;
    };
    process: {
      title: string;
      subtitle: string;
      steps: Array<{
        title: string;
        description: string;
      }>;
    };
    portfolio: {
      title: string;
      subtitle: string;
      categories: {
        all: string;
        ecommerce: string;
        business: string;
        realEstate: string;
        healthcare: string;
        mobile: string;
        education: string;
      };
      projects: Array<{
        title: string;
        description: string;
        longDescription: string;
        features: string[];
      }>;
    };
    testimonials: {
      title: string;
      subtitle: string;
      items: Array<{
        content: string;
        name: string;
        role: string;
        company: string;
      }>;
    };
    contact: {
      title: string;
      subtitle: string;
      info: {
        phone: string;
        email: string;
        address: string;
      };
      form: {
        name: string;
        email: string;
        phone: string;
        subject: string;
        message: string;
        submit: string;
        success: string;
      };
      social: {
        follow: string;
      };
    };
  };
}

const LanguageSelector: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, languages } = useLanguage();

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleLanguageSelect = (selectedLanguage: Language) => {
    setLanguage(selectedLanguage);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 focus:outline-none"
      >
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline">{language.nativeName}</span>
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 rounded-md bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50"
          >
            <div className="py-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageSelect(lang)}
                  className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center justify-between"
                >
                  <div className="flex items-center space-x-2">
                    <span>{lang.flag}</span>
                    <span>{lang.nativeName}</span>
                  </div>
                  {language.code === lang.code && (
                    <Check className="h-4 w-4 text-primary-600 dark:text-primary-500" />
                  )}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSelector;